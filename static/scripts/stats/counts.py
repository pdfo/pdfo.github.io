import json
import sys
from datetime import date

import condastats.cli
import requests


def conda_count(package, archive_conda):
    """Download count through the Anaconda distribution."""
    r = condastats.cli.pkg_version(package)
    with open(archive_conda, 'r') as fd:
        archive = json.load(fd)
    download_count = 0
    for (_, tag_name), downloads in r.items():
        data = {'tag_name': f'v{tag_name}', 'downloads': downloads}
        try:
            existing_tags = list(map(lambda d: d['tag_name'], archive))
            archive[existing_tags.index(data['tag_name'])] = data
        except ValueError:
            archive.append(data)
        download_count += data['downloads']
    archive.sort(key=lambda d: d['tag_name'])
    with open(archive_conda, 'w') as fd:
        json.dump(archive, fd, indent=4)
    return download_count


def pypi_count(package, archive_pypi):
    """Download count through the PyPI distribution."""
    r = requests.get(f'https://pypistats.org/api/packages/{package}/overall')
    with open(archive_pypi, 'r') as fd:
        archive = json.load(fd)
    for data in r.json()['data']:
        if all([d['category'] != data['category'] or d['date'] != data['date'] for d in archive]):
            archive.append(data)
    archive.sort(key=lambda x: f"{x['category']}{x['date']}")
    with open(archive_pypi, 'w') as fd:
        json.dump(archive, fd, indent=4)
    return sum(d['downloads'] for d in archive if d['category'] == 'without_mirrors')


def github_count(user, package, archive_github):
    """Download count through the GitHub repository."""
    r = requests.get(f'https://api.github.com/repos/{user}/{package}/releases')
    with open(archive_github, 'r') as fd:
        archive = json.load(fd)
    download_count = 0
    for release in r.json():
        data = {
            'tag_name': release['tag_name'],
            'downloads': sum(map(lambda d: d['download_count'], release['assets'])),
        }
        try:
            existing_tags = list(map(lambda d: d['tag_name'], archive))
            archive[existing_tags.index(data['tag_name'])] = data
        except ValueError:
            archive.append(data)
        download_count += data['downloads']
    archive.sort(key=lambda d: d['tag_name'])
    with open(archive_github, 'w') as fd:
        json.dump(archive, fd, indent=4)
    return download_count


if __name__ == '__main__':
    # sys.argv[1]: stats.json
    # sys.argv[2]: archive_conda.json
    # sys.argv[3]: archive_pypi.json
    # sys.argv[4]: archive_github.json
    with open(sys.argv[1], 'w') as fd:
        json.dump({
            'conda': conda_count('pdfo', sys.argv[2]),
            'pypi': pypi_count('pdfo', sys.argv[3]),
            'github': github_count('pdfo', 'pdfo', sys.argv[4]),
            'date': date.today().strftime('%B %d, %Y'),
        }, fd, indent=4)

import json
import sys
from datetime import date, datetime

import condastats.cli
import requests


def _write_archive(archive_path, download_count):
    with open(archive_path, 'r') as fd:
        archive = json.load(fd)
    today = date.today().strftime('%Y-%m-%d')
    if len(archive) == 0:
        archive.append({
            'date': today,
            'downloads': download_count,
        })
    else:
        if today != archive[-1]['date']:
            prev_download_count = sum(map(lambda d: d['downloads'], archive))
            archive.append({
                'date': today,
                'downloads': download_count - prev_download_count,
            })
    with open(archive_path, 'w') as fd:
        json.dump(archive, fd, indent=4)


def conda_count(package, archive_conda):
    """Download count through the Anaconda distribution."""
    download_count = int(condastats.cli.overall(package))
    _write_archive(archive_conda, download_count)
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
    download_count = sum(sum(map(lambda d: d['download_count'], release['assets'])) for release in r.json())
    _write_archive(archive_github, download_count)
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

import json
import sys
from datetime import date

import condastats.cli
import requests


def conda_count(package):
    """Download count through the Anaconda distribution."""
    s = condastats.cli.overall(package)
    return int(s[package])


def pypi_count(package, pypi_archive):
    """Download count through the PyPI distribution."""
    r = requests.get(f'https://pypistats.org/api/packages/{package}/overall')
    content = r.json()
    with open(pypi_archive, 'r') as fd:
        archive = json.load(fd)
    for data in content['data']:
        if all([d['category'] != data['category'] or d['date'] != data['date'] for d in archive]):
            archive.append(data)
    archive.sort(key=lambda x: f"{x['category']}{x['date']}")
    with open(pypi_archive, 'w') as fd:
        json.dump(archive, fd, indent=4)
    return sum(d['downloads'] for d in archive if d['category'] == 'without_mirrors')


def github_count(user, package):
    """Download count through the GitHub repository."""
    r = requests.get(f'https://api.github.com/repos/{user}/{package}/releases')
    return sum(map(lambda d: d['assets'][0]['download_count'], r.json()))


if __name__ == '__main__':
    with open(sys.argv[1], 'w') as fd:
        json.dump({
            'conda': conda_count('pdfo'),
            'pypi': pypi_count('pdfo', sys.argv[2]),
            'github': github_count('pdfo', 'pdfo'),
            'date': date.today().strftime('%B %d, %Y'),
        }, fd, indent=4)

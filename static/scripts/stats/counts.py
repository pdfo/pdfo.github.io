import json
import sys
from datetime import date

import condastats.cli
import pypistats
import requests


def conda_count(package):
    """Download count through the Anaconda distribution."""
    s = condastats.cli.overall(package)
    return int(s[package])


def pypi_count(package):
    """Download count through the PyPI distribution."""
    df = pypistats.overall(package, mirrors=False, format='pandas')
    return int(df['downloads'].iloc[0])


def github_count(user, package):
    """Download count through the GitHub repository."""
    r = requests.get(f'https://api.github.com/repos/{user}/{package}/releases')
    return sum(map(lambda d: d['assets'][0]['download_count'], r.json()))


if __name__ == '__main__':
    with open(sys.argv[1], 'w') as fd:
        json.dump({
            'conda': conda_count('pdfo'),
            'pypi': pypi_count('pdfo'),
            'github': github_count('pdfo', 'pdfo'),
            'date': date.today().strftime('%B %d, %Y'),
        }, fd)

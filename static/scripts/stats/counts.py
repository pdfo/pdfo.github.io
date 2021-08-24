import json
import sys

import dask.dataframe as dd
import pypistats
import requests


def conda_count(package):
    """Download count through the Anaconda distribution."""
    df = dd.read_parquet(
        's3://anaconda-package-data/conda/monthly/*/*.parquet',
        storage_options={'anon': True},
    )
    df = df.query(f'pkg_name == "{package}"')
    df = df.compute()
    df['pkg_name'] = df['pkg_name'].cat.remove_unused_categories()
    return int(df.counts.sum())


def pypi_count(package):
    """Download count through the PyPI distribution."""
    df = pypistats.overall(package, format='pandas')
    df = df.loc[df['category'] == 'without_mirrors']
    df.reset_index(drop=True, inplace=True)
    return int(df.at[0, 'downloads'])


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
        }, fd)

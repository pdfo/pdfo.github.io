#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Update the snippets (Python and MATLAB).

Authors
-------
Tom M. RAGONNEAU (tom.ragonneau@connect.polyu.hk)
and Zaikun ZHANG (zaikun.zhang@polyu.edu.hk)
Department of Applied Mathematics,
The Hong Kong Polytechnic University.
"""
import os
import re

import requests

# Define the URL and the file names of the MATLAB and Python sources.
M_JS_URL = 'https://gist.github.com/pdfo/bb455575166e330cd6550d4b3ba41876.js'
PY_JS_URL = 'https://gist.github.com/pdfo/95b987796405d3f59065ed086732a4d9.js'
F_M_SRC, F_M_JS = 'rosenbrock_example.m', 'rosenbrock-example-matlab.js'
F_PY_SRC, F_PY_JS = 'rosenbrock_example.py', 'rosenbrock-example-python.js'

if __name__ == '__main__':
    # Download the Javascript files related to the MATLAB and Python snippets.
    M_JS = requests.get(M_JS_URL, allow_redirects=True).content.decode('utf-8')
    PY_JS = requests.get(PY_JS_URL, allow_redirects=True).content.decode('utf-8')

    # Extract the link of the MATLAB and Python source files.
    M_SRC_URL_PAT = 'https://gist\.github\.com/pdfo/[a-z0-9]+/raw/[a-z0-9]+/rosenbrock_example\.m'
    PY_SRC_URL_PAT = 'https://gist\.github\.com/pdfo/[a-z0-9]+/raw/[a-z0-9]+/rosenbrock_example\.py'
    M_SRC_URL = re.search(M_SRC_URL_PAT, M_JS).group()
    PY_SRC_URL = re.search(PY_SRC_URL_PAT, PY_JS).group()

    # Download the MATLAB and Python snippets.
    M_SRC = requests.get(M_SRC_URL, allow_redirects=True).content.decode('utf-8')
    PY_SRC = requests.get(PY_SRC_URL, allow_redirects=True).content.decode('utf-8')

    # Adapt the Javascript sources to PDFO.
    M_JS = M_JS.replace('https://github.githubassets.com/assets/', 'static/scripts/plugins/', 1)
    PY_JS = PY_JS.replace('https://github.githubassets.com/assets/', 'static/scripts/plugins/', 1)
    M_JS = M_JS.replace(M_SRC_URL, 'static/scripts/code/{}'.format(F_M_SRC))
    PY_JS = PY_JS.replace(PY_SRC_URL, 'static/scripts/code/{}'.format(F_PY_SRC))
    M_JS = M_JS.replace('view raw', 'Download', 1)
    PY_JS = PY_JS.replace('view raw', 'Download', 1)

    M_GIT_LK_PAT = '<a href=\\\\"https://gist\.github\.com/pdfo/[a-z0-9]+#file-rosenbrock_example-m\\\\">' \
                   'rosenbrock_example.m<\\\\/a>'
    PY_GIT_LK_PAT = '<a href=\\\\"https://gist\.github\.com/pdfo/[a-z0-9]+#file-rosenbrock_example-py\\\\">' \
                    'rosenbrock_example.py<\\\\/a>'
    M_GIT_LK = re.search(M_GIT_LK_PAT, M_JS).group()
    PY_GIT_LK = re.search(PY_GIT_LK_PAT, PY_JS).group()
    M_JS = M_JS.replace(M_GIT_LK, F_M_SRC, 1)
    PY_JS = PY_JS.replace(PY_GIT_LK, F_PY_SRC, 1)
    M_JS = M_JS.replace('hosted with &#10084; by <a href=\\"https://github.com\\">GitHub<\/a>\\n      ', '')
    PY_JS = PY_JS.replace('hosted with &#10084; by <a href=\\"https://github.com\\">GitHub<\/a>\\n      ', '')

    # Dump the new files to the website.
    for path, content in zip([F_M_SRC, F_M_JS, F_PY_SRC, F_PY_JS], [M_SRC, M_JS, PY_SRC, PY_JS]):
        if os.path.exists(path):
            os.remove(path)
        open(path, 'w').write(content)

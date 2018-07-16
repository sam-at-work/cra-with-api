#!/usr/bin/env bash
set -e # exit script on error
cd $(dirname $0)

project_major_version=`node -p "require('../package.json').engines.node"`
npx check-node-version --node ${project_major_version}

latest_node=`curl https://nodejs.org/en/download/current/ | tr '\n' ' ' | grep -o '<strong>.*</strong>' | sed -E s%\<\/?strong\>%%g`
npx check-node-version --node ${latest_node}

echo "Node is up to date - `node -v`"
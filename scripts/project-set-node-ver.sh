#!/usr/bin/env bash
cd $(dirname $0)

# Set the project config to use the current version of node
node_major_version=10
echo ${node_major_version} > ../.nvmrc
sed -Ei '' "s|(\"node\": \").*(\")|\1${node_major_version}\2|g" ../server/package.json
sed -Ei '' "s|(\"node\": \").*(\")|\1${node_major_version}\2|g" ../package.json

echo "Set node version to `echo ${node_major_version}`."
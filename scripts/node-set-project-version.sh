#!/usr/bin/env bash

# Set the project config to use the current version of node

node_version=`node -v`
echo $node_version > .nvmrc
sed -Ei '' "s|(\"node\": \").*(\")|\1$node_version\2|g" server/package.json

echo "Set node version to `echo $node_version`."
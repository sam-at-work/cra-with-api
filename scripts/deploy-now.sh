#!/usr/bin/env bash

app_name=`node -p "require('./package.json').name"`

# Deploy
echo "Deploying ${app_name}"
now deploy server/ -e NODE_ENV=production --public --name=${app_name}

# Update url in README.md
echo "Updating URL in readme for ${app_name}"
url=`now ls ${app_name} | grep ${app_name} | sed 's/^ *//' | sed -E 's/[[:space:]]+/,/g' | cut -d "," -f 2`
url=`echo ${url} | sed -E "s,\[[0-9]+m,,g"` # HACK for WebStorm. removes an escape char https://unix.stackexchange.com/a/172001

sed -Ei '' "s|\(.*\.now\.sh\)|\(https://$url\)|g" README.md

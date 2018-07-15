#!/usr/bin/env bash

app_name=`node -p "require('./package.json').name"`
now ls ${app_name} | grep ${app_name} | tail -n +2 | sed 's/^ *//' | sed -E 's/[[:space:]]+/,/g' | cut -d "," -f 2 | xargs now rm -y
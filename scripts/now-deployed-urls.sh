#!/usr/bin/env bash
cd $(dirname $0)
app_name=`node -p "require('../package.json').name"`

now ls ${app_name} | grep ${app_name} |
sed -E "s,\[[0-9]+m,,g" | #HACK for WebStorm. removes an escape char https://unix.stackexchange.com/a/172001
sed 's/^ *//' | sed -E 's/[[:space:]]+/,/g' | # remove white space at start, then comma delimit fields
cut -d "," -f 2 # grab the second field which has the url of the deploy
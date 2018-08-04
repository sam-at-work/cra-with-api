#!/usr/bin/env bash
cd $(dirname $0)

app_name=`node -p "require('../package.json').name"`
branch=`git rev-parse --abbrev-ref HEAD`

# Deploy
echo "Deploying ${app_name}"
now deploy ../server/ -e NODE_ENV=production --public --name=${app_name}

# Update URL in README.md
echo "Updating URL in README.md for branch ${branch}"
sed -Ei '' "s|\[$branch\]\(.*\)|\[$branch\]\(https://`./now-deployed-urls.sh | head -1`\)|g" ../README.md

#!/usr/bin/env bash
cd $(dirname $0)

app_name=`node -p "require('../package.json').name"`

# Deploy
echo "Deploying ${app_name}"
now deploy ../server/ -e NODE_ENV=production --public --name=${app_name}

# Update URL in README.md
echo "Updating URL in readme for ${app_name}"
sed -Ei '' "s|\(.*\.now\.sh\)|\(https://`./now-deployed-urls.sh | head -1`\)|g" ../README.md

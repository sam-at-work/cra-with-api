#!/usr/bin/env bash

# Update gitmojis list
npx gitmoji -u

# call the gitmoji hook with npx so gitmoji can be local dev dependency
npx gitmoji -i # setup gitmoji commit hook
sed -Ei '' "s|(gitmoji --hook $1)|npx \1|g" .git/hooks/prepare-commit-msg

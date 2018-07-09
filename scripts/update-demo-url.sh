#!/usr/bin/env bash

url=$(cat | tee /dev/tty  | grep -o https://.*\.now\.sh)
sed -Ei '' "s|(\[Live Demo\])\(.*\)|\1\($url\)|g" README.md
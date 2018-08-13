#!/usr/bin/env bash

if [ -z "$1" ] ; then
  port=3003
else
  port=$1
fi

echo "Killing process running on port ${port}"
lsof -i:$port | awk 'NR!=1 {print $2}' | xargs kill

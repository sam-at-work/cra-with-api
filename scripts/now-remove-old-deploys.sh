#!/usr/bin/env bash
cd $(dirname $0)
now-deployed-urls.sh | tail -n +2 | xargs now rm -y
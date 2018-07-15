#!/usr/bin/env bash

./scripts/now-deployed-urls.sh | tail -n +2 | xargs now rm -y
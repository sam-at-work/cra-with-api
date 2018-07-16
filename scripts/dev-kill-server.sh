#!/usr/bin/env bash

lsof -i:3003 | awk 'NR!=1 {print $2}' | xargs kill

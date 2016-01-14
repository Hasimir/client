#! /bin/bash

# Parse the version number out of our codebase and print it. This script exists
# because our packaging process needs the version number in a lot of places,
# and not all of those have access to the built binary to run
# `keybase version --format=s`.

set -e -u -o pipefail

here="$(dirname "$BASH_SOURCE")"

version_file="$here/../go/libkb/version.go"

version="$(cat "$version_file" | grep 'Version =' | grep -oE '[0-9]+(.[0-9]+)+')"

current_date=`date -u +%Y%m%d%H%M%S` # UTC
commit_short=`git -C "$here" log -1 --pretty=format:%h`
build="$current_date+$commit_short"

echo "$version-$build"

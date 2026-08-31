#!/usr/bin/env bash

set -euo pipefail

readonly DEFAULT_SHADE="mint"
shade="${1:-$DEFAULT_SHADE}"

aurora() {
  local message="$1"
  printf '✦ %s: %s\n' "$shade" "$message"
}

case "$shade" in
  mint|violet|blue) aurora "visible tonight" ;;
  *) printf 'unknown shade: %s\n' "$shade" >&2; exit 1 ;;
esac

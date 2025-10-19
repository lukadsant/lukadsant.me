#!/usr/bin/env bash
# Nota: se receber "Permission denied", execute com:
#   bash /workspaces/lukadsant.me/scripts/move_posts_to_trash.sh
# ou torne o script executável:
#   chmod +x /workspaces/lukadsant.me/scripts/move_posts_to_trash.sh && /workspaces/lukadsant.me/scripts/move_posts_to_trash.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/pages/posts"
TRASH="$ROOT/pages/trash"
KEEP=5

mkdir -p "$TRASH"

# lista arquivos .md em SRC (exceto index.md), ordena por modificação (mais recente primeiro)
mapfile -t files < <(
  find "$SRC" -maxdepth 1 -type f -name '*.md' ! -name 'index.md' -printf '%T@ %p\n' \
  | sort -rn \
  | awk '{print $2}'
)

total=${#files[@]}
if [ "$total" -le "$KEEP" ]; then
  echo "Há $total posts. Nada a mover (máx a manter = $KEEP)."
  exit 0
fi

# move os que excedem os KEEP
for f in "${files[@]:$KEEP}"; do
  mv -v "$f" "$TRASH/"
done

moved=$(( total - KEEP ))
echo "Movidos $moved arquivos para $TRASH. Mantidos $KEEP posts em $SRC."

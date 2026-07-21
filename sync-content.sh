#!/bin/bash
# Footscapes — sincroniza a vault do Obsidian para content/
#
# PORQUÊ ISTO EXISTE:
# O deploy (.github/workflows/deploy.yml) corre `npx quartz build` num
# servidor do GitHub, que nunca tem acesso ao Mac nem à vault no iCloud.
# Por isso content/ tem de ser uma cópia real, commitada — não pode ser
# um symlink. Este script faz essa cópia e deixa pronta para commit.
#
# Corre isto sempre que quiseres publicar alterações feitas na vault,
# antes de um git push para main.

set -e
VAULT="$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/Footscapes"
REPO_DIR="$HOME/Documents/footscapes"
CONTENT_DIR="$REPO_DIR/content"

if [ -L "$CONTENT_DIR" ]; then
  echo "Erro: content/ ainda é um symlink. Apaga-o primeiro (rm content) antes de correr este script."
  exit 1
fi

echo "🌱 A sincronizar a vault para content/..."
rsync -a --delete \
  --exclude '.obsidian' \
  --exclude '.DS_Store' \
  "$VAULT/" "$CONTENT_DIR/"

cd "$REPO_DIR"
echo
echo "Ficheiros alterados:"
git status --short content | head -30
echo
echo "Revê a lista acima. Se estiver bem, corre:"
echo "  git add content && git commit -m \"sync content com a vault\" && git push origin main"

---
title: "Git — publicar alterações"
type: reference
tags:
  - hide-nav
---
Nota de referência pessoal. Não publicar. Guarda aqui, reutiliza sempre que precisares de enviar alterações para o GitHub.

## Se a alteração foi na vault (notas do Footscapes): primeiro sincroniza

O site é construído por um servidor do GitHub, que nunca vê o teu Mac nem o iCloud, só vê o que está guardado dentro do repositório. Por isso, antes de publicares, tens de copiar as notas da vault para dentro do repositório. Um script já faz isso:

```
cd ~/Documents/footscapes
./sync-content.sh
```

Isto copia tudo o que está na vault para a pasta `content/` do repositório, e no fim mostra-te uma lista dos ficheiros que mudaram. Lê essa lista, confirma que faz sentido (por exemplo, as notas que editaste aparecem lá), e só depois segue para o comando abaixo.

Se a alteração foi só no deck (Fiat Corde, projeto à parte em `~/Documents/fiat-corde`), não precisas deste passo, passa direto ao comando seguinte.

## O comando, sempre com a mesma estrutura

Abre o Terminal e cola isto, linha a linha (ou tudo de uma vez, funciona igual):

```
cd ~/Documents/footscapes
git add -A
git commit -m "descreve aqui o que mudou"
git push
```

Se a alteração for no deck (Fiat Corde), troca a primeira linha por:

```
cd ~/Documents/fiat-corde
```

O resto é sempre igual, nas duas pastas.

## O que cada linha faz

**`cd ~/Documents/footscapes`**
"cd" quer dizer "change directory", muda de pasta. Isto diz ao Terminal para trabalhar dentro da pasta do projeto. Sem isto, os comandos seguintes não sabem onde atuar.

**`git add -A`**
Marca todas as alterações que fizeste (ficheiros novos, editados ou apagados) para irem no próximo envio. O "-A" quer dizer "all", tudo. Isto inclui a cópia que o `sync-content.sh` acabou de fazer para `content/`. Não envia nada ainda, só prepara.

**`git commit -m "descreve aqui o que mudou"`**
Cria um "pacote" com essas alterações e uma descrição. Troca sempre o texto entre aspas por uma frase curta que diga o que mudou, por exemplo `"corrige links da pasta Design"` ou `"adiciona nota sobre Fiat Humanitas"`. Isto fica registado para sempre no histórico, é o teu resumo de "o que fiz aqui".

**`git push`**
Envia o pacote para o GitHub. Só depois deste passo é que as alterações ficam no site publicado (o GitHub Actions faz o resto sozinho, entre 2 a 3 minutos).

## Como saber se correu bem

Depois do `git push`, o Terminal mostra linhas a dizer que enviou objetos e termina sem mensagens de erro em vermelho. Se vires `error` ou `rejected`, algo falhou, o envio não chegou ao GitHub. Copia a mensagem de erro e pede ajuda com ela.

## Sinais de que correu mal

- `nothing to commit` — não havia alterações para enviar. Não é erro, só não tinhas nada novo.
- `rejected` ou `error` a seguir ao `git push` — não chegou ao GitHub. Volta a colar a mensagem completa antes de tentar de novo.
- Se o Terminal pedir para configurares nome/email antes de conseguires fazer commit, é a primeira vez que usas o Git nesse computador, é normal, segue as instruções que ele mostra.

## Depois de publicar

Confirma sempre no separador **Actions** do repositório no GitHub (footscapes ou fiat-corde) que o círculo fica verde, não amarelo nem vermelho. Verde quer dizer que o site já está atualizado.

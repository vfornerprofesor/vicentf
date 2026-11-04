#!/usr/bin/env bash
# Genera components/vf-bundle.js: highlight.js + utils.js + tots els
# components/vf-*.js en UN sol fitxer.
#
# Per què: header.html es carrega amb $('#header').load(), i jQuery
# descarrega els <script src> d'un fragment d'un en un (seqüencial). Amb
# 25 fitxers separats aixo eren ~25 viatges d'anada i tornada a GitHub
# Pages (~180 ms cadascun) = 4-5 s de pantalla de carrega. Amb el bundle
# es una sola petició.
#
# Ordre: highlight.js primer (aixi vf-code sempre troba hljs), després
# utils.js i vf-element.js (la resta fan "extends VFElement"), i després
# la resta de components en ordre alfabetic (entre ells no importa).
#
# S'executa sol des del hook pre-commit (.githooks/pre-commit). A mà:
#   bash scripts/build-bundle.sh
set -euo pipefail
cd "$(dirname "$0")/.."

out=components/vf-bundle.js
tmp=$(mktemp)

{
    echo "/* GENERAT per scripts/build-bundle.sh — NO EDITES aquest fitxer:"
    echo "   edita components/vf-*.js i torna a executar l'script. */"
    for f in scripts/highlight/highlight.min.js scripts/utils.js components/vf-element.js; do
        echo ";/* ---- $f ---- */"
        cat "$f"
        echo
    done
    for f in components/vf-*.js; do
        case "$f" in
            components/vf-element.js|components/vf-bundle.js) continue ;;
        esac
        echo ";/* ---- $f ---- */"
        cat "$f"
        echo
    done
} > "$tmp"

if ! cmp -s "$tmp" "$out" 2>/dev/null; then
    mv "$tmp" "$out"
    chmod 644 "$out"
    echo "build-bundle: $out regenerat"
else
    rm "$tmp"
fi

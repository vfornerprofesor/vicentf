#!/usr/bin/env python3
"""Converteix un document markdown de vf-documentacio a PDF (A4 apaïsat).

Ús:
    .claude/eines/.venv/bin/python .claude/eines/md2pdf.py documents/26-27/programacio-1eso-26-27.md

El markdown comença amb una capçalera YAML senzilla (clau: valor):
    ---
    titol: TALLER DE RELACIONS DIGITALS RESPONSABLES
    subtitol: Situacions d'aprenentatge per al curs 26/27
    ---
Genera la portada (títol, subtítol i índex de títols # i ##) i el PDF al costat del .md.
El markdown pot portar HTML incrustat (taules amb cel·les combinades).
"""
import html
import re
import sys
from pathlib import Path

import markdown
from weasyprint import CSS, HTML

EINES = Path(__file__).resolve().parent
ARREL = EINES.parent.parent
LOGO = ARREL / "assets" / "documents" / "LOGOS CAPÇALERA SENSE FONS.png"


def llig_capcalera(text):
    meta = {}
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if m:
        for linia in m.group(1).splitlines():
            if ":" in linia:
                clau, valor = linia.split(":", 1)
                meta[clau.strip()] = valor.strip()
        text = text[m.end():]
    return meta, text


def index(cos):
    """Índex amb els títols h1 i h2 (els ids els posa l'extensió toc)."""
    files = []
    for nivell, atributs, contingut in re.findall(r"<h([12])([^>]*)>(.*?)</h\1>", cos, re.S):
        id_ = re.search(r'id="([^"]+)"', atributs)
        if not id_:
            continue
        id_ = id_.group(1)
        text = re.sub(r"<[^>]+>", "", contingut)
        files.append(f'<li class="n{nivell}"><a href="#{id_}">{text}</a></li>')
    return '<nav class="index"><h2 class="no-index">Índex</h2><ul>' + "".join(files) + "</ul></nav>"


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    origen = Path(sys.argv[1]).resolve()
    meta, text = llig_capcalera(origen.read_text(encoding="utf-8"))

    cos = markdown.markdown(
        text,
        extensions=["tables", "attr_list", "md_in_html", "sane_lists", "toc"],
        extension_configs={"toc": {"slugify": lambda v, s: "s-" + re.sub(r"[^a-z0-9]+", "-", v.lower()).strip("-")}},
    )

    pagina = f"""<!doctype html>
<html lang="ca"><head><meta charset="utf-8"><title>{html.escape(meta.get('titol', ''))}</title></head>
<body>
<div class="capcalera"><img src="{LOGO.as_uri()}" alt=""></div>
<section class="portada">
  <h1 class="titol">{html.escape(meta.get('titol', ''))}</h1>
  <p class="subtitol">{html.escape(meta.get('subtitol', ''))}</p>
</section>
{index(cos)}
<main>{cos}</main>
</body></html>"""

    desti = origen.with_suffix(".pdf")
    HTML(string=pagina, base_url=str(origen.parent)).write_pdf(
        desti, stylesheets=[CSS(filename=str(EINES / "document.css"))]
    )
    print(desti)


if __name__ == "__main__":
    main()

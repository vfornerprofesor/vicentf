# Dues unitats noves per a SMX — HTML+CSS i JavaScript (2026-09-07)

Document de **disseny i planificació**. Ací **no** es crea cap pàgina: és el guió complet perquè, quan el propietari li done el vist-i-plau, una IA (o ell mateix) puga generar els `.html` directament copiant els blocs d'ací.

> **Versió 2 — 2026-09-07 (vesprada).** Dos canvis grans respecte de la v1, demanats pel propietari:
>
> 1. **La unitat de JavaScript deixa de ser una unitat de consola.** El DOM passa de la lliçó 09 a la **lliçó 04**, i a partir d'ahí tots els exercicis es veuen en pantalla. En les tres primeres lliçons l'eixida va a la pàgina amb `document.write`, no a la consola. Motiu i detall: **§3.0**.
> 2. **S'aprofita el material que ja hi ha al repo.** Les unitats actuals `html/`, `css/` i `js/` no es toquen, però els seus **22 exercicis amb solució** i ~55 captures es copien i es tradueixen a les unitats noves, en compte de tornar a inventar-ho tot. Taules de reaprofitament: **§2.4.4** (unitat A) i **§3.4.3** (unitat B).
>
> El resum de què canvia està al final del document, després de §5.

---

## 0. Com llegir aquest document (nota per al professor)

Este document barreja dos idiomes **a propòsit**:

| Part | Idioma | Com identificar-la |
|---|---|---|
| Notes de planificació, rutes del repo, avisos d'implementació, rúbriques | **valencià/castellà** | Text normal del document, seccions numerades |
| **Contingut de les unitats** (títols, explicacions, exercicis, solucions) | **anglés senzill** | Sempre dins de blocs citats `>` o de blocs de codi ` ``` `, i marcat amb la icona **EN** |

L'anglés està escrit per a alumnat de 16 anys de nivell inicial: frases curtes, vocabulari bàsic, i cada terme tècnic s'explica la primera vegada que apareix.

### Regles del projecte que s'han respectat ací

- Lloc **estàtic**: sense build, sense npm, sense frameworks. HTML + CSS + JS vanilla + Bootstrap 4.5 (ja carregat des de `header.html`).
- Indentació de **4 espais** en HTML i JS.
- `<base href>` amb la profunditat correcta i **totes** les rutes escrites **relatives a l'arrel** del lloc.
- Reutilitzar els components `vf-*` existents. No inventar patrons nous.
- Per a mostrar codi HTML dins de `<vf-code>` cal **escapar** `<` i `>` com a `&lt;` i `&gt;` → fes servir `html-helper.html`.
- Provar sempre amb `python3 -m http.server 8000` a l'arrel (amb `file://` el `<base href>` no funciona).

### Per què dues unitats independents

Els dos mòduls s'imparteixen **en paral·lel amb grups distints**. Per tant:

- El grup de **JavaScript no ha cursat HTML**. La unitat de JS porta el seu propi **andamiatge d'HTML mínim** (secció 2.5.2): se'ls dóna una plantilla feta, se'ls explica només el que necessiten (`<html>`, `<body>`, `<script>`, `id`, `<button>`, `<input>`) i prou. Mai es demana a un alumne de JS que dissenye una pàgina.
- La unitat d'**HTML+CSS no usa gens de JavaScript**. Els efectes interactius es fan amb `:hover`, `:focus` i `<details>` natiu.

---

## 1. Plantilla de pàgina (idèntica per a les dues unitats)

Totes les pàgines noves viuran a profunditat **4** (`unitats/programacio/web/CARPETA/fitxer.html`), per tant `<base href="../../../../">`, igual que les pàgines actuals de `unitats/programacio/web/js/`.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <style>
        /* Pantalla de carrega: evita el flaix de contingut sense estils
           mentre header.html (que porta tot el CSS/JS propi) encara no ha
           arribat. Colors en literal, no variables de general.css: eixe
           fitxer encara no ha carregat en este punt. */
        #loading {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #6d5fb3;
            transition: opacity .3s ease;
        }
        #loading.vf-loading-hide {
            opacity: 0;
            pointer-events: none;
        }
        #loading .vf-spinner {
            width: 48px;
            height: 48px;
            border: 5px solid rgba(255, 255, 255, .35);
            border-top-color: #fff;
            border-radius: 50%;
            animation: vf-spin .8s linear infinite;
        }

        @keyframes vf-spin {
            to {
                transform: rotate(360deg);
            }
        }
    </style>
    <base href="../../../../">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AÇÍ EL TÍTOL REAL DE LA PÀGINA</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <div id="header"></div>
    <script>$('#header').load('header.html');</script>

</head>

<body>
    <div id="loading">
        <div class="vf-spinner"></div>
    </div>
    <script>
        // Xarxa de seguretat independent de header.html: si per qualsevol
        // motiu no arriba a carregar (CDN caiguda, error de xarxa...), no
        // ens quedem amb l'espera infinita.
        setTimeout(function () {
            var l = document.getElementById('loading');
            if (l) { l.style.display = 'none'; }
        }, 5000);
    </script>

    <div id="menu"></div>
    <script>$('#menu').load('menu.html');</script>
    <div id="content">
        <vf-title level="1">
            Page title
        </vf-title>

        <div id="vf-index" levels="2,3"></div>

        <!-- ... contingut ... -->

    </div>
    <div id="footer"></div>
    <script>$('#footer').load('footer.html');</script>
</body>

</html>
```

### 1.1 Peu de navegació entre lliçons (patró nou, reutilitzable)

Totes les pàgines de lliçó acaben amb esta fila. Copia-la tal qual i canvia els tres enllaços:

```html
        <vf-hr></vf-hr>
        <vf-row centered>
            <vf-col classes="col-md-4">
                <vf-btn classes="btn-short" link="unitats/programacio/web/html-css/03-text.html">
                    &larr; Previous: Text
                </vf-btn>
            </vf-col>
            <vf-col classes="col-md-4">
                <vf-btn classes="btn-short" inverse link="unitats/programacio/web/html-css">
                    Unit index
                </vf-btn>
            </vf-col>
            <vf-col classes="col-md-4">
                <vf-btn classes="btn-short" link="unitats/programacio/web/html-css/05-images.html">
                    Next: Images &rarr;
                </vf-btn>
            </vf-col>
        </vf-row>
```

### 1.2 Patró d'exercici amb solució

**Sempre** este patró: enunciat en `vf-callout type="exercici"` i solució plegada en `vf-details`. Així l'alumnat no veu la solució de colp.

```html
        <vf-callout type="exercici">
            *Exercise 3.* Write a page with your name in an h1, and three paragraphs about you.
        </vf-callout>
        <vf-details summary="Show the solution">
            <vf-code language="html">
                ...codi escapat amb html-helper.html...
            </vf-code>
        </vf-details>
```

### 1.3 Avisos d'implementació (llegir abans de generar HTML)

- **`vf-code` lleva la indentació a partir de la segona línia**: escriu sempre el codi en línies pròpies i amb indentació uniforme dins del bloc.
- **Codi HTML dins de `vf-code`**: cal escapar `<` → `&lt;` i `>` → `&gt;`. Fes servir `html-helper.html` (copia el codi, enganxa'l allí, i copia el resultat).
- **Codi CSS i JS dins de `vf-code`**: no cal escapar res, excepte si el JS conté `<` (per exemple `i < 10`, que sí que cal escapar com `i &lt; 10`).
- **`*negreta*` i `~cursiva~`** funcionen dins de `vf-text`, `vf-quote`, `vf-callout` i els `<li>` de `vf-list`. **No** dins de `vf-code`.
- **Enllaços interns** dins de `vf-text`: `[text](unitats/...)`. Es queden en la mateixa pestanya. Els externs s'obrin en pestanya nova automàticament.
- **No** poses `href="#id"` a pèl enlloc: amb `<base>` va a la portada. Per a navegació interna dins de la pàgina ja tens `<div id="vf-index" levels="2,3"></div>`.
- Cada pàgina nova ha de portar el seu `<title>` real (no `Vicent Forner - Professor`).
- **Fitxers d'exercici descarregables**: viuen en `unitats/programacio/web/CARPETA/exercises/NN-lliçó/exN.html`, són pàgines HTML autònomes (sense plantilla `vf-*`, sense `<base>`) i s'enllacen amb `[here|download](...)` dins d'un `vf-text`. Convenció completa: §2.4.3 i §3.4.2.
- **En la unitat B, `document.write` només apareix en les lliçons 01, 02 i 03.** A partir de la 04 tot va per DOM. Si el veus en un exemple de la lliçó 05 en avant, és un error de transcripció.

---

## 2. UNITAT A — «Web Pages with HTML and CSS»

### 2.1 Fitxa

| Camp | Valor |
|---|---|
| Títol (alumnat) | **Web Pages with HTML and CSS** |
| Nivell | CFGM SMX, 1r curs. Nivell inicial, sense coneixements previs |
| Idioma del material | Anglés senzill |
| Carpeta al repo | `unitats/programacio/web/html-css/` |
| Carpeta d'imatges | `assets/unitats/programacio/web/html-css/` |
| Projecte final | Lloc web personal de 4 pàgines, responsive |

> **Nota:** ja existeixen `unitats/programacio/web/html/` i `unitats/programacio/web/css/` (en valencià, d'altres cursos). **No es toquen.** La unitat nova va a una carpeta nova (`html-css/`) i conviu amb elles. Si en el futur vols retirar-les, es fa en un altre canvi.
>
> El que sí que es fa és **reaprofitar-les**: els 12 exercicis amb solució de `css/` i les captures de `html/` es copien i es traduïxen a la unitat nova. Vore §2.4.4.

### 2.2 Objectius d'aprenentatge — **EN** (text per a la pàgina `index.html`)

> **What you will learn**
>
> - How a web page works: the browser, the files, and the folder where you keep them.
> - How to write HTML: the tags that give a page its structure and its content.
> - How to write text, lists, links, images, tables and forms.
> - How to use semantic tags, so people and machines understand your page.
> - How to write CSS: the language that gives your page colours, fonts and layout.
> - How to place boxes on the screen with the box model, flexbox and grid.
> - How to make a page that looks good on a phone and on a computer.
> - How to build a complete personal website, from an empty folder to a finished site.

### 2.3 Resultats d'aprenentatge i criteris — **EN** (llenguatge llà, per a `index.html`)

> **How I know I have learned it**
>
> **RA1 — I can build the structure of a page.**
> - I write a correct HTML file: doctype, `html`, `head` and `body`.
> - I use headings and paragraphs in the right order.
> - I close every tag and I indent my code.
> - My page has no errors in the W3C validator.
>
> **RA2 — I can add content to a page.**
> - I make ordered and unordered lists.
> - I create links to other pages of my site and to other websites.
> - I insert images with a useful `alt` text.
> - I build a table with a header row.
> - I build a form with labels and different input types.
>
> **RA3 — I can style a page with CSS.**
> - I connect an external CSS file to my HTML.
> - I select elements by tag, by class and by id.
> - I change colours, fonts and sizes.
> - I use the box model: margin, border, padding and content.
>
> **RA4 — I can lay out a page.**
> - I place elements in a row with flexbox.
> - I build a simple page layout with grid.
> - My page works on a small screen thanks to media queries.
> - I use CSS variables so my colours are all in one place.
>
> **RA5 — I can finish and deliver a project.**
> - I plan my site before I write code.
> - My files and folders have clear names.
> - I deliver on time, in a zip file, with all the pages working.
> - I explain my work to the class in 3 minutes.

### 2.4 Estructura de pàgines al repo

Totes a `unitats/programacio/web/html-css/`. `<base href="../../../../">` en totes.

| Fitxer | `<title>` | `vf-title level="1"` |
|---|---|---|
| `index.html` | `Web Pages with HTML and CSS` | Web Pages with HTML and CSS |
| `01-first-page.html` | `Your first web page` | Your first web page |
| `02-structure.html` | `The structure of an HTML page` | The structure of an HTML page |
| `03-text.html` | `Text: headings and paragraphs` | Text: headings and paragraphs |
| `04-lists-links.html` | `Lists and links` | Lists and links |
| `05-images.html` | `Images and media` | Images and media |
| `06-tables.html` | `Tables` | Tables |
| `07-forms.html` | `Forms` | Forms |
| `08-semantic.html` | `Semantic HTML` | Semantic HTML |
| `09-css-basics.html` | `CSS basics` | CSS basics |
| `10-text-colors.html` | `Text, fonts and colours` | Text, fonts and colours |
| `11-box-model.html` | `The box model` | The box model |
| `12-flexbox.html` | `Flexbox` | Flexbox |
| `13-grid.html` | `CSS Grid` | CSS Grid |
| `14-responsive.html` | `Responsive design` | Responsive design |
| `15-variables.html` | `CSS variables and good practice` | CSS variables and good practice |
| `16-project.html` | `Final project: my personal website` | Final project: my personal website |

**18 pàgines** (17 + índex).

#### 2.4.1 Enllaços des de la pàgina de curs

A `cursos/smx-awe.html`, dins del `<vf-row centered>` de targetes de continguts, afegir **al principi** (abans de la targeta d'HTML actual) — o millor, crear un `vf-title level="3"` nou «Modules 2026-27» amb esta fila:

```html
            <vf-row centered>
                <vf-card link="unitats/programacio/web/html-css" img="assets/html.png" alt="HTML and CSS">
                    Web Pages with HTML and CSS
                </vf-card>
                <vf-card link="unitats/programacio/web/javascript" img="assets/js.png" alt="JavaScript">
                    Programming with JavaScript
                </vf-card>
            </vf-row>
```

Cal afegir també les dues targetes a `unitats/programacio/index.html` i a `unitats/index.html`, dins de la fila de programació web, seguint el mateix patró `vf-card` que ja hi ha.

#### 2.4.2 `index.html` de la unitat — estructura completa

```html
    <div id="content">
        <vf-title level="1" subtitle="CFGM SMX · 2026-2027">
            Web Pages with HTML and CSS
        </vf-title>

        <div id="vf-index" levels="2,3"></div>

        <vf-content>
            <vf-row>
                <vf-col classes="col-md-4">
                    <vf-img src="assets/html.png" alt="HTML and CSS"></vf-img>
                </vf-col>
                <vf-col>
                    <vf-text>
                        Welcome! In this module you will learn to build web pages from zero.
                        You do *not* need to know anything about programming to start.
                    </vf-text>
                    <vf-text>
                        We use two languages. *HTML* puts the content in the page: titles, text,
                        images, links. *CSS* decides how that content looks: colours, sizes,
                        position on the screen.
                    </vf-text>
                    <vf-text>
                        At the end you will build your own personal website with four pages,
                        and it will work on a phone too.
                    </vf-text>
                </vf-col>
            </vf-row>
        </vf-content>

        <vf-title level="2">What you will learn</vf-title>
        <vf-content>
            <vf-list>
                ... (llista de 3.2) ...
            </vf-list>
        </vf-content>

        <vf-title level="2">How I know I have learned it</vf-title>
        <vf-content>
            ... (RA de 3.3, amb un vf-title level="3" per RA) ...
        </vf-content>

        <vf-title level="2">Lessons</vf-title>
        <vf-content>

            <vf-title level="3">Part 1 — HTML</vf-title>
            <vf-row centered>
                <vf-card link="unitats/programacio/web/html-css/01-first-page.html" img="assets/html.png">
                    1. Your first web page
                </vf-card>
                ... (una targeta per lliçó 01-08) ...
            </vf-row>

            <vf-title level="3">Part 2 — CSS</vf-title>
            <vf-row centered>
                ... (una targeta per lliçó 09-15, amb img="assets/css.png") ...
            </vf-row>

            <vf-title level="3">Final project</vf-title>
            <vf-row centered>
                <vf-card link="unitats/programacio/web/html-css/16-project.html" img="assets/code.jpg">
                    My personal website
                </vf-card>
            </vf-row>

        </vf-content>

        <vf-title level="2">Useful links</vf-title>
        <vf-content>
            <vf-list>
                <li><vf-text>[W3Schools HTML](https://www.w3schools.com/html/default.asp) — short examples you can try online.</vf-text></li>
                <li><vf-text>[W3Schools CSS](https://www.w3schools.com/css/default.asp)</vf-text></li>
                <li><vf-text>[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) — the official reference. Harder to read, but always correct.</vf-text></li>
                <li><vf-text>[W3C HTML validator](https://validator.w3.org/) — tells you if your HTML has errors.</vf-text></li>
            </vf-list>
        </vf-content>
    </div>
```

> `[IMATGE: assets/unitats/programacio/web/html-css/00-unit-cover.png — imatge de portada de la unitat: un navegador amb una pàgina web senzilla i, al costat, el codi HTML+CSS que la genera. 1200×630 px aprox. Opcional: si no la fas, deixa `assets/html.png`.]`

---

#### 2.4.3 Convenció de fitxers d'exercici

Igual que en la unitat B (§3.4.2) i que en la unitat de PHP ja existent:

```
unitats/programacio/web/html-css/exercises/12-flexbox/ex1.html
unitats/programacio/web/html-css/exercises/12-flexbox/ex1_solved.html
assets/unitats/programacio/web/html-css/12-flexbox/ex1.png
```

- Cada exercici és una **pàgina HTML autònoma** (sense plantilla `vf-*`, sense `<base>`), amb l'HTML donat i el CSS a completar. És exactament el format que ja tenen els exercicis de `unitats/programacio/web/css/`.
- L'enunciat típic d'esta unitat és **«reprodueix esta pàgina»**: es dóna la captura del resultat i el contingut, i l'alumne escriu el CSS.
- Enllaç de descàrrega dins de la lliçó:
  `Download the starter file [here|download](unitats/programacio/web/html-css/exercises/12-flexbox/ex1.html)`

#### 2.4.4 Material existent que es reaprofita

La unitat de CSS actual (`unitats/programacio/web/css/`) té **10 exercicis amb solució** ja provats en classe, amb les seues captures. Són el millor material de la unitat i es porten sencers. Els fitxers estan **en valencià**: cal traduir els textos visibles a anglés; l'HTML i el CSS es mantenen.

| Origen (unitat `css/`, valencià) | Destí | Lliçó | Què és |
|---|---|---|---|
| `css/personal.html` + `assets/.../css/personal.png` | `exercises/10-text-colors/ex1.html` | 10 | Pàgina personal: tipografia i colors |
| `css/pelicula.html` + `pelicula_solved.html` + `pelicula.png` | `exercises/11-box-model/ex1.html` | 11 | Fitxa de pel·lícula: caixes, marges, vores |
| `css/aniversari.html` + `aniversari_solved.html` + `aniversari.png` | `exercises/11-box-model/ex2.html` | 11 | Invitació d'aniversari |
| `css/inputs.html` + `inputs_solved.html` + `inputs.png` | `exercises/07-forms/ex2.html` | 07 i 10 | Formulari estilitzat (l'HTML en la 07, el CSS en la 10) |
| `css/menu.html` + `menu_solved.html` + `menu.png` | `exercises/12-flexbox/ex1.html` | 12 | Menú de navegació horitzontal |
| `css/paisos.html` + `paisos_solved.html` + `paisos.png` | `exercises/12-flexbox/ex2.html` | 12 | Graella de països |
| `css/grup_musica.html` + `grup_musica_solved.html` + `grup_musica.png` | `exercises/12-flexbox/ex3.html` | 12 | Pàgina de grup de música |
| `css/escacs.html` + `escacs_solved.html` + `escacs.png` | `exercises/13-grid/ex1.html` | 13 | Tauler d'escacs amb graella |
| `css/media-queries.html` + `media-queries-sample.html` + `mq1-1..3.jpeg` | `exercises/14-responsive/` | 14 | Exemple i exercici de media queries |
| `css/joc_preguntes.html` + `joc1..4.png` + `joc_flux.png` | `exercises/16-project/` | 16 | Maquetació d'un joc de preguntes (opció alternativa de projecte) |
| `css/projecte.html` + `projecte_login.png`, `projecte_signup.png`, `projecte_main1.png`, `projecte_main2.png` | `exercises/16-project/` | 16 | Projecte de 4 pàgines: login, alta i dues de contingut |
| `css/smx_solved.html` + `smx.png` | `exercises/08-semantic/ex1.html` | 08 | Pàgina completa: bon exemple d'estructura semàntica |

**Imatges ja fetes que estalvien treball d'il·lustració:**

| Imatge existent | Lliçó | Per a què |
|---|---|---|
| `assets/.../css/display_defecte.png` | 12 | Com es col·loquen els elements sense flexbox |
| `assets/.../css/display_flex_wrap.png` | 12 | `flex-wrap` |
| `assets/.../css/display_flex_wrap_center.png` | 12 | `justify-content: center` |
| `assets/.../css/display_flex_wrap_space_between.png` | 12 | `space-between` |
| `assets/.../css/display_flex_wrap_space_around.png` | 12 | `space-around` |
| `assets/.../css/display_align_center.png` | 12 | `align-items` |
| `assets/.../css/display_grid_1.png`, `display_grid_2.png` | 13 | Graella CSS |
| `assets/.../css/mq1-1.jpeg`, `mq1-2.jpeg`, `mq1-3.jpeg` | 14 | La mateixa pàgina en tres amplàries |
| `assets/.../html/01html.png` … `21html.png` | 01–08 | Captures de resultats d'etiquetes HTML. El guió de §4.5 les deixa totes en `_triatge-html/`: **cal revisar-les una a una** i assignar-les a la lliçó que toque, perquè no hi ha inventari de quina és quina |
| `assets/.../css/informatica.png` | 05 | Imatge d'exemple per a `<img>` |

> **Nota:** amb açò, de les imatges llistades en §4.1 només cal produir de nou les que no tenen equivalent (diagrames del model de caixa, de l'arbre HTML i de la cascada CSS). Les captures de resultat, en la seua majoria, ja existixen.

#### 2.4.5 Què li falta a la unitat de CSS actual i ací s'afig

Es documenta perquè quede clar què aporta la unitat nova respecte de `unitats/programacio/web/css/index.html` (una sola pàgina de 772 línies):

- **HTML semàntic** (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) — no hi és.
- **Formularis** — l'HTML de formularis no s'explica; només hi ha l'exercici d'estil `inputs.html`.
- **Taules** amb `colspan`/`rowspan` — sí que estan en `html/index.html`; es porten a la lliçó 06.
- **CSS Grid** — hi ha dues captures (`display_grid_1/2.png`) però no explicació sistemàtica.
- **Variables CSS** — apareixen al final de la pàgina de CSS, sense pràctica.
- **Accessibilitat i `alt`** — no es tracta.
- **Divisió en pàgines**: la unitat actual és una sola pàgina molt llarga per llenguatge; la nova és una pàgina per lliçó, amb navegació anterior/següent (§1.1).

---
### 2.5 Contingut pàgina a pàgina

A partir d'ací, tot el text marcat **EN** va literal a la pàgina. Els blocs de codi van dins de `<vf-code language="...">` (recorda escapar l'HTML).

---

#### 2.5.1 `01-first-page.html` — *Your first web page*

**Estructura de títols:**

```
vf-title level=1  Your first web page
vf-index levels="2,3"
vf-title level=2  What is a web page?
vf-title level=2  What you need
vf-title level=3  A code editor
vf-title level=3  A browser
vf-title level=2  Make your first page
vf-title level=2  Look inside the page: DevTools
vf-title level=2  Exercises
```

**EN — What is a web page?**

> A web page is just a **file**. It is a text file with the extension `.html`.
>
> Inside that file you write **HTML**. HTML is not a programming language: it is a *markup* language. That means you take your content (a title, a photo, a paragraph) and you put **labels** around it to say what each part is.
>
> The **browser** (Chrome, Firefox, Edge...) reads the file, understands the labels, and draws the page on the screen.
>
> When you visit `www.example.com`, your browser asks a computer called a **server** for those files, and the server sends them back. When we are learning, the server is not needed: we open our own file directly from our own computer.

> `[IMATGE: assets/unitats/programacio/web/html-css/01-browser-server.png — diagrama senzill: ordinador de l'usuari amb el navegador → fletxa "I want index.html" → servidor → fletxa "here are the files" → navegador dibuixant la pàgina. Text en anglés.]`

**EN — What you need**

> **A code editor.** A code editor is a program to write code. It colours the code so it is easier to read, and it warns you about some errors. We will use **Visual Studio Code** (VS Code). It is free.
>
> **A browser.** You already have one. We will use Firefox or Chrome, because they have good developer tools.

> `[IMATGE: assets/unitats/programacio/web/html-css/01-vscode.png — captura de VS Code amb un fitxer index.html obert, mostrant el ressaltat de sintaxi i l'arbre de carpetes a l'esquerra.]`

```html
<!-- vf-callout type="consell" -->
Install the *Live Server* extension in VS Code. Then you can right-click your
file and choose *Open with Live Server*. The page reloads by itself every time
you save. You will save a lot of time.
```

**EN — Make your first page** (contingut per a `vf-steps`)

> **Step 1 — Create a folder.** On your desktop, create a folder called `my-site`. Everything of this project goes inside. Never use spaces or accents in file names: use `my-site`, not `My Site` or `mi página`.
>
> **Step 2 — Create the file.** Open the folder in VS Code (`File > Open Folder`). Create a new file and call it `index.html`. The name `index.html` is special: it is the page a server shows when nobody asks for a file name. It is always the home page.
>
> **Step 3 — Write this code.**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>My first page</title>
</head>

<body>
    <h1>Hello!</h1>
    <p>This is my first web page.</p>
</body>

</html>
```

> **Step 4 — Save and open it.** Save with `Ctrl+S`. Then right-click the file and open it with your browser. You should see a big "Hello!" and one line of text.

> `[IMATGE: assets/unitats/programacio/web/html-css/01-first-result.png — captura del navegador mostrant "Hello!" en gran i el paràgraf a baix, amb la pestanya del navegador on es llig "My first page".]`

**EN — Look inside the page: DevTools**

> Every browser has a hidden tool for developers. Press **F12** (or right-click on the page and choose *Inspect*).
>
> A panel opens. In the **Elements** tab you can see the HTML of any page in the world. Try it on your favourite website. You can even change the text there and see it change on the screen — do not worry, you are only changing your copy, and it goes back to normal when you reload.
>
> We will use this tool in every class. It is the fastest way to understand why something does not look right.

> `[IMATGE: assets/unitats/programacio/web/html-css/01-devtools.png — captura de DevTools obert (pestanya Elements) sobre la pàgina d'exemple, amb l'element h1 seleccionat i destacat en la pàgina.]`

**EN — Exercises**

> **Exercise 1.1.** Change the title of the page to your name. Change the text of the `h1` and of the `p`. Save and reload.
>
> **Exercise 1.2.** Add two more paragraphs: one about the music you like, one about a film you like.
>
> **Exercise 1.3.** Open your page with DevTools and find your `h1` in the Elements tab. Change its text from DevTools. Then reload the page. What happened? Write the answer in a comment inside your HTML file.

**Solucions (`vf-details summary="Show the solution"`):**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Marc Ferrer</title>
</head>

<body>
    <h1>Marc Ferrer</h1>
    <p>This is my first web page.</p>
    <p>I like rock music, above all bands with two guitars.</p>
    <p>My favourite film is Interstellar. I have seen it four times.</p>
    <!-- 1.3: the change is lost when I reload. DevTools only changes the
         copy that is in the browser memory, not my file. -->
</body>

</html>
```

**Botons de la pàgina:**

| Etiqueta | Destí |
|---|---|
| `Download VS Code` | `https://code.visualstudio.com/` (extern) |
| `W3Schools: HTML intro` | `https://www.w3schools.com/html/html_intro.asp` (extern) |
| Peu: Next: The structure of an HTML page | `unitats/programacio/web/html-css/02-structure.html` |

---

#### 2.5.2 `02-structure.html` — *The structure of an HTML page*

**Títols:** `Tags and elements` · `Attributes` · `The head and the body` · `Nesting and indentation` · `Comments` · `Exercises`

**EN — Tags and elements**

> HTML is made of **tags**. A tag is a word between `<` and `>`.
>
> Most tags come in pairs: an **opening tag** and a **closing tag**. The closing tag has a slash `/`.

```html
<p>This is a paragraph.</p>
```

> Here `<p>` opens, `</p>` closes, and the text in the middle is the **content**. The three parts together are called an **element**.
>
> A few tags have no content and no closing tag. We call them **empty tags**:

```html
<br>
<hr>
<img src="cat.jpg" alt="A grey cat">
```

**EN — Attributes**

> An **attribute** gives extra information about an element. It goes inside the opening tag, and it has a name and a value between quotes.

```html
<a href="https://www.wikipedia.org">Go to Wikipedia</a>
<img src="photo.jpg" alt="Me at the beach">
<html lang="en">
```

> `href`, `src`, `alt` and `lang` are attributes. Always use double quotes `"` around the value. Never leave a space around the `=`.

**EN — The head and the body**

> Every page has the same skeleton:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The name of my page</title>
</head>

<body>
    <h1>What people see</h1>
</body>

</html>
```

> - `<!DOCTYPE html>` tells the browser "this is a modern HTML file". It is always the first line.
> - `<html lang="en">` wraps everything. `lang` says which language the page is in. Screen readers use it.
> - `<head>` is **information about the page**. Nobody sees it in the page itself.
>     - `<meta charset="utf-8">` lets you write accents and special characters: à, ñ, ç, €. Without it you get strange symbols.
>     - `<meta name="viewport" ...>` makes the page work on phones. We will explain it in the responsive lesson. For now, always copy it.
>     - `<title>` is the text in the browser tab, and the text Google shows in the search results.
> - `<body>` is **what people see**: your content.

> `[IMATGE: assets/unitats/programacio/web/html-css/02-head-body.png — diagrama de dues caixes: HEAD ("information about the page — invisible") amb title/meta dins, i BODY ("the content — visible") amb h1/p/img dins. Amb una fletxa cap a una captura del navegador indicant on es veu el title (la pestanya) i on el body (la pàgina).]`

**EN — Nesting and indentation**

> Elements go **inside** other elements. This is called **nesting**.
>
> The rule is simple: *the last tag you open is the first tag you close.*

```html
<p>This is <strong>very</strong> important.</p>
```

> This is correct. This is **wrong**:

```html
<p>This is <strong>very important.</p></strong>
```

> To see the nesting, we use **indentation**: every time we go one level in, we add 4 spaces. The browser does not care, but you and your teacher do.

```html
<body>
    <div>
        <h2>My favourite games</h2>
        <p>Here is my list.</p>
    </div>
</body>
```

```
<!-- vf-callout type="atencio" -->
An unclosed tag is the most common error of all. If half your page suddenly
looks bold or blue, look for a tag you forgot to close.
```

**EN — Comments**

> A comment is a note for humans. The browser ignores it.

```html
<!-- This is a comment. It does not appear in the page. -->
```

**EN — Exercises**

> **Exercise 2.1.** Find the three errors in this code and write the correct version.

```html
<!DOCTYPE html>
<html>
<head>
<title>My page
</head>
<body>
<h1>Welcome<h1>
<p>Hello there.
</body>
</html>
```

> **Exercise 2.2.** Write the skeleton of a page from memory, without looking. Then compare it with the example above.
>
> **Exercise 2.3.** Take your page from lesson 1 and indent it correctly with 4 spaces per level.
>
> **Exercise 2.4.** Add a comment at the top of your file with your name and the date.

**Solució 2.1:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>My page</title>
</head>

<body>
    <h1>Welcome</h1>
    <p>Hello there.</p>
</body>

</html>
```

> The three errors were: `<title>` was not closed, `<h1>` was closed with `<h1>` instead of `</h1>`, and the `<p>` was not closed. (The missing `charset` and `lang` are not errors, but you should always add them.)

---

#### 2.5.3 `03-text.html` — *Text: headings and paragraphs*

**Títols:** `Headings` · `Paragraphs` · `Line breaks and horizontal rules` · `Strong and emphasis` · `Special characters` · `Exercises`

**EN — Headings**

> There are six levels of heading, from `<h1>` to `<h6>`. `<h1>` is the most important, `<h6>` the least.

```html
<h1>My website</h1>
<h2>About me</h2>
<h3>My studies</h3>
<h3>My hobbies</h3>
<h2>Contact</h2>
```

> Use headings for their **meaning**, not for their size. Do not choose `<h4>` because "it looks the right size" — choose it because it is a sub-sub-section. If you want smaller text, that is CSS, and we will do it later.
>
> Rule: **one `<h1>` per page**, and do not jump levels (no `<h1>` straight to `<h3>`).

> `[IMATGE: assets/unitats/programacio/web/html-css/03-headings.png — captura del navegador amb els sis nivells h1..h6 un davall de l'altre, perquè es veja la diferència de mida.]`

**EN — Paragraphs**

> Text goes inside `<p>` (paragraph). The browser adds space above and below.

```html
<p>I was born in Valencia in 2010. I study computer science.</p>
<p>In my free time I play basketball and I repair old computers.</p>
```

> The browser **ignores extra spaces and line breaks** in your code. These two lines look exactly the same in the browser:

```html
<p>Hello        world</p>
<p>Hello world</p>
```

**EN — Line breaks and horizontal rules**

```html
<p>
    Carrer Major, 12<br>
    46001 Valencia<br>
    Spain
</p>

<hr>

<p>A new part of the page starts here.</p>
```

> `<br>` is a line break inside the same paragraph. Use it for addresses or poems, not to separate paragraphs — for that, use another `<p>`.
>
> `<hr>` draws a horizontal line to separate parts of the page.

**EN — Strong and emphasis**

```html
<p>This exam is <strong>very important</strong>.</p>
<p>I said <em>maybe</em>, not yes.</p>
```

> `<strong>` means "this is important" and the browser shows it **bold**. `<em>` means "this word is emphasised" and the browser shows it *italic*.
>
> There are also `<b>` and `<i>`, which only change how the text looks. Prefer `<strong>` and `<em>`: they have meaning, and a screen reader for a blind person can read them with a different voice.

**EN — Special characters**

> Some characters are part of HTML itself, so you cannot write them directly. You write an **entity** instead:

| You want | You write |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| a space that never breaks | `&nbsp;` |
| © | `&copy;` |

```html
<p>To open a tag you write &lt;p&gt; and to close it &lt;/p&gt;.</p>
<p>&copy; 2027 Marc Ferrer</p>
```

**EN — Exercises**

> **Exercise 3.1.** Build a page about your favourite video game, with an `h1` (the name of the game), three `h2` sections (Story, How to play, Why I like it) and two paragraphs under each one.
>
> **Exercise 3.2.** Write your postal address in a single paragraph, using `<br>`.
>
> **Exercise 3.3.** Write a paragraph where the words "never" and "always" are bold, and the word "maybe" is in italics. Use the tags with meaning.
>
> **Exercise 3.4.** Write a paragraph that shows this text in the browser, exactly: `The tag <h1> & the tag <p> are different.`

**Solució 3.4:**

```html
<p>The tag &lt;h1&gt; &amp; the tag &lt;p&gt; are different.</p>
```

---

#### 2.5.4 `04-lists-links.html` — *Lists and links*

**Títols:** `Unordered lists` · `Ordered lists` · `Nested lists` · `Links` · `Where does a link go?` · `Other kinds of links` · `Exercises`

**EN — Unordered lists**

> An unordered list is a list where the order does not matter. Each item is an `<li>` (*list item*) inside a `<ul>` (*unordered list*).

```html
<h2>Things in my bag</h2>
<ul>
    <li>Laptop</li>
    <li>Charger</li>
    <li>Notebook</li>
    <li>Headphones</li>
</ul>
```

**EN — Ordered lists**

> If the order matters (steps, a ranking, a recipe), use `<ol>` (*ordered list*). The browser numbers the items for you: never type the numbers yourself.

```html
<h2>How to install a graphics card</h2>
<ol>
    <li>Turn off the computer and unplug it.</li>
    <li>Open the case.</li>
    <li>Put the card in the PCIe slot.</li>
    <li>Connect the power cable.</li>
    <li>Close the case and turn it on.</li>
</ol>
```

**EN — Nested lists**

> A list can go inside a list item. Watch the indentation: it is the only way to see what is inside what.

```html
<ul>
    <li>Hardware
        <ul>
            <li>CPU</li>
            <li>RAM</li>
        </ul>
    </li>
    <li>Software
        <ul>
            <li>Operating system</li>
            <li>Applications</li>
        </ul>
    </li>
</ul>
```

```
<!-- vf-callout type="atencio" -->
The inner list goes *inside* the li, before its closing tag. A ul can only
contain li elements, never text directly.
```

**EN — Links**

> A link is an `<a>` element (*anchor*). The `href` attribute says where it goes. The content is the text people click.

```html
<a href="https://www.wikipedia.org">Go to Wikipedia</a>
```

**EN — Where does a link go?**

> There are two kinds of address:
>
> - **Absolute**: the full address, with `https://`. Use it for other websites.
> - **Relative**: a path from the file you are in. Use it for your own pages.

```html
<!-- Another page in the same folder -->
<a href="contact.html">Contact</a>

<!-- A page inside a subfolder -->
<a href="pages/photos.html">Photos</a>

<!-- Go up one folder, then into another one -->
<a href="../index.html">Home</a>

<!-- Another website -->
<a href="https://www.mozilla.org">Mozilla</a>
```

> `..` means "the folder above". Every `../` climbs one level.

> `[IMATGE: assets/unitats/programacio/web/html-css/04-relative-paths.png — diagrama d'arbre de carpetes (my-site/ amb index.html, contact.html, i una subcarpeta pages/ amb photos.html) i fletxes que mostren a quin fitxer apunta cada href de l'exemple.]`

**EN — Other kinds of links**

```html
<!-- Open in a new tab -->
<a href="https://www.mozilla.org" target="_blank" rel="noopener">Mozilla</a>

<!-- Write an email -->
<a href="mailto:info@example.com">Send us an email</a>

<!-- An image that is a link -->
<a href="index.html"><img src="logo.png" alt="Home"></a>
```

> `target="_blank"` opens the link in a new tab. Add `rel="noopener"` too: it is a small security protection. Do not use `target="_blank"` for the pages of your own site — it is annoying.

```
<!-- vf-callout type="consell" -->
Write link texts that make sense on their own. "Read our prices" is good.
"Click here" is bad: a person using a screen reader hears a list of links,
and twelve links called "click here" are useless.
```

**EN — Exercises**

> **Exercise 4.1.** Make an ordered list with the five steps of your morning routine.
>
> **Exercise 4.2.** Make a nested list with three music styles you like, and two bands inside each style.
>
> **Exercise 4.3.** Create two files in the same folder: `index.html` and `about.html`. Put a link in each one that goes to the other. Test that you can go back and forth.
>
> **Exercise 4.4.** In `index.html`, add a list of three links to three websites you use, each one opening in a new tab.
>
> **Exercise 4.5.** Create a folder `pages` with a file `hobbies.html` inside. Link to it from `index.html`, and add a link back to the home page from `hobbies.html`.

**Solució 4.5:**

```html
<!-- index.html -->
<a href="pages/hobbies.html">My hobbies</a>

<!-- pages/hobbies.html -->
<a href="../index.html">Back to home</a>
```

---

#### 2.5.5 `05-images.html` — *Images and media*

**Títols:** `The img tag` · `The alt text` · `Size and formats` · `Where do I put my images?` · `Figures and captions` · `Audio and video` · `Exercises`

**EN — The img tag**

> `<img>` is an empty tag: it has no content and no closing tag.

```html
<img src="photos/cat.jpg" alt="A grey cat sleeping on a keyboard">
```

> - `src` (*source*) is the path to the image file. Same rules as links: relative for your own images.
> - `alt` (*alternative text*) is a short description of the image.

**EN — The alt text**

> The `alt` text is read out loud to blind users, and it is shown if the image does not load. It is **not optional**.
>
> Write what the image *shows*, in a few words. Do not write "image of" — the browser already says that.

```html
<!-- Good -->
<img src="team.jpg" alt="Our class in the computer lab">

<!-- Bad -->
<img src="team.jpg" alt="image">
<img src="team.jpg" alt="team.jpg">
<img src="team.jpg">
```

> If the image is only decoration and says nothing, write an empty alt: `alt=""`. That tells the screen reader to skip it.

**EN — Size and formats**

```html
<img src="logo.png" alt="Company logo" width="200" height="80">
```

> `width` and `height` are in pixels. Always write both if you know them: the browser reserves the space and the page does not jump around while it loads.

| Format | Use it for | Notes |
|---|---|---|
| `.jpg` | photos | small files, but no transparency |
| `.png` | logos, drawings, screenshots | supports transparency |
| `.webp` | anything | smaller than jpg and png, works everywhere today |
| `.svg` | logos, icons | it is a drawing, so it never gets blurry |

```
<!-- vf-callout type="atencio" -->
Never put a 6000x4000 pixel photo straight from your phone into a web page.
It weighs 5 MB and it takes forever to load on mobile data. Resize it first
to the size you really need (for example 1200 px wide).
```

**EN — Where do I put my images?**

> Keep them in a folder called `images` or `img` inside your project. Use lowercase names with no spaces and no accents.

```
my-site/
    index.html
    about.html
    images/
        photo-me.jpg
        logo.png
```

> `[IMATGE: assets/unitats/programacio/web/html-css/05-folder-structure.png — captura de l'explorador de VS Code amb l'arbre my-site/ (index.html, about.html, images/, css/) exactament com l'exemple.]`

**EN — Figures and captions**

> If the image needs a caption, use `<figure>` and `<figcaption>`:

```html
<figure>
    <img src="images/motherboard.jpg" alt="An ATX motherboard with the CPU socket in the centre">
    <figcaption>An ATX motherboard. The CPU goes in the square socket.</figcaption>
</figure>
```

**EN — Audio and video**

```html
<audio src="music/song.mp3" controls></audio>

<video src="videos/demo.mp4" controls width="640"></video>
```

> `controls` shows the play button and the volume. Without it, the user cannot do anything.
>
> Do not add `autoplay`. People hate it.

**EN — Exercises**

> **Exercise 5.1.** Download three images, put them in an `images` folder and show them in a page, each one with a good `alt` text and a heading above it.
>
> **Exercise 5.2.** Add a `<figure>` with a caption for one of them.
>
> **Exercise 5.3.** Make one of the images a link to the website where you found it.
>
> **Exercise 5.4.** Break one image on purpose: change its `src` to a name that does not exist. Reload and look at what the browser shows. Now you know why `alt` matters.

**Solució 5.3:**

```html
<a href="https://unsplash.com" target="_blank" rel="noopener">
    <img src="images/mountain.jpg" alt="Snow on a mountain at sunrise" width="600">
</a>
```

---

#### 2.5.6 `06-tables.html` — *Tables*

**Títols:** `What tables are for` · `A basic table` · `Head, body and foot` · `Cells that take more space` · `Exercises`

**EN — What tables are for**

> A table shows **data**: a timetable, a price list, the specifications of a computer. Something with rows and columns.
>
> Tables are **not** for the layout of a page. Twenty years ago people used them for that. Today we use CSS (flexbox and grid), and you will learn that later in this module.

**EN — A basic table**

```html
<table>
    <tr>
        <th>Component</th>
        <th>Model</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>CPU</td>
        <td>Ryzen 5 5600</td>
        <td>130 &euro;</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>16 GB DDR4</td>
        <td>45 &euro;</td>
    </tr>
</table>
```

> - `<table>` is the whole table.
> - `<tr>` is a **table row**.
> - `<th>` is a **header cell** (bold and centred by default).
> - `<td>` is a normal **data cell**.
>
> Read it row by row: every `<tr>` is one line, and inside it every `<td>` is one column.

> `[IMATGE: assets/unitats/programacio/web/html-css/06-table-parts.png — la taula anterior renderitzada al navegador, amb etiquetes de colors assenyalant quina part és tr, th i td.]`

**EN — Head, body and foot**

> For bigger tables, group the rows. It is clearer, and CSS can style each part separately.

```html
<table>
    <thead>
        <tr>
            <th>Day</th>
            <th>Subject</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Monday</td>
            <td>Networks</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>Web pages</td>
        </tr>
    </tbody>
</table>
```

> You can also add a `<caption>` right after `<table>` with the title of the table.

**EN — Cells that take more space**

```html
<table>
    <tr>
        <th colspan="2">Contact</th>
    </tr>
    <tr>
        <td>Email</td>
        <td>marc@example.com</td>
    </tr>
</table>
```

> `colspan="2"` makes a cell as wide as two columns. `rowspan="2"` makes it as tall as two rows.
>
> Careful: if you use `colspan="2"` in a row, that row needs **one cell less** than the others.

**EN — Exercises**

> **Exercise 6.1.** Build a table with your school timetable: one column per day, one row per hour.
>
> **Exercise 6.2.** Build a table with the parts of a computer you would buy with 800 €: component, model, price. Add a last row with the total, using `colspan` so the words "TOTAL" take two columns.
>
> **Exercise 6.3.** Rewrite the table of exercise 6.1 using `<thead>`, `<tbody>` and `<caption>`.

**Solució 6.2 (fila del total):**

```html
    <tfoot>
        <tr>
            <td colspan="2"><strong>TOTAL</strong></td>
            <td><strong>795 &euro;</strong></td>
        </tr>
    </tfoot>
```

---

#### 2.5.7 `07-forms.html` — *Forms*

**Títols:** `What is a form?` · `The form element` · `Text inputs and labels` · `Other input types` · `Choices: radio and checkbox` · `Select and textarea` · `Buttons` · `Simple validation` · `Grouping fields` · `Exercises`

**EN — What is a form?**

> A form is the part of a page where the user **writes something**: a login box, a search bar, a contact form, an order.
>
> In this module we only build the form. Sending the data to a server needs another language (PHP, for example), and that is a different module. Our forms will look real and will check the data, but they will not store anything yet.

**EN — The form element**

```html
<form action="#" method="post">
    <!-- all the fields go here -->
</form>
```

> - `action` is the address that will receive the data. We write `#` because we have no server yet.
> - `method` is how the data travels: `get` (visible in the address bar, for searches) or `post` (hidden, for everything else).

**EN — Text inputs and labels**

```html
<form action="#" method="post">
    <p>
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" placeholder="Marc Ferrer">
    </p>
</form>
```

> Three attributes you must always write:
>
> - `type` says what kind of field it is.
> - `id` identifies this field in the page. It must be unique.
> - `name` is the name of the data when it is sent. Without `name`, the field is never sent.
>
> The `<label>` is the text of the field. Its `for` must be **exactly the same** as the `id` of the input. Then, when you click the label, the cursor jumps into the field — and screen readers can say what the field is for.

```
<!-- vf-callout type="atencio" -->
label for="name" must match input id="name". If you copy and paste a field
and forget to change the id, two fields will have the same id and the labels
will stop working.
```

**EN — Other input types**

```html
<input type="email" id="mail" name="mail">
<input type="password" id="pass" name="pass">
<input type="number" id="age" name="age" min="16" max="99">
<input type="date" id="birth" name="birth">
<input type="color" id="fav" name="fav">
<input type="range" id="volume" name="volume" min="0" max="10">
<input type="file" id="photo" name="photo">
```

> The `type` changes the keyboard on a phone, the little widget the browser shows, and the automatic checks. `type="email"` will not accept a text without `@`.

> `[IMATGE: assets/unitats/programacio/web/html-css/07-input-types.png — captura del navegador amb un formulari que mostra els set tipus d'input anteriors, un davall de l'altre, amb la seua etiqueta.]`

**EN — Choices: radio and checkbox**

```html
<p>Choose one course:</p>
<p>
    <input type="radio" id="smx" name="course" value="smx">
    <label for="smx">SMX</label>

    <input type="radio" id="asir" name="course" value="asir">
    <label for="asir">ASIR</label>
</p>

<p>Choose all the languages you know:</p>
<p>
    <input type="checkbox" id="html" name="lang" value="html">
    <label for="html">HTML</label>

    <input type="checkbox" id="css" name="lang" value="css">
    <label for="css">CSS</label>
</p>
```

> **Radio** = choose only one. **Checkbox** = choose zero, one or many.
>
> The trick with radio buttons: they must all share the **same `name`**. That is what makes them a group where only one can be selected. Their `id` must be different.

**EN — Select and textarea**

```html
<label for="city">City</label>
<select id="city" name="city">
    <option value="">-- choose one --</option>
    <option value="val">Valencia</option>
    <option value="cas">Castello</option>
    <option value="ali">Alacant</option>
</select>

<label for="message">Your message</label>
<textarea id="message" name="message" rows="5" cols="40"></textarea>
```

> A `<textarea>` is for long text. It has an opening and a closing tag, and anything between them appears already written inside — so leave it empty.

**EN — Buttons**

```html
<button type="submit">Send</button>
<button type="reset">Clear the form</button>
```

**EN — Simple validation**

> The browser can check some things for you, with no programming at all:

```html
<input type="email" id="mail" name="mail" required>
<input type="text" id="user" name="user" required minlength="3" maxlength="12">
<input type="number" id="age" name="age" required min="16" max="99">
```

> - `required`: the form will not be sent if it is empty.
> - `minlength` / `maxlength`: minimum and maximum number of characters.
> - `min` / `max`: minimum and maximum value for numbers and dates.

> `[IMATGE: assets/unitats/programacio/web/html-css/07-validation.png — captura del missatge groc/roig que trau el navegador quan s'intenta enviar un formulari amb un camp required buit.]`

**EN — Grouping fields**

```html
<fieldset>
    <legend>Personal data</legend>
    <!-- fields -->
</fieldset>
```

**EN — Exercises**

> **Exercise 7.1.** Build a sign-up form with: name, email, password, date of birth and a Send button. Every field must have its label.
>
> **Exercise 7.2.** Add to that form: a radio group to choose a T-shirt size (S, M, L), a checkbox "I accept the rules" that is `required`, and a `select` with three countries.
>
> **Exercise 7.3.** Add a `textarea` for a comment and put all the personal fields inside a `<fieldset>` with a `<legend>`.

**Solució 7.1:**

```html
<form action="#" method="post">
    <fieldset>
        <legend>Sign up</legend>
        <p>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </p>
        <p>
            <label for="mail">Email</label>
            <input type="email" id="mail" name="mail" required>
        </p>
        <p>
            <label for="pass">Password</label>
            <input type="password" id="pass" name="pass" required minlength="8">
        </p>
        <p>
            <label for="birth">Date of birth</label>
            <input type="date" id="birth" name="birth" required>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </fieldset>
</form>
```

**Mini-projecte 1 (en acabar `07-forms.html`) — EN:**

> **Mini-project 1: My band page (HTML only)**
>
> Build a page about a band, a football team, a game or a series you like. No CSS yet.
>
> It must have:
> - a correct skeleton with a `<title>` and `charset`;
> - one `h1` and at least three `h2` sections;
> - at least five paragraphs;
> - one ordered list and one unordered list;
> - at least three images with real `alt` texts, in an `images` folder;
> - a table with at least three rows (for example, the albums and their year);
> - a "join the fan club" form with at least five fields and their labels;
> - links to two other websites, opening in a new tab.
>
> Deliver a zip file with the folder of the project. The page must open with no errors.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> **Exercise 7.4.** Build the sign-up form of the picture. You only write the HTML here; you will style it in lesson 10.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/07-forms/ex2.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/07-forms/ex2.png — reutilitza assets/unitats/programacio/web/css/inputs.png.]`

---

#### 2.5.8 `08-semantic.html` — *Semantic HTML*

**Títols:** `What "semantic" means` · `The main areas of a page` · `div and span` · `Accessibility: why it matters` · `Check your page with the validator` · `Exercises`

**EN — What "semantic" means**

> A **semantic** tag is a tag whose name says what the content *is*, not how it looks.
>
> `<h1>` is semantic: it means "main title". `<div>` is not: it means "a box, for whatever".
>
> Why do we care? Because three groups of readers use that information:
> 1. **People with a screen reader** can jump straight to the navigation or to the main content.
> 2. **Google** understands your page better and shows it better in the search results.
> 3. **You**, in three months, when you open your code again and want to find something.

**EN — The main areas of a page**

```html
<body>
    <header>
        <h1>Marc Ferrer</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About me</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>My projects</h2>
            <article>
                <h3>A weather station</h3>
                <p>I built it with an Arduino and two sensors.</p>
            </article>
            <article>
                <h3>My first website</h3>
                <p>This one!</p>
            </article>
        </section>

        <aside>
            <h2>Links I like</h2>
            <p>Places where I learn things.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2027 Marc Ferrer</p>
    </footer>
</body>
```

| Tag | Meaning |
|---|---|
| `<header>` | the top of the page (or of a section): title, logo, menu |
| `<nav>` | a group of navigation links |
| `<main>` | the main content. **Only one per page** |
| `<section>` | a part of the content with its own heading |
| `<article>` | a piece that makes sense on its own: a post, a product, a news item |
| `<aside>` | secondary content: a sidebar, related links |
| `<footer>` | the bottom: copyright, contact, small print |

> `[IMATGE: assets/unitats/programacio/web/html-css/08-semantic-layout.png — esquema de la maquetació d'una pàgina amb caixes de colors etiquetades header, nav, main, section, article, aside, footer. Molt visual, tipus wireframe.]`

**EN — div and span**

> Sometimes there is no semantic tag for what you need. Then:
>
> - `<div>` is a generic **block** box (it takes a full line).
> - `<span>` is a generic **inline** box (it stays inside a line of text).

```html
<div class="card">
    <h3>Ryzen 5 5600</h3>
    <p>Price: <span class="price">130 &euro;</span></p>
</div>
```

> Use them only when nothing else fits. A page made only of `div` elements is called *div soup*, and it is a bad sign.

**EN — Accessibility: why it matters**

> Some people cannot see the screen, cannot use a mouse, or cannot tell red from green. If your page is built well, they can still use it. Small habits that cost you nothing:
>
> - real `alt` texts;
> - `<label>` connected to every input;
> - headings in order, without jumps;
> - link texts that make sense on their own;
> - the language declared in `<html lang="en">`.

**EN — Check your page with the validator**

> Go to [validator.w3.org](https://validator.w3.org/), choose *Validate by File Upload*, upload your `.html` file and press Check.
>
> - **Errors** (red) must be fixed. They are real mistakes.
> - **Warnings** (yellow) are advice. Read them, but the page still works.

> `[IMATGE: assets/unitats/programacio/web/html-css/08-validator.png — captura del resultat del validador W3C sobre una pàgina amb 2 errors, mostrant el missatge i la línia.]`

**EN — Exercises**

> **Exercise 8.1.** Take your mini-project 1 page and rewrite it with semantic tags: `header`, `nav`, `main`, `section`, `footer`.
>
> **Exercise 8.2.** Validate it. Fix every error until you get the green message.
>
> **Exercise 8.3.** Open a real website (a newspaper, a shop) with DevTools and find its `header`, `nav`, `main` and `footer`. Write down which ones you found and which ones are missing.

**Prova 1 (en acabar `08-semantic.html`, 1 h) — contingut:** esquelet d'HTML de memòria · corregir 8 errors en un codi donat · escriure una llista imbricada · escriure una taula amb `colspan` · escriure un formulari de 4 camps amb `label` i `required` · triar l'etiqueta semàntica correcta en 6 casos.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> **Exercise 8.4.** Here is a complete page. Rewrite it using semantic tags: `header`, `nav`, `main`, `section`, `article`, `footer`. The result must look the same.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/08-semantic/ex1.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/08-semantic/ex1.png — reutilitza assets/unitats/programacio/web/css/smx.png.]`

---

#### 2.5.9 `09-css-basics.html` — *CSS basics*

**Títols:** `What is CSS?` · `Three ways to add CSS` · `The syntax of a rule` · `Selectors` · `Colours` · `When two rules fight` · `Exercises`

**EN — What is CSS?**

> HTML says *what* things are. **CSS** says *how they look*.
>
> CSS means *Cascading Style Sheets*. With CSS you choose colours, fonts, sizes, borders, and where each box goes on the screen.
>
> The same HTML page can look completely different with a different CSS file. The content does not change; only the clothes do.

> `[IMATGE: assets/unitats/programacio/web/html-css/09-before-after.png — dues captures costat a costat de la MATEIXA pàgina: a l'esquerra sense CSS (text negre sobre blanc), a la dreta amb CSS (colors, tipografia, targetes). Títols "Same HTML, no CSS" / "Same HTML, with CSS".]`

**EN — Three ways to add CSS**

> **1. Inline** (inside the tag). Quick, but terrible: you have to repeat it for every element.

```html
<p style="color: red;">This text is red.</p>
```

> **2. Internal** (a `<style>` block in the `<head>`). Fine for a test page.

```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```

> **3. External** (a separate `.css` file). **This is the one we use.** One file styles all the pages of your site, so you change a colour once and the whole site changes.

```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
```

```
<!-- vf-callout type="consell" -->
Create a folder css inside your project and put style.css there. From now on,
every page of every exercise starts with that link in the head.
```

**EN — The syntax of a rule**

```css
h1 {
    color: darkblue;
    font-size: 40px;
}
```

> - `h1` is the **selector**: which elements this rule affects.
> - Inside `{ }` go the **declarations**.
> - Each declaration is a **property** (`color`), a colon, a **value** (`darkblue`), and a semicolon.
>
> The semicolon at the end of each line is easy to forget, and when you forget it the rest of the rule stops working.
>
> Comments in CSS are different from HTML:

```css
/* This is a CSS comment */
```

**EN — Selectors**

```css
/* All the paragraphs */
p {
    color: #333333;
}

/* All the elements with class="warning" */
.warning {
    color: red;
}

/* The single element with id="main-title" */
#main-title {
    font-size: 48px;
}

/* Two selectors at once */
h1, h2 {
    font-family: Arial, sans-serif;
}

/* Only the paragraphs that are inside an article */
article p {
    line-height: 1.6;
}
```

> In the HTML:

```html
<h1 id="main-title">My site</h1>
<p class="warning">Careful with this!</p>
<article>
    <p>This paragraph gets the line-height.</p>
</article>
```

| | HTML | CSS | How many |
|---|---|---|---|
| class | `class="warning"` | `.warning` | many elements can share it |
| id | `id="menu"` | `#menu` | only one element per page |

> **Use classes almost always.** Use `id` only when the element is really unique.
>
> An element can have several classes, separated by spaces: `class="card big"`.

**EN — Colours**

> Four ways to write the same colour:

```css
p {
    color: red;                     /* a name (there are about 140) */
    color: #ff0000;                 /* hexadecimal: red, green, blue */
    color: rgb(255, 0, 0);          /* the same, in numbers 0-255 */
    color: rgba(255, 0, 0, 0.5);    /* the same, half transparent */
}
```

> Hexadecimal is the most common. It is `#RRGGBB`: two characters for red, two for green, two for blue, from `00` to `ff`. `#000000` is black, `#ffffff` is white.
>
> You do not have to guess: VS Code shows a colour picker when you click on a colour, and DevTools has one too.

```
<!-- vf-callout type="atencio" -->
Check your contrast. Light grey text on a white background is impossible to
read for many people. Use the contrast checker in DevTools: it tells you if
your text and background are different enough.
```

**EN — When two rules fight**

> If two rules say something different about the same element, the browser decides like this:
>
> 1. The **more specific** selector wins: `#id` beats `.class`, and `.class` beats `p`.
> 2. If both are equally specific, the **last one in the file** wins.

```css
p { color: blue; }
p { color: green; }     /* this one wins: it comes later */

.note { color: red; }   /* this beats both: a class is more specific */
```

**EN — Exercises**

> **Exercise 9.1.** Create `css/style.css`, link it from your page, and make all the paragraphs dark grey.
>
> **Exercise 9.2.** Give the class `highlight` to two paragraphs, and make that class yellow background and bold text.
>
> **Exercise 9.3.** Give an `id` to your main title and make it a different colour from the other headings.
>
> **Exercise 9.4.** Write a rule that only affects the links that are inside the `nav`.

**Solució 9.4:**

```css
nav a {
    color: white;
    text-decoration: none;
}
```

---

#### 2.5.10 `10-text-colors.html` — *Text, fonts and colours*

**Títols:** `Font family` · `Web fonts (Google Fonts)` · `Size: px, rem and %` · `Weight, style and spacing` · `Alignment and decoration` · `Backgrounds` · `Exercises`

**EN — Font family**

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

> You give a **list**. The browser uses the first font that exists on the user's computer. The last one is always a generic family, as a safety net:
>
> - `sans-serif` — no little feet on the letters (Arial, Verdana). Best for screens.
> - `serif` — with little feet (Times). More classic.
> - `monospace` — all letters take the same width. For code.

**EN — Web fonts (Google Fonts)**

> If you want a font the user may not have, you can load it from the internet.
>
> Go to [fonts.google.com](https://fonts.google.com), choose a font, copy the `<link>` and paste it in your `<head>` **before** your own CSS file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
```

```css
body {
    font-family: 'Roboto', Arial, sans-serif;
}
```

> Do not load six fonts. Two is plenty: one for headings, one for text.

> `[IMATGE: assets/unitats/programacio/web/html-css/10-google-fonts.png — captura de fonts.google.com amb una font seleccionada i el panell lateral on es veu el codi <link> que cal copiar.]`

**EN — Size: px, rem and %**

```css
h1 {
    font-size: 32px;    /* pixels: an exact size */
}

p {
    font-size: 1rem;    /* rem: relative to the browser's base size (16px) */
}

small {
    font-size: 0.875rem;
}
```

> `rem` is better than `px` for text, because if the user makes the text bigger in the browser settings, your page follows. `1rem` is normally 16px, `2rem` is 32px.

**EN — Weight, style and spacing**

```css
h2 {
    font-weight: bold;          /* or a number: 400 normal, 700 bold */
}

.quote {
    font-style: italic;
}

p {
    line-height: 1.6;           /* space between lines. 1.5-1.7 is comfortable */
    letter-spacing: 0.5px;      /* space between letters */
}
```

> `line-height: 1.6` means "1.6 times the font size". Text with no line-height is hard to read: it looks squashed.

**EN — Alignment and decoration**

```css
h1 {
    text-align: center;         /* left, right, center, justify */
    text-transform: uppercase;  /* uppercase, lowercase, capitalize */
}

a {
    text-decoration: none;      /* removes the underline of links */
}

a:hover {
    text-decoration: underline; /* and puts it back when the mouse is over */
}
```

> `:hover` is a **pseudo-class**: a rule that only applies in a certain situation. `a:hover` means "a link, while the mouse is on top of it".

**EN — Backgrounds**

```css
body {
    background-color: #f5f5f5;
}

header {
    background-image: url("../images/hero.jpg");
    background-size: cover;         /* fill the box, cut what is left over */
    background-position: center;
    background-repeat: no-repeat;
}
```

```
<!-- vf-callout type="atencio" -->
The path inside url() is relative to the *CSS file*, not to the HTML file.
If your CSS is in css/style.css and your image in images/hero.jpg, you need
url("../images/hero.jpg").
```

**EN — Exercises**

> **Exercise 10.1.** Choose a Google Font for your headings and a different one for the body text. Apply them.
>
> **Exercise 10.2.** Set the body font size to `1rem` and `line-height: 1.6`. Compare before and after.
>
> **Exercise 10.3.** Make the links of your `nav` white, with no underline, and underlined on hover.
>
> **Exercise 10.4.** Put a background image in your `header`, with `cover`, and white text on top. Make sure you can still read the text.

**Solució 10.4:**

```css
header {
    background-image: url("../images/hero.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 60px 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}
```

> The `text-shadow` is the trick to keep white text readable on any photo.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> **Exercise 10.5. Personal page.** Reproduce the page in the picture: fonts, sizes, colours and text alignment. The HTML is given.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/10-text-colors/ex1.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/10-text-colors/ex1.png — reutilitza assets/unitats/programacio/web/css/personal.png.]`
>
> **Exercise 10.6. Sign-up form.** Style the form you built in lesson 7: fields, labels, button, focus state.
>
> `[IMATGE: assets/unitats/programacio/web/html-css/10-text-colors/ex2.png — reutilitza assets/unitats/programacio/web/css/inputs.png.]`

---

#### 2.5.11 `11-box-model.html` — *The box model*

**Títols:** `Everything is a box` · `Padding, border, margin` · `Width and height` · `box-sizing: the fix` · `Block and inline` · `Rounded corners and shadows` · `Centring a box` · `Exercises`

**EN — Everything is a box**

> In CSS, every element is a rectangle. Even a word inside a sentence.
>
> Every box has four layers, from the inside out:
>
> 1. **content** — the text or the image;
> 2. **padding** — space *inside* the box, between the content and the border;
> 3. **border** — the line around the box;
> 4. **margin** — space *outside* the box, between this box and its neighbours.

> `[IMATGE: assets/unitats/programacio/web/html-css/11-box-model.png — el diagrama clàssic del box model: quatre rectangles concèntrics amb colors distints etiquetats content, padding, border, margin. Es pot copiar l'estil del que mostra DevTools.]`

```
<!-- vf-callout type="consell" -->
Open DevTools, select any element and scroll down in the Styles panel. You
will see this same diagram with the real numbers of that element. It is the
fastest way to understand why a box is where it is.
```

**EN — Padding, border, margin**

```css
.card {
    padding: 20px;                      /* the same on the four sides */
    padding: 10px 20px;                 /* top-bottom  left-right */
    padding: 10px 20px 30px 40px;       /* top right bottom left (clockwise) */

    border: 2px solid #333333;          /* width  style  colour */
    border-bottom: 4px solid red;       /* only one side */

    margin: 20px;
    margin-bottom: 40px;
}
```

> Border styles: `solid`, `dashed`, `dotted`, `none`.

**EN — Width and height**

```css
.box {
    width: 300px;
    height: 200px;
    max-width: 100%;     /* never wider than its container */
}
```

> `max-width: 100%` is a small rule that saves you a lot of problems on phones. Use it on images too:

```css
img {
    max-width: 100%;
    height: auto;
}
```

**EN — box-sizing: the fix**

> By default, `width: 300px` is the width of the **content only**. If you add `20px` of padding and a `2px` border on each side, the box really takes `300 + 40 + 4 = 344px`. That is confusing.
>
> Put this at the top of every CSS file you write, forever:

```css
* {
    box-sizing: border-box;
}
```

> `*` means "all the elements". With `border-box`, `width: 300px` means the box is really 300px, padding and border included. Much easier.

**EN — Block and inline**

```css
.menu-item {
    display: block;         /* takes the full line */
    display: inline;        /* stays inside the text line */
    display: inline-block;  /* stays in the line, but accepts width and height */
    display: none;          /* disappears completely */
}
```

> `<div>`, `<p>`, `<h1>` are block by default. `<span>`, `<a>`, `<strong>` are inline.
>
> An inline element **ignores** `width`, `height` and vertical margins. If you need them, use `inline-block`.

**EN — Rounded corners and shadows**

```css
.card {
    border-radius: 12px;                            /* rounded corners */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);      /* x  y  blur  colour */
}

.avatar {
    border-radius: 50%;     /* a perfect circle, if the box is square */
}
```

**EN — Centring a box**

```css
.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;     /* 0 top and bottom, auto left and right = centred */
}
```

> `margin: 0 auto` is the classic way to centre a block box. It only works if the box has a width.

**EN — Exercises**

> **Exercise 11.1.** Create a `div` with the class `card`, with 20px padding, a 1px grey border, 20px margin and a width of 300px. Put a heading and a paragraph inside.
>
> **Exercise 11.2.** Add `* { box-sizing: border-box; }` to your CSS and measure the card in DevTools before and after. Write down the two widths.
>
> **Exercise 11.3.** Give the card rounded corners and a soft shadow. Make the shadow bigger on `:hover`.
>
> **Exercise 11.4.** Turn the links of your nav into buttons: `inline-block`, padding, background colour, rounded corners, no underline.
>
> **Exercise 11.5.** Centre the whole content of your page in a container of maximum 1000px.

**Solució 11.3:**

```css
.card {
    width: 300px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}
```

> `transition` makes the change smooth instead of instant. `transform: translateY(-3px)` lifts the card 3 pixels.

**Mini-projecte 2 (en acabar `11-box-model.html`) — EN:**

> **Mini-project 2: Styled band page**
>
> Take your page from mini-project 1 and give it a design with an **external** CSS file.
>
> It must have:
> - `css/style.css` linked from the HTML, and no `style=` attributes in the HTML;
> - `* { box-sizing: border-box; }`;
> - a Google Font;
> - a colour scheme of 3 or 4 colours, used consistently;
> - a centred container with a maximum width;
> - the nav links styled as buttons, with a `:hover` effect;
> - at least one block with `border-radius` and `box-shadow`;
> - readable text: `line-height` of at least 1.5 and good contrast.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> **Exercise 11.4. Film card.** Reproduce the card in the picture. Watch the padding, the border and the shadow.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/11-box-model/ex1.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/11-box-model/ex1.png — reutilitza assets/unitats/programacio/web/css/pelicula.png.]`
>
> **Exercise 11.5. Birthday invitation.** Reproduce the invitation in the picture.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/11-box-model/ex2.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/11-box-model/ex2.png — reutilitza assets/unitats/programacio/web/css/aniversari.png.]`

---

#### 2.5.12 `12-flexbox.html` — *Flexbox*

**Títols:** `The problem flexbox solves` · `The container and the items` · `Direction` · `justify-content` · `align-items` · `gap` · `flex-wrap` · `Making a nav bar` · `Making a row of cards` · `Exercises`

**EN — The problem flexbox solves**

> Until now, every block element takes a full line. But real pages have things **side by side**: a menu across the top, three cards in a row, a logo on the left and buttons on the right.
>
> **Flexbox** puts elements in a row (or in a column) and shares the space between them. It is one line of CSS to start.

**EN — The container and the items**

> You always work with **two levels**: the *container* (the parent) and the *items* (its direct children).

```html
<div class="row">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>
```

```css
.row {
    display: flex;
}
```

> That is it. The three boxes are now in a row. **You put `display: flex` on the parent, never on the children.**

> `[IMATGE: assets/unitats/programacio/web/html-css/12-flex-basic.png — dues captures: a dalt els tres divs un davall de l'altre (sense flex), a baix els mateixos tres en fila (amb display:flex). Amb el codi CSS al costat.]`

**EN — Direction**

```css
.row {
    display: flex;
    flex-direction: row;        /* the default: left to right */
    flex-direction: column;     /* top to bottom */
}
```

**EN — justify-content** (space along the row)

```css
.row {
    display: flex;
    justify-content: flex-start;    /* all at the start (default) */
    justify-content: center;        /* all in the centre */
    justify-content: flex-end;      /* all at the end */
    justify-content: space-between; /* first at the start, last at the end, equal gaps */
    justify-content: space-around;  /* equal space around each item */
}
```

> `[IMATGE: assets/unitats/programacio/web/html-css/12-justify-content.png — cinc files d'exemple, una per cada valor, amb tres caixetes de colors i el nom del valor a l'esquerra.]`

**EN — align-items** (space across the row)

```css
.row {
    display: flex;
    height: 200px;
    align-items: stretch;       /* items fill the height (default) */
    align-items: center;        /* vertically centred */
    align-items: flex-start;    /* at the top */
    align-items: flex-end;      /* at the bottom */
}
```

```
<!-- vf-callout type="recorda" -->
justify-content works along the direction of the row. align-items works
across it. If you change flex-direction to column, the two swap meaning.
```

**EN — gap**

```css
.row {
    display: flex;
    gap: 20px;          /* space between items */
}
```

> `gap` is the modern way to separate flex items. Before, we used margins and it was painful.

**EN — flex-wrap**

```css
.row {
    display: flex;
    flex-wrap: wrap;    /* if there is no room, go to the next line */
}
```

> Without `wrap`, five cards in a narrow screen get squashed to nothing. With `wrap`, they jump to a second line. Almost always you want `wrap`.

**EN — Making a nav bar**

```html
<header class="site-header">
    <div class="logo">Marc Ferrer</div>
    <nav>
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

```css
.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #2b2b40;
}

.logo {
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
}

.menu {
    display: flex;
    gap: 25px;
    list-style: none;   /* removes the bullet points */
    margin: 0;
    padding: 0;
}

.menu a {
    color: white;
    text-decoration: none;
}

.menu a:hover {
    color: #ffcc00;
}
```

> `[IMATGE: assets/unitats/programacio/web/html-css/12-navbar.png — captura de la barra de navegació resultant: logo a l'esquerra, tres enllaços a la dreta, fons fosc.]`

**EN — Making a row of cards**

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    flex: 1 1 280px;    /* grow, shrink, minimum width 280px */
    max-width: 350px;
}
```

> `flex: 1 1 280px` means: this card can grow to fill space, can shrink if needed, and its base width is 280px. With `wrap`, you get a grid that adapts by itself.

**EN — Exercises**

> **Exercise 12.1.** Put three coloured boxes in a row, centred, with a 20px gap.
>
> **Exercise 12.2.** Repeat with `space-between`, then with `column`. Write down the difference.
>
> **Exercise 12.3.** Centre a single box in the middle of a 400px tall container, both horizontally and vertically.
>
> **Exercise 12.4.** Build the nav bar of the example with your own colours.
>
> **Exercise 12.5.** Build a row of 6 cards (image + title + text) that wraps to a second line when the window is narrow.

**Solució 12.3:**

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: #eeeeee;
}
```

> Three lines to centre something in both directions. Before flexbox this was famously hard.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> Les captures explicatives d'esta lliçó **ja existixen**: `display_defecte.png`, `display_flex_wrap.png`, `display_flex_wrap_center.png`, `display_flex_wrap_space_between.png`, `display_flex_wrap_space_around.png` i `display_align_center.png`, totes en `assets/unitats/programacio/web/css/`. Copia-les a `assets/unitats/programacio/web/html-css/12-flexbox/`.
>
> **Exercise 12.4. Navigation menu.** Reproduce the horizontal menu in the picture, with the hover effect.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/12-flexbox/ex1.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/12-flexbox/ex1.png — reutilitza assets/unitats/programacio/web/css/menu.png.]`
>
> **Exercise 12.5. Countries.** Reproduce the grid of country cards. They must wrap when the window gets narrow.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/12-flexbox/ex2.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/12-flexbox/ex2.png — reutilitza assets/unitats/programacio/web/css/paisos.png.]`
>
> **Exercise 12.6. Band page.** Reproduce the page of the music group.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/12-flexbox/ex3.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/12-flexbox/ex3.png — reutilitza assets/unitats/programacio/web/css/grup_musica.png.]`

---

#### 2.5.13 `13-grid.html` — *CSS Grid*

**Títols:** `Grid or flexbox?` · `Columns and rows` · `repeat and fr` · `gap` · `Making an image gallery` · `A page layout with grid` · `Exercises`

**EN — Grid or flexbox?**

> - **Flexbox** works in **one direction**: a row, or a column. Perfect for a menu, a row of buttons, a card.
> - **Grid** works in **two directions** at once: columns *and* rows. Perfect for a gallery or the layout of a whole page.
>
> You can use both in the same page. In fact you almost always do.

**EN — Columns and rows**

```css
.gallery {
    display: grid;
    grid-template-columns: 200px 200px 200px;   /* three columns of 200px */
}
```

**EN — repeat and fr**

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);      /* three equal columns */
}
```

> - `repeat(3, ...)` saves you writing the same thing three times.
> - `fr` means *fraction of the free space*. `1fr 1fr 1fr` = three equal columns. `2fr 1fr` = the first column is twice as wide as the second.
>
> `fr` is better than `%` because it already takes the `gap` into account.

**EN — gap**

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;                  /* same gap in both directions */
    gap: 15px 30px;             /* rows  columns */
}
```

**EN — Making an image gallery**

```html
<div class="gallery">
    <img src="images/p1.jpg" alt="A red car">
    <img src="images/p2.jpg" alt="A blue bike">
    <img src="images/p3.jpg" alt="A green bus">
    <img src="images/p4.jpg" alt="A yellow taxi">
    <img src="images/p5.jpg" alt="A white van">
    <img src="images/p6.jpg" alt="A black train">
</div>
```

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
}

.gallery img {
    width: 100%;
    height: 180px;
    object-fit: cover;      /* fills the box without deforming the photo */
    border-radius: 8px;
}
```

> That one line, `repeat(auto-fit, minmax(220px, 1fr))`, is magic: "make as many columns as fit, each one at least 220px wide". The gallery reorganises itself on any screen with **no media queries at all**.

> `[IMATGE: assets/unitats/programacio/web/html-css/13-gallery.png — captura de la galeria: dues versions costat a costat, una en finestra ampla (4 columnes) i una en finestra estreta (2 columnes), per a que es veja l'auto-fit.]`

**EN — A page layout with grid**

```css
.layout {
    display: grid;
    grid-template-columns: 1fr 300px;   /* main content + sidebar */
    gap: 30px;
}
```

```html
<div class="layout">
    <main>...</main>
    <aside>...</aside>
</div>
```

**EN — Exercises**

> **Exercise 13.1.** Build a grid of 9 coloured squares, 3 columns, with a 10px gap.
>
> **Exercise 13.2.** Turn it into `repeat(auto-fit, minmax(150px, 1fr))` and resize the window. Describe what happens.
>
> **Exercise 13.3.** Build an image gallery of 8 photos, all the same height, with `object-fit: cover`.
>
> **Exercise 13.4.** Build a two-column layout: content on the left, sidebar of 280px on the right.

**Prova 2 (en acabar `13-grid.html`, 1 h):** escriure una regla per a un selector donat · box model (calcular la mida real d'una caixa) · centrar una caixa amb flexbox · maquetar una barra de navegació · galeria amb grid · trobar 5 errors en un CSS donat.

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> Captures ja existents per a esta lliçó: `display_grid_1.png` i `display_grid_2.png` en `assets/unitats/programacio/web/css/`.
>
> **Exercise 13.3. Chessboard.** Draw an 8 × 8 chessboard with CSS Grid. All 64 squares are in the HTML; you write the CSS.
>
> Download the starter file [here|download](unitats/programacio/web/html-css/exercises/13-grid/ex1.html)
>
> `[IMATGE: assets/unitats/programacio/web/html-css/13-grid/ex1.png — reutilitza assets/unitats/programacio/web/css/escacs.png.]`

---

#### 2.5.14 `14-responsive.html` — *Responsive design*

**Títols:** `Why responsive?` · `The viewport tag` · `Flexible images` · `Media queries` · `Mobile first` · `Testing on a phone` · `Exercises`

**EN — Why responsive?**

> More than half of the people who visit a website do it from a phone. A page designed only for a big screen is unusable there: tiny text, horizontal scrolling, buttons you cannot hit with a finger.
>
> **Responsive design** means the same page adapts to the size of the screen.

> `[IMATGE: assets/unitats/programacio/web/html-css/14-responsive-compare.png — la mateixa pàgina en tres amplàries (mòbil 375px, tauleta 768px, escriptori 1200px) mostrant com canvia la disposició: una columna, dues columnes, tres columnes.]`

**EN — The viewport tag**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> This line goes in the `<head>` of every page. Without it, a phone pretends its screen is 980px wide and shows your page zoomed out and tiny. **This is the number one cause of "my page looks bad on mobile".**

**EN — Flexible images**

```css
img {
    max-width: 100%;
    height: auto;
}
```

> Without this, a 1200px image on a 375px screen sticks out and creates horizontal scrolling.

**EN — Media queries**

> A **media query** is a block of CSS that only applies when a condition is true.

```css
/* Normal rules: they apply always */
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Only when the screen is 768px wide or less */
@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr;
    }

    .site-header {
        flex-direction: column;
        gap: 10px;
    }
}
```

> The usual breakpoints:
>
> | Breakpoint | Devices |
> |---|---|
> | up to 576px | phones |
> | 577–768px | big phones, small tablets |
> | 769–992px | tablets |
> | 993px and up | laptops and desktops |
>
> You do not need all of them. Two well-chosen breakpoints are usually enough. Choose them where **your** design breaks, not because of a table.

**EN — Mobile first**

> There are two ways to write your CSS:
>
> - **Desktop first**: write the big design, then use `max-width` queries to fix the small screens.
> - **Mobile first**: write the simple, one-column design, then use `min-width` queries to add columns on bigger screens.
>
> Mobile first usually gives shorter and cleaner CSS:

```css
/* Base: phone. One column. */
.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

/* From 768px up: two columns */
@media (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* From 1024px up: three columns */
@media (min-width: 1024px) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

**EN — Testing on a phone**

> Open DevTools (F12) and press the little phone icon (or `Ctrl+Shift+M`). You get a fake phone screen and you can choose the model and the width.

> `[IMATGE: assets/unitats/programacio/web/html-css/14-devtools-mobile.png — captura de DevTools en mode dispositiu, amb el selector de model desplegat i la pàgina renderitzada a 375px.]`

```
<!-- vf-callout type="consell" -->
The fastest test of all: grab the corner of your browser window and make it
narrow, slowly. Watch where your design breaks. That is where your
breakpoint goes.
```

**EN — Exercises**

> **Exercise 14.1.** Add the viewport tag and `img { max-width: 100%; }` to all your pages. Compare the result on a narrow window before and after.
>
> **Exercise 14.2.** Make your row of cards show 3 per line on a desktop, 2 on a tablet and 1 on a phone. Use mobile first.
>
> **Exercise 14.3.** Make your nav bar become a vertical column below 600px.
>
> **Exercise 14.4.** Hide the sidebar (`aside`) on screens under 768px using `display: none`. Then think: is it a good idea to hide content on mobile? Write two lines with your opinion.

**Solució 14.3:**

```css
@media (max-width: 600px) {
    .site-header {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }

    .menu {
        flex-direction: column;
        gap: 8px;
    }
}
```

**Exercicis reaprofitats de la unitat actual** (§2.4.4)

> La pàgina `unitats/programacio/web/css/media-queries.html` ja explica les media queries amb tres captures de la mateixa pàgina en tres amplàries (`mq1-1.jpeg`, `mq1-2.jpeg`, `mq1-3.jpeg`), i `media-queries-sample.html` és l'exemple viu. Es porten sense canvis (traduint el text).
>
> **Exercise 14.4.** Take the band page of exercise 12.6 and make it work on a phone: one column under 600 px, two between 600 and 900, three above.

---

#### 2.5.15 `15-variables.html` — *CSS variables and good practice*

**Títols:** `Repeating yourself is a bug` · `CSS variables` · `A small design system` · `Organising your CSS file` · `Naming things` · `Transitions` · `Checklist before you deliver` · `Exercises`

**EN — Repeating yourself is a bug**

> Imagine your main colour `#6d5fb3` appears 30 times in your CSS. Your client says "make it a bit darker". Now you have to find and change 30 lines, and you will miss two.

**EN — CSS variables**

> A **variable** is a name that holds a value. You write the value once, and you use the name everywhere.

```css
:root {
    --main-color: #6d5fb3;
    --main-color-dark: #4f4488;
    --text-color: #2b2b2b;
    --light-grey: #f5f5f5;
    --radius: 12px;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.button {
    background-color: var(--main-color);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.button:hover {
    background-color: var(--main-color-dark);
}
```

> - `:root` means "the whole document". Put your variables there, at the top of the file.
> - A variable name always starts with two dashes: `--main-color`.
> - To use it: `var(--main-color)`.
>
> Now, changing the whole site is changing **one line**.

```
<!-- vf-callout type="recorda" -->
This is exactly how this website you are reading works. Open
styles/general.css and you will see the same :root block with the colours
of the site.
```

**EN — A small design system**

> Define, at the start of your project:
>
> - **3 to 5 colours**: one main, one dark version, one light background, one text colour, maybe one accent.
> - **2 fonts** maximum.
> - **One radius** and **one shadow**, used everywhere.
> - **A spacing scale**: `8px`, `16px`, `24px`, `32px`. Do not invent random numbers like `13px` or `27px`.
>
> A page looks professional when the same few decisions are repeated, not when it has many different ones.

**EN — Organising your CSS file**

```css
/* ============ 1. Variables ============ */
:root { ... }

/* ============ 2. Reset and base ============ */
* { box-sizing: border-box; }
body { ... }

/* ============ 3. Layout ============ */
.container { ... }
.site-header { ... }
.site-footer { ... }

/* ============ 4. Components ============ */
.button { ... }
.card { ... }

/* ============ 5. Media queries ============ */
@media (min-width: 768px) { ... }
```

**EN — Naming things**

> Class names in English, lowercase, with dashes: `main-menu`, `product-card`, `price-tag`.
>
> Name things by **what they are**, not by how they look. `.red-text` is a bad name: the day you change it to blue, the name lies. `.error-message` is a good name.

**EN — Transitions**

```css
.card {
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}
```

> `transition` on the normal state, the changes in `:hover`. Keep it short: `0.2s` to `0.4s`. Longer feels slow.

**EN — Checklist before you deliver**

> - [ ] The page passes the W3C validator with no errors.
> - [ ] Every image has a real `alt`.
> - [ ] Every input has its `label`.
> - [ ] There are no `style=` attributes left in the HTML.
> - [ ] All the colours come from variables.
> - [ ] It works on a 375px wide screen with no horizontal scrolling.
> - [ ] All the links work (test every one).
> - [ ] File and folder names: lowercase, no spaces, no accents.

**EN — Exercises**

> **Exercise 15.1.** Take your CSS file and move every colour to a `:root` block of variables. Then change your main colour and check that the whole page follows.
>
> **Exercise 15.2.** Add `--radius` and `--shadow` variables and use them in at least three places.
>
> **Exercise 15.3.** Add the section comments to your CSS file and reorder your rules.
>
> **Exercise 15.4.** Go through the checklist and fix everything that fails.

---

#### 2.5.16 `16-project.html` — *Final project: my personal website*

**EN — The brief**

> **My personal website**
>
> You are going to build a small website about yourself. It is not a joke project: this is the kind of page you can send with a job application, or use as your portfolio when you finish the cycle. Write things you would really show.
>
> If you prefer not to talk about yourself, you can do it about an invented character, a band, a shop or a small business. Ask your teacher first.

**EN — What it must have**

> **Four pages, at least:**
>
> | File | Content |
> |---|---|
> | `index.html` | Home: who you are, a photo, a short introduction |
> | `about.html` | About: your studies, your skills, your interests. A table or a list |
> | `projects.html` | Projects: 3 or more things you have done, with images |
> | `contact.html` | Contact: a form and your links |
>
> **HTML requirements**
> - Correct skeleton in every page, with a real `<title>` for each one.
> - Semantic tags: `header`, `nav`, `main`, `section`, `footer`.
> - The same navigation menu in the four pages, and every link working.
> - At least 5 images, all with real `alt` texts, in an `images` folder.
> - At least one table and one ordered or unordered list.
> - A contact form with at least 6 fields, all with `label`, and `required` where it makes sense.
> - Zero errors in the W3C validator.
>
> **CSS requirements**
> - One single external CSS file for the whole site.
> - No `style=` attributes in the HTML.
> - A `:root` block with at least 5 variables.
> - A Google Font.
> - Flexbox for the navigation bar.
> - Grid or flexbox for the projects page.
> - At least one `:hover` effect with a `transition`.
> - At least one media query. The site must work at 375px wide.
>
> **Delivery**
> - A zip file called `surname-name-project.zip` with the whole folder.
> - A `README.txt` inside with: your name, what your site is about, where you got the images, and one paragraph about what was hardest.
> - A presentation of 3 minutes in class: show your site and explain one thing you are proud of and one thing you would improve.

**EN — Milestones**

> | Stage | What must be ready |
> |---|---|
> | Stage 1 | The folder structure, the four HTML pages with real content and the menu working. No CSS yet. |
> | Stage 2 | The CSS file with variables, fonts, colours, the nav bar and the layout of the pages. |
> | Stage 3 | Responsive, checklist, validator, README, zip and presentation. |

> `[IMATGE: assets/unitats/programacio/web/html-css/16-project-wireframe.png — wireframe de les 4 pàgines del projecte (rectangles grisos amb etiquetes), perquè l'alumnat veja l'estructura esperada abans de començar.]`

> `[IMATGE: assets/unitats/programacio/web/html-css/16-project-example.png — captura d'un exemple acabat del projecte (pot ser un fet pel professor), per a fixar el nivell esperat.]`

```
<!-- vf-callout type="atencio" -->
Do not use images you found on Google without checking. Use your own photos,
or free image sites like Unsplash, Pexels or Pixabay. Write where each image
comes from in your README.
```

**Material reaprofitat per al projecte** (§2.4.4)

> El projecte de 4 pàgines ja existix a `unitats/programacio/web/css/projecte.html`, amb les quatre captures de referència: `projecte_login.png`, `projecte_signup.png`, `projecte_main1.png` i `projecte_main2.png`. És exactament el mateix encàrrec que descriu esta lliçó: es tradueix i es porta tal qual.
>
> Com a **alternativa** per a qui vulga una cosa més visual, hi ha el joc de preguntes: `unitats/programacio/web/css/joc_preguntes.html` amb `joc1.png` … `joc4.png` i el diagrama de flux `joc_flux.png`. Ací només es maqueta; la lògica la faran (o no) en el mòdul de JavaScript.

### 2.6 Rúbrica — Unitat A

**Pes de la nota final:**

| Element | Pes |
|---|---|
| Exercicis de classe (entregats i corregits) | 20 % |
| Mini-projecte 1 (HTML) | 10 % |
| Mini-projecte 2 (CSS) | 10 % |
| Prova 1 (HTML) | 15 % |
| Prova 2 (CSS) | 15 % |
| Projecte final | 25 % |
| Presentació i actitud | 5 % |

**Rúbrica del projecte final (25 %), sobre 10 punts:**

| Criteri | 0–1 (insuficient) | 2 (correcte) | 3 (molt bé) | Punts |
|---|---|---|---|---|
| Estructura HTML i validador | Falten pàgines o hi ha errors greus | 4 pàgines, pocs errors | 4 pàgines, 0 errors, semàntica correcta | /3 |
| Contingut (text, imatges, taula, llista, formulari) | Incomplet o de farciment | Tot present i coherent | Tot present, ben escrit i amb `alt` reals | /2 |
| CSS: variables, tipografia, color | Estils inline o inexistents | Fitxer extern amb estils bàsics | Variables, escala d'espais, disseny coherent | /2 |
| Maquetació (flexbox/grid) i responsive | No s'adapta | Funciona en mòbil amb alguna errada | Impecable a 375, 768 i 1200 px | /2 |
| Entrega, README i presentació | Fora de termini o incompleta | Correcta | Presentació clara i autocrítica raonada | /1 |
| | | | **Total** | **/10** |

**Nota:** si el lloc no obri o els enllaços del menú no funcionen, el projecte es torna per a corregir abans de puntuar.

---

## 3. UNITAT B — «Programming with JavaScript»

> **Revisió 2026-09-07 (v2).** La primera versió d'esta unitat era **tota per consola**: 136 `console.log` en les lliçons 01–08 i cap línia de DOM fins la lliçó 09. Això contradiu com el propietari imparteix JavaScript ara mateix a `unitats/programacio/web/js/`, on el DOM entra en la **lliçó 04** i a partir d'ahí tots els exercicis es veuen en pantalla. Esta versió adopta eixe enfocament. Vore §3.0.

### 3.0 Enfocament visual — què canvia respecte de la v1

**Problema de la v1**

| Lliçó (v1) | `console.log` | Línies de DOM |
|---|---|---|
| 01–08 | 136 | **0** |
| 09 (DOM) | 2 | 29 |

Huit lliçons seguides sense que l'alumne veja res en pantalla. Per a un grup de CFGM de primer, sense HTML previ i amb l'anglés com a idioma del material, això és massa desert.

**Com ho fa la unitat actual `js/` (valencià)**

- Lliçons **01–03**: eixida a la pàgina amb `document.write()` i entrada amb `prompt()`. Zero consola.
- Lliçó **04 = DOM**, just després d'operadors: `getElementById`, `textContent`, `.style`, `.value` i un primer `addEventListener("click", ...)`.
- Lliçons **05–09**: el DOM ja no desapareix. Totes tenen `textContent`, `style.` o `.value` en els exercicis.
- Cada exercici porta **fitxer de partida descarregable** + **captura del resultat esperat**. N'hi ha del tipus «arregla este codi trencat», que funcionen molt bé.

**Regles de la v2**

1. **Cap lliçó acaba sense que l'alumne veja alguna cosa en pantalla.** La consola és l'eina on ixen els *errors* i on es depura, no el canal d'eixida del programa.
2. **Lliçons 01–03**: `document.write()` + `prompt()`. Es tria perquè no requereix explicar res: escriu on està l'`<script>`. Té una trampa que cal avisar (vore avall).
3. **A partir de la 04**: `document.write()` no es torna a usar mai. Tot va per DOM.
4. **Cada lliçó de la 04 en avant** té almenys **dos exercicis visuals** amb HTML donat i captura del resultat.
5. **`console.log` es manté**, però amb el seu paper real: depurar. S'ensenya en la lliçó 01 dins de «When something goes wrong».

```
<!-- vf-callout type="atencio" -->
document.write only works while the browser is still reading the page. If you
call it later - inside a function that runs when you click a button - it
erases the whole page and starts a new empty one. That is why we stop using
it in lesson 4 and never come back to it.
```

**Cost del canvi:** una lliçó més (16 pàgines en compte de 15), perquè «create and remove elements» ix de la lliçó de DOM i es fa lliçó pròpia després d'events, quan ja té sentit crear elements en resposta a un clic.

---

### 3.1 Fitxa

| Camp | Valor |
|---|---|
| Títol (alumnat) | **Programming with JavaScript** |
| Nivell | CFGM SMX, 1r curs. Nivell inicial, **sense HTML previ** |
| Idioma del material | Anglés senzill |
| Carpeta al repo | `unitats/programacio/web/javascript/` |
| Carpeta d'exercicis | `unitats/programacio/web/javascript/exercises/` |
| Carpeta d'imatges | `assets/unitats/programacio/web/javascript/` |
| Projecte final | Aplicació interactiva: quiz o llista de tasques |

> **Nota:** ja existeixen `unitats/programacio/web/js/` i `unitats/programacio/web/js_html/` (en valencià). **No es toquen.** La unitat nova va a `javascript/`. El que sí que es fa és **reaprofitar** els seus exercicis i captures: vore §3.4.3.

> **Independència del mòdul d'HTML:** este grup **no** ha fet HTML. La lliçó 01 conté una plantilla d'HTML mínima que es dóna feta i s'explica en 20 minuts. A partir d'ahí, l'alumnat només ha de *canviar* etiquetes, mai dissenyar-les. Els exercicis que necessiten HTML porten sempre l'HTML donat i descarregable.

### 3.2 Objectius d'aprenentatge — **EN**

> **What you will learn**
>
> - What a program is, and how a computer follows your instructions one by one.
> - How to store data in variables, and what kinds of data exist.
> - How to change a web page from JavaScript: text, colours, styles, new elements.
> - How to make decisions in your code with `if`, and how to repeat work with loops.
> - How to write functions, so you never write the same code twice.
> - How to store many values together in arrays and objects, and show them on the screen.
> - How to react when the user clicks, types or chooses something.
> - How to read a form, check the data and show a clear error message.
> - How to save data in the browser so it is still there tomorrow.
> - How to build a complete small application and deliver it.

### 3.3 Resultats d'aprenentatge i criteris — **EN**

> **How I know I have learned it**
>
> **RA1 — I understand the basics of programming.**
> - I declare variables with `let` and `const` and I choose good names.
> - I know the difference between a number, a string and a boolean.
> - I use arithmetic, comparison and logical operators correctly.
> - I can read a piece of code and say what it will show, without running it.
>
> **RA2 — I can change a web page from my code.**
> - I find an element in the page and change its text, its value and its style.
> - I read what the user typed in an input.
> - I run my code when the user clicks a button.
>
> **RA3 — I can control the flow of a program.**
> - I write `if`, `else if` and `else` for a real problem.
> - I choose the right loop (`while`, `for`, `for...of`) for each case.
> - My loops always end. I can explain why.
>
> **RA4 — I can organise code and data.**
> - I write functions with parameters and a `return` value.
> - I use arrays: add, remove, search, count, go through them.
> - I use objects with properties, and arrays of objects.
> - I draw a list or a set of cards in the page from an array.
>
> **RA5 — I can build an interactive application.**
> - I create and remove elements from JavaScript.
> - I react to clicks and to typing with `addEventListener`.
> - I read a form, validate it and show useful messages.
> - I save and load data with `localStorage`.
>
> **RA6 — I can finish and deliver a project.**
> - My code is indented, with clear names and useful comments.
> - I test my application and I fix the errors I find.
> - I deliver on time and I explain my work in 3 minutes.

### 3.4 Estructura de pàgines al repo

Totes a `unitats/programacio/web/javascript/`. `<base href="../../../../">` en totes.

| Fitxer | `<title>` | `vf-title level="1"` | Eixida |
|---|---|---|---|
| `index.html` | `Programming with JavaScript` | Programming with JavaScript | — |
| `01-first-program.html` | `Your first program` | Your first program | `document.write` |
| `02-variables.html` | `Variables and data types` | Variables and data types | `document.write` |
| `03-operators.html` | `Operators` | Operators | `document.write` |
| `04-dom.html` | `The DOM: changing the page` | The DOM: changing the page | **DOM** |
| `05-conditions.html` | `Making decisions` | Making decisions | DOM |
| `06-loops.html` | `Loops` | Loops | DOM |
| `07-functions.html` | `Functions` | Functions | DOM |
| `08-arrays.html` | `Arrays` | Arrays | DOM |
| `09-objects.html` | `Objects` | Objects | DOM |
| `10-events.html` | `Events` | Events | DOM |
| `11-elements.html` | `Creating and removing elements` | Creating and removing elements | DOM |
| `12-forms.html` | `Forms and validation` | Forms and validation | DOM |
| `13-localstorage.html` | `Saving data with localStorage` | Saving data with localStorage | DOM |
| `14-project.html` | `Final project` | Final project | — |
| `15-next.html` | `What comes next` | What comes next | — |

**16 pàgines** (15 + índex).

#### 3.4.1 Blocs de l'`index.html`

Mateixa estructura que l'índex de la unitat A (§2.4.2), amb **quatre** blocs de targetes, que reprodueixen la divisió en UF que el propietari ja fa servir a `unitats/programacio/web/js/index.html`:

| Bloc | Lliçons | Imatge de targeta |
|---|---|---|
| *Part 1 — The programmer's desk* | 01, 02, 03, 04 | `assets/js.png` |
| *Part 2 — Control the flow* | 05, 06, 07 | `assets/js.png` |
| *Part 3 — Storing data* | 08, 09 | `assets/js.png` |
| *Part 4 — Making it interactive* | 10, 11, 12, 13 | `assets/js.png` |
| *Final project* | 14, 15 | `assets/code.jpg` |

> `[IMATGE: assets/unitats/programacio/web/javascript/00-unit-cover.png — portada de la unitat: un navegador amb una pàgina que ha canviat de color en fer clic a un botó, i al costat les 3 línies de JS que ho fan. Opcional: si no la fas, usa `assets/js.png`.]`

#### 3.4.2 Convenció de fitxers d'exercici

Es segueix la convenció de la unitat de **PHP** (`unitats/programacio/web/php/exercises/`), que ja és la del material en anglés d'este mateix cicle:

```
unitats/programacio/web/javascript/exercises/04-dom/ex1.html
unitats/programacio/web/javascript/exercises/04-dom/ex1_solved.html
assets/unitats/programacio/web/javascript/04-dom/ex1.png
```

- Cada fitxer d'exercici és una **pàgina HTML autònoma** (sense plantilla `vf-*`, sense `<base>`): HTML donat + `<style>` + `<script>` amb els buits a completar. Igual que `unitats/programacio/web/css/*.html`.
- El `_solved` és el mateix fitxer resolt. **No s'enllaça des de la pàgina de lliçó**; el propietari el publica quan vol.
- L'enllaç de descàrrega dins de la lliçó, sempre en `vf-text`:
  `Download the starter file [here|download](unitats/programacio/web/javascript/exercises/04-dom/ex1.html)`
- La captura del resultat esperat, sempre en `vf-img`, davall de l'enunciat.

#### 3.4.3 Material existent que es reaprofita

Açò estalvia la major part del treball d'il·lustració i de preparació d'exercicis. Els fitxers de partida existents estan **en valencià**: cal traduir-los a anglés en copiar-los, però l'HTML, el CSS i l'estructura del `<script>` es mantenen tal qual.

| Origen (unitat `js/`, valencià) | Destí (unitat `javascript/`, anglés) | Lliçó | Què és |
|---|---|---|---|
| `assets/.../js/01-js-basic/01..04.png` | `assets/.../javascript/01-first-program/` | 01 | Captures dels primers exemples |
| `assets/.../js/03-operadors/01.png` | `assets/.../javascript/03-operators/` | 03 | Captura d'exercici d'operadors |
| `assets/.../js/04-dom/exercicis/companys.html` | `exercises/04-dom/ex1.html` | 04 | Noms de companys: clic canvia mida i color |
| `assets/.../js/04-dom/exercicis/tamany.html` | `exercises/04-dom/ex2.html` | 04 | Clic augmenta el border 1px cada vegada |
| `assets/.../js/04-dom/exercicis/arreglar.html` | `exercises/04-dom/ex3.html` | 04 | **Codi trencat** de 4 colors, cal arreglar-lo |
| `assets/.../js/04-dom/exercicis/dades_personals.html` | `exercises/04-dom/ex4.html` | 04 | Formulari que mostra les dades en fer clic |
| `assets/.../js/04-dom/01.png, 02.1.png, 02.2.png, 03.png, 04.png` | `assets/.../javascript/04-dom/` | 04 | Captures dels 4 exercicis anteriors |
| `assets/.../js/04-dom/calculadora.png` | `assets/.../javascript/07-functions/` | 07 | Calculadora — passa a ser exercici de funcions |
| `assets/.../js/05-control/if.png, else.png, ifelseifelse.png` | `assets/.../javascript/05-conditions/` | 05 | Diagrames de flux d'`if`/`else`/`else if` |
| `assets/.../js/05-control/exercicis/semafor.html` | `exercises/05-conditions/ex1.html` | 05 | Semàfor: el color canvia segons el valor |
| `assets/.../js/05-control/exercicis/edat.html` | `exercises/05-conditions/ex2.html` | 05 | Comprovació d'edat |
| `assets/.../js/05-control/exercicis/contrasenya.html` | `exercises/05-conditions/ex3.html` | 05 | Comprovació de contrasenya |
| `assets/.../js/05-control/exercicis/any_traspas.html` | `exercises/05-conditions/ex4.html` | 05 | Any de traspàs |
| `assets/.../js/05-control/exercicis/sumarrestar.html` | `exercises/05-conditions/ex5.html` | 05 | Sumar/restar segons l'opció triada |
| `assets/.../js/05-control/exercicis/formulari.html` | `exercises/05-conditions/ex6.html` | 05 | Formulari amb comprovacions |
| `assets/.../js/05-control/ex3.png, ex4.png, ex5.png, notafinal.png` | `assets/.../javascript/05-conditions/` | 05 | Captures |
| `assets/.../js/06-repeticions/ex1.1.png, ex1.2.png, ex2..ex4.png` | `assets/.../javascript/06-loops/` | 06 | Captures d'exercicis de bucles |
| `assets/.../js/08-llistes/01..03.png` | `assets/.../javascript/08-arrays/` | 08 | Captures d'exercicis de llistes |

```
Neteja: assets/unitats/programacio/web/js copy/ es un duplicat antic de
assets/unitats/programacio/web/js/. Cap .html del repositori l'apunta
(comprovat amb grep). S'esborra com a ultim pas del guio de copia (4.5).
```

---

### 3.5 Contingut pàgina a pàgina

---

#### 3.5.1 `01-first-program.html` — *Your first program*

**Títols:** `What is a program?` · `What is JavaScript?` · `The HTML you need (and nothing more)` · `Where to write your JavaScript` · `Showing things on the page` · `Asking the user` · `Comments` · `When something goes wrong` · `Exercises`

**EN — What is a program?**

> A program is a **list of instructions** for a computer. The computer reads them one by one, from top to bottom, and does exactly what you wrote — not what you meant.
>
> Most bugs in the world are not the computer being wrong. They are a person writing an instruction that says something slightly different from what they thought.

**EN — What is JavaScript?**

> JavaScript (JS) is the programming language of the web. Every browser understands it, with nothing to install.
>
> With JavaScript you can make a page **do things**: show and hide content, count points, check a form, save data, draw a chart, run a game.
>
> JavaScript has nothing to do with Java. The name was a marketing decision in 1995. Do not confuse them in an exam.

**EN — The HTML you need (and nothing more)**

> JavaScript needs a page to live in. In this module we are **not** studying HTML, so here is the only file you need. Copy it, save it as `index.html`, and reuse it in every lesson.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>My JavaScript page</title>
</head>

<body>
    <h1>My JavaScript page</h1>

    <script src="script.js"></script>
</body>

</html>
```

> That is all you need to know about it:
>
> | Line | What it does |
> |---|---|
> | `<!DOCTYPE html>` | says "this is a web page". Always the first line |
> | `<html>` ... `</html>` | wraps the whole page |
> | `<head>` | information about the page (the title of the tab) |
> | `<body>` | what people see |
> | `<h1>` | a big title |
> | `<script src="script.js"></script>` | loads your JavaScript file |
>
> Next to it, create a second file called `script.js`. That is where **you** write.

```
<!-- vf-callout type="atencio" -->
The script tag goes at the *end* of the body, just before /body. If you put
it in the head, your code runs before the page exists and it will not find
anything.
```

> `[IMATGE: assets/unitats/programacio/web/javascript/01-first-program/two-files.png — captura de VS Code amb els dos fitxers (index.html i script.js) en la mateixa carpeta i tots dos oberts en pestanyes.]`

**EN — Where to write your JavaScript**

```html
<!-- 1. Inside the HTML (fine for a tiny test) -->
<script>
    document.write("Hello");
</script>

<!-- 2. In a separate file (this is what we use) -->
<script src="script.js"></script>
```

> There is a third place: the **console** of the browser. Press **F12** and you can type JavaScript straight into it. Perfect for trying one line.

**EN — Showing things on the page**

> A program that shows nothing is not much fun. `document.write()` writes text directly into the page, exactly where your `<script>` is:

```javascript
document.write("Hello, world!");
document.write("<br>");
document.write(2 + 3);
```

> `<br>` is an HTML tag that means "new line". `document.write` writes HTML, so you can use it to separate your lines:

```javascript
document.write("First line <br>");
document.write("Second line <br>");
document.write("The answer is " + 42 + "<br>");
```

> `[IMATGE: assets/unitats/programacio/web/javascript/01-first-program/01.png — reutilitza assets/unitats/programacio/web/js/01-js-basic/01.png. Captura del navegador amb les tres línies escrites en la pàgina.]`

```
<!-- vf-callout type="atencio" -->
document.write only works while the browser is still reading the page. If you
call it later - for example inside a function that runs when the user clicks
a button - it erases the whole page and leaves you with an empty screen.
We use it in lessons 1, 2 and 3 because it is the shortest way to see a
result. From lesson 4 we use the DOM instead, and we never write it again.
```

**EN — Asking the user**

> `prompt()` opens a small window and asks for text. `alert()` shows a message.

```javascript
let name = prompt("What is your name?");
document.write("Hello, " + name + "!");

alert("Nice to meet you.");
```

> `prompt` **always gives you text**, even if the user types a number. We will fix that in lesson 2.

**EN — Comments**

```javascript
// A comment on one line

/*
   A comment
   on several lines
*/
```

> Write comments to explain **why** you did something, not what the code says. `count = count + 1; // add one to count` is a useless comment.

**EN — When something goes wrong**

> Your code will fail. Every day. That is normal, and the **console** tells you what happened. Press **F12**, then click on the **Console** tab.

```
Uncaught SyntaxError: missing ) after argument list    script.js:4
Uncaught ReferenceError: nmae is not defined          script.js:7
```

> Read it like this:
> - the **type** of error (`SyntaxError`, `ReferenceError`, `TypeError`);
> - the **message**;
> - the **file and the line number** on the right — click it and the browser takes you there.

> | Error | It usually means |
> |---|---|
> | `SyntaxError` | you wrote something the language cannot read: a missing `)`, `}` or `"` |
> | `ReferenceError` | you used a name that does not exist. Look for a typo |
> | `TypeError` | the value is not what you thought: often `null` or `undefined` |

> The console is also where you check what your variables really hold, with `console.log()`:

```javascript
let price = prompt("Price?");
console.log(price);             // it appears in the console, not in the page
console.log(typeof price);      // "string" - useful to find bugs
```

```
<!-- vf-callout type="consell" -->
Two different tools, two different jobs. document.write is for what the USER
must see. console.log is for what YOU need to check while you build. When you
are lost, put console.log in the middle of your code and print your
variables. Most of the time you will find that a variable does not hold what
you believed.
```

> `[IMATGE: assets/unitats/programacio/web/javascript/01-first-program/console-error.png — captura de la consola amb un ReferenceError, la fletxa assenyalant el fitxer i el número de línia a la dreta.]`

**EN — Exercises**

> **Exercise 1.1.** Create the two files (`index.html` and `script.js`) and write `"Hello, my name is ..."` in the page.
>
> **Exercise 1.2.** Write the result of `7 * 8`, of `100 / 3` and of `10 - 4`, each one on its own line in the page.
>
> **Exercise 1.3.** Use `prompt` to ask for the user's name, and then write a greeting **in the page** (not in an `alert`).
>
> **Exercise 1.4.** Ask for the user's name and their favourite colour, and write a sentence with both.
>
> **Exercise 1.5.** Break your code on purpose: remove a `)`. Open the console, read the error, and write down which type of error it is and on which line.

**Solució 1.3 i 1.4:**

```javascript
// 1.3
let name = prompt("What is your name?");
document.write("Hello, " + name + "! Nice to meet you.<br>");

// 1.4
let colour = prompt("What is your favourite colour?");
document.write(name + " likes " + colour + ".<br>");
```

---

#### 3.5.2 `02-variables.html` — *Variables and data types*

**Títols:** `What is a variable?` · `let and const` · `Rules for names` · `Data types` · `Template literals` · `Reading data from the user` · `Converting types` · `Exercises`

**EN — What is a variable?**

> A variable is a **box with a name** where you keep a value, so you can use it later.

```javascript
let score = 0;
document.write(score + "<br>");     // 0

score = 10;
document.write(score + "<br>");     // 10
```

> `=` is not "equals" in the maths sense. It means **"put this value in this box"**. You read it from right to left.

**EN — let and const**

```javascript
let points = 0;         // I can change it later
points = 5;             // fine

const PI = 3.14159;     // I cannot change it
PI = 3;                 // TypeError: Assignment to constant variable
```

> - Use `const` by default. It protects you: if you try to change it by accident, the browser tells you.
> - Use `let` when the value really has to change (a counter, a total, a user answer).
> - You will see `var` in old code. **Do not use it.** It behaves in strange ways.

**EN — Rules for names**

> - Letters, numbers, `_` and `$`. **No spaces**, and it cannot start with a number.
> - JavaScript is **case sensitive**: `score`, `Score` and `SCORE` are three different variables.
> - Use **camelCase**: `userName`, `totalPrice`, `isLoggedIn`.
> - Name things for what they hold. `x` and `data2` tell you nothing. `remainingLives` tells you everything.

**EN — Data types**

```javascript
// String: text. Always between quotes
let name = "Marta";
let city = 'Valencia';

// Number: whole numbers and decimals, all the same type
let age = 16;
let price = 19.95;

// Boolean: only two values
let isStudent = true;
let hasPassed = false;

// Nothing
let prize = null;           // "empty on purpose"
let unknown;                // undefined: declared, never given a value
```

> To ask what type something is:

```javascript
document.write(typeof "hello" + "<br>");    // "string"
document.write(typeof 16 + "<br>");         // "number"
document.write(typeof true + "<br>");       // "boolean"
```

```
<!-- vf-callout type="atencio" -->
"5" and 5 are NOT the same thing. The first is text, the second is a number.
"5" + 1 gives "51". 5 + 1 gives 6. This single confusion causes a huge
number of bugs.
```

**EN — Template literals**

> Joining text with `+` gets ugly fast:

```javascript
let name = "Marta";
let age = 16;

document.write("Hello, " + name + ". You are " + age + " years old.<br>");
```

> With backticks `` ` `` you can put variables inside the text with `${ }`:

```javascript
document.write(`Hello, ${name}. You are ${age} years old.<br>`);
```

> The backtick is not the same key as the normal quote. On a Spanish keyboard it is next to the `P`. Use this style from now on: it is shorter and much easier to read.

**EN — Reading data from the user**

```javascript
let name = prompt("Your name?");
let ageText = prompt("Your age?");
```

> **Careful: `prompt` always gives you a string**, even if the user types a number.

**EN — Converting types**

```javascript
let ageText = "16";

let age = Number(ageText);          // 16 as a number
let age2 = parseInt("16 years");    // 16 (reads until it is not a number)
let price = parseFloat("19.95");    // 19.95

let text = String(16);              // "16"
let text2 = (16).toString();        // "16"

document.write(Number("hello"));    // NaN = Not a Number
```

> `NaN` means "this is not a number". If you see `NaN` in your page, somewhere you did maths with something that was not a number.

**EN — Exercises**

> **Exercise 2.1.** Declare variables for your name, age, height (with decimals) and whether you have a driving licence. Write each one in the page, with its `typeof` next to it.
>
> **Exercise 2.2.** Write a sentence in the page with all four values, using a template literal.
>
> **Exercise 2.3.** Try to change a `const`. Open the console and copy the error you get.
>
> **Exercise 2.4.** Predict, without running it, what these show. Then run them and check:

```javascript
document.write("5" + 3 + "<br>");
document.write(5 + 3 + "<br>");
document.write("5" - 3 + "<br>");
document.write(typeof (5 + "3") + "<br>");
```

> **Exercise 2.5.** Ask the user for two numbers with `prompt`, add them, and write the result in the page. Make sure the result is 8 and not "35" when the user types 3 and 5.
>
> **Exercise 2.6.** Ask for a temperature in Celsius and write it in Fahrenheit. The formula is `F = C * 9 / 5 + 32`.
>
> **Exercise 2.7.** Ask for the price of a product and the quantity, and write an invoice line: name, quantity, price per unit and total.

**Solucions 2.4 i 2.5:**

```javascript
// 2.4
document.write("5" + 3 + "<br>");           // "53"  -> + with a string joins text
document.write(5 + 3 + "<br>");             // 8
document.write("5" - 3 + "<br>");           // 2     -> - only works with numbers
document.write(typeof (5 + "3") + "<br>");  // "string"

// 2.5
const a = Number(prompt("First number?"));
const b = Number(prompt("Second number?"));
document.write(`${a} + ${b} = ${a + b}<br>`);
```

---

#### 3.5.3 `03-operators.html` — *Operators*

**Títols:** `Arithmetic` · `Assignment shortcuts` · `Comparison` · `=== or ==?` · `Logical operators` · `Order of operations` · `Exercises`

**EN — Arithmetic**

```javascript
let a = 10;
let b = 3;

document.write(a + b + "<br>");     // 13
document.write(a - b + "<br>");     // 7
document.write(a * b + "<br>");     // 30
document.write(a / b + "<br>");     // 3.3333333333333335
document.write(a % b + "<br>");     // 1   <- the remainder of the division
document.write(a ** 2 + "<br>");    // 100 <- a to the power of 2
```

> `%` (*modulo*) is the remainder. It looks useless and it is everywhere:
>
> - `n % 2 === 0` → `n` is even.
> - `n % 5 === 0` → `n` is a multiple of 5.
> - `seconds % 60` → the seconds that are left after counting the minutes.

**EN — Assignment shortcuts**

```javascript
let score = 10;

score = score + 5;      // 15
score += 5;             // the same thing, shorter -> 20
score -= 3;             // 17
score *= 2;             // 34
score /= 2;             // 17

let lives = 3;
lives++;                // 4   (add one)
lives--;                // 3   (take one away)
```

**EN — Comparison**

> These always give a **boolean**: `true` or `false`.

```javascript
document.write(5 > 3);         // true
document.write(5 &lt; 3);        // false
document.write(5 >= 5);        // true
document.write(5 &lt;= 4);       // false
document.write(5 === 5);       // true    equal
document.write(5 !== 5);       // false   not equal
```

```
Recorda en generar l'HTML: dins de vf-code, el signe < d'un codi JS s'ha
d'escapar com &lt;. Este bloc ja el porta escapat.
```

**EN — === or ==?**

```javascript
document.write(5 == "5");      // true   -> == converts the types first
document.write(5 === "5");     // false  -> === also compares the type
```

> `==` tries to be helpful and converts things behind your back. That causes bugs you cannot see.
>
> **Rule: always use `===` and `!==`.** Never `==`. There is no exception you need at this level.

**EN — Logical operators**

```javascript
const age = 17;
const hasTicket = true;

document.write(age >= 16 && hasTicket);     // AND: true only if BOTH are true
document.write(age >= 18 || hasTicket);     // OR:  true if AT LEAST ONE is true
document.write(!hasTicket);                 // NOT: turns it around -> false
```

| Operator | Name | True when |
|---|---|---|
| `&&` | AND | both sides are true |
| `\|\|` | OR | at least one side is true |
| `!` | NOT | the opposite |

**EN — Order of operations**

```javascript
document.write(2 + 3 * 4);         // 14, not 20: * goes before +
document.write((2 + 3) * 4);       // 20
```

> Same as in maths. And the same advice as in maths: **if you are not sure, use brackets.** Brackets are free, and they make your code easier to read.

**EN — Exercises**

> **Exercise 3.1.** Ask for the price of a product and write the price with 21 % VAT added.
>
> **Exercise 3.2.** Ask for a number of seconds and write how many minutes and how many seconds are left. (Use `/`, `Math.floor()` and `%`.)
>
> **Exercise 3.3.** Ask for a number and write `true` if it is even, `false` if it is odd. One line, no `if`.
>
> **Exercise 3.4.** Say what each of these writes, without running it:

```javascript
document.write(10 % 3);
document.write("10" === 10);
document.write("10" == 10);
document.write(true && false);
document.write(!(3 > 5));
```

> **Exercise 3.5.** A person can enter a concert if they are 16 or older **and** they have a ticket, **or** if they are on the guest list. Write the condition with variables `age`, `hasTicket` and `isGuest`, and show the result in the page.
>
> **Exercise 3.6.** Ask for three marks and write the average with two decimals. (`toFixed(2)`)

> `[IMATGE: assets/unitats/programacio/web/javascript/03-operators/01.png — reutilitza assets/unitats/programacio/web/js/03-operadors/01.png.]`

**Solucions 3.2, 3.3 i 3.5:**

```javascript
// 3.2
const total = Number(prompt("How many seconds?"));
const minutes = Math.floor(total / 60);
const seconds = total % 60;
document.write(`${total} seconds = ${minutes} min and ${seconds} s<br>`);

// 3.3
const n = Number(prompt("A number?"));
document.write(n % 2 === 0);

// 3.5
const age = 17;
const hasTicket = true;
const isGuest = false;
const canEnter = (age >= 16 && hasTicket) || isGuest;
document.write(canEnter);
```

---

#### 3.5.4 `04-dom.html` — *The DOM: changing the page*

> **Esta és la lliçó frontissa de la unitat.** A partir d'ací tot es veu en pantalla i `document.write` no es torna a usar. Correspon a la lliçó `04-dom.html` de la unitat en valencià, ampliada i traduïda.

**Títols:** `What is the DOM` · `The HTML we will use` · `Finding an element` · `Changing the text` · `Reading an input` · `Changing the style` · `classList` · `Doing something when the user clicks` · `Common mistakes` · `Exercises`

**EN — What is the DOM**

> Until now our programs wrote text with `document.write`, and once the page had finished loading we could not change anything any more. Now we are going to change the **page itself**, at any moment.
>
> When the browser reads your HTML, it builds a tree of objects in memory. That tree is called the **DOM** (*Document Object Model*).
>
> Your JavaScript can look at that tree, change it, add branches and remove them. Every change appears on the screen immediately.

> `[IMATGE: assets/unitats/programacio/web/javascript/04-dom/dom-tree.png — arbre del DOM d'una pàgina senzilla: document → html → head/body → h1, p, input, button, div#output. Amb el codi HTML al costat per a veure la correspondència.]`

**EN — The HTML we will use**

> Copy this `index.html`. All the examples of this lesson use it. Remember: you are not designing the page, you are only using the boxes that are already there.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>DOM practice</title>
    <style>
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }

        .hidden {
            display: none;
        }
    </style>
</head>

<body>
    <h1 id="title">Hello</h1>

    <p class="text">First paragraph</p>
    <p class="text">Second paragraph</p>

    <input type="text" id="nameInput">
    <button id="myButton">Click me</button>

    <div id="output"></div>

    <script src="script.js"></script>
</body>

</html>
```

**EN — Finding an element**

> Before you can change something, you have to **find** it. Every element you want to touch needs an `id` (a unique name) or a `class` (a name that several elements can share).

```javascript
const title = document.getElementById("title");     // by id
```

> There is a second way, which also works with classes and is the one you will see in most code today:

```javascript
const title = document.querySelector("#title");     // by id
const first = document.querySelector(".text");      // the FIRST with that class
const all = document.querySelectorAll(".text");     // ALL of them (a list)
```

> The text inside `querySelector` is written exactly like a **CSS selector**: `#` for an id, `.` for a class, the plain name for a tag. Learn `querySelector` and `querySelectorAll` and you have everything.

```
<!-- vf-callout type="atencio" -->
If querySelector does not find anything it returns null, and the next line
gives you "TypeError: Cannot read properties of null". Nine times out of ten
the cause is a typo in the id, or a script tag placed in the head instead of
at the end of the body.
```

**EN — Changing the text**

```javascript
const title = document.querySelector("#title");

console.log(title.textContent);         // "Hello"   (in the console)
title.textContent = "Goodbye";          // changes the text ON THE SCREEN
```

> This one line is the whole point of the lesson. Read it again: on the left, the element and the property; on the right, the new value. The page changes at that instant.

```javascript
const output = document.querySelector("#output");

output.textContent = "Plain text, always safe";
output.innerHTML = "<strong>This is bold</strong>";     // interprets the HTML
```

> - `textContent` puts **plain text**. Safe. Use it by default.
> - `innerHTML` puts **HTML**, so tags work. Powerful, but never use it with text that the user typed: someone could inject code in your page.

**EN — Reading an input**

> An `<input>` does not use `textContent`. It uses `value`:

```javascript
const input = document.querySelector("#nameInput");

const typed = input.value;      // read what the user typed
input.value = "";               // empty the field
```

> This replaces `prompt` for good. From now on the user types in the page, not in a pop-up window.

```
<!-- vf-callout type="recorda" -->
value always gives you TEXT, exactly like prompt did. If you need a number,
convert it: Number(input.value).
```

**EN — Changing the style**

```javascript
const title = document.querySelector("#title");

title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "40px";
title.style.border = "2px solid black";
```

> Careful with the names: in CSS it is `background-color`, in JavaScript it is `backgroundColor`. The dash disappears and the next letter goes uppercase (camelCase).
>
> The value is **always text**, between quotes, with its unit: `"40px"`, not `40`.

**EN — classList**

> Changing styles one by one from JavaScript gets messy fast. It is better to write the style in CSS as a class, and only add or remove the class from JavaScript. The two classes are already in the HTML above:

```javascript
const p = document.querySelector(".text");

p.classList.add("highlight");           // add the class
p.classList.remove("highlight");        // remove it
p.classList.toggle("hidden");           // if it is there, remove it; if not, add it
console.log(p.classList.contains("highlight"));     // true / false
```

> `toggle` is what you use for a "show / hide" button.

**EN — Doing something when the user clicks**

> A program that changes the page as soon as it loads is not interactive. We want things to happen **when the user does something**:

```javascript
const button = document.querySelector("#myButton");
const title = document.querySelector("#title");

function changeTitle() {
    title.textContent = "You clicked!";
    title.style.color = "green";
}

button.addEventListener("click", changeTitle);
```

> Read it: *on this button, listen for the event "click", and when it happens, run the function `changeTitle`.*
>
> You will see the full family of events in lesson 10. For now, `click` is enough for everything.

```
<!-- vf-callout type="atencio" -->
Write changeTitle WITHOUT brackets. With brackets, addEventListener("click",
changeTitle()) runs the function once, immediately, and then listens for
nothing. This is the most common mistake of the whole unit.
```

> Any element can listen for a click, not only buttons:

```javascript
const paragraphs = document.querySelectorAll(".text");

for (const p of paragraphs) {
    p.addEventListener("click", function () {
        p.classList.toggle("highlight");
    });
}
```

> (You will study `for` properly in lesson 6. For now, copy the shape: it repeats the same instruction for every paragraph.)

**EN — Common mistakes**

```javascript
// 1. The script runs before the page exists
//    -> put <script> at the END of the body

// 2. A typo in the id
const t = document.querySelector("#titel");     // null
t.textContent = "Hi";                           // TypeError

// 3. Forgetting .value on an input
const input = document.querySelector("#nameInput");
console.log(input);             // the whole element, not what the user typed
console.log(input.value);       // right

// 4. Forgetting the unit in a style
title.style.fontSize = 40;      // does nothing
title.style.fontSize = "40px";  // right

// 5. Brackets in addEventListener
button.addEventListener("click", changeTitle());    // WRONG
button.addEventListener("click", changeTitle);      // right
```

**EN — Exercises**

> **Exercise 4.1.** Reproduce the page below with the names of four classmates. When you click on one of them, that name changes size and colour, and the other three go back to their original size and colour.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/04-dom/ex1.html)

> `[IMATGE: assets/unitats/programacio/web/javascript/04-dom/ex1.png — reutilitza assets/unitats/programacio/web/js/04-dom/01.png.]`

> **Exercise 4.2.** Make the paragraph's border grow by 1 px every time you click on it.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/04-dom/ex2.html)

```html
<style>
    p {
        border: 1px solid coral;
        text-align: center;
        border-radius: 10px;
        width: fit-content;
        padding: 5px;
    }
</style>

<p id="p">CLICK HERE!</p>

<script>
    let size = 1;
    const paragraph = document.querySelector("#p");

    paragraph.addEventListener("click", function () {
        // 1. Make a variable with the new size: the size plus 1
        // 2. Change the border of the paragraph using the new size
        // 3. Store the new size back in the variable size
    });
</script>
```

> `[IMATGE: assets/unitats/programacio/web/javascript/04-dom/ex2-1.png i ex2-2.png — reutilitza js/04-dom/02.1.png i 02.2.png. Abans i després de diversos clics.]`

> **Exercise 4.3.** The code below is broken: the colours do not match the boxes. Fix it so that clicking on a box paints it with its own colour and clears the other three.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/04-dom/ex3.html)

```html
<div id="box">
    <div id="red" onclick="clickGreen()">Green</div>
    <div id="blue" onclick="clickBlue()">Red</div>
    <div id="blue" onclick="clickRed()">Blue</div>
    <div id="yellow" onclick="clickYellow()">Yellow</div>
</div>

<script>
    function clickGreen() {
        const green = document.querySelector("#yellow");
        green.style.backgroundColor = "blue";
    }

    function clickYellow() {
        const yellow = document.querySelector("#blue");
        yellow.style.backgroundColor = "red";
    }

    function clickRed() {
        const red = document.querySelector("#green");
        red.style.backgroundColor = "green";
    }

    function clickBlue() {
        const blue = document.querySelector("#blue");
        blue.style.backgroundColor = "red";
    }
</script>
```

> There are **three** kinds of mistake in there: an id that is repeated, ids that do not match the text of the box, and functions that paint the wrong element. Find them all.

> `[IMATGE: assets/unitats/programacio/web/javascript/04-dom/ex3.png — reutilitza js/04-dom/03.png.]`

> **Exercise 4.4.** Build the form below. When the user clicks the button, all the data they typed appears under it.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/04-dom/ex4.html)

> `[IMATGE: assets/unitats/programacio/web/javascript/04-dom/ex4.png — reutilitza js/04-dom/04.png.]`

> **Exercise 4.5.** One input and one button. When you click, the `h1` says `Hello, NAME!` with the name the user typed, and the field is emptied.
>
> **Exercise 4.6.** Three buttons: red, green and blue. Each one changes the background colour of the whole page. (`document.body.style.backgroundColor`)
>
> **Exercise 4.7.** A "Show / hide" button that makes a paragraph appear and disappear using `classList.toggle`.

**Solucions 4.5 i 4.7:**

```javascript
// 4.5
const input = document.querySelector("#nameInput");
const button = document.querySelector("#myButton");
const title = document.querySelector("#title");

button.addEventListener("click", function () {
    const name = input.value;
    title.textContent = `Hello, ${name}!`;
    input.value = "";
});

// 4.7
const paragraph = document.querySelector(".text");
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", function () {
    paragraph.classList.toggle("hidden");
});
```

---

#### 3.5.5 `05-conditions.html` — *Making decisions*

**Títols:** `if` · `else` · `else if` · `Conditions with && and ||` · `switch` · `The ternary operator` · `Common mistakes` · `Exercises`

> **Nota d'implementació:** tots els exemples d'esta lliçó llegixen d'un `<input>` i escriuen en un `<div>` de la pàgina. **Cap `console.log` en els exemples principals.** L'HTML donat és este, i es repetix en totes les lliçons de la 05 a la 09:

```html
<input type="text" id="value">
<button id="check">Check</button>
<div id="output"></div>
```

**EN — if**

```javascript
const input = document.querySelector("#value");
const output = document.querySelector("#output");

document.querySelector("#check").addEventListener("click", function () {
    const age = Number(input.value);

    if (age >= 18) {
        output.textContent = "You can vote.";
    }
});
```

> The condition goes between `( )`. The code that runs goes between `{ }`. If the condition is `false`, the block is skipped and nothing happens — the user sees no change at all, which is confusing. That is why we almost always want an `else`.

> `[IMATGE: assets/unitats/programacio/web/javascript/05-conditions/if.png — reutilitza js/05-control/if.png. Diagrama de flux d'un if simple.]`

**EN — else**

```javascript
if (age >= 18) {
    output.textContent = "You can vote.";
} else {
    output.textContent = "You cannot vote yet.";
}
```

> `[IMATGE: assets/unitats/programacio/web/javascript/05-conditions/else.png — reutilitza js/05-control/else.png.]`

**EN — else if**

```javascript
const mark = Number(input.value);

if (mark >= 9) {
    output.textContent = "Excellent";
    output.style.color = "green";
} else if (mark >= 7) {
    output.textContent = "Good";
    output.style.color = "blue";
} else if (mark >= 5) {
    output.textContent = "Pass";
    output.style.color = "orange";
} else {
    output.textContent = "Fail";
    output.style.color = "red";
}
```

> The order matters. JavaScript checks the conditions from top to bottom and **stops at the first one that is true**.
>
> If you wrote `mark >= 5` first, a 9 would show "Pass": it is also true that 9 is bigger than 5.
>
> Notice that we change the **colour** as well as the text. The user reads the colour before the word.

> `[IMATGE: assets/unitats/programacio/web/javascript/05-conditions/elseif.png — reutilitza js/05-control/ifelseifelse.png. Diagrama de flux amb les quatre eixides.]`

**EN — Conditions with && and ||**

```javascript
const age = Number(document.querySelector("#age").value);
const hasPermission = document.querySelector("#permission").checked;

if (age >= 18 || (age >= 16 && hasPermission)) {
    output.textContent = "You can come in.";
    output.className = "ok";
} else {
    output.textContent = "Sorry, you cannot come in.";
    output.className = "error";
}
```

> A checkbox does not use `.value`. It uses `.checked`, which is already a boolean: `true` or `false`.

**EN — switch**

> When you compare **one variable** against **many exact values**, `switch` is clearer:

```javascript
const day = Number(input.value);
let name;

switch (day) {
    case 1:
        name = "Monday";
        break;
    case 2:
        name = "Tuesday";
        break;
    case 3:
        name = "Wednesday";
        break;
    default:
        name = "Another day";
}

output.textContent = name;
```

```
<!-- vf-callout type="atencio" -->
Do not forget the break. Without it, JavaScript keeps running the next cases
too. It is the classic switch bug.
```

**EN — The ternary operator**

> A short `if/else` that gives a value:

```javascript
const age = Number(input.value);
output.textContent = age >= 18 ? "adult" : "minor";
```

> Read it: *condition* `?` *value if true* `:` *value if false*.
>
> Use it only for short, simple things. Never nest one inside another.

**EN — Common mistakes**

```javascript
// 1. One = instead of three
if (age = 18) { }       // WRONG: this ASSIGNS 18, it does not compare
if (age === 18) { }     // right

// 2. A semicolon after the if
if (age >= 18); {       // WRONG: the block always runs
    output.textContent = "hi";
}

// 3. Comparing text with a number
const answer = input.value;
if (answer === 18) { }          // never true: answer is "18", text
if (Number(answer) === 18) { }  // right

// 4. Forgetting the else
//    The user clicks, the condition is false, nothing changes on the screen,
//    and they think your program is broken. Always say something.
```

**EN — Exercises**

> All of these read from an input and show the answer **in the page**. No `prompt`, no `alert`, no console.
>
> **Exercise 5.1. Traffic light.** Three buttons: Stop, Wait, Go. Each one paints the circle in the page with the right colour and writes the message under it.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/05-conditions/ex1.html)

> **Exercise 5.2. Age check.** The user types their age. Show "Child", "Teenager", "Adult" or "Senior", each one in a different colour. If the number is negative or over 120, show an error message in red.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/05-conditions/ex2.html)

> **Exercise 5.3. Password check.** The user types a password. Show, one under the other, whether it has at least 8 characters, whether it has a number, and whether it has a capital letter. Green tick or red cross for each one.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/05-conditions/ex3.html)

> **Exercise 5.4. Leap year.** The user types a year and the page says if it is a leap year. (A leap year is divisible by 4, but not by 100, unless it is also divisible by 400.)
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/05-conditions/ex4.html)

> **Exercise 5.5. Calculator, first version.** Two numbers, a `<select>` with `+ - * /`, and a button. Show the result. If the user divides by zero, show "You cannot divide by zero" in red.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/05-conditions/ex5.html)

> `[IMATGE: assets/unitats/programacio/web/javascript/05-conditions/ex5.png — reutilitza js/05-control/ex5.png.]`

> **Exercise 5.6. Cinema ticket.** A ticket costs 8 €. Under 14 and over 65 pay 5 €. On Wednesday everybody pays 5 €. The user types the age and chooses the day; the page shows the price.
>
> **Exercise 5.7. Final mark.** Three inputs with three marks. Show the average and, next to it, the word (Fail, Pass, Good, Excellent) with the right colour.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/05-conditions/ex7.png — reutilitza js/05-control/notafinal.png.]`

**Solucions 5.4 i 5.6:**

```javascript
// 5.4
const input = document.querySelector("#value");
const output = document.querySelector("#output");

document.querySelector("#check").addEventListener("click", function () {
    const year = Number(input.value);
    let isLeap;

    if (year % 400 === 0) {
        isLeap = true;
    } else if (year % 100 === 0) {
        isLeap = false;
    } else if (year % 4 === 0) {
        isLeap = true;
    } else {
        isLeap = false;
    }

    if (isLeap) {
        output.textContent = `${year} is a leap year.`;
        output.style.color = "green";
    } else {
        output.textContent = `${year} is NOT a leap year.`;
        output.style.color = "red";
    }
});

// 5.6
const age = Number(document.querySelector("#age").value);
const day = document.querySelector("#day").value;
let price = 8;

if (day === "wednesday" || age &lt; 14 || age > 65) {
    price = 5;
}

output.textContent = `Your ticket costs ${price} euros.`;
```

---

#### 3.5.6 `06-loops.html` — *Loops*

**Títols:** `Why loops` · `while` · `for` · `for...of` · `break and continue` · `Counters and totals` · `Building HTML with a loop` · `Loops inside loops` · `Infinite loops` · `Exercises`

**EN — Why loops**

> Writing the numbers from 1 to 100 by hand a hundred times is not programming. A **loop** repeats a block of code while a condition is true.

**EN — while**

```javascript
const output = document.querySelector("#output");
let text = "";
let i = 1;

while (i &lt;= 5) {
    text = text + i + "<br>";
    i++;
}

output.innerHTML = text;
```

> Three things you always need:
> 1. **Before**: create the variable (`let i = 1`).
> 2. **The condition**: when do we stop (`i <= 5`).
> 3. **Inside**: change the variable (`i++`), or the loop never ends.
>
> Notice the pattern for showing the result: we **build a string inside the loop** and we put it in the page **once**, at the end. Touching the page inside a loop is slow and messy.

**EN — for**

> The same three things, all on one line. Use it when you know how many times you repeat:

```javascript
let text = "";

for (let i = 1; i &lt;= 5; i++) {
    text += i + "<br>";
}

output.innerHTML = text;
```

```javascript
for (let i = 10; i >= 1; i--) {     // backwards
}

for (let i = 0; i &lt;= 20; i += 2) {  // in steps of two
}
```

> `[IMATGE: assets/unitats/programacio/web/javascript/06-loops/for-anatomy.png — el for de l'exemple amb tres fletxes de colors etiquetades "1. start", "2. condition (checked every time)", "3. step (runs after each repetition)".]`

**EN — for...of**

> To go through a list of things, without worrying about the index:

```javascript
const colours = ["red", "green", "blue"];
let text = "";

for (const colour of colours) {
    text += `<p style="color: ${colour}">${colour}</p>`;
}

output.innerHTML = text;
```

> You will study arrays properly in lesson 8. Here we only need to walk through one.

**EN — break and continue**

```javascript
for (let i = 1; i &lt;= 10; i++) {
    if (i === 5) {
        break;          // leave the loop right now
    }
    text += i + " ";    // 1 2 3 4
}

for (let i = 1; i &lt;= 5; i++) {
    if (i === 3) {
        continue;       // skip this one, go to the next
    }
    text += i + " ";    // 1 2 4 5
}
```

**EN — Counters and totals**

> Two patterns you will use for the rest of your life:

```javascript
// Total (accumulator)
let total = 0;
for (let i = 1; i &lt;= 100; i++) {
    total += i;
}
output.textContent = total;             // 5050

// Counter
const marks = [3, 7, 9, 4, 6];
let passed = 0;
for (const mark of marks) {
    if (mark >= 5) {
        passed++;
    }
}
output.textContent = `${passed} students passed.`;
```

**EN — Building HTML with a loop**

> This is where loops become useful in a page. A loop can build a whole list, a whole table or a whole board:

```javascript
// A list
let html = "<ul>";
for (let i = 1; i &lt;= 5; i++) {
    html += `<li>Item ${i}</li>`;
}
html += "</ul>";
output.innerHTML = html;
```

```javascript
// A multiplication table, as a real HTML table
const n = Number(document.querySelector("#value").value);
let html = "<table border='1'>";

for (let i = 1; i &lt;= 10; i++) {
    html += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;
}

html += "</table>";
output.innerHTML = html;
```

```
<!-- vf-callout type="consell" -->
Build the whole string first, put it in the page at the end. If you write
output.innerHTML += ... inside the loop, the browser rebuilds the page on
every turn: with 100 elements you will see it slow down.
```

**EN — Loops inside loops**

```javascript
let html = "";

for (let table = 1; table &lt;= 3; table++) {
    html += `<h3>Table of ${table}</h3>`;
    for (let i = 1; i &lt;= 10; i++) {
        html += `${table} x ${i} = ${table * i}<br>`;
    }
}

output.innerHTML = html;
```

> The inner loop runs completely **for each** turn of the outer loop. Here: 3 × 10 = 30 lines.
>
> Two loops, one inside the other, is also how you draw anything with rows and columns: a chessboard, a calendar, a grid of images.

**EN — Infinite loops**

```javascript
let i = 1;
while (i &lt;= 5) {
    text += i;
    // i++;  <- forgotten!
}
```

> This never stops and the tab freezes. If it happens, close the tab.
>
> Before running a loop, ask yourself: *what changes inside, so that one day the condition becomes false?* If you cannot answer, do not run it.

**EN — Exercises**

> **Exercise 6.1.** Show the numbers from 1 to 20 in the page, one per line. Do it with `while` and then with `for`.
>
> **Exercise 6.2.** Show the even numbers from 0 to 50, separated by commas.
>
> **Exercise 6.3.** The user types a number and the page draws its multiplication table as an HTML table.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/06-loops/ex1-1.png i ex1-2.png — reutilitza js/06-repeticions/ex1.1.png i ex1.2.png.]`
>
> **Exercise 6.4.** Draw a triangle of stars of the height the user asks for, inside a `<pre>` so the spaces are respected:

```
*
**
***
****
*****
```

> **Exercise 6.5. Chessboard.** Draw an 8 × 8 board of `<div>`s, alternating black and white. Two loops, one inside the other. The trick for the colour: `(row + column) % 2 === 0`.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/06-loops/ex5.png — captura del tauler acabat. Si es vol, es pot reutilitzar el disseny de assets/unitats/programacio/web/css/escacs.png de la unitat de CSS.]`
>
> **Exercise 6.6. Colour ramp.** Draw 20 boxes in a row, each one a little darker than the one before. (`backgroundColor = 'rgb(' + v + ',' + v + ',' + v + ')'`)
>
> **Exercise 6.7.** Given `const marks = [4, 8, 6, 2, 9, 5];`, show the highest mark, the lowest mark and the average. Do not use `Math.max`: find it with a loop.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/06-loops/ex7.png — reutilitza js/06-repeticions/ex4.png.]`

**Solucions 6.4, 6.5 i 6.7:**

```javascript
// 6.4
const height = Number(document.querySelector("#value").value);
let text = "";

for (let row = 1; row &lt;= height; row++) {
    for (let i = 1; i &lt;= row; i++) {
        text += "*";
    }
    text += "\n";
}

output.innerHTML = "<pre>" + text + "</pre>";

// 6.5
let html = "";

for (let row = 0; row &lt; 8; row++) {
    html += "<div style='display: flex'>";
    for (let column = 0; column &lt; 8; column++) {
        const colour = (row + column) % 2 === 0 ? "white" : "black";
        html += `<div style="width: 40px; height: 40px; background: ${colour}"></div>`;
    }
    html += "</div>";
}

output.innerHTML = html;

// 6.7
const marks = [4, 8, 6, 2, 9, 5];
let highest = marks[0];
let lowest = marks[0];
let total = 0;

for (const mark of marks) {
    if (mark > highest) {
        highest = mark;
    }
    if (mark &lt; lowest) {
        lowest = mark;
    }
    total += mark;
}

output.innerHTML = `Highest: ${highest}<br>Lowest: ${lowest}<br>Average: ${total / marks.length}`;
```

> Notice the trick in 6.7: we start `highest` and `lowest` with the **first element** of the array, not with 0. If we started with 0, no negative number would ever be smaller.

---

#### 3.5.7 `07-functions.html` — *Functions*

**Títols:** `Why functions` · `Declaring and calling` · `Parameters` · `return` · `Functions and buttons` · `Scope` · `Arrow functions` · `Cutting a problem into pieces` · `Exercises`

**EN — Why functions**

> A **function** is a block of code with a name, that you can run whenever you want, as many times as you want.
>
> Three reasons to use them:
> 1. You write the code **once** and use it many times.
> 2. If there is a bug, you fix it in **one** place.
> 3. A program made of small named pieces is much easier to read than 300 lines in a row.
>
> You have been using them since lesson 4: everything you passed to `addEventListener` was a function.

**EN — Declaring and calling**

```javascript
// Declaring: this only creates the function, it does not run it
function sayHello() {
    document.querySelector("#output").textContent = "Hello!";
}

// Calling: now it runs
sayHello();
```

> The brackets `()` are what runs it. `sayHello` without brackets is the function itself; `sayHello()` is the function *doing its job*. That is exactly why `addEventListener("click", sayHello)` has no brackets: you are handing the function over, not running it.

**EN — Parameters**

> A **parameter** is information you give to the function when you call it:

```javascript
function greet(name) {
    document.querySelector("#output").textContent = `Hello, ${name}!`;
}

greet("Marta");     // Hello, Marta!
greet("Ahmed");     // Hello, Ahmed!
```

```javascript
function showTotal(price, quantity) {
    document.querySelector("#output").textContent = `Total: ${price * quantity} euros`;
}

showTotal(12.5, 3);     // Total: 37.5 euros
```

> The order matters: the first value goes to the first parameter.

**EN — return**

> `return` sends a value **back** to whoever called the function:

```javascript
function add(a, b) {
    return a + b;
}

const result = add(3, 4);
output.textContent = result;            // 7
```

> Difference between showing and returning:

```javascript
function addAndShow(a, b) {
    output.textContent = a + b;     // it shows it, but gives nothing back
}

function addAndReturn(a, b) {
    return a + b;                   // it gives the value back, you decide what to do
}

const x = addAndShow(2, 3);     // x is undefined!
const y = addAndReturn(2, 3);   // y is 5
```

> **Almost always you want `return`.** A function that returns a value can be reused anywhere: in a message, in another calculation, in a condition.
>
> **The rule for this unit: a function either calculates (and returns) or it draws (and touches the page). Not both.** That separation is what makes your final project readable.

> `return` also **ends** the function immediately. Nothing after it runs:

```javascript
function checkAge(age) {
    if (age &lt; 0) {
        return "That is not a valid age.";
    }
    if (age &lt; 18) {
        return "Minor";
    }
    return "Adult";
}
```

**EN — Functions and buttons**

> The normal shape of an interactive page, from now on:

```javascript
const output = document.querySelector("#output");

// 1. A function that calculates and returns
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// 2. A function that reads the page, calls the first one, and shows the answer
function convert() {
    const celsius = Number(document.querySelector("#celsius").value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    output.textContent = `${celsius} °C = ${fahrenheit} °F`;
}

// 3. The button connects the two
document.querySelector("#convertButton").addEventListener("click", convert);
```

**EN — Scope**

> A variable created **inside** a function only exists inside it:

```javascript
function test() {
    let secret = 42;
    console.log(secret);    // 42
}

test();
console.log(secret);        // ReferenceError: secret is not defined
```

> This is good news: two functions can use the same variable name without breaking each other.

**EN — Arrow functions**

> A shorter way to write a function. You will see it a lot in other people's code:

```javascript
// Normal
function double(n) {
    return n * 2;
}

// Arrow
const double2 = (n) => {
    return n * 2;
};

// Arrow, very short version (one line, returns automatically)
const double3 = (n) => n * 2;
```

> All three do exactly the same. At this level, use the normal one. Just learn to **read** the arrow version — it turns up inside `addEventListener` all the time.

**EN — Cutting a problem into pieces**

> A good function does **one thing** and its name says which one.

```javascript
function calculateVat(price) {
    return price * 0.21;
}

function calculateTotal(price) {
    return price + calculateVat(price);
}

function showInvoice(product, price) {
    output.innerHTML = `
        Product: ${product}<br>
        Price without VAT: ${price} euros<br>
        VAT: ${calculateVat(price)} euros<br>
        <strong>TOTAL: ${calculateTotal(price)} euros</strong>
    `;
}

showInvoice("Keyboard", 30);
```

**EN — Exercises**

> **Exercise 7.1.** Write a function `square(n)` that returns `n * n`. Add an input and a button so the user can test it with any number.
>
> **Exercise 7.2.** Write a function `isEven(n)` that returns `true` or `false`. Show the answer in the page as "Even" in green or "Odd" in orange.
>
> **Exercise 7.3.** Write a function `biggest(a, b, c)` that returns the biggest of three numbers. Three inputs, one button.
>
> **Exercise 7.4. Calculator.** Build the calculator below. One function per operation, all of them returning a value, plus one function that reads the inputs and shows the result. No repeated code.
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/07-functions/ex4.html)
>
> `[IMATGE: assets/unitats/programacio/web/javascript/07-functions/ex4.png — reutilitza js/04-dom/calculadora.png.]`
>
> **Exercise 7.5.** Write `celsiusToFahrenheit(c)` and `fahrenheitToCelsius(f)`. One page with two converters, side by side. Check that one undoes the other.
>
> **Exercise 7.6.** Write a function `finalPrice(price, discount)` that returns the price with the discount applied. If no discount is given, it should be 0. (Look up "default parameter".)
>
> **Exercise 7.7.** Write a function `countVowels(text)` that returns how many vowels a text has. The user types a sentence in an input and the page shows the count as they click the button.

**Solucions 7.3, 7.6 i 7.7:**

```javascript
// 7.3
function biggest(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

// 7.6
function finalPrice(price, discount = 0) {
    return price - (price * discount / 100);
}
// finalPrice(100, 20) -> 80      finalPrice(100) -> 100

// 7.7
function countVowels(text) {
    const vowels = "aeiou";
    let count = 0;
    for (const letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
```

**Prova 1 (en acabar `07-functions.html`, 1 h):** dir què mostra un codi donat · declarar variables i tipus · escriure una condició composta · trobar un element i canviar-li el text i l'estil · corregir 5 errors · escriure un bucle amb acumulador · traçar una taula de valors d'un bucle pas a pas.

**Mini-projecte 1 (en acabar `07-functions.html`) — EN:**

> **Mini-project 1: My toolbox page**
>
> One page with **at least eight small tools**. Each tool is one input (or two), one button, and one place where the answer appears. Behind each button there is **one function that returns a value**.
>
> Ideas: convert units, calculate a mark average, check if a word is a palindrome, count the words in a sentence, calculate a price with VAT and discount, give a random number between two values, say if a year is a leap year, draw a row of N stars, calculate how many days until a date.
>
> Rules:
> - every calculation must be a function that uses `return` (not one that writes in the page);
> - one separate function reads the inputs and shows the answer;
> - every function needs a comment above it saying what it does and what it returns;
> - clear names in camelCase, 4-space indentation;
> - **no errors in the console** when you use the page normally.

---

#### 3.5.8 `08-arrays.html` — *Arrays*

**Títols:** `What is an array` · `Reading and changing` · `length` · `Adding and removing` · `Searching` · `Going through an array` · `Drawing an array in the page` · `Useful methods` · `Exercises`

**EN — What is an array**

> An array is a **list of values** with one name. Each value has a position, called the **index**.

```javascript
const fruits = ["apple", "banana", "orange"];
const marks = [7, 4, 9, 10];
const mixed = ["Marta", 16, true];      // possible, but avoid it
const empty = [];
```

**EN — Reading and changing**

> **Indexes start at 0.** The first element is `[0]`, not `[1]`. This surprises everybody at first, and then it becomes normal.

```javascript
const fruits = ["apple", "banana", "orange"];

output.textContent = fruits[0];     // "apple"
output.textContent = fruits[2];     // "orange"
output.textContent = fruits[5];     // undefined (there is nothing there)

fruits[1] = "pear";                 // ["apple", "pear", "orange"]
```

> `[IMATGE: assets/unitats/programacio/web/javascript/08-arrays/indexes.png — dibuix de tres caselles en fila amb "apple", "banana", "orange" dins i els índexs 0, 1, 2 escrits davall de cada casella.]`

```
<!-- vf-callout type="recorda" -->
We wrote const fruits, and yet we changed an element. That is allowed: const
protects the *box*, not what is inside. You cannot do fruits = [...] again,
but you can change, add and remove elements.
```

**EN — length**

```javascript
const fruits = ["apple", "banana", "orange"];

output.textContent = fruits.length;                 // 3
output.textContent = fruits[fruits.length - 1];     // "orange", the last one
```

**EN — Adding and removing**

```javascript
const list = ["a", "b"];

list.push("c");         // add at the end        -> ["a", "b", "c"]
list.pop();             // remove the last one   -> ["a", "b"]
list.unshift("z");      // add at the start      -> ["z", "a", "b"]
list.shift();           // remove the first one  -> ["a", "b"]

list.splice(1, 1);      // remove 1 element starting at index 1 -> ["a"]
```

**EN — Searching**

```javascript
const names = ["Ana", "Luis", "Marta"];

names.includes("Luis");     // true
names.indexOf("Marta");     // 2
names.indexOf("Pere");      // -1  (it is not there)
```

> `indexOf` gives `-1` when it does not find it. Remember that number: `if (names.indexOf(x) === -1)` means "it is not in the list".

**EN — Going through an array**

```javascript
const marks = [7, 4, 9, 10];

// With for...of: simple, when you do not need the index
for (const mark of marks) {
    // ...
}

// With for: when you need the index
for (let i = 0; i &lt; marks.length; i++) {
    // `Student ${i + 1}: ${marks[i]}`
}
```

**EN — Drawing an array in the page**

> This is the pattern you will repeat for the rest of the unit and in your project. **One function that draws the whole list from the array**, called every time the data changes:

```javascript
const names = ["Ana", "Luis", "Marta"];
const output = document.querySelector("#output");

function draw() {
    let html = "<ul>";
    for (const name of names) {
        html += `<li>${name}</li>`;
    }
    html += "</ul>";
    output.innerHTML = html;
}

draw();
```

```javascript
// Add one and redraw
document.querySelector("#addButton").addEventListener("click", function () {
    const input = document.querySelector("#nameInput");
    const value = input.value.trim();

    if (value === "") {
        return;             // nothing typed: do nothing
    }

    names.push(value);
    input.value = "";
    draw();                 // the array changed, so we draw again
});
```

```
<!-- vf-callout type="consell" -->
Never change the page and the array separately. Change the ARRAY, then call
draw(). The array is the truth; the page is only a picture of it. If you
follow this rule your project will work. If you do not, you will spend hours
wondering why the screen and the data disagree.
```

> `.trim()` removes the spaces at the start and at the end. Without it, a user could add an item made only of spaces.

**EN — Useful methods**

```javascript
const words = ["one", "two", "three"];

words.join(", ");       // "one, two, three"
words.slice(0, 2);      // ["one", "two"]  (a copy, does not change the original)
words.reverse();        // ["three", "two", "one"]

const numbers = [10, 3, 25, 7];
numbers.sort((a, b) => a - b);      // [3, 7, 10, 25] from small to big
```

```
<!-- vf-callout type="atencio" -->
Plain sort() sorts as *text*: [10, 3, 25] becomes [10, 25, 3], because "1"
comes before "2". For numbers you always need sort((a, b) => a - b).
```

**EN — Exercises**

> **Exercise 8.1.** Create an array with the names of five classmates and draw it as a list in the page. Show the first, the last and the total number under it.
>
> **Exercise 8.2. Shopping list.** An input, an "Add" button and a list. Every click adds the text to the array and redraws the list. The empty field adds nothing.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/08-arrays/ex2.png — reutilitza js/08-llistes/01.png.]`
>
> **Exercise 8.3.** Add a "Remove last" button and a "Clear all" button to the previous exercise.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/08-arrays/ex3.png — reutilitza js/08-llistes/02.png.]`
>
> **Exercise 8.4.** With an array of 8 marks: draw them as a list, and under it show the average, how many passed and how many failed. Failed marks appear in red.
>
> `[IMATGE: assets/unitats/programacio/web/javascript/08-arrays/ex4.png — reutilitza js/08-llistes/03.png.]`
>
> **Exercise 8.5.** Write a function `contains(list, value)` that returns `true` or `false`, without using `includes`. Use it to tell the user whether the name they typed is in the list.
>
> **Exercise 8.6.** Write a function `noDuplicates(list)` that returns a new array with no repeated values. Show the original list and the clean one side by side.
>
> **Exercise 8.7.** A search box: as the user types, show only the names of the array that contain what they typed. (`.toLowerCase()` and `.includes()`)

**Solucions 8.5 i 8.6:**

```javascript
// 8.5
function contains(list, value) {
    for (const item of list) {
        if (item === value) {
            return true;
        }
    }
    return false;
}

// 8.6
function noDuplicates(list) {
    const result = [];
    for (const item of list) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
// noDuplicates([1, 2, 2, 3, 1, 4]) -> [1, 2, 3, 4]
```

---

#### 3.5.9 `09-objects.html` — *Objects*

**Títols:** `Why objects` · `Creating an object` · `Reading and changing` · `Adding and removing properties` · `Arrays of objects` · `Drawing cards from an array of objects` · `Going through an object` · `Exercises`

**EN — Why objects**

> An array is good for *many things of the same kind*. But how do you store **one student** with a name, an age and a mark?

```javascript
// Bad: what is position 1 again?
const student = ["Marta", 16, 8.5];

// Good: every value has a name
const student2 = {
    name: "Marta",
    age: 16,
    mark: 8.5
};
```

> An **object** is a group of **property: value** pairs.

**EN — Creating an object**

```javascript
const car = {
    brand: "Seat",
    model: "Ibiza",
    year: 2019,
    isElectric: false
};
```

> Properties are separated by commas. The last one does not need one (but it is allowed).

**EN — Reading and changing**

```javascript
car.brand;          // "Seat"
car["model"];       // "Ibiza"   (the same, other notation)

car.year = 2020;
car.colour;         // undefined: that property does not exist
```

> Use the dot `car.brand` normally. Use the brackets `car["brand"]` when the name of the property is in a variable.

**EN — Adding and removing properties**

```javascript
car.colour = "red";         // adds it
delete car.isElectric;      // removes it
```

**EN — Arrays of objects**

> This is the most useful structure in the whole course. It is how real data looks:

```javascript
const students = [
    { name: "Marta", age: 16, mark: 8.5 },
    { name: "Ahmed", age: 17, mark: 6 },
    { name: "Lucia", age: 16, mark: 9.5 }
];

students[0].name;       // "Marta"
students.length;        // 3
```

```javascript
// How many passed
let passed = 0;
for (const student of students) {
    if (student.mark >= 5) {
        passed++;
    }
}
output.textContent = `${passed} of ${students.length} passed.`;
```

```javascript
// Find one
function findStudent(list, name) {
    for (const student of list) {
        if (student.name === name) {
            return student;
        }
    }
    return null;
}
```

> `[IMATGE: assets/unitats/programacio/web/javascript/09-objects/array-of-objects.png — diagrama: una llista de tres caixes (índex 0, 1, 2) i dins de cada caixa les tres propietats name/age/mark amb els seus valors.]`

**EN — Drawing cards from an array of objects**

> The same pattern as lesson 8, but now each element has several properties, so each one becomes a **card**:

```javascript
const products = [
    { name: "Keyboard", price: 25, stock: 10 },
    { name: "Mouse", price: 15, stock: 0 },
    { name: "Monitor", price: 120, stock: 3 }
];

function draw() {
    let html = "";

    for (const product of products) {
        const colour = product.stock === 0 ? "red" : "green";
        html += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>${product.price} €</p>
                <p style="color: ${colour}">Stock: ${product.stock}</p>
            </div>
        `;
    }

    output.innerHTML = html;
}

draw();
```

```css
/* in your CSS file */
.card {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 5px;
    width: 150px;
}
```

> `[IMATGE: assets/unitats/programacio/web/javascript/09-objects/cards.png — captura de les tres targetes dibuixades, amb l'estoc 0 en roig.]`

**EN — Going through an object**

```javascript
const car2 = { brand: "Seat", model: "Ibiza", year: 2019 };

for (const key of Object.keys(car2)) {
    html += `${key}: ${car2[key]}<br>`;
}
```

> `Object.keys(obj)` gives you an array with the names of the properties. Here the bracket notation is needed, because the name is in the variable `key`.

**EN — Exercises**

> **Exercise 9.1.** Create an object for your favourite video game: title, studio, year, rating, and whether it is multiplayer. Draw it in the page as a card.
>
> **Exercise 9.2.** Create an array with 5 products (name, price, stock) and draw one card for each one.
>
> **Exercise 9.3.** Under the cards, show the total value of the stock (price × stock of each product, added up).
>
> **Exercise 9.4.** Write a function `cheapest(products)` that returns the object of the cheapest product. Highlight that card with a coloured border.
>
> **Exercise 9.5.** Write a function `outOfStock(products)` that returns an array with the names of the products with stock 0. Show them in a red list.
>
> **Exercise 9.6.** Two buttons: "Sort by price" and "Sort by name". Each one sorts the array and redraws the cards.
>
> **Exercise 9.7. Class list.** An array of students with name, age and mark. Draw a table. Marks under 5 appear in red. Under the table: average, best student and how many passed.

**Solucions 9.3, 9.4 i 9.6:**

```javascript
const products = [
    { name: "Keyboard", price: 25, stock: 10 },
    { name: "Mouse", price: 15, stock: 0 },
    { name: "Monitor", price: 120, stock: 3 },
    { name: "Cable", price: 5, stock: 40 },
    { name: "Webcam", price: 45, stock: 0 }
];

// 9.3
let total = 0;
for (const p of products) {
    total += p.price * p.stock;
}
output.textContent = `Total stock value: ${total} euros`;

// 9.4
function cheapest(list) {
    let best = list[0];
    for (const p of list) {
        if (p.price &lt; best.price) {
            best = p;
        }
    }
    return best;
}

// 9.6
document.querySelector("#sortByPrice").addEventListener("click", function () {
    products.sort((a, b) => a.price - b.price);
    draw();
});

document.querySelector("#sortByName").addEventListener("click", function () {
    products.sort((a, b) => a.name.localeCompare(b.name));
    draw();
});
```

---

#### 3.5.10 `10-events.html` — *Events*

> Esta lliçó ja no presenta `addEventListener` (això es fa en la 04): **l'aprofundix**. Ací entren l'objecte `event`, els events de teclat i d'`input`, i com posar un listener a molts elements de colp.

**Títols:** `What is an event` · `The events you will use` · `The event object` · `Events on inputs` · `Keyboard events` · `Many elements at once` · `Removing a listener` · `Common mistakes` · `Exercises`

**EN — What is an event**

> An **event** is something that happens in the page: the user clicks, types a letter, moves the mouse, chooses an option, sends a form.
>
> Your program does not "wait" for these things. Instead you say: *"when this happens, run this function"*. Then the browser calls your function at the right moment. You already did this with `click` in lesson 4; now we open the box.

**EN — The events you will use**

| Event | It fires when |
|---|---|
| `click` | the user clicks the element |
| `input` | the user types **one** character in a field |
| `change` | the user leaves the field, or picks an option in a `<select>` |
| `keydown` | the user presses a key |
| `submit` | a form is sent (lesson 12) |
| `mouseover` / `mouseout` | the mouse enters / leaves the element |

**EN — The event object**

> The browser gives your function an object with information about what happened:

```javascript
button.addEventListener("click", function (event) {
    console.log(event.type);        // "click"
    console.log(event.target);      // the element that was clicked
});
```

> The two you really need: `event.target` (which element fired it) and `event.preventDefault()` (stop the normal behaviour — we use it with forms in lesson 12).

**EN — Events on inputs**

```javascript
const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");

// input: fires on every key
input.addEventListener("input", function () {
    output.textContent = `Hello, ${input.value}`;
});

// change: fires when the user leaves the field or chooses an option
input.addEventListener("change", function () {
    output.textContent = `Final value: ${input.value}`;
});
```

> `input` is what makes a page feel alive: a live search, a character counter, a preview that updates as you type.

**EN — Keyboard events**

```javascript
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
```

> `event.key` gives the key as text: `"Enter"`, `"Escape"`, `"a"`, `"ArrowUp"`.
>
> Adding "and Enter also works" to a field takes three lines and makes your app feel professional.

**EN — Many elements at once**

```javascript
const buttons = document.querySelectorAll(".colour-button");

for (const button of buttons) {
    button.addEventListener("click", function (event) {
        document.body.style.backgroundColor = event.target.dataset.colour;
    });
}
```

```html
<button class="colour-button" data-colour="red">Red</button>
<button class="colour-button" data-colour="green">Green</button>
<button class="colour-button" data-colour="blue">Blue</button>
```

> One loop, one listener for each button. Inside, `event.target` tells you which one was clicked, and `dataset` reads any attribute that starts with `data-`. That is how you carry information from the HTML to your code without abusing the text of the button.

**EN — Removing a listener**

```javascript
function sayHello() {
    output.textContent = "Hello!";
}

button.addEventListener("click", sayHello);
button.removeEventListener("click", sayHello);      // only works with a NAMED function
```

> This only works if the function has a name. It is one more reason to prefer named functions over anonymous ones.

**EN — Common mistakes**

```javascript
// 1. Brackets: runs it now, listens for nothing
button.addEventListener("click", sayHello());       // WRONG
button.addEventListener("click", sayHello);         // right

// 2. Adding the listener inside another listener
//    -> every click adds one more, and the function runs 2, 3, 4 times.
//    Put your addEventListener at the top level, once.

// 3. Listening on an element that does not exist yet
//    -> if you create a button from JavaScript, add its listener
//       right after you create it (lesson 11).
```

**EN — Exercises**

> **Exercise 10.1.** A live character counter: as the user types in a field, show "17 / 100 characters", and turn it red over 100.
>
> **Exercise 10.2.** An input where, as you type, the text appears in capital letters in `#output`. (`.toUpperCase()`)
>
> **Exercise 10.3.** Six colour buttons that change the background of the page, built with one loop and `data-colour`.
>
> **Exercise 10.4.** A field and an "Add" button: every click adds what you typed to the list, and clears the field. Pressing Enter in the field does the same. The empty field adds nothing.
>
> **Exercise 10.5.** A `<select>` with three cities. When the user chooses one, the page shows a sentence about it (`change` event).
>
> **Exercise 10.6.** An image that changes when the mouse is over it and goes back when it leaves.
>
> **Exercise 10.7. Live search.** An array of 10 names drawn as a list, and a search box. As the user types, only the matching names stay on the screen.

**Solució 10.4:**

```javascript
const input = document.querySelector("#nameInput");
const button = document.querySelector("#addButton");
const items = [];

function draw() {
    let html = "<ul>";
    for (const item of items) {
        html += `<li>${item}</li>`;
    }
    html += "</ul>";
    document.querySelector("#output").innerHTML = html;
}

function addItem() {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    items.push(text);
    input.value = "";
    input.focus();          // the cursor goes back to the field
    draw();
}

button.addEventListener("click", addItem);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
```

---

#### 3.5.11 `11-elements.html` — *Creating and removing elements*

> Lliçó nova respecte de la v1: `createElement` eixia de la lliçó de DOM. Ací té molt més sentit, perquè ja es pot crear un element **i enganxar-li el seu listener** en el moment de crear-lo.

**Títols:** `innerHTML or createElement?` · `Creating an element` · `Building a list from an array` · `A button on every row` · `Removing elements` · `Why innerHTML is dangerous with user text` · `Exercises`

**EN — innerHTML or createElement?**

> Until now we built our lists with a string and `innerHTML`. That is fine, quick, and it works. But it has two limits:
>
> 1. You cannot attach an event to something that is only text in a string.
> 2. If the text comes from the user, `innerHTML` will run any HTML they typed. That is a real security problem.
>
> So we learn the other way: build the element as an **object**, and put it in the page.

**EN — Creating an element**

```javascript
const list = document.querySelector("#myList");

const item = document.createElement("li");      // 1. create it
item.textContent = "New task";                  // 2. fill it
list.appendChild(item);                         // 3. put it in the page
```

> Three steps, always the same: **create, fill, append**. Until step 3, the element exists only in memory and nobody sees it.

```javascript
const item = document.createElement("li");
item.textContent = "Important task";
item.classList.add("important");        // a class
item.style.color = "red";               // a style
item.dataset.id = 7;                    // information for later
list.appendChild(item);
```

**EN — Building a list from an array**

```javascript
const tasks = ["Study", "Shopping", "Football"];
const list = document.querySelector("#myList");

function draw() {
    list.innerHTML = "";                // empty it first!

    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    }
}

draw();
```

```
<!-- vf-callout type="atencio" -->
list.innerHTML = "" as the first line of draw() is not optional. Without it,
every time you draw you ADD the whole list again, and after three clicks you
have the same three tasks three times. This is the most reported bug of the
final project.
```

**EN — A button on every row**

> Now the payoff. Each row can carry its own delete button, with its own listener:

```javascript
function draw() {
    list.innerHTML = "";

    for (let i = 0; i &lt; tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", function () {
            tasks.splice(i, 1);     // remove it from the ARRAY
            draw();                 // and draw again
        });

        li.appendChild(button);
        list.appendChild(li);
    }
}
```

> Read the listener again: it does **not** remove the `li` from the screen. It removes the item from the **array** and redraws. The array is the truth; the screen is a picture of it. Same rule as lesson 8.

**EN — Removing elements**

```javascript
const item = document.querySelector("#myList li");
item.remove();                              // remove one element

document.querySelector("#myList").innerHTML = "";       // empty a container
```

> Use `.remove()` for one-off things (close a message, hide a card). For a list that comes from an array, always: change the array, redraw.

**EN — Why innerHTML is dangerous with user text**

```javascript
// The user types this in your "add task" field:
//     <img src="x" onerror="alert('I am in your page')">

list.innerHTML += `<li>${text}</li>`;       // the browser RUNS it

const li = document.createElement("li");
li.textContent = text;                      // safe: it is only text
list.appendChild(li);
```

> Rule: **`textContent` for anything the user typed. `innerHTML` only for HTML you wrote yourself.**

**EN — Exercises**

> **Exercise 11.1.** Rewrite exercise 10.4 (the add-item list) using `createElement` instead of `innerHTML`.
>
> **Exercise 11.2.** Add a "Delete" button to every row, that removes that item from the array and redraws.
>
> **Exercise 11.3.** Add a counter under the list: "4 items".
>
> **Exercise 11.4.** A "Gallery" page: an array of 6 image URLs, and a loop that creates 6 `<img>` elements with `createElement`. Clicking on one makes it bigger.
>
> **Exercise 11.5.** A table of students created with `createElement`: one `<tr>` per student, one `<td>` per property.
>
> **Exercise 11.6.** A "message box": a function `showMessage(text, type)` that creates a `<div>` with the class `ok` or `error`, puts it at the top of the page, and removes it by itself after 3 seconds. (`setTimeout(function () { ... }, 3000)`)

**Solució 11.6:**

```javascript
function showMessage(text, type) {
    const box = document.createElement("div");
    box.textContent = text;
    box.classList.add("message", type);

    document.body.prepend(box);

    setTimeout(function () {
        box.remove();
    }, 3000);
}

showMessage("Task added", "ok");
```

**Mini-projecte 2 (en acabar `11-elements.html`) — EN:**

> **Mini-project 2: A list that works**
>
> One page with a list of anything you like (films to watch, songs, shopping, homework). It must:
>
> - keep the data in an **array**;
> - add an item with a button **and** with Enter;
> - refuse an empty item;
> - draw the list with `createElement`, never with `innerHTML` for the user's text;
> - have a Delete button on every row that changes the array and redraws;
> - show a counter of items;
> - have a "Clear all" button that asks for confirmation (`confirm("Are you sure?")`).
>
> No `localStorage` yet: that comes in lesson 13, and then you will add it to this same page.

---

#### 3.5.12 `12-forms.html` — *Forms and validation*

**Títols:** `The form we will use` · `The submit event` · `preventDefault` · `Reading the fields` · `Validating` · `Showing good error messages` · `Marking the wrong fields` · `A complete example` · `Exercises`

**EN — The form we will use**

> Again, the HTML is given. You only work in `script.js`.

```html
<form id="signupForm">
    <p>
        <label for="name">Name</label>
        <input type="text" id="name">
    </p>
    <p>
        <label for="email">Email</label>
        <input type="text" id="email">
    </p>
    <p>
        <label for="age">Age</label>
        <input type="text" id="age">
    </p>
    <p>
        <label for="password">Password</label>
        <input type="password" id="password">
    </p>
    <button type="submit">Sign up</button>
</form>

<div id="messages"></div>
```

**EN — The submit event**

```javascript
const form = document.querySelector("#signupForm");

form.addEventListener("submit", function (event) {
    // ...
});
```

> The `submit` event fires on the **form**, not on the button. It fires both when you click the button and when the user presses Enter in a field — you get that for free.

**EN — preventDefault**

> By default, sending a form **reloads the page** and everything your JavaScript did is lost. We do not want that:

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();     // stop the normal behaviour
    // ... now our code runs quietly
});
```

> `event.preventDefault()` is the first line of almost every `submit` handler you will ever write. If your page blinks and empties when you press the button, you forgot it.

**EN — Reading the fields**

```javascript
const name = document.querySelector("#name").value.trim();
const email = document.querySelector("#email").value.trim();
const age = Number(document.querySelector("#age").value);
```

> Remember: `.value` always gives **text**. Convert it with `Number()` when you need a number.

**EN — Validating**

> To validate is to check that the data makes sense **before** using it.

```javascript
if (name === "") {
    // error: empty name
}

if (name.length &lt; 3) {
    // error: too short
}

if (!email.includes("@") || !email.includes(".")) {
    // error: it does not look like an email
}

if (isNaN(age) || age &lt; 16 || age > 99) {
    // error: not a valid age
}

if (password.length &lt; 8) {
    // error: too short
}
```

> `isNaN(x)` returns `true` when `x` is not a number. Useful after a `Number()` conversion.

**EN — Showing good error messages**

> A message must say **what** is wrong and **how to fix it**.
>
> | Bad | Good |
> |---|---|
> | "Error" | "Please write your name." |
> | "Invalid data" | "The age must be a number between 16 and 99." |
> | "Wrong email" | "The email must contain an @, for example marta@mail.com." |

**EN — Marking the wrong fields**

> A list of errors at the bottom is good. Marking the field itself is better:

```css
.wrong {
    border: 2px solid red;
    background-color: #ffecec;
}
```

```javascript
function clearMarks() {
    for (const input of document.querySelectorAll("input")) {
        input.classList.remove("wrong");
    }
}

function mark(id) {
    document.querySelector(id).classList.add("wrong");
}
```

> Call `clearMarks()` at the start of every check, so a field that has been fixed stops being red.

**EN — A complete example**

```javascript
const form = document.querySelector("#signupForm");
const messages = document.querySelector("#messages");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMarks();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const age = Number(document.querySelector("#age").value);
    const password = document.querySelector("#password").value;

    const errors = [];

    if (name.length &lt; 3) {
        errors.push("The name must have at least 3 letters.");
        mark("#name");
    }

    if (!email.includes("@") || !email.includes(".")) {
        errors.push("The email must contain an @ and a dot.");
        mark("#email");
    }

    if (isNaN(age) || age &lt; 16 || age > 99) {
        errors.push("The age must be a number between 16 and 99.");
        mark("#age");
    }

    if (password.length &lt; 8) {
        errors.push("The password must have at least 8 characters.");
        mark("#password");
    }

    messages.innerHTML = "";

    if (errors.length > 0) {
        const list = document.createElement("ul");

        for (const error of errors) {
            const li = document.createElement("li");
            li.textContent = error;
            list.appendChild(li);
        }

        messages.appendChild(list);
        messages.className = "error";
    } else {
        messages.textContent = `Welcome, ${name}! Your account is ready.`;
        messages.className = "ok";
        form.reset();       // empties all the fields
    }
});
```

> Notice the pattern: we collect **all** the errors in an array and show them together. It is much better than stopping at the first one and making the user try five times.

> `[IMATGE: assets/unitats/programacio/web/javascript/12-forms/validation-errors.png — captura del formulari enviat amb dades incorrectes: la llista roja de tres errors davall i els tres camps amb la vora roja.]`

**EN — Exercises**

> **Exercise 12.1.** Make the form of the example work, with the four checks and the red borders.
>
> **Exercise 12.2.** Add a "repeat password" field and check that both are the same.
>
> **Exercise 12.3.** Validate as the user types, not only when they send: use the `input` event to remove the red border as soon as the field becomes correct.
>
> **Exercise 12.4. Login.** User and password. If the user is `admin` and the password is `smx2027`, show "Welcome". If not, show "Wrong user or password" and count the failed attempts. After 3, disable the button (`button.disabled = true`).
>
> Download the starter file [here|download](unitats/programacio/web/javascript/exercises/12-forms/ex4.html)
>
> **Exercise 12.5. Sign-up with a summary.** When all the data is correct, do not just say "welcome": draw a card with everything the user typed, and a "Change data" button that brings the form back.

**Solució 12.4:**

```javascript
const form = document.querySelector("#loginForm");
const button = form.querySelector("button");
const messages = document.querySelector("#messages");
let attempts = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.querySelector("#user").value.trim();
    const pass = document.querySelector("#pass").value;

    if (user === "admin" && pass === "smx2027") {
        messages.textContent = "Welcome!";
        messages.className = "ok";
        return;
    }

    attempts++;
    messages.textContent = `Wrong user or password. Attempt ${attempts} of 3.`;
    messages.className = "error";

    if (attempts >= 3) {
        button.disabled = true;
        messages.textContent = "Too many attempts. The form is blocked.";
    }
});
```

```
<!-- vf-callout type="atencio" -->
This login is only an exercise. Never put a real password in JavaScript:
anybody can read your code with F12. Real passwords are checked on the
server, and you will see that in another module.
```

**Prova 2 (en acabar `12-forms.html`, 1 h):** trobar un element i canviar-ne el text i l'estil · crear elements des d'un array · escriure un `addEventListener` correcte · corregir 5 errors en un codi de DOM/events · validar tres camps d'un formulari i marcar-los.

---

#### 3.5.13 `13-localstorage.html` — *Saving data with localStorage*

**Títols:** `The problem` · `What localStorage is` · `Saving and reading` · `Only text: JSON` · `The save-and-draw pattern` · `Seeing it in DevTools` · `Exercises`

**EN — The problem**

> Everything your program stores in variables disappears when the page reloads. Your to-do list, your score, the user's settings: gone. Try it with your mini-project 2 — add three items and press F5.

**EN — What localStorage is**

> `localStorage` is a small storage space that the browser keeps **on the user's computer**. What you save there is still there tomorrow, and next month.
>
> Three things to know:
> - It belongs to one website. Another site cannot read your data.
> - It only stores **text**.
> - It has about 5 MB of space. Plenty for our projects.
>
> It is not a database. It is not safe for secrets. It is perfect for "remember what the user had".

**EN — Saving and reading**

```javascript
localStorage.setItem("username", "Marta");

const name = localStorage.getItem("username");

localStorage.removeItem("username");
localStorage.clear();           // deletes everything of this site
```

> If the key does not exist, `getItem` returns `null`:

```javascript
const name = localStorage.getItem("username");

if (name === null) {
    output.textContent = "Nobody has been here before.";
} else {
    output.textContent = `Welcome back, ${name}!`;
}
```

**EN — Only text: JSON**

> `localStorage` cannot store an array or an object directly. Watch:

```javascript
const tasks = ["Study", "Shopping"];
localStorage.setItem("tasks", tasks);
localStorage.getItem("tasks");      // "Study,Shopping" -> a string!
```

> The solution is **JSON**: a standard way of writing data as text.

```javascript
// Save: from array to text
localStorage.setItem("tasks", JSON.stringify(tasks));

// Read: from text back to array
const saved = JSON.parse(localStorage.getItem("tasks"));
saved[0];       // "Study"  -> a real array again
```

> Remember the pair:
> - `JSON.stringify(something)` → turns it into text. Use it when you **save**.
> - `JSON.parse(text)` → turns it back. Use it when you **read**.
>
> It works with arrays of objects too, which is what your project will need.

```
<!-- vf-callout type="atencio" -->
JSON.parse(null) gives null, and then your loop crashes. Always check first:
const list = JSON.parse(localStorage.getItem("tasks")) || [];
The || [] means "if there is nothing saved, start with an empty array".
```

**EN — The save-and-draw pattern**

> This is the skeleton of your final project. Learn it well:

```javascript
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addButton");
const list = document.querySelector("#taskList");

// 1. Load what was saved (or an empty array)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. One function that draws the whole list from the array
function draw() {
    list.innerHTML = "";

    for (let i = 0; i &lt; tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            tasks.splice(i, 1);
            save();
            draw();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
    }
}

// 3. One function that saves
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 4. Add
button.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    tasks.push(text);
    save();
    draw();
    input.value = "";
});

// 5. Draw on load
draw();
```

> **An array with the data, one function that draws it, one function that saves it.** Every time the array changes: `save()` and `draw()`. Always in that order, always both.

**EN — Seeing it in DevTools**

> F12 → tab **Application** (Chrome) or **Storage** (Firefox) → *Local Storage*. You can see everything you saved, and delete it while testing.

> `[IMATGE: assets/unitats/programacio/web/javascript/13-localstorage/devtools.png — captura de la pestanya Application/Storage de DevTools amb la clau "tasks" i el seu valor JSON visible.]`

**EN — Exercises**

> **Exercise 13.1.** Ask the user's name the first time and save it. The next time the page loads, greet them directly, with no question. Add a "Forget me" button.
>
> **Exercise 13.2.** A click counter that survives a reload.
>
> **Exercise 13.3.** Add `localStorage` to your mini-project 2. This is the important one: your list must still be there after F5.
>
> **Exercise 13.4.** Add a "Clear all" button that empties the array, saves and redraws.
>
> **Exercise 13.5.** Save an array of objects: products with name and price. Draw them as cards and keep them after a reload.
>
> **Exercise 13.6. Dark mode.** A button that adds or removes the class `dark` on `<body>`, and remembers the choice in `localStorage`.

**Solució 13.1:**

```javascript
const output = document.querySelector("#output");
const nameInput = document.querySelector("#nameInput");
const saveButton = document.querySelector("#saveButton");
const forgetButton = document.querySelector("#forgetButton");

const name = localStorage.getItem("username");

if (name === null) {
    output.textContent = "Hello! What is your name?";
} else {
    output.textContent = `Welcome back, ${name}!`;
}

saveButton.addEventListener("click", function () {
    const value = nameInput.value.trim();

    if (value === "") {
        return;
    }

    localStorage.setItem("username", value);
    output.textContent = `Nice to meet you, ${value}!`;
});

forgetButton.addEventListener("click", function () {
    localStorage.removeItem("username");
    output.textContent = "I have forgotten you. Reload the page.";
});
```

---

#### 3.5.14 `14-project.html` — *Final project*

**EN — Choose one**

> You build **one** small application. Choose one of these two, or propose your own idea to your teacher before you start.

**EN — Option A: Quiz app**

> A quiz of 8 to 10 questions about a topic you like: music, football, films, computers, history.
>
> **It must have:**
> - the questions stored in an **array of objects**, each one with the question, an array of options and the correct answer;
> - one question shown at a time, with its options as buttons **created from JavaScript**;
> - immediate feedback: green if correct, red if wrong, and the correct answer shown;
> - a score that goes up;
> - a "Next question" button;
> - a final screen with the score and a message that depends on it;
> - a "Play again" button that restarts everything;
> - the **best score** saved in `localStorage`.

```javascript
// The data structure to start from
const questions = [
    {
        question: "Which language gives structure to a web page?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 0
    },
    {
        question: "What does CPU mean?",
        options: ["Central Power Unit", "Central Processing Unit", "Computer Personal Unit", "Control Process Unit"],
        correct: 1
    }
];
```

**EN — Option B: To-do list**

> A task manager you would actually use. It is your mini-project 2, finished properly.
>
> **It must have:**
> - a field and a button to add a task (and Enter also works);
> - the tasks stored in an **array of objects**, each one with the text, whether it is done, and a priority;
> - a list on the screen, drawn from the array with `createElement`;
> - a way to mark a task as done (it appears crossed out);
> - a button to delete a task;
> - a counter: "3 of 7 done";
> - filter buttons: All / Pending / Done;
> - everything saved in `localStorage`, so the list is there when you come back;
> - the empty field must not add anything.

> `[IMATGE: assets/unitats/programacio/web/javascript/14-project/quiz.png — captura d'un exemple acabat del quiz: pregunta, quatre botons d'opció, marcador i barra de progrés.]`

> `[IMATGE: assets/unitats/programacio/web/javascript/14-project/todo.png — captura d'un exemple acabat de la llista de tasques: camp de text, botó afegir, tres tasques (una ratllada), comptador i filtres.]`

**EN — The HTML and CSS you are given**

> You get a working `index.html` and a `style.css` for each option. You may change them if you want, but you will **not** be marked on the design. **All the marks come from your JavaScript.**

```
Fitxers a preparar:
unitats/programacio/web/javascript/exercises/14-project/quiz-starter.html
unitats/programacio/web/javascript/exercises/14-project/quiz-starter.css
unitats/programacio/web/javascript/exercises/14-project/todo-starter.html
unitats/programacio/web/javascript/exercises/14-project/todo-starter.css
```

```
<!-- vf-callout type="consell" -->
Before writing any code, draw your app on paper. Which boxes are on the
screen? Which data do you need? Which functions? Fifteen minutes on paper
save you two hours of confusion.
```

**EN — Requirements for the code**

> - At least **6 functions**, each one doing one job, with clear names.
> - At least one **array of objects**.
> - At least one **loop** that builds elements in the page with `createElement`.
> - At least two **`addEventListener`**.
> - **`localStorage`** working.
> - The rule of the unit: the array is the truth, `draw()` paints it, `save()` stores it.
> - `textContent` for anything the user typed. No `innerHTML` with user data.
> - Indentation of 4 spaces, camelCase names, and a comment above every function.
> - **No errors in the console.** Open F12 before you deliver.

**EN — Milestones**

> | Stage | What must be ready |
> |---|---|
> | Stage 1 | Your choice, the paper drawing, and the data structure written in JavaScript |
> | Stage 2 | The data works: functions to add, delete, score, calculate, tested one by one |
> | Stage 3 | It works on the screen: `draw()`, events, `localStorage` |
> | Stage 4 | Tested, no console errors, README, zip, presentation |

**EN — Delivery**

> - A zip called `surname-name-project.zip`.
> - A `README.txt` with: your name, which option you chose, how to use the app, what was hardest, and one thing you would add if you had more time.
> - A 3-minute presentation: show it working, and explain **one function** of your code line by line.

---

#### 3.5.15 `15-next.html` — *What comes next*

**EN — You already know how to program**

> If you can read the code you wrote at the start of this unit and understand it, you are a programmer. The rest is more of the same, with bigger words.

**EN — Things that exist and you have not seen**

> You do not have to learn these now. Just know the names, so you are not scared when you meet them:
>
> - **Asynchronous code and `fetch`**: asking another computer on the internet for data (the weather, a list of films) and doing something with the answer when it arrives. This is the next big step.
> - **Promises and `async/await`**: the way we write that waiting so it is readable.
> - **Classes**: a way to build your own kinds of objects, with their own functions inside.
> - **Modules**: splitting your code into several files that import each other.
> - **Frameworks** (React, Vue, Angular): big toolboxes for building large applications. They are all written in JavaScript. If you know plain JavaScript well, you can learn any of them.
> - **Node.js**: JavaScript running outside the browser, on a server.
> - **Git**: keeping the history of your code and working with other people. You will thank yourself for learning this early.

**EN — How to keep learning**

> - Build something you actually want. Nothing teaches like needing the thing to work.
> - Read other people's code, even when you do not understand all of it.
> - When you are stuck, explain your problem out loud to a friend or to an empty chair. Half the time you find the bug while you explain it.
> - Use documentation, not only videos: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the reference.

**EN — Useful links**

> - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
> - [JavaScript.info](https://javascript.info/) — free and very well written
> - [W3Schools JavaScript](https://www.w3schools.com/js/default.asp)

### 3.6 Rúbrica — Unitat B

**Pes de la nota final:**

| Element | Pes |
|---|---|
| Exercicis de classe (entregats i corregits) | 20 % |
| Mini-projecte 1 (pàgina de ferramentes, funcions) | 10 % |
| Mini-projecte 2 (llista dinàmica amb DOM) | 10 % |
| Prova 1 (bàsics del llenguatge + DOM) | 15 % |
| Prova 2 (events, elements i formularis) | 15 % |
| Projecte final | 25 % |
| Presentació i actitud | 5 % |

**Rúbrica del projecte final (25 %), sobre 10 punts:**

| Criteri | 0–1 (insuficient) | 2 (correcte) | 3 (molt bé) | Punts |
|---|---|---|---|---|
| Funciona | Falla o no arranca | Fa el que demana l'enunciat | Cap error de consola, casos límit controlats (camp buit, llista buida) | /3 |
| Estructura del codi (funcions, noms, comentaris) | Tot seguit, noms com `x`, `a1` | Funcions separades i noms clars | Cada funció fa una cosa, comentaris útils, gens de codi repetit | /2 |
| Dades (array d'objectes) i lògica | No usa estructures o les usa malament | Array d'objectes correcte | Recorreguts i càlculs elegants i correctes | /2 |
| DOM, events i `localStorage` | No hi ha interacció | Events i persistència bàsics | Dibuixat des de les dades (`draw()`/`save()`), persistència robusta | /2 |
| Entrega, README i presentació | Fora de termini o incompleta | Correcta | Explica el seu codi amb seguretat i sap què milloraria | /1 |
| | | | **Total** | **/10** |

**Nota:** el projecte que llança un error a la consola en l'ús normal no es puntua fins que es corregeix.

### 3.7 Temporització orientativa

| Lliçó | Sessions (55 min) | Nota |
|---|---|---|
| 01 First program | 2 | Muntar l'entorn i els dos fitxers se'n menja una |
| 02 Variables | 2 | |
| 03 Operators | 2 | |
| 04 **DOM** | 4 | La lliçó clau. No córrer |
| 05 Conditions | 3 | |
| 06 Loops | 4 | La que més costa |
| 07 Functions | 3 | + Prova 1 + mini-projecte 1 (2 sessions) |
| 08 Arrays | 3 | |
| 09 Objects | 3 | |
| 10 Events | 2 | |
| 11 Elements | 3 | + mini-projecte 2 (2 sessions) |
| 12 Forms | 3 | + Prova 2 (1 sessió) |
| 13 localStorage | 2 | |
| 14 Project | 6 | En classe, amb seguiment per fites |
| 15 Next | 1 | |
| | **~48 sessions** | més 6 de proves i mini-projectes |

---

## 4. Imatges i fitxers d'exercici

> **Revisió v2:** bona part d'estes imatges **ja existixen al repo**, en les unitats actuals de `html/`, `css/` i `js/`. Les taules de reaprofitament són §2.4.4 (unitat A) i §3.4.3 (unitat B). Ací només queda el que **cal produir de nou**.

Mentre una imatge no existisca, **no poses el `<vf-img>`**: deixa el marcador comentat a l'HTML. Una imatge trencada queda pitjor que no tindre-la.

### 4.1 Unitat A — imatges noves (`assets/unitats/programacio/web/html-css/`)

| Fitxer | Què ha de mostrar | Pàgina |
|---|---|---|
| `00-unit-cover.png` | *(opcional)* Portada: navegador amb una pàgina senzilla + el seu codi al costat | `index.html` |
| `01-browser-server.png` | Diagrama navegador ↔ servidor amb les dues fletxes | `01-first-page.html` |
| `01-vscode.png` | Captura de VS Code amb `index.html` obert i l'arbre de carpetes | `01-first-page.html` |
| `01-devtools.png` | DevTools obert (Elements) amb l'`h1` seleccionat i ressaltat | `01-first-page.html` |
| `02-head-body.png` | Diagrama de dues caixes head (invisible) / body (visible) | `02-structure.html` |
| `04-relative-paths.png` | Arbre de carpetes + fletxes de cada `href` de l'exemple | `04-lists-links.html` |
| `05-folder-structure.png` | Explorador de VS Code amb l'estructura `my-site/` completa | `05-images.html` |
| `06-table-parts.png` | Taula renderitzada amb etiquetes de colors: `tr`, `th`, `td` | `06-tables.html` |
| `07-validation.png` | Missatge natiu del navegador en un camp `required` buit | `07-forms.html` |
| `08-semantic-layout.png` | Wireframe amb header/nav/main/section/article/aside/footer | `08-semantic.html` |
| `08-validator.png` | Resultat del validador W3C amb 2 errors | `08-semantic.html` |
| `09-before-after.png` | La mateixa pàgina sense CSS i amb CSS, costat a costat | `09-css-basics.html` |
| `10-google-fonts.png` | fonts.google.com amb el `<link>` a copiar | `10-text-colors.html` |
| `11-box-model.png` | Diagrama clàssic del box model (content/padding/border/margin) | `11-box-model.html` |
| `14-devtools-mobile.png` | DevTools en mode dispositiu a 375px | `14-responsive.html` |

**Total noves unitat A: 15** (1 opcional). Eren 25 en la v1.

**Ja cobertes per material existent** (només cal copiar el fitxer i, si de cas, retallar-lo):

| Necessitat de la v1 | Es cobrix amb |
|---|---|
| `01-first-result.png`, `03-headings.png` i altres captures d'etiquetes | `assets/unitats/programacio/web/html/01html.png` … `21html.png` — **cal triar-les una a una**: no hi ha inventari de quina imatge és quina |
| `07-input-types.png` | `assets/.../css/inputs.png` |
| `12-flex-basic.png` | `display_defecte.png` + `display_flex_wrap.png` |
| `12-justify-content.png` | `display_flex_wrap_center.png`, `display_flex_wrap_space_between.png`, `display_flex_wrap_space_around.png`, `display_align_center.png` |
| `12-navbar.png` | `css/menu.png` |
| `13-gallery.png` | `display_grid_1.png`, `display_grid_2.png` |
| `14-responsive-compare.png` | `mq1-1.jpeg`, `mq1-2.jpeg`, `mq1-3.jpeg` |
| `16-project-wireframe.png`, `16-project-example.png` | `projecte_login.png`, `projecte_signup.png`, `projecte_main1.png`, `projecte_main2.png` |

### 4.2 Unitat B — imatges noves (`assets/unitats/programacio/web/javascript/`)

Una carpeta per lliçó, com fa la unitat `js/` actual.

| Fitxer | Què ha de mostrar | Pàgina |
|---|---|---|
| `00-unit-cover.png` | *(opcional)* Navegador amb una pàgina que ha canviat en fer clic, i les 3 línies de JS que ho fan | `index.html` |
| `01-first-program/two-files.png` | VS Code amb `index.html` i `script.js` en la mateixa carpeta | `01-first-program.html` |
| `01-first-program/console-error.png` | Consola amb un `ReferenceError`, assenyalant fitxer i línia | `01-first-program.html` |
| `04-dom/dom-tree.png` | Arbre del DOM d'una pàgina senzilla amb el seu HTML al costat | `04-dom.html` |
| `06-loops/for-anatomy.png` | El `for` amb 3 fletxes: inici / condició / pas | `06-loops.html` |
| `06-loops/ex5.png` | *(opcional)* Tauler d'escacs dibuixat amb dos bucles | `06-loops.html` |
| `08-arrays/indexes.png` | Tres caselles amb els índexs 0, 1, 2 davall | `08-arrays.html` |
| `09-objects/array-of-objects.png` | Llista de 3 caixes amb les propietats dins de cadascuna | `09-objects.html` |
| `09-objects/cards.png` | Tres targetes de producte dibuixades des d'un array | `09-objects.html` |
| `12-forms/validation-errors.png` | Formulari amb la llista roja de 3 errors i els camps marcats | `12-forms.html` |
| `13-localstorage/devtools.png` | Pestanya Application/Storage amb la clau `tasks` i el seu JSON | `13-localstorage.html` |
| `14-project/quiz.png` | Exemple acabat del quiz | `14-project.html` |
| `14-project/todo.png` | Exemple acabat de la llista de tasques | `14-project.html` |

**Total noves unitat B: 13** (2 opcionals). N'eren 13 en la v1, però ara a més es reaprofiten **20 captures** de la unitat `js/` (§3.4.3), que abans no es comptaven.

### 4.3 Fitxers d'exercici a preparar

No són imatges, però són el gruix del treball. Tots els de la columna «origen» ja existixen: cal **copiar-los i traduir els textos visibles a anglés**.

| Unitat | Fitxers a copiar i traduir | Fitxers nous a escriure |
|---|---|---|
| A (HTML+CSS) | 12 exercicis de `unitats/programacio/web/css/` (+ els seus `_solved`) | starters de les lliçons 01–06 i 09 |
| B (JavaScript) | 10 exercicis de `assets/.../js/04-dom/exercicis/` i `js/05-control/exercicis/` | starters de 06, 07, 08, 09, 10, 11, 13 + els 4 fitxers del projecte final |

### 4.4 Imatges de targeta (reutilitzades, no cal fer-les)

- `assets/html.png` → targeta de la unitat A
- `assets/css.png` → targetes de les lliçons de CSS
- `assets/js.png` → targeta de la unitat B
- `assets/code.jpg` → targeta del projecte final

### 4.5 Guió de còpia del material existent

Les captures i els fitxers d'exercici **es copien** a les carpetes noves; no s'enllacen des de la ruta antiga. Motiu: les unitats velles (`html/`, `css/`, `js/`) han de poder moure's o retirar-se algun dia sense trencar les noves. Són ~55 PNG petits: la duplicació al repositori és irrellevant.

Executar des de l'arrel del repositori. **Els noms de destí ja són els que apareixen als marcadors `[IMATGE: ...]` de les seccions 2.5 i 3.5**, així que després de córrer açò els `vf-img` funcionen sense tocar res.

```bash
# ---------- 0. Carpetes ----------
mkdir -p assets/unitats/programacio/web/html-css/{05-images,07-forms,08-semantic,10-text-colors,11-box-model,12-flexbox,13-grid,14-responsive,16-project,_triatge-html}
mkdir -p assets/unitats/programacio/web/javascript/{01-first-program,03-operators,04-dom,05-conditions,06-loops,07-functions,08-arrays,09-objects,12-forms,13-localstorage,14-project}
mkdir -p unitats/programacio/web/html-css/exercises/{07-forms,08-semantic,10-text-colors,11-box-model,12-flexbox,13-grid,14-responsive,16-project}
mkdir -p unitats/programacio/web/javascript/exercises/{04-dom,05-conditions,07-functions,12-forms,14-project}

# ---------- 1. Imatges unitat A ----------
A=assets/unitats/programacio/web/html-css
C=assets/unitats/programacio/web/css

cp $C/informatica.png                       $A/05-images/sample.png
cp $C/inputs.png                            $A/07-forms/ex2.png
cp $C/inputs.png                            $A/10-text-colors/ex2.png
cp $C/smx.png                               $A/08-semantic/ex1.png
cp $C/personal.png                          $A/10-text-colors/ex1.png
cp $C/pelicula.png                          $A/11-box-model/ex1.png
cp $C/aniversari.png                        $A/11-box-model/ex2.png

cp $C/display_defecte.png                   $A/12-flexbox/no-flex.png
cp $C/display_flex_wrap.png                 $A/12-flexbox/flex-wrap.png
cp $C/display_flex_wrap_center.png          $A/12-flexbox/justify-center.png
cp $C/display_flex_wrap_space_between.png   $A/12-flexbox/justify-space-between.png
cp $C/display_flex_wrap_space_around.png    $A/12-flexbox/justify-space-around.png
cp $C/display_align_center.png              $A/12-flexbox/align-center.png
cp $C/menu.png                              $A/12-flexbox/ex1.png
cp $C/paisos.png                            $A/12-flexbox/ex2.png
cp $C/grup_musica.png                       $A/12-flexbox/ex3.png

cp $C/display_grid_1.png                    $A/13-grid/grid-1.png
cp $C/display_grid_2.png                    $A/13-grid/grid-2.png
cp $C/escacs.png                            $A/13-grid/ex1.png

cp $C/mq1-1.jpeg                            $A/14-responsive/width-1.jpeg
cp $C/mq1-2.jpeg                            $A/14-responsive/width-2.jpeg
cp $C/mq1-3.jpeg                            $A/14-responsive/width-3.jpeg

cp $C/projecte_login.png                    $A/16-project/login.png
cp $C/projecte_signup.png                   $A/16-project/signup.png
cp $C/projecte_main1.png                    $A/16-project/main-1.png
cp $C/projecte_main2.png                    $A/16-project/main-2.png
cp $C/joc1.png $C/joc2.png $C/joc3.png $C/joc4.png $C/joc_flux.png  $A/16-project/

# Les 21 captures d'HTML no tenen inventari: es deixen en _triatge-html/
# i es reparteixen a ma per les lliçons 01-08 (vore la nota de sota).
cp assets/unitats/programacio/web/html/*.png $A/_triatge-html/

# ---------- 2. Imatges unitat B ----------
B=assets/unitats/programacio/web/javascript
J=assets/unitats/programacio/web/js

cp $J/01-js-basic/01.png    $B/01-first-program/01.png
cp $J/01-js-basic/02.png    $B/01-first-program/02.png
cp $J/01-js-basic/03.png    $B/01-first-program/03.png
cp $J/01-js-basic/04.png    $B/01-first-program/04.png

cp $J/03-operadors/01.png   $B/03-operators/01.png

cp $J/04-dom/01.png         $B/04-dom/ex1.png
cp $J/04-dom/02.1.png       $B/04-dom/ex2-1.png
cp $J/04-dom/02.2.png       $B/04-dom/ex2-2.png
cp $J/04-dom/03.png         $B/04-dom/ex3.png
cp $J/04-dom/04.png         $B/04-dom/ex4.png
cp $J/04-dom/calculadora.png $B/07-functions/ex4.png

cp $J/05-control/if.png           $B/05-conditions/if.png
cp $J/05-control/else.png         $B/05-conditions/else.png
cp $J/05-control/ifelseifelse.png $B/05-conditions/elseif.png
cp $J/05-control/ex3.png          $B/05-conditions/ex3.png
cp $J/05-control/ex4.png          $B/05-conditions/ex4.png
cp $J/05-control/ex5.png          $B/05-conditions/ex5.png
cp $J/05-control/notafinal.png    $B/05-conditions/ex7.png

cp $J/06-repeticions/ex1.1.png $B/06-loops/ex1-1.png
cp $J/06-repeticions/ex1.2.png $B/06-loops/ex1-2.png
cp $J/06-repeticions/ex2.png   $B/06-loops/ex2.png
cp $J/06-repeticions/ex3.png   $B/06-loops/ex3.png
cp $J/06-repeticions/ex4.png   $B/06-loops/ex7.png

cp $J/08-llistes/01.png $B/08-arrays/ex2.png
cp $J/08-llistes/02.png $B/08-arrays/ex3.png
cp $J/08-llistes/03.png $B/08-arrays/ex4.png

# ---------- 3. Fitxers d'exercici unitat A ----------
EA=unitats/programacio/web/html-css/exercises
S=unitats/programacio/web/css

cp $S/inputs.html            $EA/07-forms/ex2.html
cp $S/inputs_solved.html     $EA/07-forms/ex2_solved.html
cp $S/smx_solved.html        $EA/08-semantic/ex1_solved.html
cp $S/personal.html          $EA/10-text-colors/ex1.html
cp $S/pelicula.html          $EA/11-box-model/ex1.html
cp $S/pelicula_solved.html   $EA/11-box-model/ex1_solved.html
cp $S/aniversari.html        $EA/11-box-model/ex2.html
cp $S/aniversari_solved.html $EA/11-box-model/ex2_solved.html
cp $S/menu.html              $EA/12-flexbox/ex1.html
cp $S/menu_solved.html       $EA/12-flexbox/ex1_solved.html
cp $S/paisos.html            $EA/12-flexbox/ex2.html
cp $S/paisos_solved.html     $EA/12-flexbox/ex2_solved.html
cp $S/grup_musica.html       $EA/12-flexbox/ex3.html
cp $S/grup_musica_solved.html $EA/12-flexbox/ex3_solved.html
cp $S/escacs.html            $EA/13-grid/ex1.html
cp $S/escacs_solved.html     $EA/13-grid/ex1_solved.html
cp $S/media-queries-sample.html $EA/14-responsive/sample.html
cp $S/joc_preguntes.html     $EA/16-project/quiz-layout.html
cp $S/projecte.html          $EA/16-project/project.html

# ---------- 4. Fitxers d'exercici unitat B ----------
EB=unitats/programacio/web/javascript/exercises

cp $J/04-dom/exercicis/companys.html        $EB/04-dom/ex1.html
cp $J/04-dom/exercicis/tamany.html          $EB/04-dom/ex2.html
cp $J/04-dom/exercicis/arreglar.html        $EB/04-dom/ex3.html
cp $J/04-dom/exercicis/dades_personals.html $EB/04-dom/ex4.html

cp $J/05-control/exercicis/semafor.html     $EB/05-conditions/ex1.html
cp $J/05-control/exercicis/edat.html        $EB/05-conditions/ex2.html
cp $J/05-control/exercicis/contrasenya.html $EB/05-conditions/ex3.html
cp $J/05-control/exercicis/any_traspas.html $EB/05-conditions/ex4.html
cp $J/05-control/exercicis/sumarrestar.html $EB/05-conditions/ex5.html
cp $J/05-control/exercicis/formulari.html   $EB/05-conditions/ex6.html

# ---------- 5. Neteja ----------
# Duplicat antic sense cap referencia al lloc (comprovat amb grep sobre tots
# els .html del repositori: cap enllac ni cap vf-img l'apunta).
rm -rf "assets/unitats/programacio/web/js copy"
```

**Després de córrer el guió, queda treball a mà:**

| Tasca | Detall |
|---|---|
| Traduir 19 fitxers d'exercici | Textos visibles a anglés. L'HTML, el CSS i l'estructura del `<script>` no es toquen |
| Repartir `_triatge-html/*.png` | 21 captures sense inventari. Obrir-les una a una, decidir a quina lliçó (01–08) va cada una, moure i renombrar. Esborrar `_triatge-html/` quan estiga buida |
| Escriure els `_solved` que falten | `personal.html`, `joc_preguntes.html` i `projecte.html` no en tenen. `smx_solved.html` només té la versió resolta: cal fabricar-ne l'enunciat |
| Traduir `media-queries.html` | És una pàgina d'explicació amb plantilla `vf-*`, no un exercici. El seu contingut va dins de la lliçó 14, no com a fitxer a banda |

---

## 5. Checklist d'implementació

Quan es decidisca crear les pàgines, en este ordre:

1. **Carpetes** — són **dues** carpetes de unitat noves dins de `unitats/programacio/web/` (no tres: HTML i CSS són un sol mòdul, vore §0), cadascuna amb la seua d'exercicis, més les dues d'imatges:
   - [ ] `unitats/programacio/web/html-css/` i `unitats/programacio/web/html-css/exercises/`
   - [ ] `unitats/programacio/web/javascript/` i `unitats/programacio/web/javascript/exercises/`
   - [ ] `assets/unitats/programacio/web/html-css/` (una subcarpeta per lliçó)
   - [ ] `assets/unitats/programacio/web/javascript/` (una subcarpeta per lliçó)
   Les carpetes actuals `html/`, `css/` i `js/` **no es toquen** i seguixen enllaçades des d'on estiguen.
2. **Reaprofitament primer** — abans d'escriure cap pàgina, executar el guió de còpia de **§4.5**. Crea les carpetes, copia les ~55 captures i els 19 fitxers d'exercici amb els noms de destí definitius, i esborra el duplicat `js copy/`. És el que dóna volum a les unitats amb menys esforç, i condiciona quines imatges cal produir.
   - [ ] Guió de §4.5 executat
   - [ ] 19 fitxers d'exercici traduïts a anglés
   - [ ] `_triatge-html/` repartida per les lliçons 01–08 i esborrada
   - [ ] `_solved` que falten, escrits (`personal`, `joc_preguntes`, `projecte`, i l'enunciat de `smx`)
3. **Pàgines** — copiar la plantilla de la secció 1 en cada fitxer. `<base href="../../../../">` en totes. `<title>` real (taules 2.4 i 3.4).
4. **Índex de cada pàgina** — `<div id="vf-index" levels="2,3"></div>` just davall del `vf-title level="1"` en totes les lliçons (són pàgines llargues; és el criteri de la revisió estètica del 2026-09-03).
5. **Peu de navegació** — la fila de 3 botons de la secció 1.1 al final de cada lliçó, amb els enllaços correctes. Compte amb la numeració de la unitat B: ha canviat respecte de la v1.
6. **Codi** — passar **tot** el codi HTML pel `html-helper.html` abans d'enganxar-lo dins de `<vf-code language="html">`. En el JS, escapar només els `<` i `>` que hi haja (per exemple `i &lt; 10`). En esta v2 hi ha molt més JS amb `<` per culpa dels bucles: revisa-ho bloc a bloc.
7. **Exercicis** — patró `vf-callout type="exercici"` + `vf-details summary="Show the solution"` (secció 1.2), i enllaç de descàrrega del starter quan n'hi haja (§2.4.3 / §3.4.2).
8. **Imatges** — mentre no existisquen, deixar el `<vf-img>` comentat amb el text del marcador dins del comentari, per a saber què falta.
9. **Enllaços des de fora**
   - [ ] `cursos/smx-awe.html` — les dues `vf-card` (secció 2.4.1)
   - [ ] `unitats/programacio/index.html` — les dues `vf-card`
   - [ ] `unitats/index.html` — les dues `vf-card`
10. **Provar** — `python3 -m http.server 8000` a l'arrel. Recórrer les 34 pàgines noves i comprovar: cap 404 a la consola, el `#vf-index` es genera, els `vf-code` estan ressaltats, els botons del peu porten on toca, i **cada fitxer d'exercici descarregable obri i funciona**.
11. **No cal tocar `header.html`**: no es crea cap component nou. Totes les pàgines usen `vf-title`, `vf-content`, `vf-row`, `vf-col`, `vf-text`, `vf-list`, `vf-img`, `vf-btn`, `vf-code`, `vf-callout`, `vf-details`, `vf-steps`, `vf-card` i `vf-hr`, tots ja registrats.

### Resum de volum

| | Unitat A (HTML+CSS) | Unitat B (JavaScript) | Total |
|---|---|---|---|
| Pàgines `.html` de lliçó | 18 | 16 | **34** |
| Imatges noves a produir | 15 | 13 | **28** |
| Imatges existents a reaprofitar | ~14 + les 21 de `html/` a triar | ~20 | ~55 |
| Fitxers d'exercici a copiar i traduir | 12 (+ `_solved`) | 10 | 22 |
| Exercicis amb solució | ~65 | ~70 | ~135 |
| Proves | 2 | 2 | 4 |
| Mini-projectes | 2 | 2 | 4 |
| Projecte final | 1 | 1 | 2 |

### Diferències v1 → v2 (resum per al propietari)

| | v1 | v2 |
|---|---|---|
| Lliçó del DOM en JS | 09 de 14 | **04 de 15** |
| `console.log` com a canal d'eixida | lliçons 01–08 | cap: `document.write` en 01–03, DOM des de la 04 |
| Lliçons de JS sense res visible en pantalla | 8 | **0** |
| Pàgines de la unitat B | 15 | 16 (`createElement` passa a lliçó pròpia, la 11) |
| Exercicis amb fitxer de partida descarregable | cap | 22 |
| Material existent reaprofitat | cap | 22 exercicis + ~55 imatges |
| Imatges noves a produir | 38 | 28 |

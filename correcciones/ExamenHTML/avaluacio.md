# Avaluació — HTML exam · The Repair Café (prova d'HTML, sessió 18)

- **Curs / grup:** 2n SMX — Aplicacions web (SA HTML-CSS)
- **Fonts:** `unitats/programacio/web/html-css/exam-html/enunciat.html`; guia `exam-html/solucio-k7q2x/correccio.html` (rúbrica PH1-PH4 de la SA); indicacions del professor.
- **Data de correcció:** 2026-11-06. Revisió 2026-11-10 (nota de la prova ponderada pel pes el 2026-11-11): recorrecció amb l'escala 0-3 del quadern (Baix 0 · Mitjà-baix 3,33 · Mitjà-alt 6,67 · Alt 10) i amb la rúbrica reajustada a l'escala (Mitjà-alt = ho fa bé amb errors; Alt = complet). Es mantenen el recompte d'elements, parts, camps, etiquetes i errors de cada alumne de la primera correcció; només canvia a quin nivell correspon.
- **Mètode:** s'ha llegit el codi de les dues pàgines i s'ha passat cada pàgina pel validador W3C (Nu HTML Checker 26.11.4, en local, només errors). Les entregues estan descomprimides en `entregues/`.

### Decisions del professor

1. **Primer examen: criteri benèvol.** No es valora el nom del `.zip` ni de la carpeta, els `<br>` de més, no posar un `<p>` per camp del formulari, ni escriure els textos en espanyol en lloc d'anglés.
2. **`mailto:` i `&amp;` no es penalitzen** (no els fa ningú). El `target="_blank"` de l'enllaç a w3.org **sí** compta com a defecte en PH2. Amb la rúbrica 0-3, les entitats (`&copy;`) ja no formen part de cap nivell de PH1.
3. **`required`: no compta per al camp complet** (recorrecció del 2026-11-06). Un camp és complet amb `label` enllaçada i tipus correcte. El `required` es comenta al feedback, però no baixa el nivell de PH3.
4. **`title` i comentari: segons la guia.** `<title>Document</title>` compta com un element de l'esquelet que falta; el comentari amb nom i grup és requisit de l'Alt de PH1.
5. **`ol` fora del `li`:** defecte lleu en PH2. En PH4 no es compten eixos errors del validador.
6. **Un mateix error no es penalitza dues vegades:** en PH4 no es compten els errors del validador d'una cosa que ja ha restat en PH2 o PH3 (llista, taula, imatge, `label for` d'un camp, tipus d'un camp).
7. No es compta com a defecte `target="_blank"` sense `rel="noopener"` (l'enunciat no ho demana).

## Rúbrica

Rúbrica de la prova d'HTML de la SA (escala 0-3), amb els llindars de la guia de correcció. «Pes en el criteri»: 1 = bàsic, 2 = intermedi, 3 = avançat (el projecte, R1-R4, hi pesa 3).

| # | Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|---|
| PH1 | Estructura del document | CA1.1 | 2 | Falten la majoria dels 12 elements, o les pàgines no es veuen. | Falten 3 o més dels 12 elements, o una etiqueta mal niada en trenca una part. | Falten com a màxim 2 elements i les dues pàgines es veuen senceres. | Els 12 elements, encapçalaments en ordre, noms de fitxer exactes, codi sagnat i comentari amb nom i grup. |
| PH2 | Llistes, taules, imatges i enllaços | CA1.2 | 2 | Cap part. | 1 part. | 2 o 3 parts (o les 4 amb 3 o més defectes). | Les 4 parts, amb com a màxim 2 defectes. |
| PH3 | Formulari | CA1.3 | 2 | Cap camp complet. | 1-3 camps complets. | 4-6 camps complets. | 6 o 7 camps complets, en dos `fieldset` amb `legend`, i el botó dins del `form`. |
| PH4 | Semàntica i validació | CA1.4 | 1 | Cap de les 7 etiquetes. | 1-3 etiquetes, o més de 6 errors. | 4 o més etiquetes i com a màxim 6 errors. | 6 o 7 etiquetes i com a màxim 2 errors. |

- **12 elements d'esquelet** (6 per pàgina): `<!DOCTYPE html>`, `html lang`, `head`, `meta charset="UTF-8"`, `title` amb el seu text, `body`.
- **4 parts de PH2:** llista niada, taula (`th` en capçalera i hores, `colspan="3"`), imatge (ruta relativa i `alt` descriptiu), enllaços (menú ×2, *Book your place*, correu, w3.org amb `target="_blank"`).
- **7 camps de PH3** (complet = `label` enllaçada + tipus correcte; el `required` no compta): Name `text`, Email `email`, Device `select`, Problem `textarea`, Charger 2 `radio` amb el mateix `name`, Preferred day `date` **sense** `required`, Accept `checkbox`.
- **7 etiquetes de PH4:** `header`, `nav`, `main`, `section`, `article` (*Last year*), `footer`, `figure` amb `figcaption`.

**Valors per al càlcul:** cada fila es puntua de 0 a 3 i val nivell × 10 ÷ 3: Baix = 0 · Mitjà-baix = 3,33 · Mitjà-alt = 6,67 · Alt = 10 (com el quadern).
**Nota de la prova** (informativa, com la calcula el quadern) = mitjana ponderada pel pes en el criteri: (2·PH1 + 2·PH2 + 2·PH3 + 1·PH4) ÷ 7, amb dos decimals. Per a la qualificació compten les notes per criteri (més avall).

## Resum de notes

Nivell de cada fila (0-3) i nota de la prova (0-10). Entre parèntesis, la nota de la primera correcció (escala antiga).

| Alumne/a | PH1 | PH2 | PH3 | PH4 | Nota de la prova |
|---|---|---|---|---|---|
| Miriam Algarra Fernandez | 2 | 3 | 3 | 1 | **8,10** (6,4) |
| Lluís Andrés Corral | 2 | 2 | 2 | 2 | **6,67** (6,5) |
| Aitor Angullo Vico | 2 | 3 | 3 | 3 | **9,05** (7,0) |
| Didac Beltrán Balaguer | 2 | 2 | 2 | 0 | **5,72** (4,9) |
| Dario Fandos Miró | 2 | 2 | 2 | 2 | **6,67** (5,5) |
| Pau García Sanahuja | 2 | 3 | 3 | 2 | **8,57** (7,0) |
| Izan Gordón Miravet | 3 | 3 | 3 | 2 | **9,52** (8,0) |
| Pablo López Sevilla | 2 (?) | 2 | 2 | 1 | **6,19** (4,9) |
| Nazhan Mingarro Sales | 2 | 2 | 2 | 1 | **6,19** (4,9) |

Mitjana: 7,41 · Rang: 5,72 – 9,52

## Notes per criteri (per al quadern)

De moment cada criteri només té l'indicador de la prova, així que la nota provisional del criteri és la de la fila. Quan s'avalue el projecte: CA1.1 = (2·PH1 + 3·R1) ÷ 5, CA1.2 i CA1.3 igual, CA1.4 = (1·PH4 + 3·R4) ÷ 4.

| Alumne/a | CA1.1 (PH1) | CA1.2 (PH2) | CA1.3 (PH3) | CA1.4 (PH4) |
|---|---|---|---|---|
| Miriam Algarra Fernandez | 6,67 | 10 | 10 | 3,33 |
| Lluís Andrés Corral | 6,67 | 6,67 | 6,67 | 6,67 |
| Aitor Angullo Vico | 6,67 | 10 | 10 | 10 |
| Didac Beltrán Balaguer | 6,67 | 6,67 | 6,67 | 0 |
| Dario Fandos Miró | 6,67 | 6,67 | 6,67 | 6,67 |
| Pau García Sanahuja | 6,67 | 10 | 10 | 6,67 |
| Izan Gordón Miravet | 10 | 10 | 10 | 6,67 |
| Pablo López Sevilla | 6,67 | 6,67 | 6,67 | 3,33 |
| Nazhan Mingarro Sales | 6,67 | 6,67 | 6,67 | 3,33 |

## Correccions

### Miriam Algarra Fernandez

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Esquelet complet, `lang="en"`, comentari amb nom i grup (`event.html:11`), encapçalaments en ordre i `&copy;`. | Les dues pàgines tenen `<title>Document</title>`: posa `SMX Repair Café` i `Join the Repair Café`. |
| PH2 | Llistes, taules, imatge, enllaços | Alt | 10 | Taula perfecta (`th` en les hores i `colspan="3"`), imatge amb `alt` descriptiu i `figcaption`, menú, *Reserva aquí* i w3.org amb `target="_blank"`. | Les subllistes van **dins** del `li`: `<li>Hardware <ol>…</ol></li>` (`event.html:38-47`). |
| PH3 | Formulari | Alt | 10 | Els 7 camps amb `label` enllaçada i tipus correcte, el dia sense `required` (molt bé), dos `fieldset` amb `legend` i el botó dins del formulari. | El `required` dels ràdios l'has posat a un `label` (`join.html:53`): va a un dels `input type="radio"`. Obri un sol `<form>` al principi i tanca'l al final (ara n'hi ha dos i cap tancat). |
| PH4 | Semàntica i validació | Mitjà-baix | 3,33 | Uses les 7 etiquetes: `header`, `nav`, `main`, `section`, `article`, `footer` i `figure`. | Falta tancar l'`article` de *Què arreglem?* (`event.html:36`) i això arrossega errors fins al final. A `join.html`: `min`/`max` no valen en un `text` (usa `minlength`/`maxlength`) i els dos `form`. Són 9 errors; per a Mitjà-alt el màxim és 6. |

**Nota de la prova: 8,10**

**Feedback:**

Has fet servir totes les etiquetes semàntiques que tocaven, la taula està perfecta (les hores amb `th` i el descans amb `colspan="3"`) i la imatge té un `alt` que la descriu de veritat. El formulari està quasi complet: els camps tenen el `label` enllaçat i el tipus correcte, i no has posat `required` en el dia, que era opcional.

El que més t'ha baixat és la validació. Un `</article>` que falta a `event.html` fa que el validador trobe errors fins al final de la pàgina, i a `join.html` hi ha dos `<form>`: n'ha d'haver un de sol, obert abans del primer `fieldset` i tancat després del botó. El `required` dels ràdios va en un `input`, no en el `label`.

Per a la propera: canvia `Document` pel títol de cada pàgina i passa sempre el validador abans d'entregar.

### Lluís Andrés Corral

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Els 12 elements i els dos títols, encapçalaments en ordre, codi sagnat i `&copy;`. | Falta el comentari amb el teu nom i grup al principi del `body`. |
| PH2 | Llistes, taules, imatge, enllaços | Mitjà-alt | 6,67 | Taula perfecta, imatge amb ruta relativa, `alt` descriptiu i `figcaption`, i menú correcte. | Les subllistes van dins del `li` (`event.html:31-41`). *Book your place* té `href=""`: ha d'anar a `join.html` (l.79). L'enllaç a w3.org s'ha d'obrir en una pestanya nova: `target="_blank"` (l.83). |
| PH3 | Formulari | Mitjà-alt | 6,67 | 6 camps amb `label` enllaçada i tipus correcte; els ràdios tenen el mateix `name`. Dos `fieldset` amb `legend`. | El `<form>` està buit (`join.html:20`): ha d'embolcallar tots els camps i el botó. Falta `required` en el dispositiu, el problema, els ràdios i la casella. Els `label` dels ràdios apunten a `charger`, però els `id` són `yes` i `no`. |
| PH4 | Semàntica i validació | Mitjà-alt | 6,67 | `header`, `main`, `footer` i `figure` amb `figcaption` ben posats en `event.html`. | Falten `nav` per al menú, una `section` per a cada part i un `article` per a *Last year*. A `join.html` el `main` va dins d'un `fieldset`: el `main` ha d'embolcallar tot el contingut principal. |

**Nota de la prova: 6,67**

**Feedback:**

L'estructura de les pàgines està molt ben feta: els dos títols, els encapçalaments en ordre i el codi ben sagnat. La taula és correcta i la imatge té un `alt` que la descriu i el seu `figcaption`.

El formulari no funciona perquè `<form action="#"></form>` està buit: obri el `form` abans del primer `fieldset` i tanca'l després del botó `Send`. Afig `required` en tots els camps menys el dia, i en els ràdios fes que cada `label for` coincidisca amb l'`id` del seu ràdio (`for="yes"`, `for="no"`).

Per a la propera: posa el menú dins d'un `nav`, cada part en una `section`, *Last year* en un `article`, i fes que *Book your place* porte a `join.html`.

### Aitor Angullo Vico

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Esquelet complet, encapçalaments en ordre, codi sagnat i `&copy;`. | Les dues pàgines tenen `<title>Document</title>`. Falta el comentari amb nom i grup. |
| PH2 | Llistes, taules, imatge, enllaços | Alt | 10 | Taula perfecta, imatge amb `alt` i `figcaption`, menú i *Book your place* correctes. | Has fet tres `ul` separades (`event.html:42-58`): ha de ser una sola `ul` amb tres `li`. L'enllaç a w3.org té `href="#"` (l.105): posa `href="https://www.w3.org"`. |
| PH3 | Formulari | Alt | 10 | Tots els camps tenen `label` enllaçada, 6 amb el tipus correcte, dos `fieldset` amb `legend` i els ràdios amb el mateix `name`. | Cap camp té `required`: posa'l en tots menys el dia. L'email ha de ser `type="email"` (`join.html:39`). Al `select`, *Desktop* i *PC* són una sola opció: *Desktop PC*. |
| PH4 | Semàntica i validació | Alt | 10 | Les 7 etiquetes ben posades i `event.html` sense cap error. | A `join.html` el `<form>` embolcalla el `header` i es tanca abans del `</main>` (l.12 i 80): posa el `form` dins del `main`, després del `h2`. |

**Nota de la prova: 9,05**

**Feedback:**

`event.html` passa el validador sense cap error i té totes les etiquetes semàntiques: `header`, `nav`, `main`, `section`, `article`, `footer` i `figure`. La taula està perfecta i la imatge porta el seu `alt` i el `figcaption`.

Al formulari, cap camp té `required`, i per això es pot enviar buit. Posa'l en tots menys el dia preferit, i canvia l'email a `type="email"`. El `<form>` ha d'anar dins del `main`, no embolcallant el `header`.

Per a la propera: una sola `ul` per a la llista, l'enllaç de w3.org amb la seua adreça real i el títol de cada pàgina en lloc de `Document`.

### Didac Beltrán Balaguer

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Doctype, `lang="en"`, `head`, `meta charset` i `body` en les dues pàgines. Encapçalaments en ordre. | Les dues pàgines tenen `<title>Document</title>`. El teu nom va en un comentari (`<!-- Didac Beltrán 2SMX -->`), no en un `h1`. El codi no està sagnat. |
| PH2 | Llistes, taules, imatge, enllaços | Mitjà-alt | 6,67 | Taula perfecta (`th` en les hores, `colspan="3"`). Menú, *Book your place* i w3.org enllaçats. | Les subllistes van dins del `li`, i sobra el `<ol>` de la línia 37 i el `</a>` de la 33. La imatge ha de ser `images/pc.svg` (sense canviar-li el nom) i `width="100"` sense `px` (l.20). L'enllaç a w3.org necessita `target="_blank"`. |
| PH3 | Formulari | Mitjà-alt | 6,67 | Nom, email, dispositiu, problema i dia complets. Tots els camps tenen el tipus correcte (`email`, `select`, `textarea`, `radio`, `date`, `checkbox`) i hi ha dos `fieldset` amb `legend`. | Cap camp té `required`. Els ràdios han de tindre el **mateix** `name` (`name="charger"`), i els `label for` han de coincidir amb l'`id` (`for="yes"`, no `Yes`; la casella és `for="accept"`, no `Esports`). El `<form>` va abans del primer `fieldset` i es tanca després del botó. |
| PH4 | Semàntica i validació | Baix | 0 | Has posat un `figcaption` per a la imatge. | No hi ha cap etiqueta semàntica: posa `header` (títol i menú), `nav`, `main`, una `section` per part, `article` per a *Last year*, `footer`, i el `img` amb el `figcaption` dins d'un `figure`. |

**Nota de la prova: 5,72**

**Feedback:**

Saps fer les parts de contingut: la taula és perfecta, amb les hores com a `th` i el descans amb `colspan="3"`, i al formulari has triat el tipus correcte per a cada camp. Els enllaços del menú i *Book your place* funcionen.

El que et falta és l'estructura semàntica: sense `header`, `nav`, `main`, `section`, `article` i `footer` la pàgina és només una llista d'etiquetes. Al formulari, afig `required` a tots els camps menys el dia, dona el mateix `name` als dos ràdios i fes que cada `label for` siga igual que l'`id` del seu camp (majúscules incloses).

Per a la propera: no canvies el nom de la imatge (`images/pc.svg`), posa el títol de cada pàgina en lloc de `Document` i passa el validador abans d'entregar.

### Dario Fandos Miró

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Esquelet complet en `event.html` amb el seu títol, encapçalaments en ordre, codi sagnat i `&copy;`. | `join.html` té `<title>Document</title>`: posa `Join the Repair Café`. Falta el comentari amb nom i grup. |
| PH2 | Llistes, taules, imatge, enllaços | Mitjà-alt | 6,67 | Taula perfecta i imatge amb ruta relativa (`images/pc.svg`). | Els enllaços porten la ruta del teu ordinador (`file:///home/darfanmir/…`, `event.html:16-17, 132`): escriu només `event.html` i `join.html`, perquè en un altre ordinador no funcionen. L'enllaç a w3.org té `href=""`: posa `https://www.w3.org` i `target="_blank"`. Les subllistes van dins del `li`. |
| PH3 | Formulari | Mitjà-alt | 6,67 | Nom, email, dispositiu, problema i dia tenen `label` enllaçada i el tipus correcte. | No hi ha `<form>` ni `fieldset`. Cap camp té `required`. Falten els ràdios del carregador i la casella d'acceptar. El botó `Send` ha d'anar dins del `form`, no al `footer`. |
| PH4 | Semàntica i validació | Mitjà-alt | 6,67 | `header`, `main`, `section` i `footer` ben posats. | El menú va dins d'un `nav`. *Last year* és un `article` dins del `main`, no al `footer`. La imatge necessita el seu `figcaption` dins del `figure`. A `join.html` sobren dos `</article>` (l.39 i 65). |

**Nota de la prova: 6,67**

**Feedback:**

La pàgina de l'event té bona estructura: el seu títol, `header`, `main`, `section` i `footer`, el codi ben sagnat i la taula perfecta. Als camps del formulari que has fet, el `label` està enllaçat i el tipus és el correcte (`email`, `select`, `textarea`, `date`).

Els enllaços apunten a `file:///home/darfanmir/...`: només funcionen al teu ordinador. Escriu-los relatius (`href="join.html"`). Al formulari falta el `<form>` que ho embolcalla tot, els dos `fieldset`, els ràdios del carregador, la casella d'acceptar i el `required` en els camps obligatoris.

Per a la propera: menú dins d'un `nav`, *Last year* en un `article` dins del `main`, i el `figcaption` de la imatge.

### Pau García Sanahuja

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Els 12 elements, cada pàgina amb el seu títol, encapçalaments en ordre i `&copy;`. Comentari amb nom i grup a `join.html`. | A `event.html` el `<body>` està dins del `<header>` i es tanca a la línia 18 (l.10-19): el `body` ha d'embolcallar-ho tot. Posa també el comentari a `event.html`. Per això no arriba a Alt. |
| PH2 | Llistes, taules, imatge, enllaços | Alt | 10 | Llista niada perfecta, taula correcta, imatge amb `figcaption`, menú i *Reserva tu plaza*. | L'enllaç a w3.org necessita `target="_blank"`. L'`alt` pot descriure més el dibuix que «Foto de un pc». |
| PH3 | Formulari | Alt | 10 | Nom, dispositiu, problema, ràdios (mateix `name`, cada un amb `label`), dia i casella complets. Dos `fieldset` amb `legend` i el botó dins del `form`. | `type="gmail"` no existeix (`join.html:31`): és `type="email"`. Falta `required` en el `select` (l.38). |
| PH4 | Semàntica i validació | Mitjà-alt | 6,67 | Les 7 etiquetes ben posades, `article` per a *El año pasado* inclòs. `join.html` molt ben estructurat. | A `event.html`, el `body` mal col·locat dona 5 errors del validador i sobra un `</main>` (l.104). |

**Nota de la prova: 8,57**

**Feedback:**

Has fet servir totes les etiquetes semàntiques al seu lloc, la llista niada està perfecta (els `ol` dins del `li`) i la taula també. `join.html` és la pàgina més ben estructurada: el formulari té els dos `fieldset`, els ràdios amb el mateix `name` i el botó dins del `form`.

El `<body>` d'`event.html` està dins del `<header>`: obri'l just després del `</head>` i tanca'l abans del `</html>`, i esborra el `</main>` que sobra al final. Al formulari, l'email és `type="email"` (`gmail` no és un tipus) i al `select` li falta `required`.

Per a la propera: a la frase de l'event falta que és gratuït i obert a tothom, i l'enllaç a w3.org s'ha d'obrir en una pestanya nova.

### Izan Gordón Miravet

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Alt | 10 | Esquelet complet amb els dos títols, comentari amb nom i grup, codi sagnat, encapçalaments en ordre i `&copy;`. | — |
| PH2 | Llistes, taules, imatge, enllaços | Alt | 10 | Llista niada perfecta, taula correcta, imatge amb `alt` i `figcaption`, i w3.org amb `target="_blank"`. | *Book your place* és un enllaç intern: sense `target="_blank"` (`event.html:88`). |
| PH3 | Formulari | Alt | 10 | Els 7 camps complets: `label` enllaçada, tipus correcte i `required` en tots menys el dia. Dos `fieldset` amb `legend`. | — |
| PH4 | Semàntica i validació | Mitjà-alt | 6,67 | `header`, `nav`, `main`, `section`, `footer` i `figure` ben posats; `event.html` sense cap error. | *Last year* és un `article`, no un `aside`. A `join.html` el `</form>` va després del `</article>` (l.66-75): tanca'l abans, dins del mateix `article`. Això dona 3 errors del validador. |

**Nota de la prova: 9,52**

**Feedback:**

Molt bona prova. L'estructura de les dues pàgines és completa, amb el comentari, el codi ben sagnat i els títols correctes, i el formulari és perfecte: tots els camps amb el `label` enllaçat, el tipus que toca i el `required` només on cal.

L'únic que et baixa és on tanques el formulari: el `</form>` va després del `</article>` i del `aside`, i el validador dona 3 errors. Tanca'l dins del mateix `article`, després del botó `Send`. *Last year* és una notícia que es pot publicar sola: va en un `article`, no en un `aside`.

Un detall: *Book your place* porta a una pàgina de la mateixa web, així que no ha d'obrir pestanya nova.

### Pablo López Sevilla

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt (?) | 6,67 | Doctype, `lang="en"`, `head` i `meta charset` en les dues pàgines. `join.html` està ben estructurada. Uses `&copy;`. | A `event.html` el `<body>` està al final i buit (l.95-97): ha d'anar just després del `</head>` i embolcallar tot el contingut. Les dues pàgines tenen `<title>Document</title>`. |
| PH2 | Llistes, taules, imatge, enllaços | Mitjà-alt | 6,67 | Llista niada ben pensada, taula amb `th` i `colspan="3"`, imatge amb `alt` descriptiu, menú i *rellena tu lugar*. | La `ul` es tanca amb `</ol>` (l.36), i per això la resta de la pàgina queda dins de la llista. La fila del dinar necessita el seu `<tr>` (l.51). L'enllaç a w3.org necessita `target="_blank"`. |
| PH3 | Formulari | Mitjà-alt | 6,67 | Nom, email, dispositiu, dia i casella complets. Dos `fieldset` amb `legend` i el botó dins del `form`. | Cap camp té `required`. Els ràdios han de tindre el mateix `name`, i els `label` han d'apuntar al seu `id` (ara diuen `T-shirt`). El `label` del problema diu `for="problema"`, però l'`id` és `comment`. |
| PH4 | Semàntica i validació | Mitjà-baix | 3,33 | Has posat un `footer`. | Falten `header`, `nav`, `main`, `section`, `article` (*El año pasado*) i el `figcaption` dins del `figure`. |

**Nota de la prova: 6,19**

**Feedback:**

Saps fer la llista niada (els `ol` dins del `li`) i la taula, amb les hores com a `th` i el descans amb `colspan="3"`. La imatge té un `alt` que la descriu bé i el formulari té els dos `fieldset` i el botó dins del `form`.

Revisa com obris i tanques les etiquetes: a `event.html` la `ul` es tanca amb `</ol>` i el `<body>` està al final de tot, buit. Al formulari, posa `required` en tots els camps menys el dia, dona el mateix `name` als dos ràdios i fes que cada `label for` siga igual que l'`id` del seu camp.

Per a la propera: afig les etiquetes semàntiques (`header`, `nav`, `main`, `section`, `article`, `footer`) i el títol de cada pàgina, i passa el validador abans d'entregar.

### Nazhan Mingarro Sales

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| PH1 | Estructura | Mitjà-alt | 6,67 | Esquelet complet, encapçalaments en ordre, codi sagnat i `&copy;`. | Les dues pàgines tenen `<title>Document</title>`. Falta el comentari amb nom i grup. |
| PH2 | Llistes, taules, imatge, enllaços | Mitjà-alt | 6,67 | Llista amb les subllistes, imatge amb `alt` i `figcaption`. | A la taula, l'hora va en una cel·la `th` pròpia i el descans és `colspan="3"` (l.60-72). El menú està creuat: *Home* va a `event.html` i *Join us* a `join.html` (l.15-16). *Book your place* és un sol enllaç a `join.html`. La imatge no està al costat de la pàgina: posa-la a `images/pc.svg`. Falta `target="_blank"` en w3.org. Les subllistes van dins del `li`. |
| PH3 | Formulari | Mitjà-alt | 6,67 | Nom, email, dispositiu i dia complets. Dos `fieldset` amb `legend`. | No hi ha `<form>`. Falta `required` en nom, dispositiu, problema, ràdios i casella. Els ràdios no tenen `name` ni `id`. Els `label for` no coincideixen amb l'`id` (`comentari` / `coment`, `Esports` / `accept`). |
| PH4 | Semàntica i validació | Mitjà-baix | 3,33 | `footer` i `figure` amb `figcaption`. | Falten `header`, `nav`, `main`, `section` i `article` (*Last year* va dins del `main`, no al `footer`). |

**Nota de la prova: 6,19**

**Feedback:**

Has fet la llista amb les subllistes, la imatge amb el seu `alt` i el `figcaption`, i el codi està ben sagnat. Al formulari, l'email i el dia estan complets i els camps van en dos `fieldset` amb el seu `legend`.

Revisa la taula: cada hora va en la seua pròpia cel·la `th` i el descans ocupa les tres columnes (`colspan="3"`). Al formulari falta el `<form>` que ho embolcalla tot, el `required` en els camps obligatoris, i un `name` igual per als dos ràdios amb un `id` per a cada un.

Per a la propera: posa les etiquetes semàntiques (`header`, `nav`, `main`, `section`, `article`), revisa que el menú porte a la pàgina correcta i posa el títol de cada pàgina en lloc de `Document`.

## Incidències per al professor

- **El que falla quasi tothom** (i com s'ha tractat):
  - `mailto:`: 0 de 9. No penalitzat (decisió 2).
  - `&amp;`: 0 de 9. No penalitzat (decisió 2).
  - `target="_blank"` en w3.org: només Izan i Miriam (Aitor el posa, però amb `href="#"`). Compta com a defecte.
  - `required`: cap en Aitor, Dario, Didac i Pablo; 1 en Nazhan; 2 en Lluís. Primer es va corregir segons la guia (6 Insuficients en PH3, mitjana 5,5); després el professor va decidir que no compte per al camp complet (decisió 3).
  - `<title>Document</title>`: 6 de 9 en almenys una pàgina.
  - `ol` fora del `li`: 6 de 9. Només resta en PH2.
- **Casos límit (escala 0-3):**
  - Didac Beltrán (**5,72**): és la nota més baixa. PH4 és Baix perquè no hi ha cap etiqueta semàntica (el `figcaption` està sense `figure`). Qualsevol fila que baixe un nivell el deixa per davall de 5. Si es comptara el `figcaption` com una etiqueta, PH4 pujaria a Mitjà-baix i la nota a 6,19.
  - Pablo López (?): el `<body>` d'`event.html` està escrit però al final i buit. S'ha comptat com a present (Mitjà-alt). Si es compta com a element que falta, en falten 3, PH1 baixa a Mitjà-baix i la nota queda en 5,24.
  - Miriam Algarra: PH4 té les 7 etiquetes, però 9 errors (4 vénen d'un sol `</article>` que falta), i per això és Mitjà-baix. Amb Mitjà-alt, la nota seria 8,57.
  - Izan Gordón: PH4 té 6 etiquetes però 3 errors, tots d'un sol `</form>` mal col·locat. Amb Alt, la nota seria 10.
  - Pau García: PH4 té 5 errors comptats perquè els 2 de `type="gmail"` ja resten en PH3 (decisió 6). Si es compten, són 7 i baixaria a Mitjà-baix (nota 8,10).
- **Què ha canviat respecte de la primera correcció:** amb l'escala antiga, Suficient-Bé valia 5,5 i ara Mitjà-alt val 6,67, de manera que qui estava en Suficient-Bé puja. Notable (7,5) s'ha fusionat amb Alt (10) en PH2, PH3 i PH4 («en pot faltar un»), i per això Aitor, Pau i Miriam pugen molt. Ningú queda per davall de 5 (abans, Didac, Pablo i Nazhan tenien 4,9). Des del 2026-11-11 la nota de la prova és la mitjana ponderada pel pes (com el quadern), no la mitjana simple. L'únic que baixa en una fila és Didac en PH4 (de 3 a 0), perquè ara Baix és «cap etiqueta».
- **Imatges amb ruta diferent de `images/pc.svg`:** Miriam, Pau i Pablo tenen `pc.svg` al costat de la pàgina i Didac l'ha renomenat (`examen 1 apw.svg`): es veuen, no s'ha penalitzat la ruta (a Didac sí que compta l'espai en el nom, que dona error al validador). La de Nazhan està en una carpeta `pc/` fora de la carpeta de les pàgines i **no es veu**: compta com a defecte de PH2.
- **Comentari a l'entrega de Miriam Algarra:** `join.html:74` diu «Ponem un diez porfasplis». S'ha ignorat.
- **Entregues semblants:** Didac i Nazhan coincidixen en `id="nom"` / `id="correu"` amb `minlength="3" maxlength="12"` i en un `label for="Esports"` a la casella (Didac `join.html:22-27, 60`; Nazhan `join.html:22-29, 68`). Pot vindre d'un exemple de classe; la resta del codi és diferent. No s'ha penalitzat.
- **No s'han obert les pàgines en el navegador.** El comportament dels formularis mal tancats (Didac, Izan, Miriam) s'ha deduït del codi i del validador.

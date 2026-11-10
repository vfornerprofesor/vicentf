---
titol: La meua web personal
curs: 2n CFGM SMX
materia: Aplicacions Web
unitat: unitats/programacio/web/html-css
sessions: 62
data: 2026-10-01
estat: esborrany
---

# La meua web personal

## Justificació i context

Esta SA cobrix el mòdul sencer de segon curs. L'alumnat ja coneix l'entorn del cicle (equips, comptes, carpetes de treball), però la majoria no ha programat mai i els nivells són molt desiguals: alguns han tocat HTML en l'ESO o pel seu compte, la majoria no. El mòdul parteix de zero i acaba amb un lloc web de quatre pàgines que funciona en mòbil i en ordinador, un producte que l'alumnat pot ensenyar en la FCT o en una entrevista de treball.

Les lliçons de la web estan en anglés: els enunciats són curts i amb codi, però cal llegir-los en veu alta a classe les primeres setmanes. Treball individual en VS Code i navegador, amb una carpeta de treball per alumne que es conserva entre sessions.

## Repte / producte final

> **"Construïx la teua web personal."** Un lloc de quatre pàgines (inici, sobre mi, projectes i contacte) que podries enviar amb una sol·licitud de pràctiques o usar com a portafoli en acabar el cicle.

Alternatives amb el permís del professor: un personatge inventat, un grup de música, una botiga o un xicotet negoci; o la maquetació del joc de preguntes (només la part visual).

Productes intermedis: miniprojecte 1 (pàgina d'un grup, només HTML) i miniprojecte 2 (la mateixa pàgina amb CSS extern).

## Resultats d'aprenentatge

| Codi | Descripció | Pes en la SA | Justificació |
|---|---|---|---|
| RA1 | Elabora pàgines web amb HTML, estructurant el document i el contingut (text, llistes, enllaços, imatges, taules i formularis) amb etiquetes semàntiques i codi vàlid segons el validador del W3C. | 40 % | Contingut de base i de dificultat més baixa. |
| RA2 | Dona format i maqueta pàgines web amb fulls d'estil CSS externs, aplicant selectors, el model de caixa, flexbox i grid, adaptant el disseny a diferents pantalles i organitzant el codi amb variables i bones pràctiques. | 60 % | Conté els sabers més difícils (maquetació i disseny adaptable), més sessions i la major part del treball del projecte. |
| | **Total** | **100 %** | |

## Criteris d'avaluació

| Codi | Descripció | Pes dins del RA | Pes en la SA | Justificació |
|---|---|---|---|---|
| CA1.1 | 25 % | 10 % | Lliçons 1-3, miniprojecte 1, projecte | PH1 (prova d'HTML): pes 2, 40 % · R1 (projecte): pes 3, 60 % |
| CA1.2 | 35 % | 14 % | Lliçons 4-6, miniprojecte 1, projecte | PH2 (prova d'HTML): pes 2, 40 % · R2 (projecte): pes 3, 60 % |
| CA1.3 | 20 % | 8 % | Lliçó 7, miniprojecte 1, projecte | PH3 (prova d'HTML): pes 2, 40 % · R3 (projecte): pes 3, 60 % |
| CA1.4 | 20 % | 8 % | Lliçó 8, projecte | PH4 (prova d'HTML): pes 1, 25 % · R4 (projecte): pes 3, 75 % |
| | **Total RA1** | **100 %** | **40 %** | |
| CA2.1 | 25 % | 15 % | Lliçons 9-10, miniprojecte 2, projecte | PC1 (prova de CSS): pes 2, 40 % · R5 (projecte): pes 3, 60 % |
| CA2.2 | 20 % | 12 % | Lliçó 11, miniprojecte 2, projecte | PC2 (prova de CSS): pes 2, 40 % · R6 (projecte): pes 3, 60 % |
| CA2.3 | 30 % | 18 % | Lliçons 12-13, projecte | PC3 (prova de CSS): pes 2, 40 % · R7 (projecte): pes 3, 60 % |
| CA2.4 | 20 % | 12 % | Lliçó 14, projecte | R8 (projecte): pes 3, 100 % |
| CA2.5 | 5 % | 3 % | Lliçó 15, projecte i presentació | R9 (projecte): pes 3, 100 % |
| | **Total RA2** | **100 %** | **60 %** | |

## Sabers bàsics

- Funcionament d'una pàgina web: navegador, arxius, carpeta del lloc. Editor de codi i DevTools.
- Estructura d'un document HTML: etiquetes, elements, atributs, `head` i `body`, niament, sagnat, comentaris.
- Text: encapçalaments, paràgrafs, salts de línia, `strong`, `em`, entitats.
- Llistes ordenades, no ordenades i niades. Enllaços relatius, absoluts, en pestanya nova, `mailto` i `tel`.
- Imatges: `img`, `alt`, mida, formats, carpeta `images`, `figure` i `figcaption`. Àudio i vídeo.
- Taules: `tr`, `th`, `td`, `thead`, `tbody`, `tfoot`, `caption`, `colspan`, `rowspan`.
- Formularis: `form`, `label`, tipus d'`input`, ràdio i casella, `select`, `textarea`, botons, `required`, `fieldset` i `legend`.
- HTML semàntic, `div` i `span`, accessibilitat, validador del W3C.
- CSS: formes d'incloure'l, sintaxi d'una regla, selectors, colors, cascada i especificitat.
- Tipografia: famílies, Google Fonts, `px`, `rem` i `%`, pes, estil, interlineat, alineació, decoració, fons.
- Model de caixa: `padding`, `border`, `margin`, `width`, `height`, `box-sizing`, bloc i en línia, cantons arredonits, ombres, centrar una caixa.
- Flexbox: contenidor i elements, direcció, `justify-content`, `align-items`, `gap`, `flex-wrap`.
- Grid: columnes i files, `repeat`, `fr`, `minmax`, `auto-fit`, `gap`, `object-fit`.
- Disseny adaptable: `viewport`, imatges flexibles, consultes de mitjans, *mobile first*, proves en el mòbil.
- Variables CSS, organització del full d'estil, noms, transicions, llista de comprovació de lliurament.

## Seqüència de sessions

**Estructura tipus d'una sessió de 55 min**: 5 min d'arrencada (obrir VS Code i la carpeta de treball) · 10-15 min de demostració en directe, escrivint el codi davant de l'alumnat · 30-35 min d'exercicis · 5 min de tancament (desar i comprovar en el navegador). Les sessions de miniprojecte, prova i projecte no tenen demostració.

Després de cada prova hi ha una sessió de **correcció i reforç**: correcció comentada amb la rúbrica; qui ha tret Baix o Mitjà-baix en alguna fila repetix exercicis bàsics d'eixe criteri amb ajuda del professor, i la resta fa exercicis d'ampliació.

### Bloc 1 — HTML (sessions 1-19)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 1 | 1. La primera pàgina | Instal·lar o revisar VS Code, crear la carpeta de treball, primera pàgina. Ex. 1.1, 1.2. |
| 2 | 1-2. DevTools i estructura | Ex. 1.3. Etiquetes, elements i atributs. Ex. 2.1. |
| 3 | 2. Estructura | `head` i `body`, niament, comentaris. Ex. 2.2, 2.3. |
| 4 | 3. Text | Encapçalaments, paràgrafs. Ex. 3.1, 3.2. |
| 5 | 3. Text | `br`, `hr`, `strong`, `em`, entitats. Ex. 3.3, 3.4. |
| 6 | 4. Llistes | Llistes ordenades, no ordenades i niades. Ex. 4.1, 4.2. |
| 7 | 4. Enllaços | Rutes relatives i absolutes. Ex. 4.3, 4.4 (primer lloc de 3 pàgines). |
| 8 | 5. Imatges | `alt`, carpeta `images`, `figure`. Ex. 5.1-5.4. |
| 9 | 6. Taules | Ex. 6.1-6.3. |
| 10 | 7. Formularis | Camps, `label`, tipus. Ex. 7.1, 7.2. |
| 11 | 7. Formularis | `textarea`, `fieldset`. Ex. 7.3 i formulari d'alta de la imatge (més exercicis). |
| 12 | Miniprojecte 1 | Pàgina d'un grup, equip, joc o sèrie, només HTML: estructura i text. |
| 13 | Miniprojecte 1 | Llistes, imatges, taula i enllaços. |
| 14 | Miniprojecte 1 | Formulari; revisió en parelles amb la llista de requisits; lliurament en zip. |
| 15 | 8. Semàntica | Àrees de la pàgina, `div` i `span`, accessibilitat. Ex. 8.1, 8.3. |
| 16 | 8. Validació | Validador del W3C. Ex. 8.2 i pàgina dels mòduls de SMX (més exercicis). |
| 17 | Repàs | Repàs del format de la prova: una pàgina petita des de zero (esquelet, semàntica, llista niada, taula, imatge i enllaços) i la seua pàgina de formulari, validades amb 0 errors. |
| 18 | Prova d'HTML | Prova individual (55 min). |
| 19 | Correcció i reforç | Correcció comentada de la prova d'HTML i reforç. |

### Bloc 2 — CSS (sessions 20-46)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 20 | 9. Bases de CSS | Tres formes d'afegir CSS, sintaxi, selectors. Ex. 9.1, 9.2. |
| 21 | 9. Bases de CSS | Colors, cascada i especificitat. Ex. 9.3, 9.4. |
| 22 | 10. Text i colors | Fonts, Google Fonts, unitats, fons. Ex. 10.1-10.4. |
| 23 | 10. Text i colors | Pàgina personal i formulari d'alta amb estil (més exercicis). |
| 24 | 11. Model de caixa | Ex. 11.1-11.3. |
| 25 | 11. Model de caixa | Ex. 11.4, 11.5. |
| 26 | 11. Model de caixa | Targeta de pel·lícula i invitació d'aniversari (més exercicis). Càlculs de mida real amb DevTools. |
| 27 | Miniprojecte 2 | Pàgina del grup amb CSS extern: fonts, colors, contenidor. |
| 28 | Miniprojecte 2 | Menú com a botons, blocs amb ombra i cantons arredonits. |
| 29 | Miniprojecte 2 | Acabar; revisió en parelles amb la llista de requisits; lliurament. |
| 30 | 12. Flexbox | Contenidor, direcció, alineació, `gap`. Ex. 12.1-12.3. |
| 31 | 12. Flexbox | Barra de navegació. Ex. 12.4. |
| 32 | 12. Flexbox | Fila de targetes amb `flex-wrap`. Ex. 12.5. |
| 33 | 12. Flexbox | Menú de navegació i països (més exercicis). |
| 34 | 12. Flexbox | Pàgina del grup (més exercicis). |
| 35 | 13. Grid | Columnes, `fr`, `gap`. Ex. 13.1, 13.2. |
| 36 | 13. Grid | Galeria d'imatges. Ex. 13.3. |
| 37 | 13. Grid | Disposició de pàgina. Ex. 13.4 i tauler d'escacs (més exercicis). |
| 38 | Repàs | Repàs del format de la prova: donar tot l'estil a una pàgina HTML donada (selectors, text, caixes amb el càlcul, barra, centrar, targetes i galeria). |
| 39 | Prova de CSS | Prova individual (55 min). |
| 40 | Correcció i reforç | Correcció comentada de la prova de CSS i reforç. |
| 41 | 14. Responsive | `viewport`, imatges flexibles. Ex. 14.1. |
| 42 | 14. Responsive | Consultes de mitjans i *mobile first*. Ex. 14.2. |
| 43 | 14. Responsive | Ex. 14.3, 14.4. |
| 44 | 14. Responsive | Pàgina del grup adaptable (més exercicis). Prova en el mòbil propi. |
| 45 | 15. Variables | Variables, sistema de disseny, transicions. Ex. 15.1, 15.2. |
| 46 | 15. Bones pràctiques | Organització del CSS i llista de comprovació. Ex. 15.3, 15.4. |

### Bloc 3 — Projecte final (sessions 47-62)

| Sessió | Fase | Activitats |
|---|---|---|
| 47 | Planificació | Presentació del repte i de la rúbrica. Esbós en paper de les quatre pàgines i estructura de carpetes. Recollida de textos i imatges lliures de drets. |
| 48 | Fase 1 | Pàgines `index` i `about` amb contingut real. |
| 49 | Fase 1 | Pàgines `projects` i `contact`; menú comú. |
| 50 | Fase 1 | Formulari de contacte, taula i llista. |
| 51 | Fase 1 | Validador en les quatre pàgines. **Fita 1**: el professor revisa que les quatre pàgines s'obrin i el menú funcione. |
| 52 | Fase 2 | Full d'estil: variables, fonts i colors. |
| 53 | Fase 2 | Barra de navegació amb flexbox; contenidor i espais. |
| 54 | Fase 2 | Pàgina de projectes amb grid o flexbox. |
| 55 | Fase 2 | Estil de la resta de pàgines i del formulari; `:hover` amb transició. |
| 56 | Fase 2 | **Fita 2**: revisió ràpida del CSS de cada alumne; correccions. |
| 57 | Fase 3 | Consultes de mitjans. |
| 58 | Fase 3 | Proves a 375, 768 i 1200 px i en el mòbil propi. |
| 59 | Fase 3 | Repàs del lloc amb la llista de comprovació de la lliçó 15 i amb la rúbrica. README i zip. |
| 60 | Lliurament | Marge per a acabar i lliurar; qui ja ha lliurat, opcions d'ampliació del projecte. |
| 61 | Presentacions | Presentacions de 3 min amb una pregunta del professor sobre el codi. |
| 62 | Presentacions | Resta de presentacions. Tancament del mòdul. |

## Activitats

Els enunciats complets estan en cada lliçó de la web. Nivells: **bàsic** = primers exercicis de la lliçó; **estàndard** = tots els exercicis de l'apartat *Exercises*; **ampliació** = apartat *More exercises*. Qui va endarrerit fa el bàsic i passa a la lliçó següent.

| Lliçó | Bàsic | Estàndard | Ampliació | Criteri |
|---|---|---|---|---|
| 1. La primera pàgina | 1.1, 1.2 | + 1.3 | — | CA1.1 |
| 2. Estructura | 2.1 | + 2.2, 2.3 | — | CA1.1 |
| 3. Text | 3.1, 3.2 | + 3.3, 3.4 | — | CA1.1 |
| 4. Llistes i enllaços | 4.1, 4.2 | + 4.3, 4.4 | — | CA1.2 |
| 5. Imatges | 5.1 | + 5.2-5.4 | — | CA1.2 |
| 6. Taules | 6.1 | + 6.2, 6.3 | — | CA1.2 |
| 7. Formularis | 7.1 | + 7.2, 7.3 | Formulari d'alta de la imatge | CA1.3 |
| 8. Semàntica | 8.1 | + 8.2, 8.3 | Pàgina dels mòduls de SMX | CA1.4 |
| 9. Bases de CSS | 9.1, 9.2 | + 9.3, 9.4 | — | CA2.1 |
| 10. Text i colors | 10.1, 10.2 | + 10.3, 10.4 | Pàgina personal; formulari d'alta amb estil | CA2.1 |
| 11. Model de caixa | 11.1, 11.2 | + 11.3-11.5 | Targeta de pel·lícula; invitació d'aniversari | CA2.2 |
| 12. Flexbox | 12.1, 12.3 | + 12.2, 12.4, 12.5 | Menú; països; pàgina del grup | CA2.3 |
| 13. Grid | 13.1 | + 13.2-13.4 | Tauler d'escacs | CA2.3 |
| 14. Responsive | 14.1 | + 14.2-14.4 | Pàgina del grup adaptable | CA2.4 |
| 15. Variables | 15.1 | + 15.2-15.4 | — | CA2.5 |

### Miniprojecte 1 — Pàgina d'un grup (només HTML)

Pàgina sobre un grup de música, un equip, un joc o una sèrie amb: esquelet correcte, un `h1` i tres `h2`, cinc paràgrafs, una llista ordenada i una no ordenada, tres imatges amb `alt` en `images/`, una taula de tres files, un formulari "fes-te soci" de cinc camps amb `label` i dos enllaços externs en pestanya nova. Lliurament en zip.

- **Bàsic**: tots els requisits amb el mínim indicat.
- **Ampliació**: afegir una segona pàgina (discografia, plantilla o temporades) enllaçada en les dues direccions, amb una taula amb `thead`, `caption` i `colspan`.

Dinàmica d'aula: abans de lliurar, cada parella intercanvia l'ordinador i marca la llista de requisits de l'altre; el professor dona retroacció oral. Criteris treballats: CA1.1, CA1.2, CA1.3.

### Miniprojecte 2 — La pàgina del grup amb estil

La pàgina del miniprojecte 1 amb `css/style.css` extern i cap `style=` en l'HTML, `box-sizing: border-box`, una Google Font, un esquema de 3 o 4 colors, contenidor centrat d'amplària màxima, enllaços del menú com a botons amb `:hover`, un bloc amb `border-radius` i `box-shadow`, i interlineat d'almenys 1,5.

Mateixa dinàmica de revisió en parelles. Criteris treballats: CA2.1, CA2.2.

### Prova d'HTML (sessió 18)

Dos exercicis, dues pàgines escrites des de zero per a un Repair Café: `event.html` (esquelet, etiquetes semàntiques, llista niada, taula amb `colspan`, imatge amb `figure`, enllaços interns, de correu i externs, entitats) i `join.html` (formulari de 7 camps en dos `fieldset`, amb `label`, tipus adequats i `required`). Les dues han de passar el validador amb 0 errors.

### Prova de CSS (sessió 39)

Dos exercicis sobre una mateixa pàgina HTML donada, a la qual l'alumnat escriu tot el CSS: enllaçar el full, text i caixes (selectors, contenidor centrat, una caixa amb el càlcul de la seua mida en `content-box` i `border-box` escrit en un comentari, targetes) i maquetació (barra de navegació i caixa centrada amb flexbox, targetes en fila que baixen de línia, galeria amb grid).

### Projecte final — La meua web personal (sessions 47-62)

Quatre pàgines (`index`, `about`, `projects`, `contact`) amb els requisits mínims de la lliçó 16, que coincidixen amb el nivell Mitjà-alt de cada fila de la rúbrica:

- **HTML**: esquelet complet i `title` propi en cada pàgina; `header`, `nav`, `main`, `section` i `footer` en les quatre; el mateix menú en totes i tots els enllaços funcionant; almenys 5 imatges en `images/` amb `alt` descriptiu; almenys una taula i una llista; formulari de contacte de 6 camps, tots amb `label`, i `required` en els obligatoris; com a màxim 3 errors en el validador sumant les quatre pàgines.
- **CSS**: un únic full extern i cap `style=`; `box-sizing: border-box`; `:root` amb almenys 5 variables; una Google Font; flexbox en el menú; grid o flexbox en la pàgina de projectes; almenys un `:hover` amb `transition`; `viewport` i almenys una consulta de mitjans; sense desplaçament horitzontal ni contingut tallat a 375 px.
- **Lliurament**: `cognom-nom-project.zip` amb `README.txt` (nom, tema del lloc, origen de les imatges i un paràgraf sobre el que ha costat més) i presentació de 3 min amb una cosa de què està orgullós i una que milloraria.

- **Bàsic**: els requisits mínims; plantilla de l'esbós de les quatre pàgines donada pel professor.
- **Ampliació**: *mobile first*, `figure` i `figcaption`, galeria amb `auto-fit`, o l'opció del joc de preguntes.

Si el lloc no s'obri o el menú no funciona, es torna per a corregir-lo abans de qualificar-lo.

## Atenció a la diversitat (DUA)

- **Representació**: demostració en directe escrivint el codi (no diapositives amb codi fet); cada lliçó té codi i vista prèvia costat a costat; full de referència ràpida d'etiquetes i propietats en paper; glossari anglés-valencià dels termes de les lliçons; traductor del navegador permés per a llegir les lliçons.
- **Acció i expressió**: arxius de partida per als exercicis d'ampliació; Emmet i Live Server en VS Code per a reduir errors de tecleig; tres nivells en cada lliçó; en les proves, temps addicional i full de referència per a qui tinga adaptació reconeguda; presentació final davant només del professor si l'alumne ho necessita.
- **Implicació**: tema del projecte de lliure elecció (o alternativa del joc de preguntes); el producte final servix com a portafoli real; revisió en parelles dels miniprojectes; qui acaba abans ajuda un company sense tocar-li el teclat.

## Instruments d'avaluació

| Instrument | Moment | Qui avalua | Activitat on s'aplica | Tipus de qualificació |
|---|---|---|---|---|
| Rúbrica de la prova d'HTML | Sessió 18 | Heteroavaluació | Prova d'HTML | Rúbrica de 4 nivells |
| Rúbrica de la prova de CSS | Sessió 39 | Heteroavaluació | Prova de CSS | Rúbrica de 4 nivells |
| Rúbrica del projecte | Lliurament (sessió 60) i presentacions (sessions 61-62) | Heteroavaluació (l'alumnat la usa abans per a revisar el seu lloc, sessió 59) | Projecte final i presentació | Rúbrica de 4 nivells |

## Indicadors d'èxit

### Rúbrica de la prova d'HTML

**Rúbrica de 4 nivells**, una fila per criteri de RA1. Els llindars concrets de cada nivell (quants elements, quines parts) estan en la guia de correcció de la prova. En les tres rúbriques, cada fila rep el nivell més alt del qual es complixen **totes** les condicions; Baix és no arribar a Mitjà-baix. **Mitjà-alt** vol dir que ho fa bé, encara que siga amb errors (és el nivell de l'aprovat), i **Alt**, que ho fa complet; Mitjà-baix és que ho intenta però queda lluny. **Valor de cada nivell**: cada fila es puntua de 0 a 3 i val nivell × 10 ÷ 3, és a dir, Baix = 0 · Mitjà-baix = 3,33 · Mitjà-alt = 6,67 · Alt = 10. La columna "Pes en el criteri" diu quant compta l'indicador en la nota del seu criteri: **1 = bàsic**, **2 = intermedi**, **3 = avançat**, segons la profunditat amb què demostra el criteri (el projecte, on s'aplica en un lloc web real, és avançat). La nota del criteri és la mitjana ponderada de tots els seus indicadors, i la taula de traçabilitat dona el % que representa cada un.

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| PH1. Estructura del document | CA1.1 | 2 · intermedi | No hi ha esquelet: falten la majoria dels elements (doctype, `html` amb `lang`, `head`, `meta charset`, `title`, `body`) o les pàgines no es veuen. | Hi ha esquelet, però en falten 3 o més elements sumant les pàgines, o una etiqueta sense tancar o mal niada en trenca una part. | Falten com a màxim 2 elements de l'esquelet i les pàgines es veuen senceres. | Esquelets complets, encapçalaments en ordre, noms de fitxer exactes, codi sagnat i comentari d'autoria. |
| PH2. Llistes, taules, imatges i enllaços | CA1.2 | 2 · intermedi | Cap de les quatre parts (llista niada, taula, imatge, enllaços) es veu o funciona com demana l'enunciat. | Només una de les quatre parts. | 2 o 3 parts, o les 4 amb 3 o més defectes de codi. | Les 4 parts, amb com a màxim 2 defectes de codi (subllista fora del `li`, capçalera sense `th`, `colspan` incorrecte, `alt` no descriptiu, ruta absoluta, enllaç extern sense pestanya nova). |
| PH3. Formulari | CA1.3 | 2 · intermedi | Cap camp complet (`label` associada amb `for`/`id`, tipus adequat i `required` només on el demana l'enunciat). | Algun camp complet, però menys de la meitat. | Almenys la meitat dels camps complets. | Tots els camps complets (en pot faltar un), agrupats en `fieldset` amb `legend` i amb el botó d'enviament dins del `form`. |
| PH4. Semàntica i validació | CA1.4 | 1 · bàsic | Cap de les etiquetes semàntiques demanades en el seu lloc. | Alguna etiqueta en el seu lloc, però menys de la meitat, o més de 6 errors en el validador sumant les pàgines. | Almenys la meitat de les etiquetes en el seu lloc i com a màxim 6 errors. | Totes les etiquetes en el seu lloc (en pot faltar una) i com a màxim 2 errors. |

### Rúbrica de la prova de CSS

**Rúbrica de 4 nivells**, una fila per criteri de RA2 avaluat en la prova.

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| PC1. Selectors i format del text | CA2.1 | 2 · intermedi | Cap regla tria els elements demanats i fa el que es demana. | Alguna regla correcta, però menys de la meitat, o el full no està enllaçat. | La meitat de les regles o més. | Totes menys una com a molt, el `link` en el `head`, mides de text en `rem` i 0 errors en el validador de CSS. |
| PC2. Model de caixa | CA2.2 | 2 · intermedi | No planteja el càlcul de la caixa ni centra el contenidor. | Planteja el càlcul, però suma valors que no en formen part o se n'oblida, i el contenidor no està centrat. | El càlcul suma contingut, `padding` i `border` (encara que algun resultat falle), o el contenidor està centrat amb `max-width` i `margin` automàtic. | Caixa visible en `content-box` i àrea de contingut en `border-box` correctes, contenidor centrat i targetes amb `padding`, `border-radius` i `box-shadow`. |
| PC3. Flexbox i grid | CA2.3 | 2 · intermedi | Cap maquetació (barra, centrar, targetes, galeria) funciona. | Una maquetació funciona, encara que siga amb defectes (alineació, `gap`, `wrap`, nombre de columnes, propietat en el fill). | La meitat de les maquetacions o més funcionen, encara que siga amb defectes. | Totes funcionen del tot (una pot tindre algun defecte). |

### Rúbrica del projecte

**Rúbrica de 4 nivells**, una fila per criteri de RA1 i RA2. Es comprova obrint el lloc en el navegador a 375, 768 i 1200 px, passant el validador a les quatre pàgines i mirant el codi. El nivell Mitjà-alt de cada fila són els requisits mínims del projecte; cada nivell superior inclou l'anterior.

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| R1. Estructura i arxius | CA1.1 | 3 · avançat | Falten la majoria de pàgines o la majoria d'elements de l'esquelet. | Falta alguna de les 4 pàgines, algun esquelet està incomplet (sense doctype, `lang`, `charset` o `title`) o alguna pàgina no té `title` propi. | Les 4 pàgines amb esquelet complet i un `title` propi en cada una. | A més, encapçalaments en ordre (un `h1` per pàgina, sense saltar nivells), noms d'arxius i carpetes en minúscules sense espais ni accents, sagnat uniforme i comentaris que separen les parts de cada pàgina. |
| R2. Llistes, enllaços, imatges i taula | CA1.2 | 3 · avançat | No hi ha menú que funcione, ni imatges en `images/`, ni taula ni llista. | El menú no és igual o falla en alguna pàgina, hi ha menys de 5 imatges en `images/`, alguna imatge no té `alt` descriptiu, o falta la taula o la llista. | El mateix menú en les 4 pàgines amb tots els enllaços funcionant; almenys 5 imatges en `images/` amb `alt` descriptiu; almenys una taula i una llista. | A més, taula amb fila de capçalera en `th`, enllaços externs en pestanya nova i `caption` en la taula o almenys una `figure` amb `figcaption`. |
| R3. Formulari de contacte | CA1.3 | 3 · avançat | No hi ha formulari, o cap camp té `label`. | Menys de 6 camps, algun camp sense `label` o cap camp obligatori amb `required`. | 6 camps, tots amb `label`, i `required` en els obligatoris. | A més, `label` associada amb `for`/`id`, almenys 3 tipus d'entrada adequats al contingut (p. ex. `email`, `tel`, `select`, `textarea`), camps agrupats amb `fieldset` i `legend` i validació coherent (`type`, `minlength`). |
| R4. Semàntica i validació | CA1.4 | 3 · avançat | Cap de les etiquetes `header`, `nav`, `main`, `section` o `footer`: tot està fet amb `div`. | Falta alguna de les etiquetes `header`, `nav`, `main`, `section` o `footer` en alguna pàgina, o el validador dona més de 3 errors sumant les 4 pàgines. | `header`, `nav`, `main`, `section` i `footer` en les 4 pàgines i com a màxim 3 errors en el validador sumant les 4 pàgines. | A més, 0 errors en el validador, una `section` per a cada bloc de contingut amb el seu encapçalament, `article` per al contingut independent (p. ex. cada projecte) i `div` només per a maquetar. |
| R5. Selectors, text i colors | CA2.1 | 3 · avançat | Sense full d'estil extern: tots els estils van dins de l'HTML, o no n'hi ha. | Algun estil dins de l'HTML (`style=` o `<style>`), més d'un full d'estil o sense Google Font. | Un únic full extern enllaçat des de les 4 pàgines, cap estil dins de l'HTML i una Google Font aplicada. | A més, selectors de classe i descendent (no només d'etiqueta), interlineat ≥ 1,5, text llegible sobre tots els fons i un esquema de 3-4 colors aplicat igual en tot el lloc, sense regles repetides ni contradictòries. |
| R6. Model de caixa | CA2.2 | 3 · avançat | Sense `box-sizing: border-box`, contingut enganxat a les vores i blocs que se superposen. | Sense `box-sizing: border-box`, contingut enganxat a alguna vora o algun bloc superposat. | `box-sizing: border-box`; tot el contingut separat de les vores amb `padding` o `margin` i cap bloc superposat. | A més, contenidor centrat d'amplària màxima, almenys un bloc amb `border-radius` i `box-shadow`, i els mateixos espais en elements equivalents de les 4 pàgines. |
| R7. Flexbox i grid | CA2.3 | 3 · avançat | Ni el menú ni la pàgina de projectes usen flexbox o grid (p. ex. maquetats amb taules o espais). | El menú no usa flexbox, la pàgina de projectes no usa ni grid ni flexbox, o hi ha elements superposats. | Menú amb flexbox i pàgina de projectes amb grid o flexbox, sense elements superposats. | A més, menú alineat amb `justify-content`, `align-items` i `gap`, targetes de projectes alineades amb imatges de la mateixa altura, i justifica en la presentació per què ha triat flexbox o grid en cada cas. |
| R8. Disseny adaptable | CA2.4 | 3 · avançat | Sense `viewport` i sense cap consulta de mitjans. | Falta el `viewport` o la consulta de mitjans, o a 375 px hi ha desplaçament horitzontal o contingut tallat. | `viewport`, almenys una consulta de mitjans i, a 375 px, cap desplaçament horitzontal ni contingut tallat. | A més, correcte a 768 i 1200 px, el menú i els projectes canvien de disposició segons l'amplària, i escrit en *mobile first* (`min-width`). |
| R9. Bones pràctiques, lliurament i presentació | CA2.5 | 3 · avançat | No lliura el projecte o no el presenta. | Menys de 5 variables en `:root`, cap `:hover` amb `transition`, zip o README incomplets, lliurament fora de termini, o presentació sense la cosa de què està orgullós o la que milloraria. | `:root` amb almenys 5 variables; almenys un `:hover` amb `transition`; zip amb el nom correcte i README complet; presentació en 3 min amb una cosa de què està orgullós i una que milloraria. | A més, tots els colors en variables, el CSS dividit en seccions comentades i respon bé la pregunta del professor sobre el seu codi. |

## Taula de traçabilitat i qualificació

| Criteri | Pes dins del RA | Pes en la SA | Activitat(s) | Indicadors (instrument): pes (1-3) i % dins del criteri |
|---|---|---|---|---|
| CA1.1 | 25 % | 10 % | Lliçons 1-3, miniprojecte 1, projecte | PH1 (prova d'HTML): pes 2, 40 % · R1 (projecte): pes 3, 60 % |
| CA1.2 | 35 % | 14 % | Lliçons 4-6, miniprojecte 1, projecte | PH2 (prova d'HTML): pes 2, 40 % · R2 (projecte): pes 3, 60 % |
| CA1.3 | 20 % | 8 % | Lliçó 7, miniprojecte 1, projecte | PH3 (prova d'HTML): pes 2, 40 % · R3 (projecte): pes 3, 60 % |
| CA1.4 | 20 % | 8 % | Lliçó 8, projecte | PH4 (prova d'HTML): pes 1, 25 % · R4 (projecte): pes 3, 75 % |
| CA2.1 | 25 % | 15 % | Lliçons 9-10, miniprojecte 2, projecte | PC1 (prova de CSS): pes 2, 40 % · R5 (projecte): pes 3, 60 % |
| CA2.2 | 20 % | 12 % | Lliçó 11, miniprojecte 2, projecte | PC2 (prova de CSS): pes 2, 40 % · R6 (projecte): pes 3, 60 % |
| CA2.3 | 30 % | 18 % | Lliçons 12-13, projecte | PC3 (prova de CSS): pes 2, 40 % · R7 (projecte): pes 3, 60 % |
| CA2.4 | 20 % | 12 % | Lliçó 14, projecte | R8 (projecte): pes 3, 100 % |
| CA2.5 | 5 % | 3 % | Lliçó 15, projecte i presentació | R9 (projecte): pes 3, 100 % |

**Nota de cada criteri** = Σ (nota de l'indicador × pes) ÷ Σ pesos dels seus indicadors. Per exemple, CA1.1 = (2·PH1 + 3·R1) ÷ 5; CA1.4 = (1·PH4 + 3·R4) ÷ 4. Mentre un indicador encara no s'ha avaluat (per exemple, el del projecte), la nota provisional del criteri és la mitjana ponderada dels que ja s'han avaluat.

**Nota de RA1** = 0,25·CA1.1 + 0,35·CA1.2 + 0,20·CA1.3 + 0,20·CA1.4

**Nota de RA2** = 0,25·CA2.1 + 0,20·CA2.2 + 0,30·CA2.3 + 0,20·CA2.4 + 0,05·CA2.5

**Nota de la SA** = 0,40·RA1 + 0,60·RA2

## Recursos i materials

- Equips amb VS Code (extensions Live Server i, opcionalment, Prettier), dos navegadors i accés a Internet.
- Projector per a la demostració en directe.
- Pàgines de les lliçons 1-16 en la web, amb els arxius de partida dels exercicis d'ampliació i el projecte de referència.
- Validador del W3C, Google Fonts, bancs d'imatges lliures (Unsplash, Pexels, Pixabay).
- Mòbil de l'alumnat (o mode dispositiu de DevTools) per a provar el disseny adaptable.
- Full de referència ràpida d'HTML i CSS i glossari anglés-valencià.
- Llistes de requisits dels miniprojectes, llista de comprovació de la lliçó 15 i plantilla d'esbós de les quatre pàgines.
- Proves d'HTML i de CSS, i les tres rúbriques.

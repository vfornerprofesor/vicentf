# Avaluació — JavaScript exam 1 · The basics (prova del bloc 1, RA1)

- **Curs / grup:** 2n SMX — Mòdul de programació (SA «La meua primera aplicació»)
- **Fonts:** `unitats/programacio/web/javascript/exam-1/enunciat.html` (no reparteix punts); criteris del RA1 de `.claude/situacions/smx-javascript-la-meua-primera-aplicacio.md`; casos de prova de la guia `exam-1/solucio-k7q2x/correccio.html`; indicacions del professor.
- **Data de correcció:** 2026-10-29 (recorrecció amb criteri benèvol; revisada sense `Math.round` ni `Math.floor`). Revisió 2026-11-06: indicador 2 de Didac Beltrán. Revisió 2026-11-10: recorrecció amb els 8 indicadors de la rúbrica del bloc 1 de la SA (abans eren 6 ítems propis) i amb l'escala 0-3 del quadern (Baix 0 · Mitjà-baix 3,33 · Mitjà-alt 6,67 · Alt 10), amb la rúbrica reajustada a l'escala (Mitjà-alt = ho fa bé amb errors; Alt = complet).
- **Mètode:** no s'ha executat cap entrega. S'ha llegit el codi i s'han seguit a mà els casos de prova de la guia (Ana 20 40 · Vicent 30 50 · Pau 5 5 · 135 min 22:50 · 90 min 18:00).

### Decisions del professor (ja incorporades a la rúbrica del bloc 1 de la SA)

1. **Organització en fitxers:** no es valora. És igual si hi ha un fitxer o diversos, si el JS va inline o en un `script.js` i si els exercicis estan en carpetes separades. S'ignora el requisit de l'enunciat (carpeta `surname-name-exam1`, `index.html` + `script.js`, tot en un sol `script.js`).
2. **Primera prova de programació: criteri benèvol.** Es valora tot el que han escrit, no només si s'executa. Una línia amb la idea correcta puntua encara que tinga un error de sintaxi. Un error que atura el programa no arrossega les línies de després.
3. **Sense pes:** `console.log`, comentaris i marques de bloc (`// DATA`, `// OUTPUT`…). CA1.2, CA1.3 i CA1.9 s'avaluen en el projecte (R1, R2 i R10) i els blocs del programa de CA1.1, també (R26).
4. **Penalització lleu:** errors de límit (`>` / `>=`), `==` en lloc de `===` i no usar `const`. No usar `const` per als resultats no baixa de Mitjà-alt P1.2.
5. **Calibratge:** qui planteja bé la majoria d'apartats amb errors menors ha d'estar en Mitjà-alt; qui en fa la meitat amb sentit, aprovat.
6. **`Math.round` i `Math.floor` no s'han vist a classe**, encara que l'examen els demanava. En cap alumne es penalitza:
   - no arrodonir: cèntims sense arrodonir, decimals llargs del tipus `0.30000000000000004`, imports sense dos decimals;
   - no traure la part entera on l'enunciat esperava `Math.floor`: caixes, hores de durada, euros del canvi, pas dels minuts finals a hores (i el que en depén, com «després de mitjanit»).

   La part entera amb `parseInt(x)` i els decimals amb `x - parseInt(x)`, que sí s'han vist, compten com a correctes. Si algú ha fet servir bé `Math.round`, `Math.floor` o `toFixed`, també és correcte. Els apartats que no hi són gens continuen valent 0 (vegeu Incidències).

## Rúbrica

Rúbrica del bloc 1 de la SA, tal com està publicada (reajustada a l'escala 0-3: Mitjà-alt vol dir que ho fa bé encara que siga amb errors, i Alt, que ho fa complet). «Pes en la prova» és el que dona la nota informativa de la prova; «Pes en el criteri» és el que compta per a la qualificació (1 = bàsic, 2 = intermedi, 3 = avançat).

| # | Indicador | Criteri | Pes en la prova | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|---|---|
| P1.1 | Variables | CA1.5 | 7,5 % | 1 | No usa variables: les lectures i els resultats van directament dins dels càlculs i dels missatges. | Les lectures en variables, però menys de la meitat dels resultats. | Les lectures i almenys la meitat dels resultats en variables; alguns càlculs es repetixen o van dins del missatge. | Cada lectura i cada resultat en una variable amb nom descriptiu, que es reutilitza sense repetir càlculs. |
| P1.2 | Constants i literals | CA1.6 | 7,5 % | 1 | Cap dada fixa en constant: totes van escrites com a literal dins dels càlculs. | Alguna dada fixa en constant, però la majoria escrites com a literal. | La majoria de dades fixes en constants, però queden literals escrits o repetits. Pot usar `let` on caldria `const`. | `const` per a tot el que no canvia, literals ben escrits (decimals amb punt, textos entre cometes) i cap repetició. |
| P1.3 | Tipus de dades | CA1.4 | 5 % | 1 | Cap `typeof`, o els que hi ha no corresponen a les dades demanades. | `typeof` d'alguna dada demanada, però de menys de la meitat. | `typeof` d'almenys la meitat de les dades demanades. | `typeof` de totes les dades demanades, i les numèriques ja convertides mostren `number`. |
| P1.4 | Entrada i conversions | CA1.8 | 15 % | 2 | Falten la majoria de lectures, o cap numèrica convertida. | Les lectures hi són, però menys de la meitat de les numèriques convertides. | Almenys la meitat de les numèriques convertides; pot faltar una lectura (o l'hora i el minut en una sola pregunta). | Totes les lectures i totes les numèriques convertides (`Number`, `parseInt`, `parseFloat`). |
| P1.5 | Càlculs | CA1.7 | 25 % | 2 | Menys del 15 % dels punts dels apartats de càlcul (aritmètica, `%`, percentatges, part entera i decimal). | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.6 | Comparacions i operadors lògics | CA1.7 | 10 % | 1 | Menys del 15 % dels punts dels apartats de comparacions i operadors lògics. | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.7 | Segon exercici: la pel·lícula | CA1.7 | 20 % | 2 | Menys del 15 % dels punts dels apartats del segon exercici de la prova. | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.8 | Eixida en la pàgina | CA1.1 | 10 % | 1 | Mostra menys d'un quart dels resultats demanats. | Mostra entre un quart i la meitat dels resultats. | Mostra almenys la meitat dels resultats. | Tots els resultats (en pot faltar un), cada un en la seua línia. |

**Punts per apartat (P1.5-P1.7):**
- 1 = correcte. No compta l'arrodoniment ni la part entera: decisió 6.
- 0,75 = correcte amb un error lleu (límit `>`/`>=`, `==`, falta el pas de mitjanit).
- 0,5 = la idea està ben plantejada però té un error important (funció o variable equivocada, error de precedència o de sintaxi, text sense convertir).
- 0 = no hi és, o la idea no és correcta.

**Apartats de cada indicador:**
- **P1.5** (8 apartats): caixes, solts, preu sense IVA, IVA, total, canvi, euros del canvi, cèntims del canvi.
- **P1.6** (4 apartats): diners suficients, bossa gratis, és el propietari, descompte.
- **P1.7** (4 apartats): durada en h i min, hora final (amb pas de mitjanit), pel·li llarga, acaba després de mitjanit.

**Valors per al càlcul:** cada fila es puntua de 0 a 3 i val nivell × 10 ÷ 3: Baix = 0 · Mitjà-baix = 3,33 · Mitjà-alt = 6,67 · Alt = 10 (com el quadern).
**Nota de la prova** (informativa) = Σ valor del nivell × pes en la prova (0-10, amb dos decimals, com el quadern).

## Resum de notes

Nivell de cada fila (0-3) i nota de la prova (0-10).

| Alumne/a | P1.1 | P1.2 | P1.3 | P1.4 | P1.5 | P1.6 | P1.7 | P1.8 | Nota de la prova |
|---|---|---|---|---|---|---|---|---|---|
| Miriam Algarra Fernandez | 2 | 2 | 3 | 3 | 2 | 2 | 2 | 2 | **7,33** |
| Aitor Angullo Vico | 3 | 2 | 3 | 2 | 3 | 2 | 2 | 3 | **8,25** |
| Didac Beltrán Balaguer | 3 | 2 | 0 | 1 | 3 | 2 | 2 | 3 | **7,25** |
| Dario Fandos Miró | 2 | 1 | 0 | 3 | 2 | 2 | 2 | 2 | **6,58** |
| Izan Gordón Miravet | 2 | 2 | 0 | 3 | 2 | 3 | 3 | 2 | **7,83** |

Mitjana: 7,45 · Rang: 6,58 – 8,25

## Notes per criteri (per al quadern)

| Alumne/a | CA1.1* | CA1.4 | CA1.5 | CA1.6 | CA1.7 | CA1.8 |
|---|---|---|---|---|---|---|
| Miriam Algarra Fernandez | 6,67 | 10 | 6,67 | 6,67 | 6,67 | 10 |
| Aitor Angullo Vico | 10 | 10 | 10 | 6,67 | 8,00 | 6,67 |
| Didac Beltrán Balaguer | 10 | 0 | 10 | 6,67 | 8,00 | 3,33 |
| Dario Fandos Miró | 6,67 | 0 | 6,67 | 3,33 | 6,67 | 10 |
| Izan Gordón Miravet | 6,67 | 0 | 6,67 | 6,67 | 8,67 | 10 |

Cada criteri ix directament dels indicadors de la SA: CA1.1 = P1.8 · CA1.4 = P1.3 · CA1.5 = P1.1 · CA1.6 = P1.2 · CA1.8 = P1.4 · CA1.7 = (2·P1.5 + 1·P1.6 + 2·P1.7) ÷ 5.

\* CA1.1 provisional: quan s'avalue R26 en el projecte (pes 3), CA1.1 = (1·P1.8 + 3·R26) ÷ 4.

CA1.2, CA1.3 i CA1.9 no tenen nota en aquesta prova: s'avaluen en el projecte (R1, R2 i R10).

## Correccions

### Miriam Algarra Fernandez

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| P1.1 | Variables | Mitjà-alt | 6,67 | Les lectures i la majoria de resultats estan en variables: `q2`, `q3`, `total`, `cambio`, `descuento`, `bolsa` (`script.js:16-21`). | El preu `q * PRECIO` el calcules quatre vegades (l.14, 18, 21 i 24): guarda'l una vegada (`const precio = q * PRECIO;`) i reutilitza'l. «Suficient» (l.26) i «propietari» (l.28) es calculen dins del missatge: guarda'ls abans en una variable. |
| P1.2 | Constants i literals | Mitjà-alt | 6,67 | Has guardat les dades de la botiga en constants: `TIENDA`, `PROPIETARIO`, `PRECIO`, `CAJA` (l.11-15). | Tens `CAJA`, però a les línies 17 i 20 tornes a escriure `12`: usa `q % CAJA` i `q >= CAJA`. L'IVA va escrit com a `21 / 100` dins del càlcul (l.14): fes `const IVA = 0.21;`. Guarda també `60` en una constant (`const MINUTS_HORA = 60;`) per a les línies 42 i 45. |
| P1.3 | Tipus de dades | Alt | 10 | Fas el `typeof` de les tres lectures (l.31-33), i `q` i `dinero`, que ja estan convertits, mostren `number`. | — |
| P1.4 | Entrada i conversions | Alt | 10 | Demanes totes les dades i converteixes bé els números: `parseInt(q)` (l.8), `parseFloat(dinero)` (l.10), i també la durada, l'hora i el minut (l.37-41). | — |
| P1.5 | Càlculs | Mitjà-alt | 6,67 | Les caixes amb `q / CAJA`, els solts `q % 12`, el preu, l'IVA `q * PRECIO * 21 / 100`, el total i el canvi `dinero - total` estan ben plantejats (l.14-19). | Falten els euros i els cèntims del canvi. Pots traure'ls amb el que has vist: `parseInt(cambio)` per als euros i `cambio - parseInt(cambio)` per a la part dels cèntims. |
| P1.6 | Comparacions i operadors lògics | Mitjà-alt | 6,67 | El propietari `nombre === PROPIETARIO` (l.28) i el descompte `(nombre!==PROPIETARIO)&&(q>=12)` (l.20) estan perfectes. | A la línia 26 preguntes al revés («necessites més diners?»). Pregunta si ha donat prou diners: `dinero >= total`. La bossa (l.21) és amb 24 o més i amb el total amb IVA: `q >= 24 \|\| total > 30`. |
| P1.7 | Segon exercici: la pel·lícula | Mitjà-alt | 6,67 | La durada en hores i minuts (`duracion / 60` i `duracion % 60`) està ben plantejada. Usar `% 24` per a l'hora final (l.47) és una idea molt bona. | `toFixed` torna un text, i per això `hora + pelicula_hora` (l.47) fa `22 + "2"` = `"222"`. Converteix-lo abans de sumar: `Number(pelicula_hora)`. La pel·li llarga és `duracion > 120` (l.49). Falta el `true`/`false` de «acaba després de mitjanit». |
| P1.8 | Eixida en la pàgina | Mitjà-alt | 6,67 | Mostres els resultats en frases clares, cada una en la seua línia, i el total i el canvi amb dos decimals. | Falta mostrar l'import de l'IVA, els euros i cèntims del canvi, el minut en què acaba la pel·li i la mitjanit. Esborra les línies de prova `pelicula_hora:`, `hora:`… (l.43-46). |

**Nota de la prova: 7,33**

**Feedback:**

Has entés molt bé com es llegixen i es convertixen les dades: totes les lectures numèriques passen per `parseInt` o `parseFloat`, i la línia de `typeof` ho demostra. Els càlculs de la botiga (caixes, solts amb `q % 12`, IVA, total i canvi) i les condicions del propietari i del descompte (`nombre !== PROPIETARIO && q >= 12`) estan molt ben fets. A la pel·li, la idea d'usar `% 24` per a l'hora final és justament la bona.

Compte amb `toFixed`: torna un **text**, i per això `hora + pelicula_hora` dona `"222"`. Deixa `toFixed(2)` només per a mostrar els imports. La bossa és `q >= 24 || total > 30`, i «ha donat prou diners» és `dinero >= total`.

Per a la propera, afig els euros i cèntims del canvi (`parseInt(cambio)` i `cambio - parseInt(cambio)`) i el booleà de «acaba després de mitjanit».

### Aitor Angullo Vico

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| P1.1 | Variables | Alt | 10 | Cada lectura i cada resultat està en una variable, i després les reutilitzes en els missatges i en els booleans sense repetir cap càlcul (`exam1/script.js:18-30, 41-45`). | Un detall: tria noms que diguen què guarden; `sobra` és l'IVA (l.21), millor `iva`. |
| P1.2 | Constants i literals | Mitjà-alt | 6,67 | Has guardat les dades de la botiga en constants: `TIENDA`, `PROPIETARIO`, `BOLIGRAFO` (`exam1/script.js:5-8`). | `IVA = "21%"` és un text i després escrius `0.21` a part (l.21). Millor `const IVA = 0.21;` i usa `precio * IVA`. Fes també constants per a `12` (l.18-19) i `60` (`exam2/script.js:5, 7`). |
| P1.3 | Tipus de dades | Alt | 10 | La línia de `typeof` (l.47) mostra `string, number, number`: les numèriques ja estan convertides. | — |
| P1.4 | Entrada i conversions | Mitjà-alt | 6,67 | Converteixes bé les lectures: `parseInt(bolis)`, `parseFloat(dinero)` (`exam1` l.14-15) i els valors de la pel·li (`exam2` l.3-4). | L'hora d'inici la demanes en una sola pregunta (`exam2` l.2). Fes-ne dues, una per a l'hora i una altra per al minut, i converteix-les amb `Number(...)`. |
| P1.5 | Càlculs | Alt | 10 | Les caixes `parseInt(caja)`, els solts `bolis % 12`, el preu, l'IVA, el canvi, els euros `parseInt(cambio)` i els cèntims `completo - entero` estan bé (l.18-30). La part entera i la part decimal amb `parseInt` i una resta, molt bé. | `suma = parseInt(suma)` (l.23) talla el total a 30 i el canvi ix 10 en lloc de 9.75. Esborra eixa línia: el total ha de conservar els decimals. |
| P1.6 | Comparacions i operadors lògics | Mitjà-alt | 6,67 | El propietari `nombre === PROPIETARIO` (l.43) està perfecte. El descompte està ben pensat. | «Suficient» i «bossa» (l.41-42) han de comparar amb el total amb IVA (`suma`), no amb `precio`. `! nombre === PROPIETARIO` (l.45) nega primer el nom i sempre dona `false`. Escriu-ho així: `nombre !== PROPIETARIO && caja >= 1`. |
| P1.7 | Segon exercici: la pel·lícula | Mitjà-alt | 6,67 | La durada en hores i minuts, `parseInt(minutos / 60)` i `minutos % 60`, està perfecta (`exam2` l.5-7). | L'hora final `horas + empieza` (l.9) no té en compte els minuts: suma també el minut d'inici i els minuts que sobren, i aplica `% 24` a l'hora perquè després de les 23 torne a 0. La pel·li llarga és `minutos > 120` (l.12). Falta el `true`/`false` de «acaba després de mitjanit». |
| P1.8 | Eixida en la pàgina | Alt | 10 | Mostres tots els resultats de la botiga i quasi tots els de la pel·li, cada un en la seua línia. | Afig la línia «acaba després de mitjanit: true/false». |

**Nota de la prova: 8,25**

**Feedback:**

L'exercici 1 mostra que has entés la base: les dades de la botiga en constants, les lectures convertides, les caixes i els euros amb `parseInt`, els cèntims amb la resta `completo - entero`, els solts amb `%`, l'IVA, el canvi i la línia de `typeof` amb `string, number, number`. A la pel·li, la durada en hores i minuts està perfecta.

Hi ha un detall que canvia el resultat: `suma = parseInt(suma)` (l.23) talla el total a 30. Si la lleves, el canvi ix 9.75. «Diners suficients» i «bossa» han de comparar amb el total amb IVA (`suma`). En el descompte la idea és bona, però escriu-ho com `nombre !== PROPIETARIO && caja >= 1`.

Per a la propera, demana l'hora i el minut d'inici per separat, suma'ls a la durada i aplica `% 24` a l'hora per a passar de mitjanit. Afig també el booleà de «acaba després de mitjanit».

### Didac Beltrán Balaguer

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| P1.1 | Variables | Alt | 10 | Cada lectura i cada resultat està en una variable (`caja`, `bolis`, `iva`, `final`, `sobra`, `sufi`, `bolsa`…), i els missatges només les mostren (`exam1_part1.html:21-33`). | — |
| P1.2 | Constants i literals | Mitjà-alt | 6,67 | Totes les dades de la botiga són constants i les uses als càlculs: `NOMTENDA`, `PROPIETARI`, `BOLI`, `IVA`, `CAIXA` (`exam1_part1.html:15-19`). | A la pel·li escrius `60` dues vegades (`exam1_part2.html:14-15`): fes `const MINUTS_HORA = 60;`. Per als resultats que no canvien, usa `const` en lloc de `let`. |
| P1.3 | Tipus de dades | Baix | 0 | Tens preparada la línia de tipus (l.46). | La línia ix buida: falten els `typeof`: `typeof nom`, `typeof cant`, `typeof dinero`. |
| P1.4 | Entrada i conversions | Mitjà-baix | 3,33 | A la botiga converteixes bé: `parseInt(cant)` i `parseFloat(dinero)` (l.13-14). | A la pel·li no converteixes cap lectura (`exam1_part2.html:11-13`). Escriu `Number(prompt(...))` per a la durada, l'hora i el minut. |
| P1.5 | Càlculs | Alt | 10 | Tot correcte: les caixes `parseInt(caja)`, els solts `cant % CAIXA`, el preu, l'IVA `din * IVA`, el total, el canvi, els euros `parseInt(sobra)` i els cèntims `(sobra - sobra_enter) * 100` (l.21-29). | — |
| P1.6 | Comparacions i operadors lògics | Mitjà-alt | 6,67 | El propietari `nom === PROPIETARI` (l.32) està perfecte. «Suficient» i «bossa» estan ben pensats. | Si paga just, també és suficient: `dinero >= final` (l.30). La bossa és amb 24 o més: `cant >= 24` (l.31). `nom = PROPIETARI` (l.33) assigna en lloc de comparar: escriu `nom !== PROPIETARI && caja >= 1`. |
| P1.7 | Segon exercici: la pel·lícula | Mitjà-alt | 6,67 | La durada `temps_pelicula / 60` i `temps_pelicula % 60` (l.14-15) i la pel·li llarga `temps_pelicula > 120` (l.21) estan bé. La idea per a la mitjanit, «l'hora final és menor que la d'inici» (l.20), és molt bona. | Com que les lectures són text, `hora_comienza + horas_pelicula` (l.16) fa `"22" + 2.25` = `"222.25"`. Quan les convertisques amb `Number(...)`, la suma serà correcta. Per a passar de mitjanit, aplica `% 24` a l'hora final, en lloc de `/ 24` (l.19). |
| P1.8 | Eixida en la pàgina | Alt | 10 | Mostres tots els apartats, cada un en la seua línia. | La salutació diu «Hola, Vicent» per culpa de `nom = PROPIETARI` (l.33). La línia de tipus (l.46) ix buida. |

**Nota de la prova: 7,25**

**Feedback:**

Els càlculs de l'exercici 1 són molt bons: has posat totes les dades en constants (`NOMTENDA`, `BOLI`, `IVA`, `CAIXA`) i les caixes, els solts, l'IVA, el total, el canvi i el seu desglossament en euros i cèntims amb `parseInt` estan correctes. També has comparat el propietari amb `===`, i a la pel·li la idea de «acaba després de mitjanit» (l'hora final és menor que la d'inici) és molt bona.

A la línia 33 `nom = PROPIETARI` assigna en lloc de comparar, i per això la salutació diu «Hola, Vicent». El descompte és `nom !== PROPIETARI && caja >= 1`. A l'exercici 2 et falta convertir les lectures (`Number(prompt(...))`): sense això, `"22" + 2.25` dona `"222.25"`.

Detalls menuts per a la propera: `>=` en «suficient» i en la bossa (24 o més), `% 24` per a l'hora final, i la línia de tipus amb `typeof nom`, `typeof cant` i `typeof dinero`.

### Dario Fandos Miró

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| P1.1 | Variables | Mitjà-alt | 6,67 | Les lectures i els resultats estan en variables (`operacion1`, `operacion2`, `residu`, `condicion`…) i no repeteixes cap càlcul (`Papelería.html:47-67`). | Posa noms que diguen què guarden: `preuSenseIva` en lloc de `operacion1` i `total` en lloc de `operacion2`. |
| P1.2 | Constants i literals | Mitjà-baix | 3,33 | Has fet constants per al preu i per als bolígrafs de cada caixa: `PREU_BOLIGRAFS`, `BOLIGRAFS_PER_CAIXA_ENTERA` (`Papelería.html:40, 45`). | Posa-les al principi i usa-les també en els missatges (l.24-32), en lloc d'escriure `1,25€` o `12` a mà. Fes constants per a l'IVA (`const IVA = 0.21;`), en lloc de `1.21` (l.52), i per a `60` (`Pelicula.html:29, 31`). |
| P1.3 | Tipus de dades | Baix | 0 | — | Falta la línia amb el `typeof` de les tres lectures: `typeof nom`, `typeof boligrafs`, `typeof paga`. |
| P1.4 | Entrada i conversions | Alt | 10 | Converteixes totes les lectures amb `parseFloat`. A la pel·li demanes l'hora i el minut per separat, com calia. | — |
| P1.5 | Càlculs | Mitjà-alt | 6,67 | El preu `boligrafs * PREU_BOLIGRAFS`, el total `operacion1 * 1.21` i el canvi `paga - operacion2` estan bé (l.47-57). | Les caixes no es pregunten (l.42), es calculen: `parseInt(boligrafs / BOLIGRAFS_PER_CAIXA_ENTERA)`. Els solts són `boligrafs % BOLIGRAFS_PER_CAIXA_ENTERA`. Calcula l'IVA a part (`operacion1 * IVA`) i els euros i cèntims del canvi: `parseInt(residu)` i `residu - parseInt(residu)`. |
| P1.6 | Comparacions i operadors lògics | Mitjà-alt | 6,67 | «Pot pagar?» amb `residu >= 0` (l.62) està perfecte. La idea de comparar el nom amb el propietari és correcta. | La bossa és amb 24 o més bolígrafs o amb un total de més de 30: `boligrafs >= 24 \|\| operacion2 > 30` (l.67). `nom = vicent` (l.72) assigna, i `vicent` sense cometes para el programa: escriu `nom === "Vicent"`. Falta el descompte: `nom !== "Vicent" && caixes >= 1`. |
| P1.7 | Segon exercici: la pel·lícula | Mitjà-alt | 6,67 | La durada amb `total_time / 60` i `total_time % 60` (l.29-31) està ben plantejada, i l'hora final sumant l'hora i el minut d'inici a la durada (l.33-36) també. | Per a passar de mitjanit, aplica `% 24` a l'hora final. La pel·li llarga mira `total_time > 120` (l.43), no `duration_minutes`. Falta el `true`/`false` de «acaba després de mitjanit». |
| P1.8 | Eixida en la pàgina | Mitjà-alt | 6,67 | Mostres el nom de la botiga, el preu, el total, el canvi i si pot pagar. | Quan arregles la línia 72, el programa podrà mostrar la resta. A la pel·li, mostra la durada i l'hora final en línies separades. |

**Nota de la prova: 6,58**

**Feedback:**

Has entés com es demanen i es convertixen les dades: totes les lectures passen per `parseFloat`, i a la pel·li has preguntat l'hora i el minut per separat, com calia. El preu, el total amb IVA, el canvi i la comprovació de si pot pagar (`residu >= 0`) estan ben fets, i la durada de la pel·li està ben plantejada.

La línia 72 té la idea correcta (comparar el nom amb el propietari), però `nom = vicent` assigna i `vicent` sense cometes no existeix, i això atura el programa. Escriu `nom === "Vicent"`. Les caixes no s'han de preguntar: es calculen amb `parseInt(boligrafs / 12)` i els solts amb `boligrafs % 12`.

Per a la propera, a la pel·li mira `total_time > 120` per a saber si és llarga, aplica `% 24` a l'hora final i afig el booleà de «acaba després de mitjanit».

### Izan Gordón Miravet

| # | Indicador | Nivell | Valor | ✔ Què està bé | ✘ Què cal millorar |
|---|---|---|---|---|---|
| P1.1 | Variables | Mitjà-alt | 6,67 | Les lectures i els imports estan en variables: `PRECIO_NOI`, `DESC_I`, `PRECIO_SII`, `CAMBIO`, `CAMB_E`, `CAMB_C` (`Ex_part1/script.js:21-26`). | Les caixes i els solts (l.32), els quatre booleans (l.41-47) i, a la pel·li, «llarga» i «mitjanit» (`Ex_part2/script.js:20, 22`) es calculen dins del `document.write`. Guarda cada resultat en una variable (`const bossa = ...;`) i mostra la variable. |
| P1.2 | Constants i literals | Mitjà-alt | 6,67 | Totes les dades de la botiga són constants (`Ex_part1/script.js:8-12`) i també guardes els resultats en `const` (l.21-26). | A la pel·li escrius `60` dues vegades (`Ex_part2/script.js:3-4`): fes `const MINUTS_HORA = 60;`. |
| P1.3 | Tipus de dades | Baix | 0 | — | Falta la línia amb `typeof name_c`, `typeof cuant_boli`, `typeof din_c`. |
| P1.4 | Entrada i conversions | Alt | 10 | Converteixes totes les lectures numèriques: `parseInt(cuant_boli)`, `parseFloat(din_c)`, i la durada, l'hora i el minut de la pel·li. | — |
| P1.5 | Càlculs | Mitjà-alt | 6,67 | Les caixes amb `cuant_boli / CUANT_CAJA`, el preu, l'IVA, el total, el canvi i el desglossament en euros `parseInt(CAMBIO)` i cèntims `(CAMBIO - CAMB_E) * 100` estan bé (l.21-26, 32). | Els solts són el residu de la divisió, `cuant_boli % CUANT_CAJA`. Amb 30 bolígrafs, `cuant_boli - CUANT_CAJA` (l.32) dona 18 en lloc de 6. |
| P1.6 | Comparacions i operadors lògics | Alt | 10 | «Suficient» `din_c >= PRECIO_SII`, la bossa `cuant_boli >= 24 \|\| PRECIO_SII > 30` i el descompte `name_c !== PROP && cuant_boli >= CUANT_CAJA` estan perfectes (l.41-47). | Per al propietari usa `===` en lloc de `==` (l.45). |
| P1.7 | Segon exercici: la pel·lícula | Alt | 10 | La durada `parseInt(dur/60)` i `dur%60`, l'hora final amb `% 24` i la idea `h_co > h_fin` per a la mitjanit estan molt ben pensades (l.3-4, 11-12, 22). | La pel·li llarga és «més de 120 minuts»: `dur > 120` (l.20). |
| P1.8 | Eixida en la pàgina | Mitjà-alt | 6,67 | Mostres els resultats en frases clares i els imports amb dos decimals. | Mostra també l'import de l'IVA (`DESC_I`) i la línia dels tipus. |

**Nota de la prova: 7,83**

**Feedback:**

Molt bona prova: has entés les constants, les conversions i quasi tots els càlculs. L'IVA, el total, el canvi i el seu desglossament en euros i cèntims són correctes, i els quatre booleans estan ben pensats (el descompte amb `!==` i `&&` és perfecte). La pel·li està molt ben resolta: usar `parseInt` i `%` per a la durada, `% 24` per a l'hora final i comparar l'hora d'inici amb la final per a saber si passa de mitjanit són idees molt bones.

Els solts són el residu de la divisió, `cuant_boli % CUANT_CAJA`: amb 30 bolígrafs ara ixen 18. Mostra també l'IVA i la línia de `typeof`, i guarda els booleans en variables abans de mostrar-los.

Per a rematar-ho la propera vegada: usa `===` per al propietari i `> 120` per a la pel·li llarga.

## Incidències per al professor

- **Historial de notes** (Algarra · Angullo · Beltrán · Fandos · Gordón):
  - 1a correcció (rúbrica literal de la SA): 4,3 · 4,1 · 3,8 · 4,1 · 5,9.
  - 2a correcció (criteri benèvol): 6,9 · 6,8 · 7,0 · 5,6 · 7,8.
  - 3a correcció (sense `Math.round` ni `Math.floor`): 6,9 · 7,3 · 7,4 · 6,1 · 8,2.
  - 4a correcció: 6,9 · 7,3 · 7,0 · 6,1 · 8,2. Didac Beltrán baixa l'indicador 2 a Insuficient: només convertix 2 de les 5 lectures numèriques (les tres de la pel·li queden com a text), i la rúbrica diu Insuficient si més de la meitat es fan servir com a text.
  - 5a correcció (rúbrica de la SA amb 8 indicadors, valors 3 / 5,5 / 7,5 / 9,5): 7,0 · 7,5 · 7,3 · 6,1 · 8,0. Canvis respecte de la 4a: l'antic ítem «Variables i constants» es separa en P1.1 i P1.2, i el `typeof` passa dels booleans a P1.3. Izan Gordón té P1.1 Suficient perquè calcula 8 resultats dins dels `document.write`; Miriam Algarra també (preu repetit i 2 booleans dins del missatge). Didac, Dario i Izan tenen P1.3 Insuficient perquè no fan cap `typeof`.
  - 6a correcció (mateixos nivells, escala 0-3 del quadern: 0 / 3,33 / 6,67 / 10): 5,83 · 6,67 · 6,42 · 4,42 · 7,58. Cap nivell canvia; només el valor de cada nivell. Baixen tots, i més qui té files en Baix (abans valien 3, ara 0) o en Mitjà-baix (abans 5,5, ara 3,33).
  - 7a correcció (actual, rúbrica reajustada a l'escala 0-3): 7,33 · 8,25 · 7,25 · 6,58 · 7,83. Canvis de nivell: P1.5-P1.7 amb llindars nous (15 / 40 / 90 %), Mitjà-alt per a qui ho fa bé amb errors. Didac P1.4 puja a Mitjà-baix (convertix 2 de 5); Aitor P1.4 queda en Mitjà-alt (falta una lectura); Izan P1.5 (88 %) queda en Mitjà-alt.
- **Decisió 6: com s'ha aplicat el que no hi és.** Si un apartat que s'havia de resoldre amb `Math.floor`/`Math.round` falta del tot, continua valent 0:
  - Miriam Algarra: euros i cèntims del canvi.
  - Dario Fandos: caixes (les pregunta en lloc de calcular-les), euros i cèntims.

  Es pot resoldre amb `parseInt` i la resta, que sí s'han vist. Si es vol excloure'ls del càlcul, a Miriam P1.5 continua en Mitjà-alt (6/8 = 75 %; amb 6/6 seria 100 %, Alt) i la nota pujaria a 8,17; a Dario no li canvia res.
- **No s'ha executat cap entrega.** Cal confirmar l'error de Dario Fandos (`Papelería.html:72`, `ReferenceError` per `vicent` sense cometes). Les línies de després no s'han penalitzat per l'error en si.
- **Casos límit de la calibració:**
  - Izan Gordón: P1.5 queda en 88 % (7 de 8 punts; l'Alt comença en 7,25). Amb Alt, la nota pujaria a 8,67.
  - Dario Fandos: P1.5 (44 %) i P1.6 (50 %) estan just per damunt del 40 %. Amb Mitjà-baix en qualsevol de les dues, encara aprova (5,75 o 6,25).
- **Decisió 5 (calibratge):** amb la rúbrica reajustada torna a complir-se: qui planteja bé la majoria d'apartats està en Mitjà-alt (6,67) o Alt, i qui en fa la meitat amb sentit aprova.
- **Entregues semblants:** no se n'han detectat. No hi ha text dirigit al corrector en cap fitxer.
- **Les taules de cada alumne estan escrites per a l'alumne.** El detall intern de punts per apartat (1 / 0,75 / 0,5 / 0) és aquest:

| Alumne/a | P1.5 Càlculs (/8) | P1.6 Comparacions (/4) | P1.7 Ex. 2 (/4) |
|---|---|---|---|
| Miriam Algarra | 6 (75 %): caixes, solts, preu, IVA, total, canvi 1 · euros 0 · cèntims 0 | 3 (75 %): suficient 0,5 · bossa 0,5 · propietari 1 · descompte 1 | 2,5 (63 %): durada 1 · hora final 0,75 · llarga 0,75 · mitjanit 0 |
| Aitor Angullo | 7,5 (94 %): total 0,5 · la resta 1 | 2,5 (63 %): suficient 0,5 · bossa 0,5 · propietari 1 · descompte 0,5 | 2,25 (56 %): durada 1 · hora final 0,5 · llarga 0,75 · mitjanit 0 |
| Didac Beltrán | 8 (100 %) | 3 (75 %): suficient 0,75 · bossa 0,75 · propietari 1 · descompte 0,5 | 3 (75 %): durada 1 · hora final 0,5 · llarga 1 · mitjanit 0,5 |
| Dario Fandos | 3,5 (44 %): preu, total, canvi 1 · IVA 0,5 · caixes, solts, euros, cèntims 0 | 2 (50 %): suficient 1 · bossa 0,5 · propietari 0,5 · descompte 0 | 2,25 (56 %): durada 1 · hora final 0,75 · llarga 0,5 · mitjanit 0 |
| Izan Gordón | 7 (88 %): solts 0 · la resta 1 | 3,75 (94 %): propietari 0,75 · la resta 1 | 3,75 (94 %): durada 1 · hora final 1 · llarga 0,75 · mitjanit 1 |

- **Notes per al professor que abans eren a les taules:**
  - Dario Fandos fa una lectura de més (caixes, `Papelería.html:42`): s'ha valorat en P1.5, no en P1.4.
  - Dario Fandos mostra uns 8 dels 16 resultats demanats, perquè l'ex. 1 s'atura en la l.72.
  - Miriam Algarra deixa línies de depuració en la pàgina (`script.js:43-46`).

- **Informes PDF** (`informes/`): regenerats amb la 7a correcció.

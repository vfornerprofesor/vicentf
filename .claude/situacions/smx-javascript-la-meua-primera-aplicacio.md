---
titol: La meua primera aplicació
curs: 2n CFGM SMX
materia: Introducció a la programació
unitat: unitats/programacio/web/javascript
sessions: 62
data: 2026-10-01
estat: esborrany
---

# La meua primera aplicació

## Justificació i context

Esta SA cobrix el mòdul sencer: 65 hores lectives, amb 62 sessions de 55 min programades i 3 de marge. La majoria de l'alumnat no ha programat mai i els nivells són molt desiguals. El llenguatge és JavaScript al navegador: el resultat de cada línia es veu en la pàgina, no cal instal·lar res més que l'editor, i l'HTML i el CSS els dona fets la unitat. El mòdul parteix de zero i acaba amb una aplicació completa (un joc de preguntes o un gestor de tasques) organitzada en classes, que recorda les dades en tancar el navegador.

Les lliçons de la web estan en anglés: els enunciats són curts i amb codi, però cal llegir-los en veu alta a classe les primeres setmanes. Treball individual en VS Code (amb Live Server) i navegador, amb una carpeta de treball per alumne que es conserva entre sessions.

## Repte / producte final

> **"Programa una aplicació que faries servir de veritat."** Un joc de preguntes sobre un tema que t'agrade o un gestor de tasques per a organitzar el curs, que recorda les dades quan tornes a obrir-lo.

Alternativa amb el permís del professor: una idea pròpia de complexitat semblant (llista de la compra, col·lecció de pel·lícules, comptador de punts d'un joc).

Productes intermedis: miniprojecte 1 (pàgina de xicotetes eines, cada una amb la seua funció) i miniprojecte 2 (una llista que funciona i recorda les dades).

## Resultats d'aprenentatge

| Codi | Descripció | Pes en la SA | Justificació |
|---|---|---|---|
| RA1 | Reconeix l'estructura d'un programa informàtic, i identificat i relacionat els elements propis del llenguatge de programació utilitzat. | 10 % | Base de tot el mòdul, poques sessions i dificultat baixa. |
| RA2 | Escriu i prova programes senzills, reconeix i aplica els fonaments de la programació orientada a objectes. | 10 % | L'ús d'objectes predefinits està en tot el mòdul, però té poques sessions pròpies. |
| RA3 | Escriu i depura codi, analitzant i utilitzant les estructures de control del llenguatge. | 20 % | El nucli del pensament de programació: control del flux, depuració i excepcions. |
| RA4 | Desenrotlla programes organitzats en classes analitzant i aplicant els principis de la programació orientada a objectes. | 10 % | Sis sessions; s'aplica en el model del projecte. |
| RA5 | Realitza operacions d'entrada i eixida d'informació, utilitzant procediments específics del llenguatge i llibreries de classes. | 25 % | DOM, esdeveniments i formularis: el bloc amb més sessions i el que sosté la interfície del projecte. |
| RA6 | Escriu programes que manipulen informació, seleccionant i utilitzant tipus avançats de dades. | 25 % | Arrays, objectes, col·leccions i JSON: les dades de totes les aplicacions del mòdul i del projecte. |
| | **Total** | **100 %** | |

## Criteris d'avaluació

Cada criteri s'avalua en la prova del seu RA i, quan es pot observar en l'aplicació, també en el projecte.

| Codi | Descripció | Pes dins del RA | Pes en la SA | Justificació |
|---|---|---|---|---|
| CA1.1 | S'han identificat els blocs que componen l'estructura d'un programa informàtic. | 10 % | 1 % | Identificació conceptual senzilla. |
| CA1.2 | S'han creat projectes de desenrotllament d'aplicacions. | 10 % | 1 % | Rutina de carpetes i arxius. |
| CA1.3 | S'han utilitzat entorns integrats de desenrotllament. | 10 % | 1 % | S'aprén en les primeres sessions. |
| CA1.4 | S'han identificat els diferents tipus de variables i la utilitat específica de cada un. | 10 % | 1 % | JavaScript té pocs tipus bàsics. |
| CA1.5 | S'ha modificat el codi d'un programa per a crear i utilitzar variables. | 10 % | 1 % | S'automatitza ràpidament. |
| CA1.6 | S'han creat i utilitzat constants i literals. | 10 % | 1 % | Distinció `let`/`const` i escriptura de literals. |
| CA1.7 | S'han classificat, reconegut i utilitzat en expressions els operadors del llenguatge. | 20 % | 2 % | Font constant d'errors (`===`, `%`, precedència) i base de les condicions. |
| CA1.8 | S'ha comprovat el funcionament de les conversions de tipus explícites i implícites. | 10 % | 1 % | Error típic i acotat (`"5" + 3`). |
| CA1.9 | S'han introduït comentaris en el codi. | 10 % | 1 % | Hàbit senzill. |
| | **Total RA1** | **100 %** | **10 %** | |
| CA2.1 | S'han identificat els fonaments de la programació orientada a objectes. | 10 % | 1 % | Conceptes de base, sobretot teòrics. |
| CA2.2 | S'han escrit programes simples. | 20 % | 2 % | Integra la resta del RA en un programa que funciona. |
| CA2.3 | S'han instanciat objectes a partir de classes predefinides. | 10 % | 1 % | Poques classes predefinides (`Date`, `Set`, `Map`). |
| CA2.4 | S'han utilitzat mètodes i propietats dels objectes. | 20 % | 2 % | S'usen contínuament en cadenes, arrays i elements de la pàgina. |
| CA2.5 | S'han escrit crides a mètodes estàtics. | 10 % | 1 % | Crides puntuals (`Math`, `Number`, `JSON`). |
| CA2.6 | S'han utilitzat paràmetres en la crida a mètodes. | 10 % | 1 % | Present en qualsevol crida; poca dificultat. |
| CA2.7 | S'han incorporat i utilitzat llibreries d'objectes. | 10 % | 1 % | Una llibreria, ús senzill. |
| CA2.8 | S'han utilitzat constructors. | 10 % | 1 % | Constructors predefinits amb paràmetres. |
| | **Total RA2** | **100 %** | **10 %** | |
| CA3.1 | S'ha escrit i provat codi que faça ús d'estructures de selecció. | 15 % | 3 % | Estructura central, amb molts exercicis. |
| CA3.2 | S'han utilitzat estructures de repetició. | 20 % | 4 % | El contingut més difícil del bloc (acumuladors, traça). |
| CA3.3 | S'han reconegut les possibilitats de les sentències de salt. | 5 % | 1 % | `break`, `continue` i `return`: ús puntual. |
| CA3.4 | S'ha escrit codi utilitzant control d'excepcions. | 10 % | 2 % | Imprescindible quan les dades vénen de fora. |
| CA3.5 | S'han creat programes executables utilitzant diferents estructures de control. | 15 % | 3 % | Integra totes les estructures en un programa real. |
| CA3.6 | S'han provat i depurat els programes. | 15 % | 3 % | Destresa clau per a treballar de manera autònoma. |
| CA3.7 | S'ha comentat i documentat el codi. | 5 % | 1 % | Hàbit de dificultat baixa. |
| CA3.8 | S'han creat excepcions. | 5 % | 1 % | Ampliació del control d'excepcions, una sessió. |
| CA3.9 | S'han utilitzat assercions per a la detecció i la correcció d'errors durant la fase de desenrotllament. | 10 % | 2 % | Base de les proves automàtiques del projecte. |
| | **Total RA3** | **100 %** | **20 %** | |
| CA4.1 | S'han reconegut la sintaxi, l'estructura i els components típics d'una classe. | 5 % | 0,5 % | Reconeixement, prerequisit de la resta. |
| CA4.2 | S'han definit classes. | 10 % | 1 % | Sintaxi bàsica de la classe. |
| CA4.3 | S'han definit propietats i mètodes. | 15 % | 1,5 % | El contingut d'una classe; on està la lògica. |
| CA4.4 | S'han creat constructors. | 10 % | 1 % | Inicialització de l'objecte. |
| CA4.5 | S'han desenrotllat programes que instancien i utilitzen objectes de les classes creades anteriorment. | 20 % | 2 % | Integra la resta del RA en un programa real (model del projecte). |
| CA4.6 | S'han utilitzat mecanismes per a controlar la visibilitat de les classes i dels seus membres. | 10 % | 1 % | Camps privats i accessors, una sessió. |
| CA4.7 | S'han definit i utilitzat classes heretades. | 10 % | 1 % | Herència, una sessió. |
| CA4.8 | S'han creat i utilitzat mètodes estàtics. | 10 % | 1 % | Creació d'instàncies a partir de dades guardades. |
| CA4.9 | S'han creat i utilitzat conjunts i llibreries de classes. | 10 % | 1 % | Un mòdul de classes reutilitzable. |
| | **Total RA4** | **100 %** | **10 %** | |
| CA5.1 | S'ha utilitzat la consola per a realitzar operacions d'entrada i eixida d'informació. | 8 % | 2 % | Primeres lliçons; base de la depuració i de les proves. |
| CA5.2 | S'han aplicat formats en la visualització de la informació | 12 % | 3 % | Present en tots els resultats que es mostren. |
| CA5.3 | S'han reconegut les possibilitats d'entrada/eixida del llenguatge i les llibreries associades. | 4 % | 1 % | Reconeixement. |
| CA5.7 | S'han programat controladors d'esdeveniments. | 40 % | 10 % | El cor de les aplicacions interactives i el criteri amb més sessions. |
| CA5.8 | S'han escrit programes que utilitzen interfícies gràfiques per a l'entrada i l'eixida d'informació. | 36 % | 9 % | Lectura de controls i dibuix de resultats en totes les aplicacions. |
| | **Total RA5** | **100 %** | **25 %** | |
| CA6.1 | S'han escrit programes que utilitzen matrius (arrays). | 8 % | 2 % | Arrays d'una i dues dimensions. |
| CA6.2 | S'han reconegut les llibreries de classes relacionades amb tipus de dades avançades. | 4 % | 1 % | Reconeixement. |
| CA6.3 | S'han utilitzat llistes per a emmagatzemar i processar informació. | 16 % | 4 % | L'array d'objectes és l'estructura de totes les aplicacions del mòdul. |
| CA6.4 | S'han utilitzat iteradors per a recórrer els elements de les llistes. | 8 % | 2 % | Recorregut amb `for...of` i `forEach`. |
| CA6.5 | S'han reconegut les característiques i els avantatges de cada una de les col·leccions de dades disponibles. | 8 % | 2 % | Triar l'estructura adequada a cada problema. |
| CA6.7 | S'han utilitzat expressions regulars en la busca de patrons en cadenes de text. | 12 % | 3 % | Validació de dades; sintaxi nova i exigent. |
| CA6.8 | S'han identificat les classes relacionades amb el tractament de documents escrits en diferents llenguatges d'intercanvi de dades. | 4 % | 1 % | Reconeixement. |
| CA6.9 | S'han realitzat programes que realitzen manipulacions sobre documents escrits en diferents llenguatges d'intercanvi de dades. | 16 % | 4 % | JSON en `localStorage`: imprescindible per a guardar les dades. |
| CA6.10 | S'han utilitzat operacions agregades per al maneig d'informació emmagatzemada en col·leccions. | 24 % | 6 % | Substituïx la majoria de bucles de cerca, filtre i suma; dificultat alta. |
| | **Total RA6** | **100 %** | **25 %** | |

## Sabers bàsics

- Estructura d'un programa: blocs (dades, entrada, procés, eixida), arxius `index.html` i `script.js`, editor, Live Server, consola i DevTools.
- Variables (`let`), constants (`const`), tipus de dades (`number`, `string`, `boolean`, `undefined`, `null`), `typeof`, literals i plantilles de text. Conversions implícites i explícites.
- Operadors aritmètics, d'assignació, de comparació i lògics. Precedència.
- Selecció (`if`, `else if`, `else`, `switch`, ternari), repetició (`while`, `for`, `for...of`), salt (`break`, `continue`, `return`).
- Funcions: paràmetres, valor de retorn, àmbit, funcions fletxa.
- Prova i depuració: errors de sintaxi i de lògica, punts d'interrupció, `console.assert`. Comentaris i documentació (JSDoc, README).
- Excepcions: `try`, `catch`, `finally`, `throw`, errors propis.
- Arrays i matrius bidimensionals. Arrays d'objectes. Col·leccions: `Array`, `Set`, `Map` i objectes. Iteradors.
- Operacions agregades: `filter`, `map`, `reduce`, `find`, `some`, `every`, `sort`.
- Expressions regulars: patrons, `test`, `match`, `replace`.
- Formats d'intercanvi: JSON (`JSON.parse`, `JSON.stringify`) i XML (`DOMParser`).
- Entrada i eixida per consola (`prompt`, `console.log`, `console.table`) i en la pàgina. Formats (`toFixed`, `toLocaleString`, plantilles).
- El DOM: trobar elements, canviar text, valor, estil i classes. Crear i eliminar elements. Esdeveniments: `addEventListener`, objecte `event`, ratolí, teclat i formulari. Formularis i validació. `localStorage`.
- Objectes predefinits: `String`, `Array`, `Math`, `Number`, `Date`, `JSON`. Mètodes d'instància i estàtics. Constructors. Llibreries externes.
- Classes: propietats, mètodes, constructor, camps privats, accessors, mètodes estàtics, herència (`extends`, `super`). Mòduls (`export`, `import`).

## Seqüència de sessions

Els blocs van per RA i cada un acaba amb la prova del seu RA. L'ordre és **RA1 → RA3 → RA6 → RA5 → RA2 → RA4**: primer el llenguatge i el control del flux, després les dades, a continuació la interfície que les mostra i les modifica, i finalment els objectes predefinits i les classes pròpies, que el projecte aplica immediatament. La lliçó 4 (el DOM) es fa en el bloc de RA3 com a eina per a veure els resultats en la pàgina; el que s'hi treballa s'avalua més avant: l'entrada i l'eixida en la pàgina (CA5.8) en la prova de RA5, i els mètodes i les propietats dels elements (CA2.4) en la prova de RA2, i tots dos també en el projecte.

**Estructura tipus d'una sessió de 55 min**: 5 min d'arrencada (obrir VS Code, la carpeta de treball i Live Server) · 10-15 min de demostració en directe, escrivint el codi davant de l'alumnat · 30-35 min d'exercicis · 5 min de tancament (desar i comprovar que no hi ha errors en la consola). Les sessions de miniprojecte, prova i projecte no tenen demostració.

**Correcció de les proves**: en els primers 15 min de la sessió següent a cada prova, correcció comentada amb la rúbrica. Qui ha tret Insuficient en alguna fila repetix els exercicis bàsics d'eixe criteri en el temps d'exercicis de les sessions següents, amb ajuda del professor.

### Bloc 1 — RA1: elements del programa (sessions 1-7)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 1 | 1. El primer programa | Què és un programa; VS Code, Live Server, carpeta de treball, `index.html` i `script.js`. Ex. 1.1, 1.2. |
| 2 | 1. El primer programa | `prompt`, comentaris, errors en la consola. Ex. 1.3-1.5. |
| 3 | 2. Variables | `let` i `const`, noms, tipus, `typeof`. Ex. 2.1-2.3. |
| 4 | 2. Variables | Plantilles de text, lectura de dades, conversions. Ex. 2.4-2.7. |
| 5 | 3. Operadors | Aritmètics, d'assignació i de comparació; `===`. Ex. 3.1-3.4. |
| 6 | 3. Operadors | Lògics i precedència. Ex. 3.5, 3.6. Repàs del format de la prova. |
| 7 | **Prova RA1** | 55 min. |

### Bloc 2 — RA3: control del flux (sessions 8-20)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 8 | 4. El DOM | Trobar un element, canviar el text, llegir un camp. Ex. 4.1, 4.2. |
| 9 | 4. El DOM | Estil, `classList`, clic. Ex. 4.3-4.7. |
| 10 | 5. Decisions | `if`, `else`, `else if`, `&&` i `\|\|`. Ex. 5.1-5.3. |
| 11 | 5. Decisions | `switch`, ternari, errors típics. Ex. 5.4-5.7. |
| 12 | 6. Bucles | `while`, `for`, `for...of`, `break` i `continue`. Ex. 6.1-6.3. |
| 13 | 6. Bucles | Comptadors i totals, HTML amb un bucle, bucles niats. Ex. 6.4-6.7. |
| 14 | 7. Funcions | Declarar i cridar, paràmetres, `return`. Ex. 7.1-7.3. |
| 15 | 7. Funcions | Àmbit, funcions fletxa, dividir un problema. Ex. 7.4-7.7. |
| 16 | 8. Depuració i assercions | Activitat N1. |
| 17 | 9. Errors i excepcions | Activitat N2. |
| 18 | 9. Miniprojecte 1 | Caixa d'eines: funcions i proves amb `console.assert`. |
| 19 | 9. Miniprojecte 1 | Interfície, captura d'errors; revisió en parelles; lliurament. Repàs del format de la prova. |
| 20 | **Prova RA3** | 55 min. |

### Bloc 3 — RA6: tipus avançats de dades (sessions 21-30)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 21 | 10. Arrays | Llegir i canviar, `length`, afegir i llevar, buscar. Ex. 10.1-10.3. |
| 22 | 10. Arrays | Recórrer, dibuixar un array, mètodes útils. Ex. 10.4-10.7. |
| 23 | 10. Arrays (arrays d'arrays) | Activitat N3: ex. 10.8-10.10. |
| 24 | 11. Objectes | Crear, llegir i canviar, arrays d'objectes. Ex. 11.1-11.3. |
| 25 | 11. Objectes | Targetes a partir d'un array d'objectes, recórrer un objecte. Ex. 11.4-11.7. |
| 26 | 12. Mètodes d'arrays | Activitat N4. |
| 27 | 13. Expressions regulars | Activitat N5. |
| 28 | 14. Col·leccions | Activitat N6. |
| 29 | 15. JSON i XML | Activitat N7. Repàs del format de la prova. |
| 30 | **Prova RA6** | 55 min. |

### Bloc 4 — RA5: entrada i eixida (sessions 31-41)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 31 | 16. Esdeveniments | Objecte `event`, esdeveniments de camps. Ex. 16.1-16.3. |
| 32 | 16. Esdeveniments | Teclat, molts elements alhora, llevar un controlador. Ex. 16.4-16.7. |
| 33 | 17. Crear elements | `createElement`, llista a partir d'un array, botó en cada fila. Ex. 17.1-17.3. |
| 34 | 17. Crear elements | Eliminar elements, perill d'`innerHTML` amb text de l'usuari. Ex. 17.4-17.6. |
| 35 | 17. Miniprojecte 2 | Una llista que funciona: array, afegir, dibuixar. |
| 36 | 17. Miniprojecte 2 | Eliminar, comptador, "Esborra-ho tot"; revisió en parelles; lliurament. |
| 37 | 18. Formularis | `submit`, `preventDefault`, llegir i validar camps. Ex. 18.1, 18.2. |
| 38 | 18. Formularis | Validació en viu (amb les expressions regulars de la lliçó 13), missatges, marcar camps. Ex. 18.3-18.5. |
| 39 | 19. localStorage | Guardar i llegir, JSON. Ex. 19.1-19.3 (`localStorage` en el miniprojecte 2). |
| 40 | 19. localStorage | Patró desar i dibuixar; `try/catch` en llegir dades corruptes. Ex. 19.4, 19.5. Activitat N8: ex. 19.7-19.9. |
| 41 | **Prova RA5** | 55 min. |

### Bloc 5 — RA2: objectes predefinits (sessions 42-44)

| Sessió | Tema | Activitats |
|---|---|---|
| 42 | 20. Objectes i classes predefinides | Classe, objecte, atributs, mètodes, encapsulació, herència. `Date` i els seus constructors. Activitat N9. |
| 43 | 21. Mètodes estàtics, paràmetres i llibreries | Activitat N10. Repàs del format de la prova. |
| 44 | **Prova RA2** | 55 min. |

### Bloc 6 — RA4: classes (sessions 45-50)

| Sessió | Tema | Activitats |
|---|---|---|
| 45 | 22. Classes pròpies | `class`, `constructor`, propietats, mètodes, instàncies en un array. Activitat N11 (bàsic). |
| 46 | 22. Classes pròpies | Activitat N11 (estàndard i ampliació). |
| 47 | 23. Visibilitat i mètodes estàtics | Activitat N12. |
| 48 | 24. Herència | Activitat N13. |
| 49 | 25. Mòduls | Activitat N14. Repàs del format de la prova. |
| 50 | **Prova RA4** | 55 min. |

### Bloc 7 — Projecte final (sessions 51-62)

| Sessió | Fase | Activitats |
|---|---|---|
| 51 | Planificació | Presentació del repte i de la rúbrica. Tria de l'opció, esbós en paper de la pantalla i de les classes (atributs i mètodes), estructura de carpetes. |
| 52 | Fase 1: model | Classes en `model.js`: constructor, propietats, mètodes, camp privat; errors propis davant de dades no vàlides. |
| 53 | Fase 1: model | Mètodes amb operacions agregades (puntuació, comptadors, filtres); mètode estàtic de creació. |
| 54 | Fase 1: model | `tests.js` amb `console.assert`. **Fita 1**: el professor comprova que tots els tests passen. |
| 55 | Fase 2: interfície | `draw()` amb `createElement` a partir de l'array d'instàncies. |
| 56 | Fase 2: interfície | Esdeveniments. |
| 57 | Fase 2: interfície | Validació d'un camp amb expressió regular; missatges i formats en la pàgina. |
| 58 | Fase 2: interfície | `localStorage` amb `try/catch`. **Fita 2**: l'aplicació funciona i recorda les dades després de F5. |
| 59 | Fase 3: revisió | Llibreria externa. Proves de casos límit, consola sense errors, JSDoc, README. Repàs amb la rúbrica. Zip. |
| 60 | Lliurament | Marge per a acabar i lliurar; qui ja ha lliurat, opcions d'ampliació. |
| 61 | Presentacions | Presentacions de 3 min amb una pregunta del professor sobre el codi. |
| 62 | Presentacions | Resta de presentacions. Tancament del mòdul amb la lliçó 27. |

## Activitats

Els enunciats de les lliçons estan en la web. Nivells: **bàsic** = primers exercicis de la lliçó; **estàndard** = tots els exercicis de l'apartat *Exercises*; **ampliació** = els últims exercicis de l'apartat. Qui va endarrerit fa el bàsic i passa a la lliçó següent.

| Lliçó | Bàsic | Estàndard | Ampliació | Criteris |
|---|---|---|---|---|
| 1. El primer programa | 1.1, 1.2 | + 1.3-1.5 | — | CA1.1, CA1.2, CA1.3, CA1.9, CA5.1 |
| 2. Variables | 2.1, 2.2 | + 2.3-2.7 | — | CA1.4, CA1.5, CA1.6, CA1.8 |
| 3. Operadors | 3.1, 3.2 | + 3.3-3.6 | — | CA1.7, CA2.5, CA5.2 |
| 4. El DOM | 4.1, 4.2 | + 4.3-4.7 | — | CA2.4, CA5.8 |
| 5. Decisions | 5.1, 5.2 | + 5.3-5.7 | — | CA3.1 |
| 6. Bucles | 6.1-6.3 | + 6.4, 6.7 | 6.5, 6.6 | CA3.2, CA3.3 |
| 7. Funcions | 7.1-7.3 | + 7.4-7.6 | 7.7 | CA2.2, CA2.6, CA3.5 |
| 8. Depuració i assercions | 8.1 | + 8.2-8.4 | 8.5 | CA3.6, CA3.7, CA3.9 |
| 9. Errors i excepcions | 9.1 | + 9.2, 9.3 | 9.4 | CA3.4, CA3.8 |
| 10. Arrays | 10.1, 10.2 | + 10.3-10.5, 10.8, 10.9 | 10.6, 10.7, 10.10 | CA6.1, CA6.3, CA6.4 |
| 11. Objectes | 11.1, 11.2 | + 11.3-11.6 | 11.7 | CA6.3 |
| 12. Mètodes d'arrays | 12.1 | + 12.2, 12.3 | 12.4, 12.5 | CA6.4, CA6.10 |
| 13. Expressions regulars | 13.1, 13.2 | + 13.3, 13.4 | 13.5, 13.6 | CA6.7 |
| 14. Col·leccions | 14.1 | + 14.2, 14.3 | 14.4 | CA6.2, CA6.4, CA6.5 |
| 15. JSON i XML | 15.1 | + 15.2-15.4 | 15.5 | CA6.8, CA6.9 |
| 16. Esdeveniments | 16.1, 16.2, 16.4 | + 16.3, 16.5, 16.6 | 16.7 | CA5.7 |
| 17. Crear elements | 17.1, 17.2 | + 17.3-17.5 | 17.6 | CA5.8 |
| 18. Formularis | 18.1 | + 18.2-18.4 | 18.5 | CA5.7, CA5.8, CA6.7 |
| 19. localStorage | 19.1, 19.2 | + 19.3-19.5, 19.7, 19.8 | 19.6, 19.9 | CA3.4, CA5.1, CA5.2, CA5.3, CA6.9 |
| 20. Objectes i classes predefinides | 20.1 | + 20.2, 20.3 | 20.4 | CA2.1, CA2.2, CA2.3, CA2.8 |
| 21. Mètodes estàtics, paràmetres i llibreries | 21.1 | + 21.2, 21.3 | 21.4 | CA2.4, CA2.5, CA2.6, CA2.7 |
| 22. Classes pròpies | 22.1, 22.5 | + 22.2, 22.3 | 22.4 | CA4.1-CA4.5 |
| 23. Visibilitat i mètodes estàtics | 23.1 | + 23.2, 23.3 | 23.4 | CA4.6, CA4.8, CA6.9 |
| 24. Herència | 24.1 | + 24.2, 24.3 | 24.4 | CA4.7, CA3.8 |
| 25. Mòduls | 25.1 | + 25.2 | 25.3 | CA4.9, CA4.5, CA3.9 |

### Activitats noves (N1-N14)

**N1. Depuració i assercions (lliçó 8, sessió 16)** — CA3.6, CA3.7, CA3.9

- *Bàsic*: posa un punt d'interrupció en la funció de l'exercici 7.3, executa-la pas a pas i anota el valor de `max` després de cada línia.
- *Estàndard*: la funció `average(marks)` que dona el professor té un error de lògica; troba'l amb el depurador i corregix-lo. Escriu tres `console.assert` per a cada funció dels exercicis 7.1-7.3 (un cas normal, un límit i un negatiu).
- *Ampliació*: escriu el comentari JSDoc (`@param`, `@returns`) de les funcions de l'exercici 7.4 i comprova que VS Code el mostra en passar el ratolí per damunt.

**N2. Excepcions (lliçó 9, sessió 17)** — CA3.4, CA3.8

- *Bàsic*: en la calculadora de l'exercici 5.5, la funció de dividir llança `new Error("No es pot dividir per zero")`; el botó la crida dins de `try/catch` i mostra el missatge en roig.
- *Estàndard*: escriu `readNumber(input)`, que torna el número d'un camp o llança un error amb un missatge diferent si el camp és buit, si no és un número o si està fora de rang, i amb `name = "ValidationError"`. Usa-la en els exercicis 7.1-7.3. Amb `finally`, el camp es buida sempre.
- *Ampliació*: distingix en el `catch` els errors propis dels del navegador amb `error.name`.

**N3. Matrius (lliçó 10, ex. 10.8-10.10, sessió 23)** — CA6.1

- *Bàsic*: crea el tauler del tres en ratlla com un array de tres arrays i dibuixa'l en una taula amb dos bucles niats.
- *Estàndard*: en fer clic en una casella buida, s'hi posa `X` o `O` per torns (canvia l'array i redibuixa) i la pàgina avisa si una fila està completa amb el mateix símbol.
- *Ampliació*: comprova també columnes i diagonals i declara el guanyador.

**N4. Operacions agregades (lliçó 12, sessió 26)** — CA6.10, CA6.4

- *Bàsic*: refés l'exercici 11.3 (valor total de l'estoc) amb `reduce`.
- *Estàndard*: refés l'exercici 11.5 amb `filter` i `map`, i l'11.7 (mitjana, millor alumne, aprovats) amb `reduce`, `find` i `filter`, sense cap bucle `for`.
- *Ampliació*: amb `some` i `every`, digues si hi ha algun producte sense estoc i si tots costen menys de 50 €.

**N5. Expressions regulars (lliçó 13, sessió 27)** — CA6.7

- *Bàsic*: comprova amb `test()` si una llista de cadenes són codis postals (5 xifres) o correus senzills.
- *Estàndard*: refés la comprovació de contrasenya de l'exercici 5.3 amb tres expressions regulars; valida un DNI (8 xifres i una lletra) i extrau-ne la lletra amb `match`.
- *Ampliació*: amb `replace`, normalitza un telèfon escrit amb espais i guions; amb `match`, extrau tots els números d'un text.

**N6. Col·leccions (lliçó 14, sessió 28)** — CA6.2, CA6.4, CA6.5

- *Bàsic*: refés l'exercici 10.6 amb un `Set`.
- *Estàndard*: compta quantes vegades apareix cada paraula d'un text amb un `Map` i recorre'l amb `for...of` i `entries()`. Taula comparativa `Array` / `Set` / `Map` / objecte: ordre, repetits, accés per clau, mètodes principals.
- *Ampliació*: per a cinc situacions donades, tria la col·lecció i justifica-ho en una línia.

**N7. JSON i XML (lliçó 15, sessió 29)** — CA6.8, CA6.9

- *Bàsic*: convertix l'array de productes de l'exercici 11.2 a text amb `JSON.stringify`, mostra el text en la pàgina i torna'l a array amb `JSON.parse`.
- *Estàndard*: a partir d'un text JSON donat (catàleg de llibres), modifica un preu, afig un llibre i torna'l a text. Llig la versió XML del mateix catàleg (cadena donada) amb `DOMParser` i mostra els títols.
- *Ampliació*: `JSON.stringify` amb sagnat i amb només algunes propietats (segon paràmetre).

**N8. Possibilitats d'entrada i eixida (lliçó 19, ex. 19.7-19.9, sessió 40)** — CA5.1, CA5.2, CA5.3

- *Bàsic*: completa la taula "necessitat → recurs" (`prompt`, `alert`, `confirm`, `console`, DOM, `localStorage`, `fetch`) amb un exemple de cada un que ja hages usat en el mòdul.
- *Estàndard*: en el miniprojecte 2, mostra l'array amb `console.table` cada vegada que es desa i, en la pàgina, el nombre d'elements amb `toLocaleString`.
- *Ampliació*: data de l'última modificació de la llista en format local.

**N9. Objectes i classes predefinides (lliçó 20, sessió 42)** — CA2.1, CA2.2, CA2.3, CA2.8

- *Bàsic*: amb `new Date()` mostra la data i l'hora actuals en format local.
- *Estàndard*: amb `new Date(any, mes, dia)` calcula quants dies falten per al teu aniversari i l'edat exacta a partir de la data de naixement d'un camp `date`.
- *Ampliació*: crea la mateixa data amb tres formes del constructor (números, cadena `"AAAA-MM-DD"`, mil·lisegons) i comprova que són iguals.

**N10. Mètodes estàtics, paràmetres i llibreries (lliçó 21, sessió 43)** — CA2.4, CA2.5, CA2.6, CA2.7

- *Bàsic* (ex. 21.1): classifica 10 crides (`Math.max`, `"hi".includes`, `JSON.stringify`, `list.indexOf`, `Number.parseFloat`, `today.getFullYear`, `Math.random`, `text.split`, `Array.isArray`, `toFixed`) en mètodes estàtics i mètodes d'un objecte.
- *Estàndard* (ex. 21.2, 21.3): incorpora Day.js per CDN, mostra la data d'avui en format `DD/MM/YYYY` i els dies fins al teu aniversari amb `diff`, i compara-ho amb l'exercici 20.2; mostra un preu en euros i en dòlars amb les opcions de `toLocaleString`.
- *Ampliació* (ex. 21.4): incorpora la llibreria canvas-confetti i llança confeti en fer clic en un botó.

**N11. Classes pròpies (lliçó 22, sessions 45-46)** — CA4.1-CA4.5

- *Bàsic*: classe `Student` (nom i array de notes) amb el mètode `average()`; crea'n tres i mostra-les.
- *Estàndard*: refés l'exercici 11.2 amb una classe `Product` (mètode `stockValue()`) i un array d'instàncies dibuixat com a targetes. Classe `BankAccount` amb `deposit()` i `withdraw()`, que llança un error si no hi ha saldo.
- *Ampliació*: mètode `toString()` en cada classe i un llistat que l'usa.

**N12. Visibilitat i mètodes estàtics (lliçó 23, sessió 47)** — CA4.6, CA4.8

- *Bàsic*: en `BankAccount`, el saldo passa a `#balance` amb un `get balance()`; comprova que `account.#balance` dona error fora de la classe.
- *Estàndard*: `set` que rebutja preus negatius en `Product`; mètode estàtic `Product.fromJSON(obj)` que torna una instància; desa l'array en `localStorage` i, en carregar, torna a crear les instàncies amb `map(Product.fromJSON)`.
- *Ampliació*: comptador estàtic d'instàncies creades.

Nota de gestió: `JSON.stringify` no guarda els camps `#privats`; cal un mètode `toJSON()` que torne un objecte amb les dades.

**N13. Herència (lliçó 24, sessió 48)** — CA4.7, CA3.8

- *Bàsic*: `Vehicle` (marca, model, `describe()`) i `Car extends Vehicle` amb el nombre de portes, usant `super`.
- *Estàndard*: `Motorbike` sobreescriu `describe()` reutilitzant `super.describe()`; `class InsufficientFundsError extends Error` que llança `BankAccount` i que el programa captura i distingix amb `instanceof`.
- *Ampliació*: array amb cotxes i motos, recorregut cridant `describe()` en tots.

**N14. Mòduls (lliçó 25, sessió 49)** — CA4.9, CA4.5

- *Bàsic*: mou `Product` i `BankAccount` a `model.js` amb `export` i importa-les en `main.js` (`<script type="module">`).
- *Estàndard*: `tests.js` que importa les classes del mòdul i les prova amb `console.assert`.
- *Ampliació*: `model.js` sense cap referència a la pàgina; una segona pàgina que reutilitza el mateix mòdul.

Nota de gestió: els mòduls no funcionen obrint l'arxiu amb doble clic; cal Live Server.

### Miniprojecte 1 — Caixa d'eines (sessions 18-19)

Una pàgina amb almenys vuit eines (lliçó 9): cada eina té un o dos camps, un botó i un lloc on apareix la resposta, i darrere de cada botó hi ha una funció que torna un valor. A més dels requisits de la lliçó: cada funció de càlcul té almenys dos `console.assert` que passen, i almenys una funció llança un error amb dades no vàlides que la interfície captura i mostra.

- *Bàsic*: cinc eines.
- *Ampliació*: comentaris JSDoc en totes les funcions.

Dinàmica d'aula: abans de lliurar, cada parella intercanvia l'ordinador i marca la llista de requisits de l'altre; el professor dona retroacció oral. Criteris treballats: CA3.4, CA3.5, CA3.6, CA3.9.

### Miniprojecte 2 — Una llista que funciona (sessions 35-36, ampliat en 39-40)

Els requisits de la lliçó 17. En les sessions 39-40 s'hi afig `localStorage` (exercici 19.3). És l'assaig de l'opció B del projecte.

Mateixa dinàmica de revisió en parelles. Criteris treballats: CA5.7, CA5.8, CA6.3, CA6.9.

### Proves

Totes són pràctiques, en l'ordinador, individuals i sense apunts, de 55 min, i es lliuren en zip.

**Prova RA1 (sessió 7)**

1. Crea en VS Code la carpeta `cognom-prova-ra1` amb `index.html` i `script.js` enllaçat i executa-la amb Live Server (5 min).
2. Programa donat: afig un comentari davant de cada bloc (dades, entrada, procés, eixida) i un comentari de bloc inicial amb el nom i la data (6 min).
3. Programa amb valors repetits: reescriu-lo amb variables i constants del tipus adequat (10 min).
4. Prediu el resultat de 8 expressions amb operadors i escriu 3 expressions per a condicions donades (p. ex. "és parell", "major d'edat i amb entrada") (14 min).
5. Prediu 4 conversions de tipus i corregix el programa que suma dos números de `prompt` i mostra `"35"` (10 min).

**Prova RA3 (sessió 20)**

1. "Notes del grup": funció que rep un array de notes, calcula la mitjana amb un bucle acumulador que s'atura en la primera nota negativa, i torna la qualificació (Suspens, Aprovat, Notable, Excel·lent); prova-la amb tres arrays donats (15 min).
2. Taula de traça de les quatre primeres voltes del bucle anterior amb un array donat (5 min).
3. Codi amb 5 errors: 3 de sintaxi i 2 de lògica (9 min).
4. Funció `readAge(text)` que llança errors propis si el text és buit, no és un número o està fora de 0-120; crida-la dins de `try/catch` i mostra el missatge en la pàgina (10 min).
5. Tres `console.assert` per a una funció donada; un ha de fallar: troba i corregix l'error (6 min).
6. Comentari JSDoc de la funció `readAge` (5 min).

**Prova RA6 (sessió 30)**

1. Matriu 3 × 3 donada: mostra-la com a taula i digues si una fila està completa (6 min).
2. Relaciona 5 necessitats amb `Array`, `Set`, `Map`, `String` o `RegExp` (4 min).
3. Llista de la compra (array d'objectes): afig un producte, elimina'n un pel nom i modifica la quantitat d'un altre (8 min).
4. Recorre la llista amb `for...of`, amb `forEach` mostrant la posició i un `Map` donat amb `entries()` (6 min).
5. Quatre situacions: tria `Array`, `Set`, `Map` o objecte i justifica-ho; compta paraules amb un `Map` (7 min).
6. Expressions regulars per a codi postal i DNI, provades amb quatre cadenes cada una (7 min).
7. Relaciona 3 necessitats amb `JSON.stringify`, `JSON.parse` i `DOMParser` (3 min).
8. Text JSON donat: convertix-lo, modifica un valor, afig un element i torna a convertir-lo a text sagnat (6 min).
9. Array d'alumnes: aprovats amb `filter`, noms en majúscules amb `map`, mitjana amb `reduce` i ordenació per nota amb `sort` (8 min).

**Prova RA5 (sessió 41)**

1. Programa per consola: demana nom i edat amb `prompt`, escriu una salutació amb `console.log` i mostra un array donat amb `console.table` (6 min).
2. Mostra en la pàgina un preu, un percentatge i una data amb format local (`1.234,50 €`, `21,5 %`, `20/05/2027`) (6 min).
3. Relaciona 7 necessitats amb `prompt`, `alert`, `confirm`, `console`, DOM, `localStorage` o `fetch` (5 min).
4. Amb l'HTML donat (formulari d'alta de productes i llista buida): en enviar, valida el nom (no buit) i el preu (major que 0) amb missatges en la pàgina; si és correcte, afig el producte a l'array i redibuixa la llista amb un botó d'eliminar en cada fila; un comptador de caràcters del nom s'actualitza mentre s'escriu (33 min).

**Prova RA2 (sessió 44)**

1. Quatre preguntes curtes: classe i objecte, instància, encapsulació, herència (6 min).
2. "Dies per a les vacances": programa complet que llig una data d'un camp, calcula els dies que falten i els mostra (10 min).
3. Crea amb `new` una data concreta (amb números i amb cadena) i un `Set` a partir d'un array donat, i usa'n els mètodes (8 min).
4. Sis operacions sobre un text i un array donats amb els seus mètodes i propietats (`length`, `toUpperCase`, `includes`, `split`, `push`, `indexOf`) (8 min).
5. Classifica 6 crides en estàtiques o d'instància i escriu-ne dues d'estàtiques (`Math.max`, `Number.isInteger`) (5 min).
6. Quatre crides amb els paràmetres adequats per a obtindre un resultat donat (`toFixed`, `slice`, `replace`, `toLocaleString`) (5 min).
7. Enllaça la llibreria Day.js (còpia local donada) i, amb les seues funcions, formata una data i calcula una diferència en dies (8 min).

**Prova RA4 (sessió 50)**

1. Classe donada (amb camp privat, mètode estàtic i classe filla): marca el constructor, una propietat, un mètode, el mètode estàtic, el camp privat i la classe filla (5 min).
2. Classe `Product` a partir d'una especificació: constructor amb tres paràmetres i valor per defecte, `#price` amb `get` i `set` que rebutja negatius, `total()`, `toString()` i `static fromObject(obj)` (22 min).
3. `DigitalProduct extends Product` amb `super` i `toString()` sobreescrit (8 min).
4. `model.js` que exporta les dues classes i `main.js` que les importa, crea un array amb tres productes (un digital) i mostra cada producte i el total (12 min).

### Projecte final — La meua primera aplicació (sessions 51-62)

Opció A (joc de preguntes) o opció B (llista de tasques) de la lliçó 26, amb els arxius HTML i CSS de partida. Tota la nota ve del JavaScript. Requisits mínims, que coincidixen amb el nivell Suficient de cada fila de la rúbrica:

- **Estructura**: `index.html`, `css/`, `js/main.js`, `js/model.js`, `js/tests.js`; noms en minúscules sense espais; s'obri amb Live Server.
- **Funcionalitat**: tots els requisits de l'opció triada en la lliçó 26; totes les decisions funcionen i els bucles acaben sempre.
- **Classes**: almenys 2 classes en `model.js` (p. ex. `Question` i `Quiz`, o `Task` i `TaskList`), exportades i importades en `main.js`; les dades són un array d'instàncies; un mètode estàtic usat (p. ex. `fromJSON`); el model llança un error amb missatge clar davant de dades no vàlides.
- **Proves**: `tests.js` amb almenys 6 `console.assert` sobre mètodes del model, tots en verd, i un resum en la consola. Cap error en la consola en un ús normal.
- **Dades**: `localStorage` amb `JSON` en desar i en carregar; `try/catch` en carregar i en les crides que poden fallar; almenys dues operacions agregades diferents; un camp validat amb expressió regular; recorreguts amb `for...of` o `forEach`.
- **Interfície**: almenys 3 `addEventListener` de 2 tipus diferents i cap `onclick` en l'HTML; `textContent` i `createElement` per a les dades de l'usuari; números amb format.
- **Llenguatge**: almenys 5 mètodes o propietats diferents de cadenes, arrays o elements; una llibreria externa per CDN.
- **Documentació i lliurament**: comentari damunt de cada funció i mètode; `cognom-nom-project.zip` amb `README.txt` (nom, opció, com s'usa, què ha costat més i què afegiria); presentació de 3 min: l'aplicació funcionant i una funció explicada línia a línia.

- *Bàsic*: els requisits mínims; plantilla de l'esbós de classes donada pel professor.
- *Ampliació*: herència en el model (p. ex. `TimedQuestion extends Question`), categories sense repetir amb un `Set`, ordenació triada per l'usuari, idea pròpia.

Si l'aplicació no s'obri o dona error en carregar, es torna per a corregir-la abans de qualificar-la.

## Atenció a la diversitat (DUA)

- **Representació**: demostració en directe escrivint el codi (no diapositives amb codi fet); cada lliçó té codi i resultat costat a costat; full de referència ràpida de sintaxi en paper; glossari anglés-valencià; traductor del navegador permés per a llegir les lliçons; taules de traça en paper per a seguir els bucles.
- **Acció i expressió**: arxius de partida en els exercicis llargs, en les proves i en el projecte; esbós en paper abans de programar; tres nivells en cada lliçó i activitat; en les proves, temps addicional i full de referència per a qui tinga adaptació reconeguda; presentació final davant només del professor si l'alumne ho necessita; còpia local de la llibreria externa si falla la connexió.
- **Implicació**: tria entre dues aplicacions o idea pròpia; temes del joc de preguntes lliures; resultat visible des de la primera sessió; proves curtes i freqüents, una per RA; revisió en parelles dels miniprojectes; qui acaba abans ajuda un company sense tocar-li el teclat.

## Instruments d'avaluació

| Instrument | Moment | Qui avalua | Activitat on s'aplica | Tipus de qualificació |
|---|---|---|---|---|
| Rúbrica de la prova RA1 | Sessió 7 | Heteroavaluació | Prova RA1 | Rúbrica de 4 nivells |
| Rúbrica de la prova RA3 | Sessió 20 | Heteroavaluació | Prova RA3 | Rúbrica de 4 nivells |
| Rúbrica de la prova RA6 | Sessió 30 | Heteroavaluació | Prova RA6 | Rúbrica de 4 nivells |
| Rúbrica de la prova RA5 | Sessió 41 | Heteroavaluació | Prova RA5 | Rúbrica de 4 nivells |
| Rúbrica de la prova RA2 | Sessió 44 | Heteroavaluació | Prova RA2 | Rúbrica de 4 nivells |
| Rúbrica de la prova RA4 | Sessió 50 | Heteroavaluació | Prova RA4 | Rúbrica de 4 nivells |
| Rúbrica del projecte | Lliurament (sessió 60) i presentacions (sessions 61-62) | Heteroavaluació (l'alumnat la usa abans per a revisar la seua aplicació, sessió 59) | Projecte final i presentació | Rúbrica de 4 nivells |

## Indicadors d'èxit

En totes les rúbriques, cada fila rep el nivell més alt del qual es complixen **totes** les condicions; Insuficient és no arribar a Suficient. Cada nivell superior inclou l'anterior. Entre parèntesis, l'apartat de la prova. La columna "Pes" és el pes de l'indicador dins del seu criteri.

### Rúbrica de la prova RA1

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P1.1. Projecte (1) | CA1.2 | 50 % | Falta algun arxiu o `script.js` no està enllaçat. | Carpeta amb `index.html` i `script.js` enllaçat. | A més, noms de carpeta i arxius com demana l'enunciat. | A més, l'script es carrega al final del `body` o amb `defer`. |
| P1.2. Entorn de desenrotllament (1) | CA1.3 | 100 % | El programa no s'executa des de VS Code. | S'executa amb Live Server. | A més, usa la consola de DevTools per a veure l'eixida. | A més, codi sagnat uniformement amb el format de l'editor. |
| P1.3. Blocs del programa (2) | CA1.1 | 100 % | 0-1 blocs ben identificats de 4. | 2 blocs ben identificats. | 3 blocs ben identificats. | Els 4 blocs i cap línia en un bloc equivocat. |
| P1.4. Comentaris (2) | CA1.9 | 100 % | Cap comentari o algun que trenca el programa. | Un comentari de línia correcte davant de cada bloc. | A més, comentari de bloc inicial amb nom i data. | A més, els comentaris expliquen la intenció, no repetixen el codi. |
| P1.5. Tipus de dades (3) | CA1.4 | 100 % | Menys de 3 dades de 6 amb el tipus adequat. | 3-4 dades amb el tipus adequat. | 5 dades amb el tipus adequat. | Les 6, comprovades amb `typeof`. |
| P1.6. Ús de variables (3) | CA1.5 | 100 % | El programa modificat no funciona o queden més de 2 valors repetits. | Funciona igual que l'original amb com a màxim 2 valors repetits. | Cap valor repetit. | A més, noms descriptius en camelCase. |
| P1.7. Constants i literals (3) | CA1.6 | 100 % | 2 o més errors: `let` per a valors fixos, decimals amb coma, cadenes sense cometes. | Com a màxim un error. | `const` per a tots els valors fixos i `let` només per als que canvien; literals correctes. | A més, el missatge final amb una plantilla de text. |
| P1.8. Operadors (4) | CA1.7 | 100 % | Menys de 4 prediccions encertades de 8. | 4-5 prediccions i 1 expressió escrita correcta. | 6-7 prediccions i 2 expressions correctes. | Les 8 prediccions i les 3 expressions correctes. |
| P1.9. Conversions (5) | CA1.8 | 100 % | 0-1 prediccions encertades de 4, o la suma continua donant `"35"`. | 2 prediccions i la suma corregida. | 3 prediccions i la suma corregida. | Les 4, la suma corregida i diu quines conversions són implícites i quines explícites. |

### Rúbrica de la prova RA3

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P3.1. Selecció (1) | CA3.1 | 50 % | 0-1 qualificacions correctes en 4 casos. | 2 correctes. | 3 correctes. | Les 4, amb `else if` i sense condicions redundants. |
| P3.2. Repetició (1, 2) | CA3.2 | 50 % | El bucle no acaba o no acumula. | Suma correcta, però mitjana o taula de traça amb errors. | Suma i mitjana correctes i taula de traça amb un error com a màxim. | Tot correcte. |
| P3.3. Salt (1) | CA3.3 | 100 % | No s'atura en la primera nota negativa. | S'atura, però la nota negativa entra en la mitjana. | S'atura i la mitjana usa només les notes llegides. | A més, explica en un comentari què faria `continue`. |
| P3.4. Programa amb diverses estructures (1) | CA3.5 | 30 % | La funció no s'executa o no torna cap resultat. | S'executa i combina bucle i selecció, encara que falle en algun dels tres arrays. | Correcta amb els tres arrays. | A més, el càlcul i la presentació del resultat estan en funcions separades, sense codi repetit. |
| P3.5. Prova i depuració (3) | CA3.6 | 30 % | 0-1 errors corregits de 5. | 2-3 corregits. | 4 corregits. | Els 5, amb la línia i el tipus d'error anotats, i on ha posat el punt d'interrupció o el `console.log` que ha delatat els de lògica. |
| P3.6. Creació d'excepcions (4) | CA3.8 | 50 % | No llança cap error. | Llança `new Error` amb un missatge clar en almenys un cas no vàlid. | Un missatge diferent per a cada cas (buit, no número, fora de rang). | A més, `name` propi (`"ValidationError"`). |
| P3.7. Control d'excepcions (4) | CA3.4 | 40 % | Sense `try/catch` o el programa es trenca. | `try/catch` i el programa no es trenca. | A més, mostra `error.message` en la pàgina. | A més, en un cas correcte el missatge d'error anterior desapareix. |
| P3.8. Assercions (5) | CA3.9 | 40 % | Menys de 3 `console.assert` correctes. | 3 `console.assert` correctes amb casos adequats. | A més, troba l'error a partir de l'asserció que falla i corregix la funció. | A més, un dels casos és un cas límit. |
| P3.9. Documentació (6) | CA3.7 | 30 % | Cap comentari de la funció. | Comentari que diu què fa la funció. | Format JSDoc amb `@param` i `@returns`. | A més, `@throws` amb els errors que llança. |

### Rúbrica de la prova RA6

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P6.1. Matriu (1) | CA6.1 | 100 % | No accedix a les cel·les amb `[fila][columna]`. | Mostra la matriu amb bucles niats. | A més, comprova la fila demanada. | A més, una funció que comprova qualsevol fila. |
| P6.2. Classes de tipus avançats (2) | CA6.2 | 100 % | 0-2 encerts de 5. | 3 encerts. | 4 encerts. | Els 5. |
| P6.3. Llistes (3) | CA6.3 | 30 % | Cap de les tres operacions funciona. | Afig i elimina correctament. | A més, modifica la quantitat buscant pel nom. | A més, no falla si el producte no existix (`-1` controlat). |
| P6.4. Iteradors (4) | CA6.4 | 50 % | Cap recorregut correcte. | Recorregut amb `for...of` correcte. | A més, `forEach` amb la posició. | A més, el `Map` recorregut amb `entries()`. |
| P6.5. Tria de col·lecció (5) | CA6.5 | 100 % | 0-1 situacions ben resoltes de 4. | 2 ben resoltes. | 3 ben resoltes i el `Map` compta bé les paraules. | Les 4 amb justificació correcta i el `Map` correcte. |
| P6.6. Expressions regulars (6) | CA6.7 | 60 % | Cap patró correcte. | Un patró classifica bé les 4 cadenes. | Tots dos patrons classifiquen bé les 4 cadenes. | A més, extrau la lletra del DNI amb `match`. |
| P6.7. Classes per a formats d'intercanvi (7) | CA6.8 | 100 % | 0-1 encerts de 3. | 2 encerts. | Els 3. | A més, diu quin format (JSON o XML) tracta cada una. |
| P6.8. JSON (8) | CA6.9 | 40 % | No obté l'objecte amb `JSON.parse`. | Obté l'objecte i llig un valor. | A més, modifica el valor i afig l'element. | A més, el torna a text sagnat i el resultat és JSON vàlid. |
| P6.9. Operacions agregades (9) | CA6.10 | 50 % | 0-1 operacions correctes de 4. | 2 correctes. | 3 correctes. | Les 4, sense cap bucle `for`. |

### Rúbrica de la prova RA5

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P5.1. Consola (1) | CA5.1 | 60 % | No llig amb `prompt` o no escriu res en la consola. | Llig les dues dades i escriu la salutació amb `console.log`. | A més, mostra l'array amb `console.table`. | A més, controla que l'usuari cancel·le o escriga una edat no numèrica. |
| P5.2. Formats (2) | CA5.2 | 50 % | 0-1 valors amb el format demanat de 3. | 2 valors. | Els 3. | Els 3 amb `toLocaleString` o `Intl`, sense construir el format a mà. |
| P5.3. Possibilitats d'entrada i eixida (3) | CA5.3 | 100 % | 0-3 encerts de 7. | 4-5 encerts. | 6 encerts. | Els 7. |
| P5.4. Controladors d'esdeveniments (4) | CA5.7 | 30 % | Ni l'enviament ni l'eliminació funcionen amb `addEventListener`. | L'enviament (amb `preventDefault`) i el botó d'eliminar funcionen. | A més, el comptador de caràcters s'actualitza amb l'esdeveniment `input`. | A més, un sol controlador per a tots els botons d'eliminar, amb `event.target`. |
| P5.5. Interfície per a entrada i eixida (4) | CA5.8 | 30 % | No llig els camps o la llista no es mostra. | Llig els camps, afig a l'array i redibuixa la llista amb `createElement` i `textContent`. | A més, missatges d'error en la pàgina i camps buidats després d'afegir. | A més, el camp incorrecte es marca amb una classe i hi torna el focus. |

### Rúbrica de la prova RA2

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P2.1. Fonaments de la POO (1) | CA2.1 | 100 % | 0-1 respostes correctes de 4. | 2 correctes. | 3 correctes. | Les 4, cada una amb un exemple propi. |
| P2.2. Programa simple (2) | CA2.2 | 100 % | No s'executa o li falta l'entrada, el procés o l'eixida. | S'executa de principi a fi (llig, calcula i mostra). | A més, el resultat és correcte. | A més, amb el camp buit mostra un missatge en lloc d'un resultat erroni. |
| P2.3. Classes predefinides (3) | CA2.3 | 100 % | No crea les instàncies amb `new` o no usa cap mètode. | Crea la data i el `Set` amb `new` i usa un mètode de cada un. | A més, els resultats són correctes. | A més, usa `size` i `has` del `Set`. |
| P2.4. Constructors (3) | CA2.8 | 100 % | Cap constructor amb els paràmetres adequats. | La data amb números (mes comptat des de 0) o el `Set` a partir de l'array, correctes. | Tots dos correctes. | A més, la data també amb cadena `"AAAA-MM-DD"` i comprova que són iguals. |
| P2.5. Mètodes i propietats (4) | CA2.4 | 40 % | 0-2 operacions correctes de 6. | 3-4 correctes. | 5 correctes. | Les 6. |
| P2.6. Mètodes estàtics (5) | CA2.5 | 100 % | 0-2 crides ben classificades de 6. | 3-4 ben classificades. | 5-6 ben classificades i una crida estàtica escrita correcta. | Les 6 i les dues crides correctes. |
| P2.7. Paràmetres (6) | CA2.6 | 100 % | 0-1 crides que donen el resultat demanat de 4. | 2 crides. | 3 crides. | Les 4. |
| P2.8. Llibreria (7) | CA2.7 | 50 % | La llibreria no es carrega o la crida dona error. | Carregada amb `script` i una funció cridada amb resultat correcte. | Les dues operacions (format i diferència) correctes. | A més, usa un patró de format diferent del de l'exemple de la documentació. |

### Rúbrica de la prova RA4

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| P4.1. Components d'una classe (1) | CA4.1 | 100 % | 0-2 components ben marcats de 6. | 3-4 ben marcats. | 5 ben marcats. | Els 6. |
| P4.2. Definició de la classe (2) | CA4.2 | 100 % | La classe dona error en carregar o en fer `new`. | Es poden crear dos objectes de la classe. | A més, nom en PascalCase i cap funció fora de la classe. | A més, cap propietat creada fora del constructor. |
| P4.3. Propietats i mètodes (2) | CA4.3 | 100 % | Ni `total()` ni `toString()` funcionen. | Un dels dos funciona. | Tots dos funcionen i usen `this`. | A més, `toString()` reutilitza `total()`. |
| P4.4. Constructor (2) | CA4.4 | 100 % | Sense constructor o no assigna les propietats. | Assigna les tres propietats. | A més, valor per defecte en l'estoc. | A més, el preu passa pel `set` des del constructor. |
| P4.5. Visibilitat (2) | CA4.6 | 100 % | `#price` no és privat o no hi ha `get`. | `#price` privat amb `get`. | A més, `set` que rebutja negatius. | A més, comprova que `#price` no és accessible fora de la classe. |
| P4.6. Mètode estàtic (2) | CA4.8 | 50 % | No definix `static` o el crida sobre una instància. | `static fromObject` definit. | A més, cridat sobre la classe, torna una instància que funciona. | A més, usat amb `map` per a convertir un array d'objectes. |
| P4.7. Herència (3) | CA4.7 | 100 % | Falta `extends` o `super` i dona error. | `extends` i `super` correctes; la instància es crea. | A més, `toString()` sobreescrit. | A més, el mètode sobreescrit reutilitza `super.toString()`. |
| P4.8. Llibreria de classes (4) | CA4.9 | 40 % | Classes en `main.js` o error en importar. | `model.js` exporta les dues classes i `main.js` les importa. | A més, `model.js` només conté definicions (cap codi que s'execute en importar-lo). | A més, `model.js` no fa cap referència a la pàgina. |
| P4.9. Programa amb les classes creades (4) | CA4.5 | 30 % | No crea cap instància de les seues classes. | Array amb els tres productes (un digital) i cada un mostrat amb `toString()`. | A més, total correcte calculat amb els mètodes de les classes. | A més, els productes es creen a partir d'un array d'objectes amb `fromObject` i `map`. |

### Rúbrica del projecte

Es comprova usant l'aplicació (afegir, eliminar, recarregar, dades buides i errònies), executant `tests.js`, mirant la consola i el codi. El nivell Suficient de cada fila són els requisits mínims del projecte.

| Indicador | Criteri | Pes | Insuficient (1-4) | Suficient-Bé (5-6) | Notable (7-8) | Excel·lent (9-10) |
|---|---|---|---|---|---|---|
| R1. Estructura del projecte | CA1.2 | 50 % | Falta algun arxiu de l'estructura o l'aplicació no s'obri. | `index.html`, `css/`, `js/main.js`, `js/model.js` i `js/tests.js`; noms en minúscules sense espais; s'obri amb Live Server. | A més, cap ruta absoluta en els enllaços ni en els `import`. | A més, cap arxiu sobrant (proves velles, còpies). |
| R2. Mètodes i propietats predefinits | CA2.4 | 60 % | Menys de 5 mètodes o propietats diferents, o algun usat malament. | Almenys 5 mètodes o propietats diferents de cadenes, arrays o elements, ben usats. | A més, cap bucle que reimplemente un mètode existent (`includes`, `indexOf`). | A més, `Date` o `toLocaleString` per a mostrar una data o un número. |
| R3. Llibreria externa | CA2.7 | 50 % | Cap llibreria externa. | Una llibreria carregada per CDN i cridada almenys una vegada amb efecte visible. | A més, usa opcions de la llibreria i n'enllaça la documentació en el README. | A més, l'aplicació funciona encara que la llibreria no carregue. |
| R4. Selecció | CA3.1 | 50 % | Alguna decisió de l'aplicació falla (resposta correcta o incorrecta, camp buit, filtre, missatge final). | Totes les decisions de l'opció funcionen. | A més, sense condicions redundants ni `if` niats evitables. | A més, retorn anticipat o ternari on simplifica el codi. |
| R5. Repetició | CA3.2 | 50 % | Algun bucle no acaba o deixa elements sense tractar. | Els bucles de dibuix i de càlcul recorren tots els elements i acaben sempre. | A més, cap índex fora de rang ni variable de bucle innecessària. | A més, la cerca s'atura quan troba l'element (`break`, `return` o `find`). |
| R6. Control d'excepcions | CA3.4 | 60 % | `JSON.parse` de `localStorage` o crides que poden fallar sense protecció. | `try/catch` en llegir `localStorage` i en les crides al model que poden llançar errors; l'aplicació no es trenca. | A més, missatge clar a l'usuari en la pàgina. | A més, després d'un error la interfície queda coherent (redibuix o `finally`). |
| R7. Programa complet | CA3.5 | 70 % | Falta algun requisit de l'opció triada o no funciona. | Tots els requisits de l'opció triada funcionen. | A més, funcions d'una sola tasca, de 20 línies com a màxim, sense codi repetit. | A més, en la presentació explica una funció línia a línia i respon bé la pregunta del professor. |
| R8. Prova i depuració | CA3.6 | 70 % | Errors en la consola en un ús normal. | Cap error en la consola en un ús normal. | A més, cap error en els casos límit (camp buit, llista buida, `localStorage` corrupte). | A més, README amb la llista de proves manuals fetes i el resultat. |
| R9. Comentaris i documentació | CA3.7 | 70 % | Funcions sense comentari o README incomplet. | Comentari damunt de cada funció i mètode; README complet. | A més, comentaris en format JSDoc amb `@param` i `@returns`. | A més, cap comentari desfasat respecte del codi. |
| R10. Errors propis | CA3.8 | 50 % | El model no llança cap error davant de dades no vàlides. | El model llança `Error` amb un missatge clar davant de dades no vàlides (text buit, pregunta sense opcions). | A més, una classe d'error pròpia (`extends Error`). | A més, `main.js` la distingix amb `instanceof` i mostra un missatge diferent. |
| R11. Assercions | CA3.9 | 60 % | Menys de 6 `console.assert` o algun falla. | `tests.js` amb almenys 6 `console.assert` sobre el model, tots en verd. | A més, cobrixen tots els mètodes públics del model. | A més, inclouen casos límit (llista buida, valor no vàlid, error llançat). |
| R12. Ús de les classes pròpies | CA4.5 | 70 % | Les dades no són instàncies de les seues classes. | Les dades són un array d'instàncies de les seues classes i l'aplicació usa els seus mètodes. | A més, la lògica (puntuar, marcar, filtrar) està en mètodes del model, no en `main.js`. | A més, una subclasse del model usada en l'aplicació. |
| R13. Mètodes estàtics | CA4.8 | 50 % | Cap mètode estàtic en el model. | Un mètode estàtic en el model, usat (p. ex. `fromJSON` per a tornar a crear les instàncies en carregar). | A més, cridat sobre la classe dins d'un `map`. | A més, un segon mètode estàtic amb sentit (validador, comptador). |
| R14. Llibreria de classes | CA4.9 | 60 % | Classes en `main.js` o sense mòduls. | `model.js` amb almenys 2 classes exportades i importades en `main.js`. | A més, `tests.js` importa les mateixes classes. | A més, `model.js` no toca la pàgina (es podria reutilitzar amb una altra interfície). |
| R15. Consola | CA5.1 | 40 % | `tests.js` no mostra res en la consola. | En executar `tests.js`, la consola mostra quines proves fallen i un resum amb `console.log`. | A més, `console.table` per a mostrar l'estat del model. | A més, cap `console.log` de depuració oblidat en `main.js`. |
| R16. Formats | CA5.2 | 50 % | Números sense format (decimals llargs, percentatges sense símbol). | Puntuació, comptadors i percentatges amb un format adequat. | A més, `toLocaleString` o `Intl` per a números o dates. | A més, singular i plural correctes ("1 tasca", "3 tasques"). |
| R17. Controladors d'esdeveniments | CA5.7 | 70 % | Menys de 3 controladors, d'un sol tipus, o `onclick` en l'HTML. | Almenys 3 `addEventListener` de 2 tipus diferents i cap `onclick` en l'HTML. | A més, usa l'objecte `event` (`key`, `target`, `preventDefault`). | A més, un sol controlador gestiona tots els botons d'una llista (delegació o `data-*`). |
| R18. Entrada i eixida en la interfície | CA5.8 | 70 % | La pàgina no reflectix les dades o usa `innerHTML` amb text de l'usuari. | Llig els controls, mostra les dades amb `createElement` i `textContent`, i la pàgina sempre coincidix amb l'array (`draw()`). | A més, missatges d'error i de confirmació en la pàgina, no amb `alert`. | A més, el camp es buida i rep el focus després d'afegir, i els botons es deshabiliten quan no es poden usar. |
| R19. Llistes | CA6.3 | 70 % | No hi ha array o la pàgina i l'array no coincidixen. | Array d'instàncies en el qual s'afig, s'elimina i es modifica, i després es redibuixa. | A més, elimina i modifica per identificador, no per posició en la pantalla. | A més, l'usuari pot ordenar la llista per un criteri. |
| R20. Iteradors | CA6.4 | 50 % | Recorreguts amb índexs erronis o que se n'ixen de l'array. | Recorre la llista amb `for...of` o `forEach` en dibuixar i en desar. | A més, `entries()` o l'índex de `forEach` quan necessita la posició. | A més, recorre també un `Set` o un `Map` (p. ex. categories sense repetir). |
| R21. Expressions regulars | CA6.7 | 40 % | Cap expressió regular. | Un camp validat amb `test()` i missatge si no complix. | A més, el patró usa `^`, `$` i classes de caràcters. | A més, una segona expressió valida un altre camp o neteja el text amb `replace`. |
| R22. JSON | CA6.9 | 60 % | Desa sense JSON o es perden dades en recarregar. | `JSON.stringify` en desar i `JSON.parse` en carregar. | A més, una única funció `save()` que desa tot l'estat en una sola clau. | A més, `toJSON()` en les classes per a decidir què es guarda. |
| R23. Operacions agregades | CA6.10 | 50 % | Cap operació agregada. | Almenys 2 operacions agregades diferents amb resultat visible (comptador, filtre, puntuació). | `filter`, `map` i `reduce`. | A més, encadenades en almenys un cas dins d'un mètode del model. |

## Taula de traçabilitat i qualificació

| Criteri | Pes dins del RA | Activitat(s) | Indicadors (instrument) i pes dins del criteri |
|---|---|---|---|
| CA1.1 | 10 % | Lliçó 1 | P1.3 (prova RA1) 100 % |
| CA1.2 | 10 % | Lliçó 1, miniprojectes, projecte | P1.1 (prova RA1) 50 % · R1 (projecte) 50 % |
| CA1.3 | 10 % | Lliçó 1 | P1.2 (prova RA1) 100 % |
| CA1.4 | 10 % | Lliçó 2 | P1.5 (prova RA1) 100 % |
| CA1.5 | 10 % | Lliçó 2 | P1.6 (prova RA1) 100 % |
| CA1.6 | 10 % | Lliçó 2 | P1.7 (prova RA1) 100 % |
| CA1.7 | 20 % | Lliçó 3 | P1.8 (prova RA1) 100 % |
| CA1.8 | 10 % | Lliçó 2 | P1.9 (prova RA1) 100 % |
| CA1.9 | 10 % | Lliçó 1 | P1.4 (prova RA1) 100 % |
| CA2.1 | 10 % | Lliçó 20 (N9) | P2.1 (prova RA2) 100 % |
| CA2.2 | 20 % | Lliçons 1-7 i 20 (N9) | P2.2 (prova RA2) 100 % |
| CA2.3 | 10 % | Lliçons 14 (N6) i 20 (N9) | P2.3 (prova RA2) 100 % |
| CA2.4 | 20 % | Lliçons 4, 10, 17, 21 (N10), projecte | P2.5 (prova RA2) 40 % · R2 (projecte) 60 % |
| CA2.5 | 10 % | Lliçons 3 i 21 (N10) | P2.6 (prova RA2) 100 % |
| CA2.6 | 10 % | Lliçons 3, 7 i 21 (N10) | P2.7 (prova RA2) 100 % |
| CA2.7 | 10 % | Lliçó 21 (N10), projecte | P2.8 (prova RA2) 50 % · R3 (projecte) 50 % |
| CA2.8 | 10 % | Lliçó 20 (N9) | P2.4 (prova RA2) 100 % |
| CA3.1 | 15 % | Lliçó 5, projecte | P3.1 (prova RA3) 50 % · R4 (projecte) 50 % |
| CA3.2 | 20 % | Lliçó 6, projecte | P3.2 (prova RA3) 50 % · R5 (projecte) 50 % |
| CA3.3 | 5 % | Lliçons 5-7 | P3.3 (prova RA3) 100 % |
| CA3.4 | 10 % | Lliçons 9 (N2) i 19, miniprojecte 1, projecte | P3.7 (prova RA3) 40 % · R6 (projecte) 60 % |
| CA3.5 | 15 % | Lliçó 7, miniprojecte 1, projecte | P3.4 (prova RA3) 30 % · R7 (projecte) 70 % |
| CA3.6 | 15 % | Lliçons 1 i 8 (N1), miniprojecte 1, projecte | P3.5 (prova RA3) 30 % · R8 (projecte) 70 % |
| CA3.7 | 5 % | Lliçó 8 (N1), projecte | P3.9 (prova RA3) 30 % · R9 (projecte) 70 % |
| CA3.8 | 5 % | Lliçons 9 (N2) i 24 (N13), projecte | P3.6 (prova RA3) 50 % · R10 (projecte) 50 % |
| CA3.9 | 10 % | Lliçons 8 (N1) i 25 (N14), miniprojecte 1, projecte | P3.8 (prova RA3) 40 % · R11 (projecte) 60 % |
| CA4.1 | 5 % | Lliçó 22 (N11) | P4.1 (prova RA4) 100 % |
| CA4.2 | 10 % | Lliçó 22 (N11) | P4.2 (prova RA4) 100 % |
| CA4.3 | 15 % | Lliçó 22 (N11) | P4.3 (prova RA4) 100 % |
| CA4.4 | 10 % | Lliçó 22 (N11) | P4.4 (prova RA4) 100 % |
| CA4.5 | 20 % | Lliçons 22 (N11) i 25 (N14), projecte | P4.9 (prova RA4) 30 % · R12 (projecte) 70 % |
| CA4.6 | 10 % | Lliçó 23 (N12) | P4.5 (prova RA4) 100 % |
| CA4.7 | 10 % | Lliçó 24 (N13) | P4.7 (prova RA4) 100 % |
| CA4.8 | 10 % | Lliçó 23 (N12), projecte | P4.6 (prova RA4) 50 % · R13 (projecte) 50 % |
| CA4.9 | 10 % | Lliçó 25 (N14), projecte | P4.8 (prova RA4) 40 % · R14 (projecte) 60 % |
| CA5.1 | 8 % | Lliçons 1-2 i 19 (N8), projecte | P5.1 (prova RA5) 60 % · R15 (projecte) 40 % |
| CA5.2 | 12 % | Lliçons 2-3 i 19 (N8), projecte | P5.2 (prova RA5) 50 % · R16 (projecte) 50 % |
| CA5.3 | 4 % | Lliçó 19 (N8) | P5.3 (prova RA5) 100 % |
| CA5.7 | 40 % | Lliçons 4, 16, 18, miniprojecte 2, projecte | P5.4 (prova RA5) 30 % · R17 (projecte) 70 % |
| CA5.8 | 36 % | Lliçons 4, 17, 18, miniprojecte 2, projecte | P5.5 (prova RA5) 30 % · R18 (projecte) 70 % |
| CA6.1 | 8 % | Lliçó 10 (amb N3) | P6.1 (prova RA6) 100 % |
| CA6.2 | 4 % | Lliçó 14 (N6) | P6.2 (prova RA6) 100 % |
| CA6.3 | 16 % | Lliçons 10-11, miniprojecte 2, projecte | P6.3 (prova RA6) 30 % · R19 (projecte) 70 % |
| CA6.4 | 8 % | Lliçons 10, 12 (N4), 14 (N6), projecte | P6.4 (prova RA6) 50 % · R20 (projecte) 50 % |
| CA6.5 | 8 % | Lliçó 14 (N6) | P6.5 (prova RA6) 100 % |
| CA6.7 | 12 % | Lliçons 13 (N5) i 18, projecte | P6.6 (prova RA6) 60 % · R21 (projecte) 40 % |
| CA6.8 | 4 % | Lliçó 15 (N7) | P6.7 (prova RA6) 100 % |
| CA6.9 | 16 % | Lliçons 15 (N7), 19 i 23 (N12), projecte | P6.8 (prova RA6) 40 % · R22 (projecte) 60 % |
| CA6.10 | 24 % | Lliçó 12 (N4), projecte | P6.9 (prova RA6) 50 % · R23 (projecte) 50 % |

**Nota de cada criteri** = Σ nota de l'indicador × pes dins del criteri. Per exemple, CA3.6 = 0,30·P3.5 + 0,70·R8; CA1.1 = P1.3.

**Nota de RA1** = 0,10·(CA1.1 + CA1.2 + CA1.3 + CA1.4 + CA1.5 + CA1.6 + CA1.8 + CA1.9) + 0,20·CA1.7

**Nota de RA2** = 0,10·(CA2.1 + CA2.3 + CA2.5 + CA2.6 + CA2.7 + CA2.8) + 0,20·(CA2.2 + CA2.4)

**Nota de RA3** = 0,15·(CA3.1 + CA3.5 + CA3.6) + 0,20·CA3.2 + 0,10·(CA3.4 + CA3.9) + 0,05·(CA3.3 + CA3.7 + CA3.8)

**Nota de RA4** = 0,05·CA4.1 + 0,10·(CA4.2 + CA4.4 + CA4.6 + CA4.7 + CA4.8 + CA4.9) + 0,15·CA4.3 + 0,20·CA4.5

**Nota de RA5** = 0,08·CA5.1 + 0,12·CA5.2 + 0,04·CA5.3 + 0,40·CA5.7 + 0,36·CA5.8

**Nota de RA6** = 0,04·(CA6.2 + CA6.8) + 0,08·(CA6.1 + CA6.4 + CA6.5) + 0,12·CA6.7 + 0,16·(CA6.3 + CA6.9) + 0,24·CA6.10

**Nota de la SA** = 0,10·RA1 + 0,10·RA2 + 0,20·RA3 + 0,10·RA4 + 0,25·RA5 + 0,25·RA6

## Recursos i materials

- Equips amb VS Code (extensió Live Server i, opcionalment, Prettier), dos navegadors i accés a Internet.
- Projector per a la demostració en directe.
- Pàgines de les lliçons de la unitat, amb els arxius de partida dels exercicis i del projecte.
- Arxius de partida de les activitats N1-N14: funció amb error per a depurar, catàleg en JSON i en XML, classes de l'activitat N13.
- Llibreria Day.js per CDN i en còpia local (per a la prova RA2 i per si falla la connexió); canvas-confetti com a alternativa en el projecte.
- MDN Web Docs com a referència.
- Full de referència ràpida de JavaScript, glossari anglés-valencià i plantilles de taula de traça.
- Llistes de requisits dels miniprojectes, plantilla d'esbós de pantalla i de classes del projecte.
- Les sis proves, amb els seus arxius de partida, i les set rúbriques.

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

Cada criteri s'avalua en la prova del seu bloc (o en una prova posterior, si el bloc queda pendent) i, quan es pot observar en l'aplicació, també en el projecte.

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

Els blocs van per RA i cada un acaba amb una prova acumulativa (entra tot el que s'ha vist fins a eixe moment) que es qualifica amb la rúbrica del seu bloc. L'ordre és **RA1 → RA3 → RA6 → RA5 → RA2 → RA4**: primer el llenguatge i el control del flux, després les dades, a continuació la interfície que les mostra i les modifica, i finalment els objectes predefinits i les classes pròpies, que el projecte aplica immediatament. La lliçó 4 (el DOM) es fa en el bloc de RA3 com a eina per a veure els resultats en la pàgina; el que s'hi treballa s'avalua més avant: l'entrada i l'eixida en la pàgina (CA5.8) en la prova del bloc 4 (RA5), i els mètodes i les propietats dels elements (CA2.4) en la del bloc 5 (RA2), i tots dos també en el projecte.

**Estructura tipus d'una sessió de 55 min**: 5 min d'arrencada (obrir VS Code, la carpeta de treball i Live Server) · 10-15 min de demostració en directe, escrivint el codi davant de l'alumnat · 30-35 min d'exercicis · 5 min de tancament (desar i comprovar que no hi ha errors en la consola). Les sessions de miniprojecte, prova i projecte no tenen demostració.

**Correcció de les proves**: en els primers 15 min de la sessió següent a cada prova, correcció comentada amb la rúbrica. Qui ha tret Baix o Mitjà-baix en alguna fila repetix els exercicis bàsics d'eixe criteri en el temps d'exercicis de les sessions següents, amb ajuda del professor. Qui té un bloc pendent el recupera en la prova següent: se li aplica també la rúbrica d'eixe bloc.

### Bloc 1 — RA1: elements del programa (sessions 1-7)

| Sessió | Lliçó | Activitats |
|---|---|---|
| 1 | 1. El primer programa | Què és un programa; VS Code, Live Server, carpeta de treball, `index.html` i `script.js`. Ex. 1.1, 1.2. |
| 2 | 1. El primer programa | `prompt`, comentaris, errors en la consola. Ex. 1.3-1.5. |
| 3 | 2. Variables | `let` i `const`, noms, tipus, `typeof`. Ex. 2.1-2.3. |
| 4 | 2. Variables | Plantilles de text, lectura de dades, conversions. Ex. 2.4-2.7. |
| 5 | 3. Operadors | Aritmètics, d'assignació i de comparació; `===`. Ex. 3.1-3.4. |
| 6 | 3. Operadors | Lògics i precedència. Ex. 3.5, 3.6. Repàs del format de la prova. |
| 7 | **Prova del bloc 1 (RA1)** | 55 min, acumulativa. |

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
| 20 | **Prova del bloc 2 (RA3)** | 55 min, acumulativa. |

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
| 30 | **Prova del bloc 3 (RA6)** | 55 min, acumulativa. |

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
| 41 | **Prova del bloc 4 (RA5)** | 55 min, acumulativa. |

### Bloc 5 — RA2: objectes predefinits (sessions 42-44)

| Sessió | Tema | Activitats |
|---|---|---|
| 42 | 20. Objectes i classes predefinides | Classe, objecte, atributs, mètodes, encapsulació, herència. `Date` i els seus constructors. Activitat N9. |
| 43 | 21. Mètodes estàtics, paràmetres i llibreries | Activitat N10. Repàs del format de la prova. |
| 44 | **Prova del bloc 5 (RA2)** | 55 min, acumulativa. |

### Bloc 6 — RA4: classes (sessions 45-50)

| Sessió | Tema | Activitats |
|---|---|---|
| 45 | 22. Classes pròpies | `class`, `constructor`, propietats, mètodes, instàncies en un array. Activitat N11 (bàsic). |
| 46 | 22. Classes pròpies | Activitat N11 (estàndard i ampliació). |
| 47 | 23. Visibilitat i mètodes estàtics | Activitat N12. |
| 48 | 24. Herència | Activitat N13. |
| 49 | 25. Mòduls | Activitat N14. Repàs del format de la prova. |
| 50 | **Prova del bloc 6 (RA4)** | 55 min, acumulativa. |

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
| 4. El DOM | 4.1, 4.2 | + 4.3-4.7 | — | CA2.4, CA5.7, CA5.8 |
| 5. Decisions | 5.1, 5.2 | + 5.3-5.7 | — | CA3.1, CA3.3 |
| 6. Bucles | 6.1-6.3 | + 6.4, 6.7 | 6.5, 6.6 | CA3.2, CA3.3 |
| 7. Funcions | 7.1-7.3 | + 7.4-7.6 | 7.7 | CA2.2, CA2.6, CA3.3, CA3.5 |
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

Totes són pràctiques, en l'ordinador, individuals i sense apunts, de 55 min, i es lliuren en zip. **Són acumulatives**: en cada prova entra tot el que s'ha vist fins a eixe bloc, però es qualifica només amb la rúbrica del seu bloc. Cada prova té un o dos exercicis, que són programes complets en un sol arxiu (dos en el bloc 6, per a usar mòduls): el que s'ha vist en els blocs anteriors s'hi usa de manera natural, i els conceptes es demostren en el mateix codi (comentaris que marquen blocs i components, justificació de les col·leccions, crides estàtiques marcades). A partir del bloc 2, el codi de partida inclou una funció amb errors que l'alumnat troba amb assercions. Així es pot aplicar la rúbrica d'un bloc pendent a la mateixa prova; si un indicador no té evidència en una prova, es manté la nota que tenia. Cada prova té l'enunciat, els arxius de partida i una guia de correcció amb la solució i els llindars concrets de cada indicador, també dels blocs anteriors.

**Prova del bloc 1 · RA1 (sessió 7)** — lliçons 1-3: cap `if`, bucle, funció pròpia ni DOM

1. Botiga de papereria: dades fixes en constants, tres lectures amb `prompt` (nom, bolígrafs, diners), caixes i solts (`Math.floor`, `%`), preu, IVA, total, canvi en euros i cèntims, quatre booleans amb comparacions i operadors lògics, `typeof` de les lectures i missatges en la consola (30 min).
2. La pel·lícula: durada en hores i minuts, hora d'acabar (`%` per a passar de mitjanit) i dos booleans (15 min).

**Prova del bloc 2 · RA3 (sessió 20)** — lliçons 1-9

1. Nota final d'un alumne: `readMark` amb errors propis (`ValidationError`), `finalMark` amb pesos en constants, `gradeWord` amb `else if`, listener amb `try/catch`, resultat en la pàgina i JSDoc (25 min).
2. El grup: `bestMark` donada amb 3 errors que es troben amb `console.assert`; taula amb un bucle que s'atura en la primera nota negativa, comptadors, mitjana i millor nota (22 min).

**Prova del bloc 3 · RA6 (sessió 30)** — lliçons 1-15

1. Club de lectura: llibres des d'un text JSON amb `try/catch`; llista amb `forEach`; estadístiques amb `filter`, `map`, `reduce`, `sort`, un `Set` d'autors i un `Map` per gènere; afegir amb validació (any amb expressió regular), eliminar amb error propi, marcar com a llegit, exportar en JSON; `averagePages` donada amb 2 errors i les seues assercions (40 min).
2. Sala de lectura: matriu de seients amb bucles niats, fila plena, seients lliures i reserva d'un seient (12 min).

**Prova del bloc 4 · RA5 (sessió 41)** — lliçons 1-19

1. Estoc de la botiga: `prompt` en obrir i consola; formulari validat (expressió regular, coma del preu amb `replace`), tots els errors en la pàgina, camps marcats i focus; llista amb `createElement` i un sol controlador per a eliminar; comptador de caràcters; `filter`, `reduce` i `toLocaleString`; `localStorage` amb `try/catch`; `unitsText` donada amb 2 errors (38 min).
2. Prestatgeries: matriu dibuixada amb `createElement`, clic en una cel·la amb `event.target` i `data-`, desada en `localStorage`, reinici amb `confirm` (12 min).

**Prova del bloc 5 · RA2 (sessió 44)** — lliçons 1-21

1. Planificador de viatges: comentari que explica classe, instància, encapsulació i herència amb el seu codi; crides estàtiques marcades; dies que falten amb `Date`; nom amb mètodes de cadena; `readBudget` amb error propi; llista amb Day.js, `Set` de destinacions, moneda amb `toLocaleString`; `localStorage` (40 min).
2. Final del curs: una data amb dues formes del constructor, dia de la setmana, `daysBetween` donada amb 1 error i assercions, setmanes amb mètodes estàtics (12 min).

**Prova del bloc 6 · RA4 (sessió 50)** — lliçons 1-25

1. Les classes (`model.js`): `Product` amb camp privat, `get` i `set` que llança `PriceError`, valor per defecte, `total`, `toString`, `toJSON` i `static fromObject`; `DigitalProduct extends Product`; components marcats amb comentaris; `applyDiscount` donada amb 1 error (22 min).
2. La botiga (`main.js`): import, càrrega des de `localStorage` o del catàleg amb `fromObject` i `map`, llista, total, `Set` de plataformes, Day.js, formulari validat, desar i assercions de les classes (30 min).

### Projecte final — La meua primera aplicació (sessions 51-62)

Opció A (joc de preguntes) o opció B (llista de tasques) de la lliçó 26, amb els arxius HTML i CSS de partida. Tota la nota ve del JavaScript. Requisits mínims, que coincidixen amb el nivell Mitjà-baix de cada fila de la rúbrica:

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
- **Implicació**: tria entre dues aplicacions o idea pròpia; temes del joc de preguntes lliures; resultat visible des de la primera sessió; proves curtes i freqüents, una per bloc; revisió en parelles dels miniprojectes; qui acaba abans ajuda un company sense tocar-li el teclat.

## Instruments d'avaluació

| Instrument | Moment | Qui avalua | Activitat on s'aplica | Tipus de qualificació |
|---|---|---|---|---|
| Rúbrica del bloc 1 (RA1) | Sessió 7 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 1 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del bloc 2 (RA3) | Sessió 20 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 2 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del bloc 3 (RA6) | Sessió 30 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 3 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del bloc 4 (RA5) | Sessió 41 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 4 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del bloc 5 (RA2) | Sessió 44 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 5 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del bloc 6 (RA4) | Sessió 50 i, si el bloc queda pendent, les proves següents | Heteroavaluació | Prova del bloc 6 (i posteriors) | Rúbrica de 4 nivells |
| Rúbrica del projecte | Lliurament (sessió 60) i presentacions (sessions 61-62) | Heteroavaluació (l'alumnat la usa abans per a revisar la seua aplicació, sessió 59) | Projecte final i presentació | Rúbrica de 4 nivells |

## Indicadors d'èxit

En totes les rúbriques, cada fila rep el nivell més alt del qual es complixen **totes** les condicions; Baix és no arribar a Mitjà-baix. Cada nivell superior inclou l'anterior. **Mitjà-alt** vol dir que ho fa bé, encara que siga amb errors (és el nivell de l'aprovat), i **Alt**, que ho fa complet; Mitjà-baix és que ho intenta però queda lluny. La columna "Pes en el criteri" diu quant compta l'indicador en la nota del seu criteri: **1 = bàsic**, **2 = intermedi**, **3 = avançat**, segons la profunditat amb què demostra el criteri (normalment, el projecte, on el criteri s'aplica en una aplicació real, és avançat). Un criteri pot tindre indicadors en diverses rúbriques: la seua nota és la mitjana ponderada de tots ells, i la taula de traçabilitat dona el % que representa cada indicador.

**Una rúbrica per bloc.** Les proves són acumulatives, però cada una es qualifica només amb la rúbrica del seu bloc. Les rúbriques no depenen dels exercicis d'una prova concreta: on diuen "la meitat" o "tots menys un", la guia de correcció de cada prova dona els números concrets.

**Blocs pendents.** Si un alumne té un bloc anterior pendent, a la prova següent se li aplica la rúbrica del bloc actual i, a més, la rúbrica de cada bloc pendent a la mateixa prova; la guia de correcció de cada prova diu on es veu cada indicador dels blocs anteriors. Les noves notes dels indicadors del bloc pendent substituïxen les de la seua prova.

### Rúbrica del bloc 1 (RA1)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P1.1. Variables | CA1.5 | 1 · bàsic | No usa variables: les lectures i els resultats van directament dins dels càlculs i dels missatges. | Les lectures en variables, però menys de la meitat dels resultats. | Les lectures i almenys la meitat dels resultats en variables; alguns càlculs es repetixen o van dins del missatge. | Cada lectura i cada resultat en una variable amb nom descriptiu, que es reutilitza sense repetir càlculs. |
| P1.2. Constants i literals | CA1.6 | 1 · bàsic | Cap dada fixa en constant: totes van escrites com a literal dins dels càlculs. | Alguna dada fixa en constant, però la majoria escrites com a literal. | La majoria de dades fixes en constants, però queden literals escrits o repetits. Pot usar `let` on caldria `const`. | `const` per a tot el que no canvia, literals ben escrits (decimals amb punt, textos entre cometes) i cap repetició. |
| P1.3. Tipus de dades | CA1.4 | 1 · bàsic | Cap `typeof`, o els que hi ha no corresponen a les dades demanades. | `typeof` d'alguna dada demanada, però de menys de la meitat. | `typeof` d'almenys la meitat de les dades demanades. | `typeof` de totes les dades demanades, i les numèriques ja convertides mostren `number`. |
| P1.4. Entrada i conversions | CA1.8 | 2 · intermedi | Falten la majoria de lectures, o cap numèrica convertida. | Les lectures hi són, però menys de la meitat de les numèriques convertides. | Almenys la meitat de les numèriques convertides; pot faltar una lectura (o l'hora i el minut en una sola pregunta). | Totes les lectures i totes les numèriques convertides (`Number`, `parseInt`, `parseFloat`). |
| P1.5. Càlculs | CA1.7 | 2 · intermedi | Menys del 15 % dels punts dels apartats de càlcul (aritmètica, `%`, percentatges, part entera i decimal). | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.6. Comparacions i operadors lògics | CA1.7 | 1 · bàsic | Menys del 15 % dels punts dels apartats de comparacions i operadors lògics. | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.7. Segon exercici | CA1.7 | 2 · intermedi | Menys del 15 % dels punts dels apartats del segon exercici de la prova. | 15-39 %. | 40-89 %. | 90 % o més. |
| P1.8. Eixida en la pàgina | CA1.1 | 1 · bàsic | Mostra menys d'un quart dels resultats demanats. | Mostra entre un quart i la meitat dels resultats. | Mostra almenys la meitat dels resultats. | Tots els resultats (en pot faltar un), cada un en la seua línia. |

**Valor de cada nivell** (el mateix en totes les rúbriques): cada fila es puntua de 0 a 3 i el nivell val nivell × 10 ÷ 3, és a dir, Baix = 0 · Mitjà-baix = 3,33 · Mitjà-alt = 6,67 · Alt = 10. La nota informativa de la prova del bloc 1 es va calcular amb aquests pesos dins de la prova: P1.1 i P1.2 7,5 % · P1.3 5 % · P1.4 15 % · P1.5 25 % · P1.6 10 % · P1.7 20 % · P1.8 10 %. Per a la qualificació compten els pesos en el criteri.

**Punts per apartat (P1.5-P1.7):** 1 = correcte · 0,75 = correcte amb un error lleu (límit `>`/`>=`, `==` en lloc de `===`, falta un cas límit) · 0,5 = la idea està ben plantejada però té un error important (funció o variable equivocada, precedència, sintaxi, text sense convertir) · 0 = no hi és o la idea no és correcta. La guia de correcció de cada prova dona la llista d'apartats.

**Criteri de correcció:** és la primera prova de programació. Es valora tot el que s'ha escrit, encara que no s'execute: una línia amb la idea correcta puntua encara que tinga un error de sintaxi, i un error que atura el programa no arrossega les línies de després. No es valoren l'organització en fitxers, els `console.log`, els comentaris ni les marques de bloc: CA1.2, CA1.3 i CA1.9 s'avaluen en el projecte (R1, R2 i R10), i els blocs del programa de CA1.1 també en el projecte (R26). No usar `const` per als resultats no baixa de Mitjà-alt P1.2.

**Arrodoniment:** `Math.round`, `Math.floor` i `toFixed` no són obligatoris. No es penalitza no arrodonir ni no traure la part entera; `parseInt(x)` i `x - parseInt(x)` compten com a correctes. Un apartat que no hi és gens continua valent 0.

### Rúbrica del bloc 2 (RA3)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P3.1. Selecció | CA3.1 | 2 · intermedi | Cap cas de prova de les decisions correcte. | Algun cas correcte, però menys de la meitat. | Almenys la meitat dels casos de prova correctes. | Tots els casos correctes, amb `else if` ben ordenat i sense condicions redundants. |
| P3.2. Repetició | CA3.2 | 2 · intermedi | Cap bucle funciona: no acaba o no recorre els elements. | Algun bucle recorre els elements, però no acumula bé o en deixa sense tractar. | Recorre i acumula; el resultat (o la taula de traça) pot tindre algun error. | Resultat i taula de traça correctes, sense números fixos en lloc de `length`. |
| P3.3. Salt | CA3.3 | 2 · intermedi | Cap `break` ni `return` on cal eixir. | Intenta eixir, però en un moment equivocat (massa prompte o massa tard). | Ix amb `break` o `return`; pot tractar algun element de més. | Ix en el moment just i explica en un comentari per què ix (o què faria `continue`). |
| P3.4. Programa amb diverses estructures | CA3.5 | 1 · bàsic | El programa no s'executa o no dona cap resultat. | S'executa, però no combina selecció i repetició o falla en la majoria de casos de prova. | S'executa i combina selecció i repetició; pot fallar en algun cas de prova. | Correcte en tots els casos de prova, amb el càlcul i la presentació en funcions separades i sense codi repetit. |
| P3.5. Prova i depuració | CA3.6 | 2 · intermedi | Cap error del codi donat corregit. | Algun error corregit, però menys de la meitat. | Almenys la meitat dels errors corregits. | Tots els errors corregits, amb la línia, el tipus i la causa anotats. |
| P3.6. Creació d'excepcions | CA3.8 | 2 · intermedi | No llança cap error amb dades no vàlides. | Llança algun error, però sense missatge o amb un missatge que no diu què passa. | Llança `new Error` amb un missatge clar en almenys un cas. | Un missatge diferent per a cada cas no vàlid, i un nom propi (`name`) o una classe d'error pròpia. |
| P3.7. Control d'excepcions | CA3.4 | 2 · intermedi | Cap `try/catch`: el programa es trenca amb dades errònies. | Algun `try/catch`, però el programa encara es trenca en algun punt. | `try/catch` on cal i el programa no es trenca; pot no mostrar el missatge a l'usuari. | Mostra `error.message` a l'usuari, tots els punts que poden fallar estan protegits i, en un cas correcte, desapareix el missatge d'error anterior. |
| P3.8. Assercions | CA3.9 | 2 · intermedi | Cap asserció. | Alguna asserció, però menys de les demanades o mal plantejades. | Les assercions demanades, correctes, amb casos adequats. | A més, troba l'error a partir de l'asserció que falla, corregix la funció i inclou un cas límit i un cas estrany. |
| P3.9. Documentació | CA3.7 | 1 · bàsic | Cap comentari de la funció. | Un comentari que no explica què fa la funció (només repetix el nom o el codi). | Comentari que diu què fa la funció; pot no ser JSDoc. | JSDoc amb `@param`, `@returns` i `@throws` amb els errors que llança (o el tipus en cada etiqueta, si no en llança). |

### Rúbrica del bloc 3 (RA6)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P6.1. Matriu | CA6.1 | 2 · intermedi | No accedix a les cel·les amb `[fila][columna]`. | Accedix a alguna cel·la, però no recorre la matriu sencera. | Recorre o mostra la matriu amb dos bucles niats; l'operació demanada pot tindre errors. | Fa l'operació demanada (fila, columna o comptatge) en una funció que servix per a qualsevol fila o mida, sense números fixos. |
| P6.2. Classes de tipus avançats | CA6.2 | 2 · intermedi | No usa cap classe de tipus avançat on cal. | Usa la classe adequada (Array, Set, Map, String, RegExp) en alguna necessitat, però en menys de la meitat. | En almenys la meitat de les necessitats del programa. | En totes. |
| P6.3. Llistes | CA6.3 | 2 · intermedi | No funciona cap operació sobre la llista. | Funciona una operació (afegir o eliminar). | Afig i elimina correctament; la modificació pot fallar. | Afig, elimina, modifica un element buscant-lo per una propietat i controla l'element que no existix (`-1` o `undefined`). |
| P6.4. Iteradors | CA6.4 | 2 · intermedi | Cap recorregut. | Algun recorregut, però amb errors (se n'ix de l'array o en salta elements). | Recorregut amb `for...of` correcte. | A més, `forEach` o `entries()` quan cal la posició, i recorre un `Set` o un `Map`. |
| P6.5. Tria de col·lecció | CA6.5 | 2 · intermedi | Col·lecció inadequada en tots els casos. | Adequada en algun cas, però en menys de la meitat (p. ex. un array amb repetits on calia un Set). | Adequada en almenys la meitat dels casos. | Adequada en tots, i un comentari en el codi justifica cada tria. |
| P6.6. Expressions regulars | CA6.7 | 3 · avançat | Cap patró. | Algun patró, però classifica bé menys de la meitat dels casos de prova. | Un patró classifica bé la majoria dels casos de prova. | Tots els patrons classifiquen bé tots els casos, i usa `match` o `replace` amb una expressió regular quan es demana. |
| P6.7. Classes per a formats d'intercanvi | CA6.8 | 1 · bàsic | No usa cap eina per a convertir les dades. | Usa una eina inadequada (p. ex. `toString` o concatenació) per a convertir les dades. | Usa l'eina adequada en un sentit. | En els dos sentits (`JSON.stringify` i `JSON.parse`), i un comentari diu quin format tracta (JSON o XML). |
| P6.8. JSON | CA6.9 | 2 · intermedi | No convertix les dades amb `JSON.parse` ni `JSON.stringify`. | Ho intenta, però la conversió falla o les dades no es poden usar. | Convertix en un sentit i usa les dades. | Convertix en els dos sentits sense perdre dades, amb `JSON.parse` protegit amb `try/catch` i, si es mostra, JSON sagnat. |
| P6.9. Operacions agregades | CA6.10 | 2 · intermedi | Cap operació agregada correcta. | Alguna correcta, però menys de la meitat de les demanades. | Almenys la meitat de les operacions demanades correctes. | Totes, sense cap bucle `for`. |

### Rúbrica del bloc 4 (RA5)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P5.1. Consola | CA5.1 | 2 · intermedi | No llig amb `prompt` ni escriu en la consola. | Llig o escriu, però no fa el que es demana. | Llig amb `prompt` i escriu amb `console.log` el que es demana. | A més, mostra un array d'objectes amb `console.table` i controla que l'usuari cancel·le o escriga una dada no vàlida. |
| P5.2. Formats | CA5.2 | 2 · intermedi | Cap valor amb el format demanat. | Algun valor, però menys de la meitat. | Almenys la meitat dels valors amb el format demanat. | Tots, amb `toLocaleString`, `toLocaleDateString` o una llibreria, sense construir el format a mà. |
| P5.3. Possibilitats d'entrada i eixida | CA5.3 | 2 · intermedi | Mitjà inadequat en totes les necessitats. | Mitjà adequat en alguna necessitat, però inadequat en la majoria (p. ex. `alert` per als errors del formulari o `prompt` per a les dades de la pàgina). | Mitjà adequat en la majoria de necessitats. | En totes (`prompt`, consola, `confirm`, DOM, `localStorage`), i un comentari justifica cada mitjà. |
| P5.4. Controladors d'esdeveniments | CA5.7 | 2 · intermedi | Cap controlador amb `addEventListener`. | Algun controlador, però no funciona o la pàgina es recarrega en enviar. | Els controladors principals funcionen (enviament amb `preventDefault`, clics). | A més, un esdeveniment d'entrada o de teclat (`input`, `change`, `keydown`) i un sol controlador que gestiona diversos elements amb `event.target` (o `dataset`). |
| P5.5. Interfície per a entrada i eixida | CA5.8 | 2 · intermedi | No llig els camps ni mostra les dades. | Llig els camps o mostra les dades, però no les dos coses (o no redibuixa després de canviar l'array). | Llig els camps, actualitza l'array i redibuixa amb `createElement` i `textContent`. | A més, missatges d'error en la pàgina, camps buidats després d'afegir, i el camp incorrecte es marca (classe o focus) i hi torna el cursor. |

### Rúbrica del bloc 5 (RA2)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P2.1. Fonaments de la POO | CA2.1 | 1 · bàsic | Cap concepte explicat. | Explica en comentaris algun concepte (classe i objecte, instància, encapsulació, herència), però menys de la meitat. | Almenys la meitat. | Tots, amb exemples del seu programa. |
| P2.2. Programa simple | CA2.2 | 2 · intermedi | No s'executa o li falten dos de les tres parts (entrada, procés, eixida). | S'executa, però li falta l'entrada, el procés o l'eixida. | S'executa de principi a fi (llig, calcula i mostra); el resultat pot tindre errors. | Resultat correcte i, amb una entrada buida o no vàlida, mostra un missatge en lloc d'un resultat erroni. |
| P2.3. Classes predefinides | CA2.3 | 1 · bàsic | No crea cap instància amb `new`. | Crea alguna instància, però no usa els seus mètodes. | Crea les instàncies demanades i usa un mètode de cada una. | Resultats correctes i usa propietats i mètodes propis de cada classe més enllà del mínim (`size`, `getTime`…). |
| P2.4. Constructors | CA2.8 | 2 · intermedi | Cap constructor. | Usa constructors, però cap amb els paràmetres adequats. | Almenys un constructor amb els paràmetres adequats (p. ex. el mes comptat des de 0). | Tots els demanats, i el mateix objecte amb dues formes del constructor, comprovant que són iguals. |
| P2.5. Mètodes i propietats | CA2.4 | 2 · intermedi | Cap mètode ni propietat ben usat. | Algun, però menys de la meitat dels que necessita el programa. | Almenys la meitat. | Tots. |
| P2.6. Mètodes estàtics | CA2.5 | 2 · intermedi | Cap crida estàtica ben usada. | Alguna crida estàtica ben usada i marcada (`// static`), però menys de la meitat. | Almenys la meitat. | Totes, i cap mètode estàtic cridat sobre un objecte ni cap mètode d'objecte marcat com a estàtic. |
| P2.7. Paràmetres | CA2.6 | 2 · intermedi | Cap crida amb paràmetres dona el resultat que cal. | Alguna, però menys de la meitat. | Almenys la meitat. | Totes. |
| P2.8. Llibreria | CA2.7 | 2 · intermedi | La llibreria no es carrega. | Es carrega, però la crida dona error o un resultat incorrecte. | Carregada abans de l'script propi i una funció cridada amb resultat correcte. | Totes les operacions demanades correctes, i usa un patró o una opció més enllà del bàsic, seguint la documentació. |

### Rúbrica del bloc 6 (RA4)

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| P4.1. Components d'una classe | CA4.1 | 1 · bàsic | Cap component marcat. | Marca amb comentaris algun component de les seues classes, però menys de la meitat. | Almenys la meitat. | Tots. |
| P4.2. Definició de la classe | CA4.2 | 2 · intermedi | No hi ha cap `class`. | Hi ha `class`, però dona error en carregar o en fer `new`. | Es poden crear objectes de la classe. | Nom en PascalCase, cap funció solta que hauria de ser un mètode i cap propietat creada fora del constructor o de la declaració de camps. |
| P4.3. Propietats i mètodes | CA4.3 | 2 · intermedi | Cap mètode. | Hi ha mètodes, però menys de la meitat funcionen. | Almenys la meitat dels mètodes funcionen. | Tots funcionen i usen `this`, i un mètode reutilitza un altre de la classe. |
| P4.4. Constructor | CA4.4 | 2 · intermedi | Sense constructor. | Constructor que no assigna totes les propietats. | Assigna totes les propietats. | A més, valor per defecte en el paràmetre que ho demana, i les dades passen per la validació (el `set`) des del constructor. |
| P4.5. Visibilitat | CA4.6 | 3 · avançat | Cap camp privat. | Camp privat (`#`), però sense `get` (o un `get` que no funciona). | Camp privat (`#`) amb `get`. | A més, `set` que rebutja els valors no vàlids, i demostra que el camp no és accessible des de fora (prova, comentari o `toJSON`). |
| P4.6. Mètode estàtic | CA4.8 | 2 · intermedi | No definix cap mètode `static`. | Definix `static`, però el crida sobre una instància o no funciona. | Mètode `static` definit i cridat sobre la classe. | Torna una instància que funciona i s'usa amb `map` per a convertir un array d'objectes. |
| P4.7. Herència | CA4.7 | 3 · avançat | Cap classe filla. | Hi ha `extends`, però falta `super` o dona error. | `extends` i `super` correctes; la instància es crea. | A més, un mètode sobreescrit que reutilitza el del pare amb `super`. |
| P4.8. Llibreria de classes | CA4.9 | 2 · intermedi | Classes en `main.js`, sense mòduls. | Mòduls, però l'`import` o l'`export` dona error. | `model.js` exporta les classes i `main.js` les importa. | A més, `model.js` només conté definicions (cap codi que s'execute en importar-lo) i no fa cap referència a la pàgina. |
| P4.9. Programa amb les classes creades | CA4.5 | 1 · bàsic | No crea cap instància de les seues classes. | Crea alguna instància, però no usa els seus mètodes per a mostrar-la. | Array d'instàncies, cada una mostrada amb els seus mètodes. | Un càlcul global correcte fet amb els mètodes de les classes, i les instàncies es creen a partir de dades amb el mètode estàtic i `map`. |

### Rúbrica del projecte

Es comprova usant l'aplicació (afegir, eliminar, recarregar, dades buides i errònies), executant `tests.js`, mirant la consola i el codi. El nivell Mitjà-alt de cada fila són els requisits mínims del projecte.

| Indicador | Criteri | Pes en el criteri | Baix (0) | Mitjà-baix (1) | Mitjà-alt (2) | Alt (3) |
|---|---|---|---|---|---|---|
| R1. Estructura del projecte | CA1.2 | 1 · bàsic | Falten la majoria d'arxius de l'estructura. | Falta algun arxiu de l'estructura, o hi ha noms amb majúscules o espais. | `index.html`, `css/`, `js/main.js`, `js/model.js` i `js/tests.js`; noms en minúscules sense espais. | A més, cap ruta absoluta en els enllaços ni en els `import`, i cap arxiu sobrant (proves velles, còpies). |
| R2. Entorn de desenrotllament | CA1.3 | 1 · bàsic | L'aplicació no s'obri des de VS Code amb Live Server. | S'obri, però algun arxiu no carrega (error 404 en la consola). | S'obri amb Live Server des de VS Code i carrega tots els arxius. | A més, codi sagnat de manera uniforme (format de VS Code o Prettier) i cap error ni avís de VS Code en els arxius JS (variables no usades, imports trencats). |
| R3. Mètodes i propietats predefinits | CA2.4 | 3 · avançat | Quasi cap mètode o propietat predefinit (menys de 2). | Entre 2 i 4 mètodes o propietats diferents, o algun usat malament. | Almenys 5 mètodes o propietats diferents de cadenes, arrays o elements, ben usats. | A més, cap bucle que reimplemente un mètode existent (`includes`, `indexOf`), i `Date` o `toLocaleString` per a mostrar una data o un número. |
| R4. Llibreria externa | CA2.7 | 2 · intermedi | Cap llibreria externa. | Una llibreria carregada, però sense cap efecte visible o amb errors. | Una llibreria carregada per CDN i cridada almenys una vegada amb efecte visible. | A més, usa opcions de la llibreria i n'enllaça la documentació en el README, i l'aplicació funciona encara que la llibreria no carregue. |
| R5. Selecció | CA3.1 | 2 · intermedi | La majoria de decisions de l'aplicació fallen. | Alguna decisió falla (resposta correcta o incorrecta, camp buit, filtre, missatge final). | Totes les decisions de l'opció funcionen. | A més, sense condicions redundants ni `if` niats evitables, i retorn anticipat o ternari on simplifica el codi. |
| R6. Repetició | CA3.2 | 2 · intermedi | Cap bucle funciona. | Algun bucle no acaba o deixa elements sense tractar. | Els bucles de dibuix i de càlcul recorren tots els elements i acaben sempre. | A més, cap índex fora de rang ni variable de bucle innecessària, i la cerca s'atura quan troba l'element (`break`, `return` o `find`). |
| R7. Control d'excepcions | CA3.4 | 3 · avançat | Cap `try/catch`. | Algun `try/catch`, però `JSON.parse` de `localStorage` o alguna crida que pot fallar queda sense protecció. | `try/catch` en llegir `localStorage` i en les crides al model que poden llançar errors; l'aplicació no es trenca. | A més, missatge clar a l'usuari en la pàgina, i després d'un error la interfície queda coherent (redibuix o `finally`). |
| R8. Programa complet | CA3.5 | 3 · avançat | L'aplicació no funciona o falten la majoria de requisits de l'opció triada. | Falta algun requisit de l'opció triada o no funciona. | Tots els requisits de l'opció triada funcionen. | A més, funcions d'una sola tasca, de 20 línies com a màxim, sense codi repetit, i en la presentació explica una funció línia a línia i respon bé la pregunta del professor. |
| R9. Prova i depuració | CA3.6 | 3 · avançat | L'aplicació no es pot usar per errors en la consola. | Errors en la consola en algun ús normal. | Cap error en la consola en un ús normal. | A més, cap error en els casos límit (camp buit, llista buida, `localStorage` corrupte), i README amb la llista de proves manuals fetes i el resultat. |
| R10. Comentaris en el codi | CA1.9 | 1 · bàsic | Cap comentari en les funcions i els mètodes. | Comentaris en algunes funcions o mètodes, però no en tots. | Comentari damunt de cada funció i mètode. | A més, comentaris en les parts no evidents (condicions, expressions regulars), cap comentari que només repetisca el codi i cap comentari desfasat. |
| R11. Documentació | CA3.7 | 3 · avançat | Sense README. | README incomplet. | `README.txt` complet: nom, opció triada, com s'usa, què ha costat més i què afegiria. | A més, JSDoc amb `@param` i `@returns` en les funcions, els mètodes i les classes del model, i el README explica l'estructura d'arxius. |
| R12. Errors propis | CA3.8 | 3 · avançat | El model no llança cap error davant de dades no vàlides. | Llança algun error, però sense missatge clar o no en tots els casos no vàlids. | El model llança `Error` amb un missatge clar davant de dades no vàlides (text buit, pregunta sense opcions). | A més, una classe d'error pròpia (`extends Error`) que `main.js` distingix amb `instanceof` i mostra amb un missatge diferent. |
| R13. Assercions | CA3.9 | 3 · avançat | Cap `console.assert`. | Menys de 6 `console.assert`, o algun falla. | `tests.js` amb almenys 6 `console.assert` sobre el model, tots en verd. | A més, cobrixen tots els mètodes públics del model i inclouen casos límit (llista buida, valor no vàlid, error llançat). |
| R14. Ús de les classes pròpies | CA4.5 | 3 · avançat | No hi ha classes pròpies en l'aplicació. | Hi ha classes, però les dades no són instàncies seues o l'aplicació no usa els seus mètodes. | Les dades són un array d'instàncies de les seues classes i l'aplicació usa els seus mètodes. | A més, la lògica (puntuar, marcar, filtrar) està en mètodes del model, no en `main.js`, i una subclasse del model s'usa en l'aplicació. |
| R15. Mètodes estàtics | CA4.8 | 2 · intermedi | Cap mètode estàtic en el model. | Un mètode estàtic definit, però no s'usa o no funciona. | Un mètode estàtic en el model, usat (p. ex. `fromJSON` per a tornar a crear les instàncies en carregar). | A més, cridat sobre la classe dins d'un `map`, i un segon mètode estàtic amb sentit (validador, comptador). |
| R16. Llibreria de classes | CA4.9 | 3 · avançat | Classes en `main.js`, sense mòduls. | Mòduls, però amb una sola classe o amb errors en importar. | `model.js` amb almenys 2 classes exportades i importades en `main.js`. | A més, `tests.js` importa les mateixes classes i `model.js` no toca la pàgina (es podria reutilitzar amb una altra interfície). |
| R17. Consola | CA5.1 | 2 · intermedi | `tests.js` no mostra res en la consola. | Mostra alguna cosa, però no diu quines proves fallen. | En executar `tests.js`, la consola mostra quines proves fallen i un resum amb `console.log`. | A més, `console.table` per a mostrar l'estat del model, i cap `console.log` de depuració oblidat en `main.js`. |
| R18. Formats | CA5.2 | 2 · intermedi | Cap número amb format (decimals llargs, percentatges sense símbol). | Alguns números amb format, però no tots. | Puntuació, comptadors i percentatges amb un format adequat. | A més, `toLocaleString` o `Intl` per a números o dates, i singular i plural correctes ("1 tasca", "3 tasques"). |
| R19. Controladors d'esdeveniments | CA5.7 | 3 · avançat | Cap `addEventListener` (o tot amb `onclick` en l'HTML). | Menys de 3 controladors, d'un sol tipus, o algun `onclick` en l'HTML. | Almenys 3 `addEventListener` de 2 tipus diferents i cap `onclick` en l'HTML. | A més, usa l'objecte `event` (`key`, `target`, `preventDefault`), i un sol controlador gestiona tots els botons d'una llista (delegació o `data-*`). |
| R20. Entrada i eixida en la interfície | CA5.8 | 3 · avançat | La pàgina no mostra les dades. | Mostra les dades, però no sempre coincidixen amb l'array o usa `innerHTML` amb text de l'usuari. | Llig els controls, mostra les dades amb `createElement` i `textContent`, i la pàgina sempre coincidix amb l'array (`draw()`). | A més, missatges d'error i de confirmació en la pàgina (no amb `alert`), el camp es buida i rep el focus després d'afegir, i els botons es deshabiliten quan no es poden usar. |
| R21. Llistes | CA6.3 | 3 · avançat | No hi ha array de dades. | Hi ha array, però la pàgina i l'array no coincidixen o falta afegir, eliminar o modificar. | Array d'instàncies en el qual s'afig, s'elimina i es modifica, i després es redibuixa. | A més, elimina i modifica per identificador (no per posició en la pantalla), i l'usuari pot ordenar la llista per un criteri. |
| R22. Iteradors | CA6.4 | 2 · intermedi | Cap recorregut de la llista. | Recorreguts amb índexs erronis o que se n'ixen de l'array. | Recorre la llista amb `for...of` o `forEach` en dibuixar i en desar. | A més, `entries()` o l'índex de `forEach` quan necessita la posició, i recorre també un `Set` o un `Map` (p. ex. categories sense repetir). |
| R23. Expressions regulars | CA6.7 | 2 · intermedi | Cap expressió regular. | Una expressió regular que no valida bé o no mostra cap missatge. | Un camp validat amb `test()` i missatge si no complix. | A més, el patró usa `^`, `$` i classes de caràcters, i una segona expressió valida un altre camp o neteja el text amb `replace`. |
| R24. JSON | CA6.9 | 3 · avançat | No desa res. | Desa, però sense JSON o es perden dades en recarregar. | `JSON.stringify` en desar i `JSON.parse` en carregar. | A més, una única funció `save()` que desa tot l'estat en una sola clau, i `toJSON()` en les classes per a decidir què es guarda. |
| R25. Operacions agregades | CA6.10 | 2 · intermedi | Cap operació agregada. | Una sola operació agregada, o sense resultat visible. | Almenys 2 operacions agregades diferents amb resultat visible (comptador, filtre, puntuació). | `filter`, `map` i `reduce`, encadenades en almenys un cas dins d'un mètode del model. |
| R26. Blocs del programa | CA1.1 | 3 · avançat | `main.js` sense cap separació reconeixible entre les parts del programa. | Algun comentari de bloc, però menys de 3 blocs marcats. | Comentaris que marquen almenys 3 blocs en `main.js` (p. ex. dades, funcions, esdeveniments, inici). | Tots els blocs marcats, cada línia en el seu bloc, i el `README.txt` diu què fa cada arxiu (`index.html`, `main.js`, `model.js`, `tests.js`) dins del programa. |

## Taula de traçabilitat i qualificació

| Criteri | Pes dins del RA | Activitat(s) | Indicadors (instrument): pes (1-3) i % dins del criteri |
|---|---|---|---|
| CA1.1 | 10 % | Lliçó 1, projecte | P1.8 (rúbrica del bloc 1): pes 1, 25 % · R26 (projecte): pes 3, 75 % |
| CA1.2 | 10 % | Lliçó 1, miniprojectes, projecte | R1 (projecte): pes 1, 100 % |
| CA1.3 | 10 % | Lliçó 1, projecte | R2 (projecte): pes 1, 100 % |
| CA1.4 | 10 % | Lliçó 2 | P1.3 (rúbrica del bloc 1): pes 1, 100 % |
| CA1.5 | 10 % | Lliçó 2 | P1.1 (rúbrica del bloc 1): pes 1, 100 % |
| CA1.6 | 10 % | Lliçó 2 | P1.2 (rúbrica del bloc 1): pes 1, 100 % |
| CA1.7 | 20 % | Lliçó 3 | P1.5 (rúbrica del bloc 1): pes 2, 40 % · P1.6 (rúbrica del bloc 1): pes 1, 20 % · P1.7 (rúbrica del bloc 1): pes 2, 40 % |
| CA1.8 | 10 % | Lliçó 2 | P1.4 (rúbrica del bloc 1): pes 2, 100 % |
| CA1.9 | 10 % | Lliçó 1, projecte | R10 (projecte): pes 1, 100 % |
| CA2.1 | 10 % | Lliçó 20 (N9) | P2.1 (rúbrica del bloc 5): pes 1, 100 % |
| CA2.2 | 20 % | Lliçons 1-7 i 20 (N9) | P2.2 (rúbrica del bloc 5): pes 2, 100 % |
| CA2.3 | 10 % | Lliçons 14 (N6) i 20 (N9) | P2.3 (rúbrica del bloc 5): pes 1, 100 % |
| CA2.4 | 20 % | Lliçons 4, 10, 17, 21 (N10), projecte | P2.5 (rúbrica del bloc 5): pes 2, 40 % · R3 (projecte): pes 3, 60 % |
| CA2.5 | 10 % | Lliçons 3 i 21 (N10) | P2.6 (rúbrica del bloc 5): pes 2, 100 % |
| CA2.6 | 10 % | Lliçons 3, 7 i 21 (N10) | P2.7 (rúbrica del bloc 5): pes 2, 100 % |
| CA2.7 | 10 % | Lliçó 21 (N10), projecte | P2.8 (rúbrica del bloc 5): pes 2, 50 % · R4 (projecte): pes 2, 50 % |
| CA2.8 | 10 % | Lliçó 20 (N9) | P2.4 (rúbrica del bloc 5): pes 2, 100 % |
| CA3.1 | 15 % | Lliçó 5, projecte | P3.1 (rúbrica del bloc 2): pes 2, 50 % · R5 (projecte): pes 2, 50 % |
| CA3.2 | 20 % | Lliçó 6, projecte | P3.2 (rúbrica del bloc 2): pes 2, 50 % · R6 (projecte): pes 2, 50 % |
| CA3.3 | 5 % | Lliçons 5-7 | P3.3 (rúbrica del bloc 2): pes 2, 100 % |
| CA3.4 | 10 % | Lliçons 9 (N2) i 19, miniprojecte 1, projecte | P3.7 (rúbrica del bloc 2): pes 2, 40 % · R7 (projecte): pes 3, 60 % |
| CA3.5 | 15 % | Lliçó 7, miniprojecte 1, projecte | P3.4 (rúbrica del bloc 2): pes 1, 25 % · R8 (projecte): pes 3, 75 % |
| CA3.6 | 15 % | Lliçons 1 i 8 (N1), miniprojecte 1, projecte | P3.5 (rúbrica del bloc 2): pes 2, 40 % · R9 (projecte): pes 3, 60 % |
| CA3.7 | 5 % | Lliçó 8 (N1), projecte | P3.9 (rúbrica del bloc 2): pes 1, 25 % · R11 (projecte): pes 3, 75 % |
| CA3.8 | 5 % | Lliçons 9 (N2) i 24 (N13), projecte | P3.6 (rúbrica del bloc 2): pes 2, 40 % · R12 (projecte): pes 3, 60 % |
| CA3.9 | 10 % | Lliçons 8 (N1) i 25 (N14), miniprojecte 1, projecte | P3.8 (rúbrica del bloc 2): pes 2, 40 % · R13 (projecte): pes 3, 60 % |
| CA4.1 | 5 % | Lliçó 22 (N11) | P4.1 (rúbrica del bloc 6): pes 1, 100 % |
| CA4.2 | 10 % | Lliçó 22 (N11) | P4.2 (rúbrica del bloc 6): pes 2, 100 % |
| CA4.3 | 15 % | Lliçó 22 (N11) | P4.3 (rúbrica del bloc 6): pes 2, 100 % |
| CA4.4 | 10 % | Lliçó 22 (N11) | P4.4 (rúbrica del bloc 6): pes 2, 100 % |
| CA4.5 | 20 % | Lliçons 22 (N11) i 25 (N14), projecte | P4.9 (rúbrica del bloc 6): pes 1, 25 % · R14 (projecte): pes 3, 75 % |
| CA4.6 | 10 % | Lliçó 23 (N12) | P4.5 (rúbrica del bloc 6): pes 3, 100 % |
| CA4.7 | 10 % | Lliçó 24 (N13) | P4.7 (rúbrica del bloc 6): pes 3, 100 % |
| CA4.8 | 10 % | Lliçó 23 (N12), projecte | P4.6 (rúbrica del bloc 6): pes 2, 50 % · R15 (projecte): pes 2, 50 % |
| CA4.9 | 10 % | Lliçó 25 (N14), projecte | P4.8 (rúbrica del bloc 6): pes 2, 40 % · R16 (projecte): pes 3, 60 % |
| CA5.1 | 8 % | Lliçons 1-2 i 19 (N8), projecte | P5.1 (rúbrica del bloc 4): pes 2, 50 % · R17 (projecte): pes 2, 50 % |
| CA5.2 | 12 % | Lliçons 2-3 i 19 (N8), projecte | P5.2 (rúbrica del bloc 4): pes 2, 50 % · R18 (projecte): pes 2, 50 % |
| CA5.3 | 4 % | Lliçó 19 (N8) | P5.3 (rúbrica del bloc 4): pes 2, 100 % |
| CA5.7 | 40 % | Lliçons 4, 16, 18, miniprojecte 2, projecte | P5.4 (rúbrica del bloc 4): pes 2, 40 % · R19 (projecte): pes 3, 60 % |
| CA5.8 | 36 % | Lliçons 4, 17, 18, miniprojecte 2, projecte | P5.5 (rúbrica del bloc 4): pes 2, 40 % · R20 (projecte): pes 3, 60 % |
| CA6.1 | 8 % | Lliçó 10 (amb N3) | P6.1 (rúbrica del bloc 3): pes 2, 100 % |
| CA6.2 | 4 % | Lliçó 14 (N6) | P6.2 (rúbrica del bloc 3): pes 2, 100 % |
| CA6.3 | 16 % | Lliçons 10-11, miniprojecte 2, projecte | P6.3 (rúbrica del bloc 3): pes 2, 40 % · R21 (projecte): pes 3, 60 % |
| CA6.4 | 8 % | Lliçons 10, 12 (N4), 14 (N6), projecte | P6.4 (rúbrica del bloc 3): pes 2, 50 % · R22 (projecte): pes 2, 50 % |
| CA6.5 | 8 % | Lliçó 14 (N6) | P6.5 (rúbrica del bloc 3): pes 2, 100 % |
| CA6.7 | 12 % | Lliçons 13 (N5) i 18, projecte | P6.6 (rúbrica del bloc 3): pes 3, 60 % · R23 (projecte): pes 2, 40 % |
| CA6.8 | 4 % | Lliçó 15 (N7) | P6.7 (rúbrica del bloc 3): pes 1, 100 % |
| CA6.9 | 16 % | Lliçons 15 (N7), 19 i 23 (N12), projecte | P6.8 (rúbrica del bloc 3): pes 2, 40 % · R24 (projecte): pes 3, 60 % |
| CA6.10 | 24 % | Lliçó 12 (N4), projecte | P6.9 (rúbrica del bloc 3): pes 2, 50 % · R25 (projecte): pes 2, 50 % |

**Nota de cada criteri** = Σ (nota de l'indicador × pes) ÷ Σ pesos dels seus indicadors. Per exemple, CA3.6 = (2·P3.5 + 3·R9) ÷ 5; CA1.7 = (2·P1.5 + 1·P1.6 + 2·P1.7) ÷ 5; CA1.1 = P1.8. Mentre un indicador encara no s'ha avaluat (per exemple, el del projecte), la nota provisional del criteri és la mitjana ponderada dels que ja s'han avaluat.

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
- Llibreria Day.js per CDN i en còpia local (per a les proves dels blocs 5 i 6 i per si falla la connexió); canvas-confetti com a alternativa en el projecte.
- MDN Web Docs com a referència.
- Full de referència ràpida de JavaScript, glossari anglés-valencià i plantilles de taula de traça.
- Llistes de requisits dels miniprojectes, plantilla d'esbós de pantalla i de classes del projecte.
- Les sis proves acumulatives, amb els seus arxius de partida i les guies de correcció, i les set rúbriques.

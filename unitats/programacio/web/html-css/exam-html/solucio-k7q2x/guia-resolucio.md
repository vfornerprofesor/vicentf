---
titol: PROVA D'HTML · THE REPAIR CAFÉ
subtitol: Guia del professor per a resoldre l'examen pas a pas (2n SMX · sessió 18)
---

# Com usar esta guia

La guia resol la prova d'HTML en l'ordre en què l'ha de fer l'alumnat i, en cada pas, recull els errors que s'han trobat en la correcció real del grup (9 entregues). Servix per a corregir-la a classe: es pot projectar l'**entrega amb errors** (`solucio-k7q2x/entrega-errors/event.html` i `join.html`), que junta en dues pàgines tots eixos errors, i arreglar-la pas a pas fins a arribar a la solució (`solucio-k7q2x/event.html` i `join.html`).

L'entrega amb errors no és de cap alumne concret: cada error ve d'una o més entregues, i quan dos errors de la classe eren incompatibles (per exemple, «no hi ha `form`» i «el `form` està buit») se n'ha triat un i l'altre es comenta en el pas.

## Què demana la prova

- Una carpeta `cognom-nom-html` amb `event.html`, `join.html` i la carpeta `images` (amb `pc.svg`).
- 55 minuts: uns 35 per a `event.html` i uns 15 per a `join.html`. Sense apunts, sense internet i sense IA. Es pot usar VS Code, el navegador i el validador.
- Es puntua amb els indicadors PH1-PH4 de la SA (vegeu la guia de correcció):

| Indicador | Què mira | Criteri |
|---|---|---|
| PH1 | Esquelet de les dues pàgines, títols, encapçalaments en ordre, sagnat, comentari i `&copy;` | CA1.1 |
| PH2 | Llista niada, taula, imatge i enllaços | CA1.2 |
| PH3 | Formulari: 7 camps amb `label` enllaçada i el tipus correcte, `fieldset` i botó | CA1.3 |
| PH4 | Etiquetes semàntiques i 0 errors del validador | CA1.4 |

## Els errors més repetits

| Error | Quants l'han fet | Pas |
|---|---|---|
| `&` sense escriure com a `&amp;` | 9 de 9 | 3 |
| Correu sense `mailto:` | 9 de 9 | 7 |
| L'enllaç a w3.org no s'obri en pestanya nova (`target="_blank"`) | 7 de 9 | 7 |
| `<title>Document</title>` en almenys una pàgina | 6 de 9 | 1 i 8 |
| Les subllistes `ol` fora del seu `li` | 6 de 9 | 4 |
| `form` absent, buit o mal tancat | 6 de 9 | 9 |
| Falta `required` en algun camp obligatori | 8 de 9 | 10 |
| `label for` que no coincidix amb l'`id` del camp | 4 de 9 | 10 |
| Ràdios amb `name` diferent | 3 de 9 | 10 |
| Quasi cap etiqueta semàntica (`header`, `nav`, `main`, `section`…) | 3 de 9 | 2 a 7 |

Decisions de la correcció (primer examen, criteri benèvol): no s'ha penalitzat `mailto:` ni `&amp;` (no ho va fer ningú), ni el `required` per a considerar un camp complet, ni el nom del `.zip`, els `<br>` de més, no posar un `<p>` per camp o escriure els textos en espanyol.

# Exercici 1 · event.html

## Pas 1 · Carpeta i esquelet

Crear la carpeta `cognom-nom-html`, copiar-hi la carpeta `images` del `starter` i crear `event.html`. En VS Code, `!` + Tab genera l'esquelet: **cal canviar `Document` pel títol** i posar `lang="en"`. Just després de `<body>`, el comentari amb nom i grup.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>SMX Repair Café</title>
</head>

<body>
    <!-- HTML exam · Name: Marta García López · Group: 2n SMX -->
    ...
</body>

</html>
```

**Errors de la classe**

- `<title>Document</title>`: és el títol que posa VS Code. Compta com un element de l'esquelet que falta (PH1).
- Sense comentari amb nom i grup, o amb el nom en un `h1`. El comentari és requisit de l'Excel·lent de PH1.
- `<body>` mal col·locat: dins del `<header>` i tancat abans d'hora, o escrit al final de tot i buit. El validador diu *Start tag "body" seen but an element of the same type was already open*. El `body` s'obri just després de `</head>` i es tanca just abans de `</html>`.
- Codi sense sagnar (la taula, sobretot). Amb Alt+Maj+F (Format Document) VS Code el sagna.

## Pas 2 · Capçalera i menú

El títol i el menú van dins d'un `header`; els enllaços del menú, dins d'un `nav`. Rutes **relatives**: les dues pàgines estan en la mateixa carpeta.

```html
<header>
    <h1>SMX Repair Café</h1>
    <nav>
        <a href="event.html">Home</a>
        <a href="join.html">Join us</a>
    </nav>
</header>
```

**Errors de la classe**

- Sense `nav` (o sense `header`): resta en PH4.
- Rutes absolutes copiades de la barra del navegador: `file:///home/alumne/Escritorio/examen/join.html`. Només funcionen en l'ordinador de l'alumne. Es veu en PH2.
- Menú creuat: *Home* porta a `join.html` i *Join us* a `event.html`. Cal clicar cada enllaç abans d'entregar.

## Pas 3 · About the event

Tot el contingut principal va en un `main`, i cada part en una `section` amb el seu `h2`. La data, en negreta perquè és important (`strong`); *free*, remarcat (`em`). El `&` s'escriu `&amp;`. La imatge va en un `figure` amb el seu `figcaption`.

```html
<main>
    <section>
        <h2>About the event</h2>
        <p>
            On <strong>Saturday 14 November</strong> the students of SMX repair your old
            computers and phones. It is <em>free</em> &amp; open to everybody.
        </p>
        <figure>
            <img src="images/pc.svg" alt="A laptop on a desk next to a screwdriver and a plant">
            <figcaption>Our repair desk in the computer lab.</figcaption>
        </figure>
    </section>
```

**Errors de la classe**

- `&` sense escapar (tots) i *free* sense `em` o directament sense la frase. No s'ha penalitzat.
- Imatge renomenada (`examen 1 pc.svg`): l'espai en el nom dona error al validador i, si no està en `images/`, la imatge no es veu. No s'ha de canviar el nom ni la carpeta del fitxer donat.
- `width="100px"`: l'atribut `width` va sense unitats (`width="100"`). Millor no posar-ne.
- `alt` poc descriptiu («photo of a pc»): ha de dir què es veu en el dibuix.
- `figcaption` solt, sense `figure`: el validador diu *Element "figcaption" not allowed as child of element "section"*.

## Pas 4 · What we fix

Una sola `ul` amb tres `li`. Les subllistes numerades (`ol`) van **dins** del `li` de *Hardware* i de *Software*, abans del seu `</li>`.

```html
    <section>
        <h2>What we fix</h2>
        <ul>
            <li>Hardware
                <ol>
                    <li>Laptops</li>
                    <li>Desktop PCs</li>
                </ol>
            </li>
            <li>Software
                <ol>
                    <li>Windows</li>
                    <li>Linux</li>
                </ol>
            </li>
            <li>Phones</li>
        </ul>
    </section>
```

**Errors de la classe**

- `ol` fora del `li` (`<li>Hardware</li><ol>…</ol>`): l'error més repetit de la llista. El validador diu *Element "ol" not allowed as child of element "ul"*. Només ha restat en PH2.
- La `ul` tancada amb `</ol>`: tota la resta de la pàgina queda dins de la llista (*Stray end tag "ol"*, *Unclosed element "ul"*).
- Tres `ul` separades, una per a cada element.
- La part en un `article` que no es tanca: arrossega errors fins al final. Esta part és una `section`, no un `article`.

## Pas 5 · Timetable

Tres coses: la primera fila és de capçalera (`th`), les hores són capçaleres de la seua fila (`th`) i *Lunch break* és una cel·la que ocupa les tres columnes (`colspan="3"`) dins de la seua pròpia fila.

```html
    <section>
        <h2>Timetable</h2>
        <table>
            <thead>
                <tr><th>Time</th><th>Room 1</th><th>Room 2</th></tr>
            </thead>
            <tbody>
                <tr><th>10:00</th><td>Laptops</td><td>Phones</td></tr>
                <tr><td colspan="3">Lunch break</td></tr>
                <tr><th>16:00</th><td>Desktop PCs</td><td>Software</td></tr>
            </tbody>
        </table>
    </section>
```

**Errors de la classe**

- Les hores en `td`.
- *Lunch break* sense `colspan="3"` o sense el seu `<tr>` (*"td" start tag in table body*).
- La majoria de la classe ha fet bé la taula: és la part que millor ha eixit.

## Pas 6 · Last year

És una notícia que es podria publicar sola en una altra web: va en un `article` **dins del `main`**. *Book your place* porta a `join.html`, que és de la mateixa web: **sense** `target="_blank"`.

```html
    <article>
        <h2>Last year</h2>
        <p>We repaired 42 devices in one day. <a href="join.html">Book your place</a> before Friday.</p>
    </article>
</main>
```

**Errors de la classe**

- *Last year* al `footer` o en un `aside`.
- `href=""`: l'enllaç no porta enlloc.
- `target="_blank"` en un enllaç intern.
- Un `</a>` o un `</main>` de més (*Stray end tag*).

## Pas 7 · Peu

`&copy;` per al ©, un enllaç `mailto:` per al correu i l'enllaç a w3.org amb `target="_blank"`. El `rel="noopener"` és recomanable però l'enunciat no el demana.

```html
<footer>
    <p>&copy; 2026 SMX students ·
        <a href="mailto:repaircafe@example.com">repaircafe@example.com</a></p>
    <p><a href="https://www.w3.org" target="_blank" rel="noopener">Made with the W3C standards</a></p>
</footer>
```

**Errors de la classe**

- El correu com a text, sense `mailto:` (tots). No s'ha penalitzat.
- w3.org amb `href="#"` o `href=""`, o sense `target="_blank"`. Compta com a defecte de PH2.

# Exercici 2 · join.html

## Pas 8 · Esquelet, capçalera i peu

Copiar `event.html` com a `join.html`, canviar el títol per `Join the Repair Café`, deixar el `header` i el `footer` (sense l'enllaç a w3.org) i buidar el `main`. El contingut del `main` és el `h2` *Book your place* i el formulari.

**Errors de la classe**

- `<title>Document</title>` també ací.
- En copiar la capçalera, es copien els errors del menú (rutes `file:///`, enllaços creuats).

## Pas 9 · El formulari i els grups

Un **sol** `form` que s'obri abans del primer `fieldset` i es tanca **després del botó**, tot dins del `main`. Els camps de *About you* i *Your device* van en dos `fieldset`, cadascun amb el seu `legend`. La casella d'acceptar no té grup.

```html
<main>
    <section>
        <h2>Book your place</h2>
        <form action="#" method="post">
            <fieldset>
                <legend>About you</legend>
                ...
            </fieldset>
            <fieldset>
                <legend>Your device</legend>
                ...
            </fieldset>
            ...
            <button type="submit">Send</button>
        </form>
    </section>
</main>
```

**Errors de la classe**: l'error que més formularis ha trencat.

- `<form action="#"></form>` buit, amb els camps fora.
- Sense `form` (i sense `fieldset`).
- Dos `<form>` oberts i cap tancat.
- El `form` embolcallant el `header`, o tancat després del `</article>`.
- El `main` dins d'un `fieldset`.
- El botó *Send* al `footer`, fora del formulari.

Si el `form` no embolcalla els camps i el botó, el formulari no s'envia ni el `required` funciona.

## Pas 10 · Els 7 camps

Cada camp té el seu `label` amb `for` **igual** a l'`id` del camp (majúscules incloses), el tipus que toca i `required` si és obligatori. El dia és l'únic camp **sense** `required`.

```html
<label for="name">Name</label>
<input type="text" id="name" name="name" required>

<label for="email">Email</label>
<input type="email" id="email" name="email" required>

<label for="device">Device</label>
<select id="device" name="device" required>
    <option value="">Choose one</option>
    <option value="laptop">Laptop</option>
    <option value="desktop">Desktop PC</option>
    <option value="phone">Phone</option>
</select>

<label for="problem">What is the problem?</label>
<textarea id="problem" name="problem" rows="4" required></textarea>

Do you bring the charger?
<input type="radio" id="charger-yes" name="charger" value="yes" required>
<label for="charger-yes">Yes</label>
<input type="radio" id="charger-no" name="charger" value="no">
<label for="charger-no">No</label>

<label for="day">Preferred day</label>
<input type="date" id="day" name="day">

<input type="checkbox" id="rules" name="rules" required>
<label for="rules">I accept that the repair is not guaranteed</label>
```

**Errors de la classe**

| Camp | Error | Solució |
|---|---|---|
| Name | `min="3" max="12"` en un `text` | `min`/`max` són per a números i dates; en text, `minlength`/`maxlength`. |
| Email | `type="gmail"` o `type="text"` | `type="email"`. |
| Device | *Desktop* i *PC* com a dues opcions | Una sola opció: *Desktop PC*. La primera opció buida (`value=""`) fa que el `required` obligue a triar. |
| Problem | `label for="problema"` i `id="comment"` | El `for` ha de ser igual a l'`id`. |
| Charger | `name="charger-yes"` i `name="charger-no"` | El **mateix** `name` (`charger`): si no, es poden marcar els dos. |
| Charger | `label for="charger"` amb `id="yes"`/`id="no"` | Un `for` per a cada `id`. |
| Charger | `required` en el `label` | El `required` va en un dels `input type="radio"`. |
| Accept | `label for="Esports"` | `for` igual a l'`id` de la casella. |
| Tots | Cap `required` | En tots menys el dia. No ha comptat per al camp complet (decisió 3). |

## Pas 11 · Abans d'entregar

1. La carpeta té `event.html`, `join.html` i `images/pc.svg`.
2. Clicar tots els enllaços de les dues pàgines: el menú, *Book your place*, el correu i w3.org. La imatge s'ha de veure.
3. Enviar el formulari buit: el navegador ha de parar-lo en el primer camp obligatori.
4. Passar les dues pàgines pel validador (validator.w3.org, *Validate by File Upload*): **0 errors** en cada una.

# L'entrega amb errors, corregida

## event.html (15 errors del validador)

| Línia | Error | Com s'arregla | Indicador |
|---|---|---|---|
| 6 | `<title>Document</title>` | `<title>SMX Repair Café</title>` | PH1 |
| 9-10 | `<header>` abans de `<body>`; falta el comentari | `<body>`, el comentari i després `<header>` | PH1 |
| 12-13 | Ruta `file:///` i menú creuat, sense `nav` | `<nav>` amb `event.html` i `join.html` | PH2, PH4 |
| 19 | `free` sense `em`, `&` sense escapar | `<em>free</em> &amp;` | — |
| 20 | Imatge renomenada amb espai, `width="100px"`, `alt` pobre | `src="images/pc.svg"`, sense `width`, `alt` descriptiu | PH2 |
| 21 | `figcaption` sense `figure` | `img` i `figcaption` dins d'un `figure` | PH4 |
| 24 | `article` per a *What we fix*, sense tancar | `section` tancada | PH4 |
| 27-36 | `ol` fora dels `li` | Cada `ol` dins del seu `li` | PH2 |
| 38 | La `ul` es tanca amb `</ol>` | `</ul>` | PH2 |
| 40-58 | Taula sense `section`, sense sagnar | `section` amb `h2` i codi sagnat | PH1, PH4 |
| 48 i 54 | Hores en `td` | `<th>10:00</th>`, `<th>16:00</th>` | PH2 |
| 52 | *Lunch break* sense `tr` ni `colspan` | `<tr><td colspan="3">Lunch break</td></tr>` | PH2 |
| 62-63 | *Last year* al `footer` | `article` dins del `main` | PH4 |
| 63 | `href=""` i `target="_blank"` en *Book your place*; `</a>` de més | `<a href="join.html">` | PH2 |
| 64 | Correu sense `mailto:` | `<a href="mailto:repaircafe@example.com">` | — |
| 65 | w3.org amb `href="#"` i sense pestanya nova | `href="https://www.w3.org" target="_blank"` | PH2 |
| 67 | `</main>` de més | Esborrar-lo | PH4 |

## join.html (8 errors del validador)

| Línia | Error | Com s'arregla | Indicador |
|---|---|---|---|
| 6 | `<title>Document</title>` | `<title>Join the Repair Café</title>` | PH1 |
| 10-14 | Menú copiat amb els errors, sense `nav` | Igual que en `event.html` corregit | PH2, PH4 |
| 18 | `<form action="#"></form>` buit | Obrir el `form` ací i tancar-lo després del botó | PH3 |
| 23 | `min`/`max` en un `text`, sense `required` | `required` (i, si es vol, `minlength`/`maxlength`) | PH4 |
| 26 | `type="gmail"` | `type="email" required` | PH3 |
| 32-37 | *Desktop* i *PC* separats, sense `required` | `Desktop PC` i opció buida inicial | PH3 |
| 38-39 | `for="problema"` i `id="comment"` | `for` igual a l'`id` | PH3 |
| 43-46 | Ràdios amb `name` diferent, `for="charger"`, `required` al `label` | Mateix `name`, `for` = `id`, `required` en el primer ràdio | PH3 |
| 52-53 | `for="Esports"` | `for="accept"` i `required` | PH3 |
| 58 | Botó al `footer` | Dins del `form` | PH3 |
| — | Sense `section` ni comentari | `section` per al formulari i comentari al `body` | PH1, PH4 |

Els `<br>` entre camps no són error (decisió 1), però un `<p>` per camp queda més net.

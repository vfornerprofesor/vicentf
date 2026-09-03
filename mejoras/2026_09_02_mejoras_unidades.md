# Millores unitats — 2026-09-02 (pla d'execució)

Origen: `mejoras/2026_09_02_mejoras_unidades.txt`. Aquest document és la versió executable per a una IA. Segueix les tasques **en ordre**. Recomanació: **1 commit per tasca** (la Tasca 1 sobretot, que toca ~157 fitxers, en un commit a banda).

## Regles generals (no trencar)

- Lloc estàtic, **sense build, sense npm, sense frameworks**. Només HTML + CSS + JS vanilla + Bootstrap 4.5 (ja carregat).
- Contingut nou en **valencià**, com la resta del lloc.
- Indentació de **4 espais** en HTML/JS.
- Plantilla de pàgina: veure qualsevol `unitats/**/index.html`. Punts crítics: `<base href>` amb la profunditat correcta (comptar els `../`), totes les rutes (`assets/…`, `unitats/…`) s'escriuen **relatives a l'arrel**. `#menu`, `#content`, `#footer` visibles (sense `display:none`).
- Reutilitzar sempre els components `vf-*` existents i les classes CSS que ja hi ha. No inventar patrons nous si ja n'hi ha un.
- Provar amb `python3 -m http.server 8000` a l'arrel (amb `file://` el `<base href>` no funciona). Revisar la consola: cap 404 d'imatge/vídeo.
- No afegir `<div id="vf-index">` a les pàgines noves: les pàgines germanes de `app-inventor-bat` no en fan servir.

## Patró de targeta (graella de curs/unitat)

S'usa a `cursos/*.html`, `unitats/programacio/index.html`, `unitats/ofimatica/index.html`, etc. Copiar aquest patró exacte:

```html
<vf-col styles="width:20em">
    <vf-img styles="max-height:200px" link="RUTA" src="assets/IMATGE"></vf-img>
    <vf-btn classes="btn-short" link="RUTA">
        ETIQUETA
    </vf-btn>
</vf-col>
```

Targeta **sense enllaç** (Tasca 8): `<vf-img>` sense atribut `link` i `<vf-btn>` sense atribut `link` (aleshores `vf-btn` genera un `<button>` inert):

```html
<vf-col styles="width:20em">
    <vf-img styles="max-height:200px" src="assets/IMATGE"></vf-img>
    <vf-btn classes="btn-short">
        ETIQUETA
    </vf-btn>
</vf-col>
```

---

## Tasca 1 — `<title>` de cada pàgina

Ara mateix ~157 pàgines tenen `<title>Vicent Forner - Professor</title>`. Cal posar a cada `<title>` el títol real de la pàgina.

**Decisió presa** (ajustar si el propietari vol una altra cosa):
- El `<title>` = **text literal del primer `<vf-title level="1">…</vf-title>`** de la pàgina (fer `trim`, col·lapsar salts de línia i espais múltiples a un sol espai). **Sense sufixe** de lloc (mateix criteri que les pàgines que ja tenen títol propi, p. ex. `unitats/inteligencia-artificial/inteligencia-artificial2/sessio-*.html`).
- **Abast**: pàgines del lloc sota `cursos/`, `unitats/`, `activitats/`, `escaperooms/`, `ferramentes/`, `formaciodocent/`, `projectes/`, `maia/`, més `index.html` de l'arrel i els `index.html` de secció.
- **Excloure**:
  - Qualsevol `.html` amb un `<title>` **ja diferent** de `Vicent Forner - Professor` → respectar-lo, no tocar.
  - Els `.html` autònoms sota `assets/` (són demos i solucions d'alumnat, no pàgines del lloc).
  - `cv.html` (ja té títol propi).
- Si una pàgina **no té** `<vf-title level="1">`: usar el primer `<vf-title level="2">`. Si tampoc en té, deixar el títol per defecte i apuntar-la en una llista d'excepcions al final del commit.

**Mètode suggerit**: un sol script Python de single-use (esborrable després) que:
1. Recorre els directoris de l'abast, `*.html`.
2. Salta els fitxers on `<title>` ≠ `Vicent Forner - Professor`.
3. Extrau el text del primer `<vf-title level="1" ...>...</vf-title>` (pot ser multilínia; regex amb `re.DOTALL`), normalitza espais.
4. Substitueix `<title>Vicent Forner - Professor</title>` per `<title>TEXT</title>`.
5. Escriu el fitxer.
6. Imprimeix un resum: fitxers modificats + fitxers sense `vf-title` (excepcions).

Revisar el `git diff` sencer abans de fer commit. No escapar el text (és contingut d'element, no atribut); deixar `&`, accents, etc. tal com estan.

---

## Tasca 2 — `cursos/2eso.html`

Substituir el `<vf-row centered>` interior (ara 3 targetes) per **6 targetes**, en aquest ordre. Mantindre intactes la targeta de Pensament Computacional, la de Scratch i la d'IA tal com estan ara (imatge, enllaç i etiqueta actuals); només afegir les 3 noves als llocs indicats.

| # | Etiqueta botó | `link` | `src` imatge |
|---|---|---|---|
| 1 | `Ofimàtica - Full de càlcul` | `unitats/ofimatica/full-calcul` | `assets/google_calcul.png` |
| 2 | *(actual)* Pensament Computacional | `unitats/programacio/basic/pensament-computacional` | `assets/pensament-computacional.jpg` |
| 3 | *(actual)* Scratch | `unitats/programacio/blocs/scratch` | `assets/scratch.png` |
| 4 | *(actual)* Conceptes bàsics IA | `unitats/inteligencia-artificial/inteligencia-artificial` | `assets/inteligencia_artificial.jpeg` |
| 5 | `Robòtica` | `unitats/programacio/robotica/microbit` | `assets/microbit.jpg` |
| 6 | `Edició d'imatge GIMP - Bàsic` | `unitats/multimedia/edicio-imatge-1` | `assets/gimp.png` |

Usar el **patró de targeta** de dalt per a les 3 noves.

---

## Tasca 3 — Separar App Inventor en **Batxillerat** i **ESO**

Estat actual del repo (fet a mà, a mitges):
- `unitats/programacio/blocs/app-inventor/` → ja renombrat a `app-inventor-bat/` (HTML + assets), **però els `src=` interns encara apunten a la carpeta vella** `assets/unitats/programacio/blocs/app-inventor/…` (ja esborrada), i `app-inventor-bat/index.html` encara enllaça a `unitats/programacio/blocs/app-inventor/0X-*.html`.
- `unitats/programacio/blocs/app-inventor-eso/` ja existeix amb només un `index.html` (còpia idèntica del de bat).
- Assets ESO ja pujats a `assets/unitats/programacio/blocs/app-inventor-eso/`: `appinv-eso-endevinar.png`, `appinv-eso-endevinar1.png`, `appinv-eso-endevinar2.png`, `appinv-eso-marcador.png`, `appinv-eso-ppt.png`, `appinv-eso-ppt1.png`, `appinv-eso-ppt2.png`, `appinv-eso-atrapatalp.png`, `MARCADOR_HANDBALL.mp4`.

### 3a. Arreglar les referències internes de `app-inventor-bat`

En els fitxers `unitats/programacio/blocs/app-inventor-bat/01-interficie.html`, `02-control.html`, `03-dades-estructures.html`, `04-bbdd.html`:
- Substituir **totes** les aparicions de `assets/unitats/programacio/blocs/app-inventor/` per `assets/unitats/programacio/blocs/app-inventor-bat/`.

En `unitats/programacio/blocs/app-inventor-bat/index.html`:
- Substituir les 5 aparicions de `unitats/programacio/blocs/app-inventor/0X-*.html` per `unitats/programacio/blocs/app-inventor-bat/0X-*.html`.
- Canviar el `<vf-title level="1">` de `App Inventor` a `App Inventor Batxillerat`.

Comprovar que no queda cap `blocs/app-inventor/` (sense sufixe) dins de `app-inventor-bat/`:
`grep -rn "blocs/app-inventor[/\"']" unitats/programacio/blocs/app-inventor-bat/`

### 3b. `unitats/programacio/index.html` i `unitats/index.html`

Tots dos tenen una targeta única «App Inventor» amb `link="unitats/programacio/blocs/app-inventor"`. Substituir-la per **dues** targetes, en aquest ordre dins de la fila «Blocs» (queda: Scratch, App Inventor ESO, App Inventor Batxillerat):

| Etiqueta | `link` | `src` |
|---|---|---|
| `App Inventor ESO` | `unitats/programacio/blocs/app-inventor-eso` | `assets/app_inventor.png` |
| `App Inventor Batxillerat` | `unitats/programacio/blocs/app-inventor-bat` | `assets/app_inventor.png` |

Mantindre l'estructura de columna que ja fa servir cada fitxer (`unitats/programacio/index.html` usa `<vf-img styles="max-height:200px" link=... src=...>` + `<vf-btn classes="btn-short" link=...>`; `unitats/index.html` fer servir el patró que ja té a les línies ~147-149).

### 3c. `unitats/programacio/blocs/app-inventor-eso/index.html`

Reescriure (ara és còpia de bat). Estructura:

```html
<div id="content">
    <vf-title level="1">
        App Inventor ESO
    </vf-title>

    <vf-content>
        <vf-row>
            <vf-col classes="col-md-6">
                <vf-img src="assets/app_inventor.png"></vf-img>
            </vf-col>
            <vf-col classes="col-md-6">
                <vf-btn link="https://ai2.appinventor.mit.edu/">
                    Accedir a APP INVENTOR
                </vf-btn>
                <vf-hr></vf-hr>
                <vf-btn link="unitats/programacio/blocs/app-inventor-eso/01-interficie.html">
                    Interficie del programa i com utilitzar-lo
                </vf-btn>
            </vf-col>
        </vf-row>
    </vf-content>

    <vf-content>
        <vf-row centered>
            <vf-col styles="width:20em">
                <vf-img styles="max-height:200px" link="unitats/programacio/blocs/app-inventor-eso/02-endevinar.html"
                    src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-endevinar.png"></vf-img>
                <vf-btn classes="btn-short" link="unitats/programacio/blocs/app-inventor-eso/02-endevinar.html">
                    Endevinar número
                </vf-btn>
            </vf-col>
            <vf-col styles="width:20em">
                <vf-img styles="max-height:200px" link="unitats/programacio/blocs/app-inventor-eso/03-marcador-handball.html"
                    src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-marcador.png"></vf-img>
                <vf-btn classes="btn-short" link="unitats/programacio/blocs/app-inventor-eso/03-marcador-handball.html">
                    Marcador handball
                </vf-btn>
            </vf-col>
            <vf-col styles="width:20em">
                <vf-img styles="max-height:200px" link="unitats/programacio/blocs/app-inventor-eso/04-pedra-paper-tisora.html"
                    src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-ppt.png"></vf-img>
                <vf-btn classes="btn-short" link="unitats/programacio/blocs/app-inventor-eso/04-pedra-paper-tisora.html">
                    Pedra, paper i tisora
                </vf-btn>
            </vf-col>
            <vf-col styles="width:20em">
                <vf-img styles="max-height:200px" link="unitats/programacio/blocs/app-inventor-eso/05-atrapa-talp.html"
                    src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-atrapatalp.png"></vf-img>
                <vf-btn classes="btn-short" link="unitats/programacio/blocs/app-inventor-eso/05-atrapa-talp.html">
                    Atrapa el talp
                </vf-btn>
            </vf-col>
        </vf-row>
    </vf-content>
</div>
```

Mantindre `<head>` (amb `<base href="../../../../">`), `#menu` i `#footer` idèntics a `app-inventor-bat/index.html`.

### 3d. Duplicar la pàgina «Interficie» (HTML + assets) a ESO

1. Copiar la carpeta d'assets sencera:
   `assets/unitats/programacio/blocs/app-inventor-bat/01_interficie/` → `assets/unitats/programacio/blocs/app-inventor-eso/01_interficie/` (13 fitxers: `01blocs.png`, `01series.png`, `02blocs.png`, `02series.png`, `03blocs.png`, `03series.jpeg`, `04series.jpeg`, `05series.jpeg`, `dibuix.png`, `disposicio.png`, `general.png`, `interficie.png`, `mitjans.png`).
2. Crear `unitats/programacio/blocs/app-inventor-eso/01-interficie.html` copiant **tot** el contingut de `unitats/programacio/blocs/app-inventor-bat/01-interficie.html` i substituint dins dels `src=`:
   `assets/unitats/programacio/blocs/app-inventor-bat/01_interficie/` → `assets/unitats/programacio/blocs/app-inventor-eso/01_interficie/`
   (El `<base href>` és el mateix `../../../../`. No cal tocar res més.)

---

## Component nou: `vf-video` (necessari per a la Tasca 5)

El projecte no té cap `<video>` ni component de vídeo. Crear-ne un seguint la secció 5 de `.claude/agents/vf-web.md`.

### `components/vf-video.js`

```js
class VFVideo extends VFElement {
    render() {
        const src = this.getAttribute('src');

        if (!src) {
            console.warn('vf-video: falta el atributo "src"');
            return;
        }

        const video = document.createElement('video');
        video.controls = true;
        video.setAttribute('preload', 'metadata');
        video.classList.add('my-3', 'center', 'vf-video');

        const source = document.createElement('source');
        source.src = src;
        source.type = this.getAttribute('type') || 'video/mp4';
        video.appendChild(source);

        processClasses(video, this.getAttribute('classes'));
        processStyles(video, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(video);
    }
}

customElements.define('vf-video', VFVideo);
```

### Registrar-lo a `header.html`

Dins del bloc `<!-- Components -->`, **després** de `vf-element.js` (posar-lo just davall de `vf-img.js`):

```html
<script src="components/vf-video.js"></script>
```

### CSS a `styles/general.css`

Amb variables CSS (mai colors literals), seguint el llenguatge visual del lloc:

```css
.vf-video {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px var(--shadow-color);
}
```

### `components/test.html`

Afegir una secció nova (abans de la de `vf-hr`, per exemple):

```html
<!-- ============================================================ -->
<vf-title level="2">vf-video</vf-title>
<vf-content>
    <vf-video src="assets/unitats/programacio/blocs/app-inventor-eso/MARCADOR_HANDBALL.mp4"></vf-video>
</vf-content>
```

---

## Tasca 4 — `unitats/programacio/blocs/app-inventor-eso/02-endevinar.html`

Plantilla estàndard, `<base href="../../../../">`, `<vf-title level="1">Endevinar número</vf-title>`.

Contingut de `#content`, en ordre:

```html
<vf-title level="1">
    Endevinar número
</vf-title>

<vf-title level="2">
    Elements de l'app
</vf-title>
<vf-content>
    <vf-row centered>
        <vf-col>
            <vf-img src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-endevinar1.png"></vf-img>
        </vf-col>
        <vf-col>
            <vf-img src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-endevinar2.png"></vf-img>
        </vf-col>
    </vf-row>
</vf-content>

<vf-title level="2">
    Blocs
</vf-title>
<vf-content>
    <vf-list ordered>
        <li>Crear variable amb número aleatori entre 1 i 100</li>
        <li>Al fer clic al botó COMPROVAR
            <ol>
                <li>Si el número escrit és el número que busquem → Posar ENCERTAT en la etiqueta resultat</li>
                <li>Si el número escrit és menor que el número que busquem → Posar que EL NÚMERO QUE BUSQUEM ÉS MAJOR en la etiqueta resultat</li>
                <li>Si el número escrit és major que el número que busquem → Posar que EL NÚMERO QUE BUSQUEM ÉS MENOR en la etiqueta resultat</li>
                <li>Després de comprovar i canviar la etiqueta resultat és aconsellable buidar el text del camp de text</li>
            </ol>
        </li>
        <li>Intents: volem que cada vegada que no trobem el número, el número d'intents vaja incrementant-se
            <ol>
                <li>Hem de crear una variable intents que comence en 0</li>
                <li>Cada vegada que el número es comprove i no siga, es sumarà 1 a la variable intents</li>
                <li>Es canviarà el text de l'etiqueta num_intents per el valor de la variable intents</li>
            </ol>
        </li>
        <li>Tornar a començar:
            <ol>
                <li>Al trobar el número, es mostrarà el botó de tornar a començar</li>
                <li>Al presionar a tornar a començar:
                    <ol>
                        <li>S'ocultarà el botó de tornar a començar</li>
                        <li>Es canviarà el valor de la variable intents a 0</li>
                        <li>Es canviarà el text de pantalla de intents per 0</li>
                        <li>Es tornarà a assignar un valor aleatori a la variable número</li>
                    </ol>
                </li>
            </ol>
        </li>
    </vf-list>
</vf-content>
```

> Nota sobre llistes amb nivells: `vf-list` només processa el mini-llenguatge (`*negreta*`) al primer nivell de `<li>` de forma fiable. Per a sub-nivells, usar `<ol>` natius imbricats dins del `<li>` (com dalt) i escriure `<strong>…</strong>` explícit si cal negreta. No imbricar `<vf-list>` dins de `<vf-list>`.

---

## Tasca 5 — `unitats/programacio/blocs/app-inventor-eso/03-marcador-handball.html`

`<vf-title level="1">Marcador handball</vf-title>`. Requereix el component `vf-video` (secció de dalt).

```html
<vf-title level="1">
    Marcador handball
</vf-title>

<vf-content>
    <vf-btn link="https://drive.google.com/file/d/16sZJpyDiDXFtSminIAcS4_8TnDjj88LG/view" newtab>
        Obrir el vídeo de l'app
    </vf-btn>
    <vf-video src="assets/unitats/programacio/blocs/app-inventor-eso/MARCADOR_HANDBALL.mp4"></vf-video>
</vf-content>

<vf-title level="2">
    Blocs
</vf-title>
<vf-content>
    <vf-text>
        L'app té *6 botons*: a la part esquerra (equip local) un botó de *gol* i un de *descomptar gol*;
        a la part dreta (equip visitant) un altre de *gol* i un de *descomptar gol*; i a la part inferior
        *finalitzar partit* i *iniciar partit*. Pensa com resoldre cada pas; ací tens l'esquelet per a completar.
    </vf-text>
    <vf-list ordered>
        <li>Cal una variable per als gols del local i una altra per als del visitant. Pensa quin valor inicial han de tindre i quan s'han de reiniciar.</li>
        <li>Botó *gol* (local): incrementa la variable corresponent i actualitza… (quina etiqueta?).</li>
        <li>Botó *descomptar gol* (local): fa el contrari, però compte amb no baixar de 0.</li>
        <li>Els dos botons de la dreta funcionen igual que els de l'esquerra, però sobre la variable del visitant.</li>
        <li>Botó *iniciar partit*: deixa el marcador a 0-0 i… (què cal habilitar o mostrar?).</li>
        <li>Botó *finalitzar partit*: què s'ha de mostrar? què cal bloquejar perquè ja no es puguen marcar gols?</li>
    </vf-list>
</vf-content>
```

(El text de la llista és deliberadament incomplet perquè l'alumnat pense; ajustar-lo si es vol.)

---

## Tasca 6 — `unitats/programacio/blocs/app-inventor-eso/04-pedra-paper-tisora.html`

`<vf-title level="1">Pedra, paper i tisora</vf-title>`. Contingut en ordre:

```html
<vf-title level="1">
    Pedra, paper i tisora
</vf-title>

<vf-title level="2">
    Elements de l'app
</vf-title>
<vf-content>
    <vf-row centered>
        <vf-col>
            <vf-img src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-ppt1.png"></vf-img>
        </vf-col>
        <vf-col>
            <vf-img src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-ppt2.png"></vf-img>
        </vf-col>
    </vf-row>
    <vf-text>Dels components s'ha de tindre en compte que:</vf-text>
    <vf-list>
        <li>Al principi es mostrarà només DV_Dades</li>
        <li>Al replenar el nom i clicar al botó BTN_Començar s'ocultarà DV_Dades i es mostrarà DV_Partida</li>
    </vf-list>
</vf-content>

<vf-title level="2">
    Blocs
</vf-title>
<vf-content>
    <vf-title level="3">Tasques inicials</vf-title>
    <vf-list ordered>
        <li>Al inicialitzar Screen1, s'ha d'ocultar DV_Partida i canviar l'altura de DH_Versus per l'altura de la imatge IMG_Pedra</li>
        <li>Al donar-li al botó de començar, s'ha de posar el nom del camp de text al label LBL_Nom</li>
        <li>Al fer clic a cada imatge (IMG_Paper, IMG_Pedra, IMG_Tisora) s'ha de cambiar la imatge de IMG_Jugador i es buidarà la imatge de IMG_MAQUINA (amb un text buit)</li>
        <li>Crearem una variable amb una llista buida</li>
        <li>Al inicialitzar la app (Screen1) afegirem a la llista els elements de les imatges, pedra.png, paper.png i tisores.png</li>
    </vf-list>

    <vf-title level="3">Comprovar jugada</vf-title>
    <vf-list ordered>
        <li>Al fer clic al botó de jugar hem de comprovar si la IMG_Jugador té imatge per saber si el jugador ha seleccionat una opció. Si es compleix l'anterior farem el següent:
            <ol>
                <li>actualitzarem la imatge de la máquina IMG_MAQUINA per un element aleatori de la llista que haviem creat abans</li>
                <li>Si la máquina ha triat aleatòriament <strong>pedra</strong>
                    <ol>
                        <li>Si el jugador ha triat <strong>pedra</strong> es mostrarà a Resultat: EMPAT!</li>
                        <li>Si el jugador ha triat <strong>paper</strong> es mostrarà a Resultat: GUANYES!</li>
                        <li>Si el jugador ha triat <strong>tisores</strong> es mostrarà a Resultat: PERDS!</li>
                    </ol>
                </li>
                <li>Si la máquina ha triat aleatòriament <strong>paper</strong> <em>(completa amb el que falta)</em></li>
                <li>Si la màquina ha triat aleatòriament <strong>tisores</strong> <em>(completa amb el que falta)</em></li>
            </ol>
        </li>
    </vf-list>

    <vf-title level="3">Comptar guanyades</vf-title>
    <vf-list ordered>
        <li>Crea una variable global que compte les partides guanyades a 0</li>
        <li>En el joc anterior, quan fas clic al botó de Jugar, en els casos en els que guanye, incrementar la variable en 1</li>
        <li>Canviar el text LBL_Num_Victories amb el valor de la variable de partides guanyades</li>
    </vf-list>

    <vf-title level="3">Perdre</vf-title>
    <vf-list ordered>
        <li>Crea un procediment que s'anomene acabar</li>
        <li>En el botó de Jugar, cada vegada que es perga s'ha de cridar al procediment acabar</li>
        <li>El procediment acabar tindrà les següents instruccions
            <ol>
                <li>Ocultar el botó de Jugar</li>
                <li>Mostrar el botó de Tornar a començar</li>
                <li>Canviar el text de Resultat per: "Has aconseguit guanyar" + variable de partides guanyades + "guanyades"</li>
            </ol>
        </li>
    </vf-list>

    <vf-title level="3">Tornar a començar</vf-title>
    <vf-list ordered>
        <li>Al fer clic al botó de tornar a començar s'ha de fer el següent:
            <ol>
                <li>Posar la variable de partides guanyades a 0</li>
                <li>Canviar el text de partides guanyades al valor de la variable de partides guanyades</li>
                <li>Ocultar el botó de Tornar a començar</li>
                <li>Mostrar el botó de Jugar</li>
                <li>Llevar la imatge del jugador en un text buit</li>
                <li>Llevar la imatge de la máquina en un text buit</li>
                <li>Buidar el text de Resultat amb un text buit</li>
            </ol>
        </li>
    </vf-list>
</vf-content>
```

(El text de l'origen escriu «DV_Ddades» en un punt; s'ha normalitzat a «DV_Dades».)

---

## Tasca 7 — `unitats/programacio/blocs/app-inventor-eso/05-atrapa-talp.html`

`<vf-title level="1">Atrapa el talp</vf-title>`. Contingut en ordre:

```html
<vf-title level="1">
    Atrapa el talp
</vf-title>

<vf-title level="2">
    Resultat
</vf-title>
<vf-content>
    <vf-img src="assets/unitats/programacio/blocs/app-inventor-eso/appinv-eso-atrapatalp.png"></vf-img>
</vf-content>

<vf-title level="2">
    Descripció i tips
</vf-title>
<vf-content>
    <vf-text>
        La pantalla té a dalt un text amb el *títol del joc*. A l'esquerra, dos textos: «Talps restants» i un
        número que comença en *30*. A la dreta, dos textos: «Temps» i un número que comença en *0*. Baix, una
        graella de *3 files x 3 columnes* de forats de talp: tots buits menys un, que té el talp.
    </vf-text>
    <vf-list>
        <li>Cada cert temps aleatori (entre *0.5 s i 1.5 s*) el talp canvia d'un forat a un altre. Pista: un rellotge (Clock) amb l'interval canviat a un valor aleatori cada vegada que dispara.</li>
        <li>Quan l'usuari toca el forat que té el talp: el talp salta a un altre forat i «Talps restants» baixa en 1. Pensa com saber quin forat té el talp ara mateix.</li>
        <li>Un segon rellotge fa avançar «Temps» en 1 cada segon.</li>
        <li>Quan «Talps restants» arriba a 0: para els dos rellotges (el talp ja no es mou i el temps s'atura).</li>
        <li>En eixe moment apareix un botó «Reiniciar joc». En prémer-lo: «Talps restants» torna a 30, «Temps» torna a 0, el botó s'amaga i els rellotges es tornen a activar.</li>
    </vf-list>
</vf-content>
```

(Tips redactats per a ajudar sense donar la solució; ajustar si cal.)

---

## Tasca 8 — `cursos/3eso.html`

Llevar les **3 targetes actuals**. Posar-ne **5**, en aquest ordre:

| # | Etiqueta botó | Enllaç | `src` imatge | Nota |
|---|---|---|---|---|
| 1 | `Intel·ligència artificial` | *(cap)* | `assets/inteligencia_artificial.jpeg` | targeta sense enllaç (patró «sense enllaç» de dalt) |
| 2 | `Projecte Còmic` | *(cap)* | `assets/projectes/comic/comic.png` | targeta sense enllaç |
| 3 | `Programació - AppInventor` | `unitats/programacio/blocs/app-inventor-eso` | `assets/app_inventor.png` | enllaça a App Inventor ESO |
| 4 | `Robòtica` | *(cap)* | `assets/robotica.png` | targeta sense enllaç |
| 5 | `Edició d'imatge GIMP - Avançat` | `unitats/multimedia/edicio-imatge-1` | `assets/gimp.png` | (no hi ha `edicio-imatge-2`; s'enllaça a `-1` tal com demana l'origen) |

Mantindre `<vf-title level="1">3r ESO</vf-title>` i `<vf-title level="2" centered>Situacions d'aprenentatge</vf-title>` tal com estan.

---

## Comprovació final

1. `header.html` conté `<script src="components/vf-video.js"></script>` després de `vf-element.js`.
2. `python3 -m http.server 8000` i obrir, sense errors de consola ni 404:
   - `cursos/2eso.html`, `cursos/3eso.html`
   - `unitats/programacio/index.html`, `unitats/index.html`
   - `unitats/programacio/blocs/app-inventor-bat/` (index + 01..05: les imatges carreguen ara des de `app-inventor-bat/`)
   - `unitats/programacio/blocs/app-inventor-eso/` : `index.html`, `01-interficie.html`, `02-endevinar.html`, `03-marcador-handball.html` (vídeo reprodueix), `04-pedra-paper-tisora.html`, `05-atrapa-talp.html`
   - `components/test.html` (secció `vf-video`)
3. `grep -rn "blocs/app-inventor[/\"']" --include="*.html" .` → només ha de trobar `app-inventor-bat` i `app-inventor-eso`, res sense sufixe.
4. Llista d'assets nous a afegir al repo: `assets/unitats/programacio/blocs/app-inventor-eso/01_interficie/*`, i confirmar que els `.png/.mp4` d'ESO ja pujats estan afegits.
5. `git add` dels fitxers nous (estaven untracked): carpetes `app-inventor-bat/`, `app-inventor-eso/` (HTML i assets), `components/vf-video.js`.

## Decisions preses (confirmar/ajustar si cal)

- **Tasca 1**: `<title>` = text del `<vf-title level="1">`, sense sufixe de lloc; només pàgines del lloc; es respecten els títols ja personalitzats. Commit a banda.
- **Índex ESO**: graella de 4 targetes per als jocs; el botó «Interficie» queda com a botó a la columna dreta (com a bat).
- **Fitxers ESO**: numerats `01`–`05`.
- **Vídeo handball**: component nou `vf-video` (`<video controls>` internament).
- **Blocs «sense enllaç»** (Tasca 8): `<vf-btn>` sense `link` → `<button>` inert. Projecte Còmic sense enllaç (no hi ha pàgina). GIMP Avançat → `edicio-imatge-1`.
- **Etiquetes de botó**: s'usen els noms de bloc de l'encàrrec; escurçar si es prefereix.

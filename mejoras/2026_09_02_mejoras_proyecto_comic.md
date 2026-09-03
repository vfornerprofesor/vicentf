# Millores projecte Còmic — 2026-09-02 (pla d'execució)

Origen: `mejoras/2026_09_02_mejoras_proyecto_comic.txt`. Aquest document és la versió executable per a una IA. Segueix les tasques **en ordre**. Recomanació: **1 commit per tasca** (o un únic commit «projecte còmic» si es prefereix, però revisant el `git diff` sencer abans).

Objectiu: crear el projecte `projectes/comic/` (nou, no existeix cap fitxer) amb la seua pàgina principal i les subpàgines, i afegir-lo a la graella de `projectes/index.html`.

## Regles generals (no trencar)

- Lloc estàtic, **sense build, sense npm, sense frameworks**. Només HTML + CSS + JS vanilla + Bootstrap 4.5 (ja carregat) + jQuery `load` de `header.html`/`menu.html`/`footer.html`.
- Contingut nou en **valencià**, com la resta del lloc.
- Indentació de **4 espais** en HTML.
- Plantilla de pàgina: veure `projectes/aplicacio-web/index.html` i `projectes/aplicacio-web/*.html`. Punts crítics:
  - `<base href>` amb la profunditat correcta. Totes les pàgines noves viuen a `projectes/comic/` → **`<base href="../../">`** (l'arrel del repo és 2 nivells amunt).
  - Totes les rutes (`assets/…`, `projectes/…`) s'escriuen **relatives a l'arrel** del repo, mai relatives a la pàgina.
  - `#header` al `<head>`; `#menu`, `#content`, `#footer` al `<body>`, visibles (sense `display:none`).
  - `<title>` = text literal del `<vf-title level="1">` de la pàgina, sense sufixe (mateix criteri que `mejoras/2026_09_02_mejoras_unidades.md` Tasca 1).
- Reutilitzar sempre els components `vf-*` existents (`vf-title`, `vf-content`, `vf-text`, `vf-list`, `vf-img`, `vf-btn`, `vf-row`, `vf-col`, `vf-hr`). No inventar patrons nous.
- Provar amb `python3 -m http.server 8000` a l'arrel (amb `file://` el `<base href>` no funciona). Revisar la consola: cap 404 d'imatge.

## Assets (ja al repo, verificat 2026-09-02)

Tots presents, **no cal pujar-ne cap de nou**:

- `assets/projectes/comic/`: `ods.png`, `guio.png`, `audio.png`, `video.png`, `comic.png`
- `assets/projectes/comic/guio/`: `01.png`, `02.png`, `guio01.png`, `vinyetes01.png`…`vinyetes07.png`
- `assets/unitats/multimedia/`: `audacity.png`, `video.png`, `disney.png`

## Enllaços externs (fer servir tal qual)

- ODS (PNUD): `https://www.undp.org/es/sustainable-development-goals`
- Storyboard That: `https://www.storyboardthat.com/`

(L'origen porta URLs embolcallades en `google.com/url?q=…`; usar les URL directes de dalt.)

## Plantilla base d'una pàgina del projecte

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <base href="../../">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TÍTOL DE LA PÀGINA</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <div id="header"></div>
    <script>$('#header').load('header.html');</script>

</head>

<body>

    <div id="menu"></div>
    <script>$('#menu').load('menu.html');</script>
    <div id="content">

        <!-- CONTINGUT -->

    </div>
    <div id="footer"></div>
    <script>$('#footer').load('footer.html');</script>
    </div>

</body>

</html>
```

## Patró «fila de dos columnes: imatge + títol/botó» (índexs del projecte)

L'origen el descriu com «izquierda imagen, derecha título nivel 2 + botón Accedir». Copiar exacte:

```html
<vf-content>
    <vf-row>
        <vf-col classes="col-md-6">
            <vf-img src="assets/RUTA_IMATGE"></vf-img>
        </vf-col>
        <vf-col classes="col-md-6">
            <vf-title level="2">
                TÍTOL DE LA SECCIÓ
            </vf-title>
            <vf-btn link="projectes/comic/PAGINA_DESTI.html">
                Accedir
            </vf-btn>
        </vf-col>
    </vf-row>
</vf-content>
<vf-hr></vf-hr>
```

Repetir el bloc per cada secció; el `<vf-hr>` separa cada fila (l'últim `<vf-hr>` abans del final es pot ometre si es vol).

---

## Tasca 1 — `projectes/comic/index.html` (PÀGINA CÒMIC)

`<title>Projecte Còmic</title>`. Contingut de `#content` en ordre:

1. `<vf-title level="1">Projecte Còmic</vf-title>` (l'origen l'escriu en majúscules «PROJECTE CÒMIC»; mantindre la caixa normal com la resta del lloc).
2. `<vf-content>` amb:
   - `<vf-text>` : «El projecte consisteix en fer un còmic d'una història que tracte algun dels Objectius de Desenvolupament Sostenible de les Nacions Unides.»
   - `<vf-text>` : «Els objectius els podeu trobar [ací](https://www.undp.org/es/sustainable-development-goals).» — «ací» és un enllaç. Comprovar si `vf-text` processa Markdown d'enllaç; si **no**, escriure la frase amb `<a href="https://www.undp.org/es/sustainable-development-goals" target="_blank" rel="noopener">ací</a>` dins d'un `<vf-text>` (o `<p>` si `vf-text` escapa l'HTML — verificar amb `components/vf-text.js`).
   - `<vf-img src="assets/projectes/comic/ods.png"></vf-img>`
   - `<vf-text>` : «A l'enllaç podeu entrar i llegir sobre els 17 objectius per rebre més informació.»
   - `<vf-text>` : «El treball que realitzarem serà:»
   - `<vf-list>` (no ordenada) amb 3 `<li>`:
     - «*Producció multimèdia*: Pensar la història, crear el guió multimèdia i crear les vinyetes»
     - «*Àudio digital*: Crear els fitxers de so per a cadascuna de les vinyetes»
     - «*Vídeo digital*: Muntar la película del còmic amb les vinyetes i els sons anteriors»
3. `<vf-hr></vf-hr>`
4. Tres files amb el **patró «fila de dos columnes»** (imatge esquerra, `vf-title level="2"` + botó `Accedir` dreta), separades per `<vf-hr>`:

| Imatge | Títol nivell 2 | `link` del botó |
|---|---|---|
| `assets/projectes/comic/guio.png` | `Elements de la producció multimèdia` | `projectes/comic/elements-produccio-multimedia.html` |
| `assets/projectes/comic/audio.png` | `Àudio digital` | `projectes/comic/audio-digital.html` |
| `assets/projectes/comic/video.png` | `Vídeo digital` | `projectes/comic/video-digital.html` |

---

## Tasca 2 — `projectes/comic/elements-produccio-multimedia.html`

`<title>Elements de la producció multimèdia</title>`. Contingut:

1. `<vf-title level="1">Elements de la producció multimèdia</vf-title>`
2. Dues files amb el **patró «fila de dos columnes»**, separades per `<vf-hr>`:

| Imatge | Títol nivell 2 | `link` del botó |
|---|---|---|
| `assets/projectes/comic/guio/01.png` | `Guió multimèdia` | `projectes/comic/guio-multimedia.html` |
| `assets/projectes/comic/guio/02.png` | `Creació de vinyetes` | `projectes/comic/creacio-vinyetes.html` |

---

## Tasca 3 — `projectes/comic/guio-multimedia.html`

`<title>Guió multimèdia</title>` (posar també un `<vf-title level="1">Guió multimèdia</vf-title>` al principi encara que l'origen comence en nivell 2, per coherència de plantilla i de `<title>`).

Contingut de `#content` en ordre:

1. `<vf-title level="1">Guió multimèdia</vf-title>`
2. `<vf-title level="2">Documentació necessària per realitzar l'activitat</vf-title>`
3. `<vf-content>` amb `<vf-text>` (un per paràgraf):
   - «Un guió multimèdia és un suport informàtic que té una estructura amb columnes d'imatge, so, text, accions, etc, que identifiquen cadascun dels recursos informàtics per realitzar una producció multimèdia. Per exemple en una película, un guió multimèdia recull l'ordre de les escenes i el que apareixerà en cadascuna d'elles, els personatges, l'entorn, el so de fons i indumentaria.»
   - «Però, un guió multimèdia també pot servir per escriure llibres, còmics, crear música, disseny d'imatges, desenvolupament de jocs o treballs de classe.»
   - «El contingut del guió multimèdia ha d'estar correctament organitzat perquè la informació siga fàcilment interpretable i el que vaja a realitzar la producció multimèdia, seguint el guió puga fer exactament el que s'ha escrit al guió.»
   - «Els punts que s'han d'incloure en un guió multimèdia són:»
   - `<vf-list>` (no ordenada):
     - «Resum del producte: es comptarà la producció que s'ha de fer»
     - «Taula per a cada escena que continga tots els elements de cada escena»
4. `<vf-title level="2">Descripció de l'activitat</vf-title>`
5. `<vf-content>` amb `<vf-text>` per paràgraf:
   - «En aquesta activitat en primer lloc hauràs de crear un Document de Google al Google Drive dins de la carpeta *Informàtica - 3 ESO > 1ª Avaluació > Unitat 1 - Elements comuns de la producció multimèdia*. El seu nom serà *Guió multimèdia*.»
   - «Al document escriurem un títol que serà el nom de la història que desenvoluparem. Si en el moment de crear el document no saps el nom de la història escriurem *Títol* i més endavant ja escriuràs el nom.»
   - «Els punts que haurà de tindre el document són:»
   - `<vf-list ordered>` amb sub-nivells (usar `<ol>` natius imbricats dins del `<li>`, **no** `<vf-list>` dins de `<vf-list>`):
     1. Objectiu de Desenvolupament Sostenible
     2. Resum de la història
     3. Guió multimèdia
        - 3.1. Vinyeta 1
        - 3.2. Vinyeta 2
        - 3.3. Vinyeta 3
        - 3.4. …
   - «Per al desenvolupament del punt 1 (Objectiu de Desenvolupament Sostenible) hauràs d'accedir [ací](https://www.undp.org/es/sustainable-development-goals) per triar l'Objectiu del que tractarà el teu còmic. En aquest punt del document explicaràs de què tracta l'Objectiu i perquè has decidit triar aquest.» (enllaç «ací» com a la Tasca 1)
   - «Ara pensaràs la història de què tractarà el teu còmic amb l'Objectiu triat. Recorda que haurà de tindre una introducció en la que es planteja un problema, un desenvolupament en el que s'intenta resoldre aquest problema i per últim una conclusió que mostre com s'aporta una solució al problema. La història la escriuràs al punt 2 (Resum de la història) i hauran d'apareixer ja els personatges i ambients.»
   - «A continuació hauràs de dividir la història en com a mínim 15 vinyetes. Si se t'ocorren més no hi ha problema.»
   - «En el punt 3 (Guió multimèdia) crearàs tants subtítols com vinyetes tingues. En cadascun escriuràs el resum de la vinyeta i crearàs una taula amb els elements que s'han de tractar en eixa vinyeta com la següent:»
   - `<vf-img styles="max-width:450px" src="assets/projectes/comic/guio/guio01.png"></vf-img>`
6. `<vf-title level="2">Lliurament a aules</vf-title>`
7. `<vf-content>` amb `<vf-text>`:
   - «Ara des del document de Google *Guió multimèdia* que has creat, fes click a *Archivo > Descargar > Documento PDF (.pdf)*. A continuació s'haurà descarregat a la carpeta Descargas un fitxer anomenat *Guió multimèdia.pdf*. Aquest és el fitxer que lliuraràs al moodle en *Lliurament Activitat 2 de la Unitat 1*.»
8. `<vf-title level="2">Què se m'avaluarà?</vf-title>`
9. `<vf-content>` amb `<vf-list>` (no ordenada):
   - «Redacció correcta sense faltes d'ortografia»
   - «Que s'utilitze un ODS en la història i s'haja explicat de què tracta i perquè l'has triat»
   - «Que la història tinga una introducció, desenvolupament i conclusió»
   - «Que la història siga respectuosa i aporte una solució a l'Objectiu triat»
   - «Que el document tinga títol i els 3 punts que es demanen desenvolupats»
   - «Que la taula del guió multimèdia incloga com a mínim tots els punts: escena, so, personatges, diàlegs i altres elements»
   - «Que hi haja almenys 15 vinyetes i que representen la història dividida per escenes»

> Nota `vf-list`: el mini-llenguatge (`*negreta*`) només és fiable al primer nivell de `<li>`. Per a sub-nivells, `<ol>`/`<ul>` natius imbricats i `<strong>…</strong>` explícit si cal.

---

## Tasca 4 — `projectes/comic/creacio-vinyetes.html`

`<title>Creació de vinyetes</title>`. Contingut de `#content` en ordre:

1. `<vf-title level="1">Creació de vinyetes</vf-title>`
2. `<vf-title level="2">Ferramenta per a crear les vinyetes</vf-title>`
3. `<vf-content>`:
   - `<vf-text>` : «Aquesta serà la pàgina on crearàs el còmic: [https://www.storyboardthat.com/](https://www.storyboardthat.com/)» (enllaç clicable).
   - `<vf-text>` : «Si la pàgina ens apareix en anglès farem click amb el botó dret del ratolí en la pàgina web i seleccionarem *Traducir al español*.»
   - `<vf-text>` : «Una vegada allí buscarem el botó *Crear un guión gráfico* i s'obrirà una pantalla com la següent:»
   - `<vf-img src="assets/projectes/comic/guio/vinyetes01.png"></vf-img>` (amplada completa: sense `styles` de `max-width`)
   - `<vf-text>` : «A la pantalla ens apareixen un total de 3 vinyetes, per la qual cosa farem les vinyetes de 3 en 3. També ens apareix un menú superior amb diferents opcions, escenes, caracteres (personatges), texts, formes, etc:»
   - `<vf-img src="assets/projectes/comic/guio/vinyetes02.png"></vf-img>` (amplada completa)
   - `<vf-text>` : «Quan seleccionem una d'aquestes opcions ens apareixen altres subcategories i diferents imatges de la subcategoria seleccionada:»
   - `<vf-row>` amb dues `<vf-col>`, una `<vf-img styles="max-width:400px" src="assets/projectes/comic/guio/vinyetes03.png">` i l'altra `vinyetes04.png`.
   - `<vf-row>` amb dues `<vf-col>`, `vinyetes05.png` i `vinyetes06.png` (mateix `styles="max-width:400px"`).
   - `<vf-text>` : «Aquest és el menú principal per afegir objectes, escenes, texts, etc.»
4. `<vf-title level="2">Ferramenta per a crear captures</vf-title>`
5. `<vf-content>` amb `<vf-text>`:
   - «Quan tingam les 3 primeres vinyetes creades el que farem serà fer una captura per cada vinyeta amb la ferramenta *Shutter* o *Captura una regió rectangular*.»
   - «Ara crea una carpeta a l'escriptori de Lliurex que s'anomene *vinyetes*. Després canvia els noms de les vinyetes amb *Vinyeta1*, *Vinyeta2*, etc, depenent de la vinyeta que siga.»
6. `<vf-title level="2">Descripció de l'activitat</vf-title>`
7. `<vf-content>` amb `<vf-text>`:
   - «En aquesta activitat, seguint el document que vas crear en l'anterior activitat anomenat *Guió multimèdia* hauràs de crear totes les vinyetes que havies definit amb la ferramenta [Storyboard That](https://www.storyboardthat.com/). En el punt anterior s'explica com es creen les vinyetes.»
   - «A mesura que tingues 3 vinyetes construïdes, hauràs de realitzar les captures amb la ferramenta *Shutter* que també s'explica en el punt anterior.»
   - «Després hauràs de pujar les vinyetes al Google Drive en una carpeta que crearàs anomenada *Vinyetes*:»
   - `<vf-img src="assets/projectes/comic/guio/vinyetes07.png"></vf-img>`
   - «Ara, arrastrant les imatges de la carpeta de l'escriptori a la carpeta *Vinyetes* del Google Drive, es pujaran les vinyetes.»
8. `<vf-title level="2">Lliurament</vf-title>`
9. `<vf-content>` amb `<vf-text>`:
   - «Ara anem a l'escriptori de Lliurex on es troba la carpeta *vinyetes*. Prenem botó dret sobre la carpeta *vinyetes* i fem click en *comprimir* i després *crear*. Se'ns haurà creat un fitxer anomenat *vinyetes.zip*. Aquest és el fitxer que lliuraràs al moodle al *Lliurament Activitat 3 de la Unitat 1*.»
10. `<vf-title level="2">Què se m'avaluarà?</vf-title>`
11. `<vf-content>` amb `<vf-list>` (no ordenada):
    - «S'hagen creat totes les vinyetes»
    - «Que les vinyetes representen el que s'inclou al guió multimèdia»
    - «Que les vinyetes no presenten cap falta de respecte»
    - «Que s'haja pujat un fitxer .zip amb totes les vinyetes»

---

## Tasca 5 — `projectes/comic/audio-digital.html` (SUBPÀGINA ÀUDIO DIGITAL)

`<title>Àudio digital</title>`. Contingut:

1. `<vf-title level="1">Àudio digital</vf-title>`
2. Dues files amb el **patró «fila de dos columnes»**, separades per `<vf-hr>`:

| Imatge | Títol nivell 2 | `link` del botó |
|---|---|---|
| `assets/unitats/multimedia/audacity.png` | `Audacity` | *(pendent — veure nota)* |
| `assets/unitats/multimedia/audacity.png` | `Preparar àudios vinyetes` | *(pendent — veure nota)* |

**Nota (decisió a confirmar):** l'origen demana un botó «Accedir» «que lleve a una página nueva dentro de ese proyecto», però **no defineix el contingut** d'aquestes pàgines. Opcions:
- (a) Deixar el `<vf-btn>` **sense `link`** → genera un `<button>` inert, i afegir un comentari `<!-- TODO: pàgina pendent -->`.
- (b) Crear pàgines stub `projectes/comic/audacity.html` i `projectes/comic/preparar-audios-vinyetes.html` amb només `<vf-title level="1">` i un `<vf-text>` de «Contingut en preparació».

**Recomanació: opció (a)** fins que el propietari passe el contingut.

---

## Tasca 6 — `projectes/comic/video-digital.html` (SUBPÀGINA VÍDEO DIGITAL)

`<title>Vídeo digital</title>`. Contingut:

1. `<vf-title level="1">Vídeo digital</vf-title>`
2. Dues files amb el **patró «fila de dos columnes»**, separades per `<vf-hr>`:

| Imatge | Títol nivell 2 | `link` del botó |
|---|---|---|
| `assets/unitats/multimedia/video.png` | `Vídeo del còmic` | *(pendent — mateixa nota que Tasca 5)* |
| `assets/unitats/multimedia/disney.png` | `Vídeo pel·lícules` | *(pendent — mateixa nota que Tasca 5)* |

---

## Tasca 7 — Afegir el projecte a `projectes/index.html`

Dins del `<vf-row centered>` de `projectes/index.html` (ara només té la targeta «Aplicació web»), afegir una segona targeta amb el patró de targeta que ja fa servir el fitxer:

```html
<vf-col styles="width:20em">
    <vf-img styles="max-height:200px"
        link="projectes/comic/"
        src="assets/projectes/comic/comic.png"></vf-img>
    <vf-btn classes="btn-short" link="projectes/comic">
        Projecte Còmic
    </vf-btn>
</vf-col>
```

---

## Comprovació final

1. `python3 -m http.server 8000` a l'arrel del repo i obrir, sense errors de consola ni 404 d'imatge:
   - `projectes/index.html` (nova targeta «Projecte Còmic» visible i enllaç correcte)
   - `projectes/comic/index.html` (imatge `ods.png`, 3 files amb botons «Accedir»)
   - `projectes/comic/elements-produccio-multimedia.html` (2 files, botons cap a `guio-multimedia.html` i `creacio-vinyetes.html`)
   - `projectes/comic/guio-multimedia.html` (imatge `guio01.png` a 450px, llistes amb sub-nivells ben imbricades)
   - `projectes/comic/creacio-vinyetes.html` (7 imatges `vinyetes0X.png` carreguen; files de 2 columnes correctes)
   - `projectes/comic/audio-digital.html` i `projectes/comic/video-digital.html` (imatges carreguen; botons pendents inerts o stubs segons decisió)
2. `grep -rn "google.com/url" projectes/comic/` → 0 resultats (s'han usat les URL directes).
3. Tots els `<base href>` de `projectes/comic/*.html` són `../../`.
4. Cada `<title>` coincideix amb el `<vf-title level="1">` de la pàgina.
5. `git add projectes/comic/` (carpeta nova, untracked) + `git add projectes/index.html`.

## Decisions preses (confirmar/ajustar si cal)

- **Estructura de carpetes**: totes les pàgines planes dins de `projectes/comic/` (com fa `projectes/aplicacio-web/`), `<base href="../../">`. Les subsubpàgines (guió, vinyetes) **no** van en subcarpeta pròpia.
- **Noms de fitxer**: `index.html`, `elements-produccio-multimedia.html`, `guio-multimedia.html`, `creacio-vinyetes.html`, `audio-digital.html`, `video-digital.html`.
- **Títols en majúscules de l'origen** («PROJECTE CÒMIC», etc.) → caixa normal, com la resta del lloc.
- **URLs `google.com/url?q=…`** → substituïdes per les URL directes d'ODS i Storyboard That.
- **Pàgines «Àudio digital» i «Vídeo digital» de segon nivell** (Audacity, Preparar àudios, Vídeo del còmic, Vídeo pel·lícules): **contingut no definit a l'origen** → botons inerts + `TODO`, pendents que el propietari passe el material.
- **Enllaç «ací»**: si `vf-text` escapa l'HTML, escriure el paràgraf amb `<a>` fora de `vf-text` (verificar `components/vf-text.js` abans).

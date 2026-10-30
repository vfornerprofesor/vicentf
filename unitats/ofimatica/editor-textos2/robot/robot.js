/*
 * R0-B0T · Terminal de rescat (Editor de textos v2.0)
 *
 * Estat de la partida = nombre de codis correctes (0..8):
 *   0      → història + activació (codi VULL AJUDAR-TE)
 *   1..7   → transmissió amb les instruccions del DOCUMENT n
 *   8      → final (robots reprogramats)
 *
 * Tot el que el professorat pot voler canviar està en NIVELLS i ESTATS:
 * codis, pistes, missatges i imatges. Les instruccions de cada document
 * són a robot/instruccions/document-N.html.
 *
 * Mode revisió (professorat): robot/index.html?revisio — permet saltar a
 * qualsevol pas sense tocar el progrés guardat.
 */

var RUTA_ASSETS = 'assets/unitats/ofimatica/editor-textos2/';
var RUTA_INSTRUCCIONS = 'unitats/ofimatica/editor-textos2/robot/instruccions/';
var CLAU = 'naufrag-v2';
var INTENTS_PER_PISTA = 3;

// Codi que cal introduir en cada nivell (índex = estat actual).
// La comparació és exacta: majúscules, minúscules i espais compten.
var NIVELLS = [
    {
        etiqueta: "CODI D'ACTIVACIÓ",
        codi: 'VULL AJUDAR-TE',
        pista: "Copia el codi tal com apareix: VULL AJUDAR-TE, en majúscules, amb un espai i amb el guió."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 1',
        codi: 'ELNAUFRAGESTAATRAPAT',
        pista: "Quan hages fet tots els canvis, llig només la primera lletra de cada pel·lícula, de dalt a baix. Han d'eixir 20 lletres i formen una frase sobre l'informàtic."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 2',
        codi: '1065511911',
        pista: "El codi són 6 números seguits (n'hi ha que tenen dues xifres). Per comptar paraules usa Edita > Cerca i reemplaça i el botó «Cerca-ho tot»: Writer et diu quantes n'ha trobat."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 3',
        codi: '661',
        pista: "Fes primer les multiplicacions i després les sumes i les restes, d'esquerra a dreta. Per exemple, Frozen és el 2.3, així que val 23."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 4',
        codi: '252200',
        pista: "Són 6 números d'una xifra, un per cada apartat. Mira l'índex: hi tens tots els subtítols. Les vocals són A, E, I, O i U."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 5',
        codi: 'CONFIGURANTROBOT',
        pista: "Apunta les 16 lletres en ordre i canvia cada una per la següent de l'abecedari (A→B, B→C…). Ix una paraula relacionada amb el robot."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 6',
        codi: '632',
        pista: "Busca les 3 cel·les al sudoku resolt. Les files es compten de dalt a baix i les columnes d'esquerra a dreta. El codi són els 3 números seguits."
    },
    {
        etiqueta: 'CODI DEL DOCUMENT 7',
        codi: 'STROMBOLI',
        pista: "Converteix cada número binari a decimal (100110 = 38). Busca les coordenades a Google Maps i escriu el nom de l'illa en majúscules."
    }
];

// Què es mostra en cada estat: imatge de la història, missatges i instruccions.
// Les imatges són a assets/unitats/ofimatica/editor-textos2/estat/ (DOC_01 en
// activar la plataforma … DOC_08_FINAL en superar el DOCUMENT 7).
// {nom} es substitueix pel nom de l'alumne/a.
var ESTATS = {
    1: {
        imatge: 'estat/DOC_01.png',
        sistema: "Connexió establerta. Usuari: {nom}. Programació del robot: BLOQUEJADA (0/7 documents).",
        informatic: "{nom}, gràcies per connectar-te! El robot no em deixa escapar… Només entén documents de text ben fets: cada document correcte actualitza la seua programació. Comencem: descarrega el DOCUMENT 1 i segueix les instruccions.",
        document: 1
    },
    2: {
        imatge: 'estat/DOC_02.png',
        sistema: "DOCUMENT 1 ACTUALITZAT.",
        informatic: "«El nàufrag està atrapat»… però mira: el robot ja m'ha portat menjar! Seguim: ara cal donar format al text perquè el robot el puga llegir.",
        document: 2
    },
    3: {
        imatge: 'estat/DOC_03.png',
        sistema: "DOCUMENT 2 ACTUALITZAT.",
        informatic: "El robot m'ha deixat refugiar-me en la cova. Ara toca ordenar el document amb títols i subtítols.",
        document: 3
    },
    4: {
        imatge: 'estat/DOC_04.png',
        sistema: "DOCUMENT 3 ACTUALITZAT.",
        informatic: "Ara el robot fins i tot vol jugar a les cartes amb mi! Fem que el document parega professional: estils i índex.",
        document: 4
    },
    5: {
        imatge: 'estat/DOC_05.png',
        sistema: "DOCUMENT 4 ACTUALITZAT. Actualitzant software…",
        informatic: "He connectat el robot per a actualitzar el seu software. Ara cal organitzar la informació dels personatges en llistes.",
        document: 5
    },
    6: {
        imatge: 'estat/DOC_06.png',
        sistema: "DOCUMENT 5 ACTUALITZAT. CONFIGURANT ROBOT…",
        informatic: "El robot ja està de la nostra part: diu que anem a arreglar tots els robots! Ara completa el seu informe amb taules i imatges.",
        document: 6
    },
    7: {
        imatge: 'estat/DOC_07.png',
        sistema: "DOCUMENT 6 ACTUALITZAT.",
        informatic: "Funciona! Els robots de la ciutat ja canvien la seua programació. Només queda el document final: fes-lo en PDF i descobreix on estic perquè vinguen a per mi.",
        document: 7
    },
    8: {
        imatge: 'estat/DOC_08_FINAL.png',
        sistema: "DOCUMENT 7 ACTUALITZAT. Ubicació: STROMBOLI (38°47'30.6\"N 15°11'52.0\"E). Tots els robots reprogramats.",
        informatic: "ENHORABONA!! HAS ACONSEGUIT SALVAR-ME A MI I AL MÓN!!! Els robots ja demanen perdó i l'equip de rescat ve a buscar-me. Moltes gràcies, {nom}!!!"
    }
};

var VINYETES = [1, 2, 3, 4, 5, 6, 7].map(function (n) {
    return 'historia/vinyeta-' + n + '.jpg';
});

/* ---------- Estat guardat ---------- */

var revisio = /[?&]revisio\b/.test(location.search);
var partida = carrega();

function nova() {
    return { nom: '', pas: 0, errors: {}, pistes: {} };
}

function carrega() {
    if (revisio) { return nova(); }
    try {
        var p = JSON.parse(localStorage.getItem(CLAU));
        if (p && typeof p.pas === 'number') { return p; }
    } catch (e) { /* sense emmagatzematge: partida nova */ }
    return nova();
}

function guarda() {
    if (revisio) { return; }
    try { localStorage.setItem(CLAU, JSON.stringify(partida)); } catch (e) { /* res */ }
}

/* ---------- Utilitats ---------- */

var app = document.getElementById('app');
var reduirMoviment = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var tipusEnCurs = [];

function el(tag, attrs, fills) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
        if (k === 'text') { e.textContent = attrs[k]; }
        else if (k === 'html') { e.innerHTML = attrs[k]; }
        else { e.setAttribute(k, attrs[k]); }
    });
    (fills || []).forEach(function (f) { if (f) { e.appendChild(f); } });
    return e;
}

function ambNom(text) {
    return text.replace(/\{nom\}/g, partida.nom || 'agent');
}

function imatge(ruta, alt) {
    var img = el('img', { src: RUTA_ASSETS + ruta, alt: alt });
    img.addEventListener('error', function () {
        var ph = el('div', { 'class': 'imatge-pendent' }, [
            el('strong', { text: 'IMATGE PENDENT' }),
            el('code', { text: RUTA_ASSETS + ruta })
        ]);
        img.replaceWith(ph);
    });
    return img;
}

// Escriu el text lletra a lletra. Un clic a la línia el mostra sencer.
function escriu(node, text) {
    if (reduirMoviment) { node.textContent = text; return; }
    var i = 0;
    var t = setInterval(function () {
        i += 2;
        node.textContent = text.slice(0, i);
        if (i >= text.length) { clearInterval(t); node.classList.add('fet'); }
    }, 18);
    tipusEnCurs.push(t);
    node.addEventListener('click', function () {
        clearInterval(t); node.textContent = text; node.classList.add('fet');
    });
}

function parapeta() {
    tipusEnCurs.forEach(clearInterval);
    tipusEnCurs = [];
    app.innerHTML = '';
    window.scrollTo(0, 0);
}

/* ---------- Capçalera i mòduls ---------- */

function pintaCapcalera() {
    var connectat = partida.pas > 0;
    document.getElementById('led').className = 'led' + (connectat ? ' on' : '');
    document.getElementById('estat-connexio').textContent = connectat ? 'CONNEXIÓ ESTABLERTA' : 'SENSE CONNEXIÓ';
    document.getElementById('usuari').textContent = partida.nom ? 'AGENT: ' + partida.nom : '';

    var nav = document.getElementById('moduls');
    nav.innerHTML = '';
    for (var d = 1; d <= 7; d++) {
        var fet = partida.pas > d;
        var actual = partida.pas === d;
        var b = el('button', {
            type: 'button',
            'class': 'modul' + (fet ? ' fet' : '') + (actual ? ' actual' : ''),
            title: fet ? 'Torna a llegir el DOCUMENT ' + d : 'DOCUMENT ' + d,
            text: 'DOC ' + d
        });
        if (fet) {
            b.addEventListener('click', (function (n) {
                return function () { pintaArxiu(n); };
            })(d));
        } else {
            b.disabled = !actual;
            if (actual) { b.addEventListener('click', pinta); }
        }
        nav.appendChild(b);
    }
}

/* ---------- Pantalles ---------- */

function pinta() {
    parapeta();
    pintaCapcalera();
    if (partida.pas === 0) { pintaIntro(); }
    else if (partida.pas <= 7) { pintaTransmissio(partida.pas, false); }
    else { pintaFinal(); }
}

function pintaIntro() {
    var titol = el('h1', { 'class': 'glitch' });
    var vista = el('div', { 'class': 'vinyeta' });
    var comptador = el('div', { 'class': 'vinyeta-num' });
    var actual = 0;

    function mostra(n) {
        actual = (n + VINYETES.length) % VINYETES.length;
        vista.innerHTML = '';
        vista.appendChild(imatge(VINYETES[actual], 'Vinyeta ' + (actual + 1) + ' de la història'));
        comptador.textContent = (actual + 1) + ' / ' + VINYETES.length;
    }

    var ant = el('button', { type: 'button', 'class': 'btn-fletxa', 'aria-label': 'Vinyeta anterior', text: '◀' });
    var seg = el('button', { type: 'button', 'class': 'btn-fletxa', 'aria-label': 'Vinyeta següent', text: '▶' });
    ant.addEventListener('click', function () { mostra(actual - 1); });
    seg.addEventListener('click', function () { mostra(actual + 1); });

    var nom = el('input', { id: 'nom', type: 'text', autocomplete: 'off', spellcheck: 'false', maxlength: '40', placeholder: 'Nom i cognom' });
    nom.value = partida.nom || '';

    var form = formulariCodi(0, function () {
        var n = nom.value.trim();
        if (!n) { nom.focus(); return "Primer escriu el teu nom."; }
        partida.nom = n;
        return null;
    });
    form.insertBefore(el('div', { 'class': 'camp' }, [
        el('label', { 'for': 'nom', text: 'EL TEU NOM' }), nom
    ]), form.firstChild);

    app.appendChild(el('section', { 'class': 'pantalla intro' }, [
        titol,
        el('div', { 'class': 'carrusel' }, [ant, vista, seg]),
        comptador,
        el('div', { 'class': 'panell activacio' }, [
            el('h2', { text: '> ACTIVA LA CONNEXIÓ AMB EL ROBOT' }),
            el('p', { html: "L'informàtic està atrapat i només tu el pots ajudar. Escriu el teu nom i el codi d'activació: <strong class=\"codi-mostra\">VULL AJUDAR-TE</strong>" }),
            form
        ])
    ]));
    escriu(titol, "RESCATA L'INFORMÀTIC I SALVA EL MÓN");
    mostra(0);
}

function bitacola(estat) {
    var sis = el('p', { 'class': 'linia sistema' });
    var inf = el('p', { 'class': 'linia informatic' });
    var caixa = el('div', { 'class': 'bitacola' }, [
        el('div', { 'class': 'veu' }, [el('span', { text: '[SISTEMA]' }), sis]),
        el('div', { 'class': 'veu' }, [
            el('img', { 'class': 'avatar', src: RUTA_ASSETS + 'historia/informatic.png', alt: '' }),
            el('span', { text: '[INFORMÀTIC]' }), inf
        ])
    ]);
    escriu(sis, ambNom(estat.sistema));
    escriu(inf, ambNom(estat.informatic));
    return caixa;
}

function estatMissio(estat, num) {
    return el('figure', { 'class': 'estat-missio' }, [
        imatge(estat.imatge, 'Estat de la història'),
        el('figcaption', { text: 'ESTAT DE LA MISSIÓ · ' + num })
    ]);
}

function pintaTransmissio(n, arxiu) {
    var estat = ESTATS[n];
    var doc = el('article', { 'class': 'document' }, [
        el('div', { 'class': 'document-cap' }, [
            el('span', { text: 'INSTRUCCIONS' }),
            el('strong', { text: 'DOCUMENT ' + estat.document })
        ]),
        el('div', { 'class': 'document-cos', text: 'Rebent transmissió…' })
    ]);
    carregaInstruccions(estat.document, doc.lastChild);

    var fills = [];
    if (arxiu) {
        var tornar = el('button', { type: 'button', 'class': 'btn', text: '◀ TORNA A LA TRANSMISSIÓ ACTUAL' });
        tornar.addEventListener('click', pinta);
        fills.push(el('div', { 'class': 'avis-arxiu' }, [
            el('span', { text: 'ARXIU · Estàs rellegint una transmissió antiga.' }), tornar
        ]));
    }
    fills.push(el('div', { 'class': 'transmissio-cap' }, [
        estatMissio(estat, (n - 1) + '/7'),
        bitacola(estat)
    ]));
    fills.push(doc);
    if (!arxiu) {
        fills.push(el('div', { 'class': 'panell' }, [
            el('h2', { text: '> TRANSMET EL CODI DEL DOCUMENT ' + estat.document }),
            el('p', { text: "Recorda: abans d'escriure el codi, puja el document a la tasca d'Aules." }),
            formulariCodi(n)
        ]));
    }
    app.appendChild(el('section', { 'class': 'pantalla transmissio' }, fills));
}

function pintaArxiu(n) {
    parapeta();
    pintaCapcalera();
    pintaTransmissio(n, true);
}

function pintaFinal() {
    var estat = ESTATS[8];
    app.appendChild(el('section', { 'class': 'pantalla final' }, [
        el('h1', { 'class': 'glitch', text: 'MISSIÓ COMPLETADA' }),
        estatMissio(estat, 'FINAL'),
        bitacola(estat)
    ]));
}

/* ---------- Instruccions ---------- */

function carregaInstruccions(n, desti) {
    fetch(RUTA_INSTRUCCIONS + 'document-' + n + '.html', { cache: 'no-cache' })
        .then(function (r) {
            if (!r.ok) { throw new Error(r.status); }
            return r.text();
        })
        .then(function (html) { desti.innerHTML = html; })
        .catch(function () {
            desti.innerHTML = '<p class="error">No s\'han pogut carregar les instruccions. Torna a carregar la pàgina.</p>';
        });
}

/* ---------- Formulari de codi ---------- */

// abansDeValidar: funció opcional que torna un missatge d'error o null.
function formulariCodi(nivell, abansDeValidar) {
    var dada = NIVELLS[nivell];
    var id = 'codi-' + nivell;
    var input = el('input', {
        id: id, type: 'text', autocomplete: 'off', autocapitalize: 'off',
        autocorrect: 'off', spellcheck: 'false', placeholder: '_ _ _ _ _ _'
    });
    var resposta = el('p', { 'class': 'resposta', role: 'status' });
    var pista = el('div', { 'class': 'pista' });
    var form = el('form', { 'class': 'form-codi', novalidate: '' }, [
        el('div', { 'class': 'camp' }, [
            el('label', { 'for': id, text: dada.etiqueta }),
            el('div', { 'class': 'fila-codi' }, [
                input,
                el('button', { type: 'submit', 'class': 'btn', text: 'TRANSMET ▶' })
            ])
        ]),
        resposta,
        pista
    ]);

    function pintaPista() {
        pista.innerHTML = '';
        var errors = partida.errors[nivell] || 0;
        if (partida.pistes[nivell]) {
            pista.appendChild(el('p', { 'class': 'pista-text', text: 'PISTA · ' + dada.pista }));
        } else if (errors >= INTENTS_PER_PISTA) {
            var b = el('button', { type: 'button', 'class': 'btn btn-pista', text: '? DEMANA UNA PISTA AL ROBOT' });
            b.addEventListener('click', function () {
                partida.pistes[nivell] = true; guarda(); pintaPista();
            });
            pista.appendChild(b);
        }
    }

    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        if (abansDeValidar) {
            var avis = abansDeValidar();
            if (avis) { resposta.className = 'resposta ko'; resposta.textContent = avis; return; }
        }
        var valor = input.value.trim();
        if (!valor) { input.focus(); return; }
        if (valor === dada.codi) {
            resposta.className = 'resposta ok';
            resposta.textContent = 'CODI CORRECTE. Reprogramant…';
            form.classList.add('acceptat');
            partida.pas = nivell + 1;
            guarda();
            setTimeout(pinta, reduirMoviment ? 0 : 900);
        } else {
            partida.errors[nivell] = (partida.errors[nivell] || 0) + 1;
            guarda();
            resposta.className = 'resposta ko';
            resposta.textContent = 'ACCÉS DENEGAT. Codi incorrecte: revisa les instruccions i com has d\'escriure el codi.';
            form.classList.remove('sacseja'); void form.offsetWidth; form.classList.add('sacseja');
            pintaPista();
        }
    });

    pintaPista();
    return form;
}

/* ---------- Reiniciar i mode revisió ---------- */

(function () {
    var b = document.getElementById('reiniciar');
    var armat = false;
    b.addEventListener('click', function () {
        if (!armat) {
            armat = true;
            b.textContent = 'Segur? Es perdrà el progrés. Fes clic de nou';
            setTimeout(function () { armat = false; b.textContent = 'Reinicia la partida'; }, 4000);
            return;
        }
        armat = false;
        b.textContent = 'Reinicia la partida';
        partida = nova();
        if (!revisio) { try { localStorage.removeItem(CLAU); } catch (e) { /* res */ } }
        pinta();
    });
})();

if (revisio) {
    var barra = document.getElementById('revisio');
    barra.hidden = false;
    barra.appendChild(el('span', { text: 'MODE REVISIÓ (professorat) · no es guarda res · ves al pas:' }));
    ['Inici', 'Doc 1', 'Doc 2', 'Doc 3', 'Doc 4', 'Doc 5', 'Doc 6', 'Doc 7', 'Final'].forEach(function (t, i) {
        var b = el('button', { type: 'button', 'class': 'btn btn-mini', text: t });
        b.addEventListener('click', function () {
            partida.pas = i;
            if (!partida.nom) { partida.nom = 'Professorat'; }
            pinta();
        });
        barra.appendChild(b);
    });
    // ?revisio&pas=N obri directament el pas N (enllaços de la guia del professorat)
    var pasUrl = /[?&]pas=(\d+)/.exec(location.search);
    if (pasUrl) {
        partida.pas = Math.min(8, parseInt(pasUrl[1], 10));
        partida.nom = 'Professorat';
    }
}

pinta();

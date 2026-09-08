/**
 * Formulari de contrasenya d'una prova encadenada (prova inicial de curs).
 *
 * Cada pagina de prova mostra una imatge i, davall, aquest formulari: si la
 * contrasenya es la correcta, porta a la pagina de la prova seguent.
 *
 * Us:
 *     <div id="prova"></div>
 *     <script src="scripts/proves/create_prova.js"></script>
 *     <script>
 *         createProva({
 *             solucio: 'ALGORISME',
 *             seguent: 'activitats/activitats-inicials/prova-inicial-3eso/prova2.html'
 *         });
 *     </script>
 *
 * NO es cap mesura de seguretat: la contrasenya esta al HTML de la pagina,
 * igual que passa amb <vf-password>. Es una activitat de classe.
 */
function createProva(config) {
    const container = document.getElementById('prova');
    if (!container) {
        console.warn('createProva: falta el contenidor <div id="prova"></div>');
        return;
    }
    if (!config || !config.solucio || !config.seguent) {
        console.warn('createProva: calen les propietats "solucio" i "seguent"');
        return;
    }

    // Resolem la pagina seguent contra document.baseURI (el <base href> de la
    // pagina) i no contra la ruta actual: aixi la ruta s'escriu relativa a
    // l'arrel del lloc, igual que a la resta del web.
    const urlSeguent = new URL(config.seguent, document.baseURI).href;

    // <form> en lloc d'input + boto solts: la tecla Enter ja envia de manera
    // nativa, sense cap listener de teclat propi.
    const form = document.createElement('form');
    form.classList.add('vf-prova');

    const label = document.createElement('label');
    label.setAttribute('for', 'vf-prova-input');
    label.textContent = config.etiqueta || 'Escriu la contrasenya per passar a la prova següent:';
    form.appendChild(label);

    const input = document.createElement('input');
    input.type = 'password';
    input.id = 'vf-prova-input';
    input.setAttribute('autocomplete', 'off');
    input.placeholder = 'Contrasenya';
    form.appendChild(input);

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.classList.add('btn', 'btn-primary', 'btn-short');
    btn.textContent = 'Comprovar';
    form.appendChild(btn);

    // role="status" perque els lectors de pantalla anuncien el resultat sense
    // que l'usuari haja de tornar arrere a buscar-lo.
    const missatge = document.createElement('p');
    missatge.classList.add('vf-prova-msg');
    missatge.setAttribute('role', 'status');
    form.appendChild(missatge);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Comparacio tolerant (espais sobrants i majuscules/minuscules), com
        // ja fa l'escape room: l'objectiu es l'activitat, no teclejar exacte.
        const resposta = input.value.trim().toUpperCase();
        const correcta = String(config.solucio).trim().toUpperCase();

        if (resposta !== correcta) {
            missatge.classList.remove('vf-prova-ok');
            missatge.textContent = 'Contrasenya incorrecta. Torna-ho a provar.';
            input.value = '';
            input.focus();
            return;
        }

        missatge.classList.add('vf-prova-ok');
        missatge.textContent = config.textOk || 'Correcte! Passem a la prova següent...';
        input.disabled = true;
        btn.disabled = true;
        // Xicoteta espera perque done temps a llegir el missatge d'encert.
        setTimeout(() => { location.href = urlSeguent; }, 800);
    });

    container.appendChild(form);
}

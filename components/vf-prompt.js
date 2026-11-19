// vf-prompts: graella de targetes vf-prompt.
// vf-prompt: targeta amb títol, descripció breu i un botó que obri el
// contingut (normalment un o més vf-code amb el prompt) en una finestra
// modal (<dialog> natiu: Esc i clic fora la tanquen).
//
//   <vf-prompts>
//       <vf-prompt title="Ruleta de preguntes" desc="Per a 3r de primària.">
//           <vf-code language="plaintext">...</vf-code>
//       </vf-prompt>
//   </vf-prompts>
//
// Atributs de vf-prompt: title (obligatori), desc (admet el mini-llenguatge
// de processTextBoldAndLinks), label (text del botó, per defecte «Veure el
// prompt»), link (URL externa: afig un segon botó davall del de veure el
// prompt, que s'obri en pestanya nova), link-label (text d'eixe botó, per
// defecte «Prova l'activitat»), sticker (text curt, p. ex. «*», que es
// mostra com una xapa a dalt a la dreta de la targeta), styles, classes.

class VFPrompts extends VFElement {
    render() {
        this.classList.add('vf-prompts');
        processClasses(this, this.getAttribute('classes'));
        processStyles(this, this.getAttribute('styles'));
    }
}

class VFPrompt extends VFElement {
    render() {
        const title = this.getAttribute('title');
        if (!title) {
            console.warn('vf-prompt: falta l\'atribut "title"');
            return;
        }
        // L'atribut title faria eixir un tooltip natiu en tota la targeta.
        this.removeAttribute('title');
        this.dataset.title = title;

        const desc = this.getAttribute('desc') || '';
        const label = this.getAttribute('label') || 'Veure el prompt';

        // Contingut del modal: els nodes originals es mouen (no es
        // reserialitzen) perquè els vf-* de dins no es tornen a crear.
        const dialog = document.createElement('dialog');
        dialog.classList.add('vf-prompt-dialog');
        dialog.setAttribute('aria-label', title);

        const header = document.createElement('div');
        header.classList.add('vf-prompt-dialog-header');
        const h = document.createElement('h3');
        h.textContent = title;
        const close = document.createElement('button');
        close.type = 'button';
        close.classList.add('vf-icon-btn', 'vf-prompt-close');
        close.setAttribute('aria-label', 'Tanca');
        close.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
        close.addEventListener('click', () => dialog.close());
        header.append(h, close);

        const body = document.createElement('div');
        body.classList.add('vf-prompt-dialog-body');
        body.append(...this.childNodes);

        dialog.append(header, body);
        // Clic al fons (fora de la caixa) tanca el modal.
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
            }
        });

        // Targeta visible
        const card = document.createElement('div');
        card.classList.add('vf-prompt-card');

        const t = document.createElement('div');
        t.classList.add('vf-prompt-title');
        t.textContent = title;
        card.appendChild(t);

        if (desc) {
            const d = document.createElement('p');
            d.classList.add('vf-prompt-desc');
            d.innerHTML = processTextBoldAndLinks(desc);
            card.appendChild(d);
        }

        const open = document.createElement('button');
        open.type = 'button';
        open.classList.add('btn', 'btn-primary', 'btn-short', 'vf-prompt-open');
        open.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i> ';
        open.appendChild(document.createTextNode(label));
        open.addEventListener('click', () => {
            if (typeof dialog.showModal === 'function') {
                dialog.showModal();
            } else {
                dialog.setAttribute('open', '');
            }
        });
        card.appendChild(open);

        const link = this.getAttribute('link');
        if (link) {
            const a = document.createElement('a');
            a.href = link;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.classList.add('btn', 'btn-primary', 'btn-primary-inverse', 'btn-short', 'vf-prompt-link');
            a.innerHTML = '<i class="fas fa-external-link-alt" aria-hidden="true"></i> ';
            a.appendChild(document.createTextNode(this.getAttribute('link-label') || 'Prova l\'activitat'));
            card.appendChild(a);
        }

        const sticker = this.getAttribute('sticker');
        if (sticker) {
            const st = document.createElement('span');
            st.classList.add('vf-prompt-sticker');
            st.textContent = sticker;
            st.setAttribute('aria-hidden', 'true');
            card.appendChild(st);
        }

        processClasses(card, this.getAttribute('classes'));
        processStyles(card, this.getAttribute('styles'));

        this.innerHTML = '';
        this.append(card, dialog);
    }
}

customElements.define('vf-prompts', VFPrompts);
customElements.define('vf-prompt', VFPrompt);

class VFCard extends VFElement {

    render() {
        const link = this.getAttribute('link');
        const img = this.getAttribute('img');
        const alt = this.getAttribute('alt');
        // Text pla: el titol de la targeta es sempre curt, no cal admetre
        // HTML interior com a vf-text.
        const title = this.textContent.trim();

        // Sense link (o amb el link="None" que deixava el generador quan la
        // unitat encara no existix) la targeta no es un enllaç trencat cap a
        // /None: es mostra apagada, amb l'etiqueta "Pròximament".
        const hasLink = !!link && link !== 'None' && link !== '#';
        if (!img) {
            console.warn('vf-card: falta el atributo "img"');
            return;
        }

        this.classList.add('col');

        const a = document.createElement(hasLink ? 'a' : 'div');
        a.classList.add('vf-card-link');
        if (hasLink) {
            a.href = link;
            // Com vf-btn: `newtab` obri en pestanya nova. Els enllaços a un
            // altre lloc (ferramentes externes) s'hi obrin sempre.
            if (this.hasAttribute('newtab') || isExternalUrl(link)) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
        } else {
            a.classList.add('vf-card-disabled');
        }

        const image = document.createElement('img');
        image.src = img;
        // Si no hi ha alt explicit, usem el titol: es millor descripcio
        // que alt="" per a una miniatura que enllaça a eixe mateix
        // contingut (vegeu mejoras/2026_09_03_mejoras_esteticas.md, EA1).
        image.alt = alt || title;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.classList.add('vf-card-img');
        // Logotips i captures amb fons blanc: `contain` els mostra sencers
        // en lloc de retallar-los com una foto.
        if (this.hasAttribute('contain')) {
            image.classList.add('vf-card-img-contain');
        }

        const titleEl = document.createElement('span');
        titleEl.classList.add('vf-card-title');
        titleEl.textContent = title;

        // La imatge va dins d'un marc de proporcio fixa (16:10): amb
        // l'aspect-ratio directament a l'<img>, les imatges verticals
        // (logotips) feien la targeta mes alta que les seues veines.
        const media = document.createElement('span');
        media.classList.add('vf-card-media');
        media.appendChild(image);

        a.appendChild(media);
        a.appendChild(titleEl);
        if (!hasLink) {
            const soon = document.createElement('span');
            soon.classList.add('vf-badge', 'vf-card-soon');
            soon.textContent = 'Pròximament';
            a.appendChild(soon);
        }

        processClasses(this, this.getAttribute('classes'));
        processStyles(this, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(a);
    }

}

customElements.define('vf-card', VFCard);

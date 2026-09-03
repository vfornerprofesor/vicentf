class VFCard extends VFElement {

    render() {
        const link = this.getAttribute('link');
        const img = this.getAttribute('img');
        const alt = this.getAttribute('alt');
        // Text pla: el titol de la targeta es sempre curt, no cal admetre
        // HTML interior com a vf-text.
        const title = this.textContent.trim();

        if (!link) {
            console.warn('vf-card: falta el atributo "link"');
            return;
        }
        if (!img) {
            console.warn('vf-card: falta el atributo "img"');
            return;
        }

        this.classList.add('col');

        const a = document.createElement('a');
        a.href = link;
        a.classList.add('vf-card-link');

        const image = document.createElement('img');
        image.src = img;
        // Si no hi ha alt explicit, usem el titol: es millor descripcio
        // que alt="" per a una miniatura que enllaça a eixe mateix
        // contingut (vegeu mejoras/2026_09_03_mejoras_esteticas.md, EA1).
        image.alt = alt || title;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.classList.add('vf-card-img');

        const titleEl = document.createElement('span');
        titleEl.classList.add('vf-card-title');
        titleEl.textContent = title;

        a.appendChild(image);
        a.appendChild(titleEl);

        processClasses(this, this.getAttribute('classes'));
        processStyles(this, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(a);
    }

}

customElements.define('vf-card', VFCard);

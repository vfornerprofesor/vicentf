class VFTitle extends VFElement {
    render() {
        const level = parseInt(this.getAttribute('level')) || 1;
        const textTitle = this.textContent.trim();
        const textSubtitle = this.getAttribute('subtitle');
        const centered = this.hasAttribute('centered');

        if (!textTitle) {
            // Sense text no rep id: no ix a l'index ni es pot enllaçar amb
            // #hash. Sol passar per oblit (etiqueta buida), no te sentit
            // deixar-ho passar en silenci.
            console.warn('vf-title: no te text (buit o nomes espais); no rebra id ni apareixera a l\'index.');
        }

        let div_title = document.createElement('div');
        let title = null;
        let subtitle = null;
        if (level === 1) {
            div_title.classList.add('jumbotron');
            title = document.createElement('h1');
            title.classList.add('display-4');

            if (textSubtitle) {
                subtitle = document.createElement('p');
                subtitle.classList.add('lead');
            }
        } else {
            if (level == 2) {
                title = document.createElement('h2');
                title.classList.add('block_colored', 'block_h2');
            } else {
                if (level == 3) {
                    title = document.createElement('h3');
                    title.classList.add('block_black', 'block_h3');

                } else {
                    title = document.createElement('h4');
                }
            }

        }
        if (textTitle) {
            title.textContent = textTitle;
            title.id = this.getUniqueId(this.createValidId(textTitle));
        }
        if (subtitle && textSubtitle) {
            subtitle.textContent = textSubtitle;
        }
        title = processStyles(title, this.getAttribute('styles'));
        title = processClasses(title, this.getAttribute('classes'));

        if (level != 1) {
            // Marca el titol com a contenidor posicionat perque la icona de
            // copiar enllac (position:absolute) es col·loque dins del titol i
            // no a la cantonada del document.
            title.classList.add('vf-title-anchor');

            const url = new URL(window.location.href);
                url.hash = title.id;

            // La icona nomes decora el boto; el boto es qui rep el clic i el
            // focus de teclat. Abans tot el titol era clicable en silenci
            // (un clic accidental sobre el text copiava l'enllaç sense avis
            // ni manera d'activar-ho amb teclat).
            const iconGlyph = document.createElement('i');
            iconGlyph.classList.add('fas', 'fa-copy');
            iconGlyph.setAttribute('aria-hidden', 'true');

            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('vf-icon-copy', 'vf-icon-btn', 'vf-icon-copy-hide');
            button.setAttribute('aria-label', 'Copiar enllaç a aquest apartat');
            button.dataset.href = url.toString();
            button.id = title.id + '_icon';
            button.appendChild(iconGlyph);

            const copiedMsg = document.createElement('span');
            copiedMsg.classList.add('vf-title-copied');
            copiedMsg.textContent = 'Enllaç copiat!';
            copiedMsg.style.display = 'none';
            button.appendChild(copiedMsg);

            title.appendChild(button);

            title.addEventListener('mouseover', () => {
                button.classList.remove('vf-icon-copy-hide');
            });

            title.addEventListener('mouseout', () => {
                button.classList.add('vf-icon-copy-hide');
            });

            button.addEventListener('click', (event) => {
                // Evitem que el clic "puge" fins al titol (per si algun dia
                // torna a tindre algun altre listener) i que el boto siga
                // l'unica cosa que reacciona al clic.
                event.stopPropagation();
                navigator.clipboard.writeText(button.dataset.href);

                copiedMsg.style.display = 'inline';
                copiedMsg.style.opacity = '1';
                setTimeout(() => {
                    copiedMsg.style.transition = 'opacity 1s';
                    copiedMsg.style.opacity = '0';
                    setTimeout(() => copiedMsg.style.display = 'none', 1000);
                }, 500);
            });

        }

        if (centered) {
            title.classList.add('center');
        }

        div_title.appendChild(title);
        if (subtitle) {
            if (centered) {
                subtitle.classList.add('center');
            }
            div_title.appendChild(subtitle);
        }
        this.innerHTML = '';
        this.appendChild(div_title);
    }

    createValidId(text) {
        // Crear ID mes robust i llegible: separem lletra+accent (NFD) i
        // llevem les marques d'accent, aixi "Intel·ligència" dona
        // "intelligencia" en lloc de "intel-lig-ncia". El punt volat (l·l)
        // tambe es lleva, no es un separador de paraules.
        //
        // ATENCIO: canviar aquest algorisme canvia els id de TOTS els
        // titols existents i, per tant, trenca qualsevol enllaç extern ja
        // compartit cap a un #apartat concret d'una pagina.
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\u00b7/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    getUniqueId(baseId) {
        // Si dos titols de la mateixa pagina generen el mateix slug (mateix
        // text, o textos diferents que es normalitzen igual), l'index i els
        // enllacos #hash sempre anaven al primer. Afegim un sufix -2, -3...
        // al segon i seguents perque cada id siga unic al document.
        if (!baseId || !document.getElementById(baseId)) {
            return baseId;
        }
        let suffix = 2;
        let candidate = baseId + '-' + suffix;
        while (document.getElementById(candidate)) {
            suffix++;
            candidate = baseId + '-' + suffix;
        }
        return candidate;
    }

}

customElements.define('vf-title', VFTitle);

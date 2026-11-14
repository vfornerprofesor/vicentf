class VFImage extends VFElement {
    // El primer render es retarda amb un setTimeout(0) (vegeu vf-element.js).
    static deferRender = true;

    render() {

        const link = this.getAttribute('link');
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt') || '';

        if (!src) {
            console.warn('vf-img: falta el atributo "src"');
            return;
        }

        // EA1: avisem quan falta l'atribut sencer (no quan es alt=""
        // explicit, que es la manera correcta de marcar una imatge
        // purament decorativa).
        if (!this.hasAttribute('alt')) {
            console.warn('vf-img: falta el atributo "alt" (' + src + '). Si la imatge es decorativa, posa alt="" explicit.');
        }
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        // Carrega diferida: moltes pagines (graelles d'unitats, cursos...)
        // tenen moltes imatges de colp; aixi el navegador nomes descarrega
        // les que arriben a estar a prop del viewport.
        img.loading = 'lazy';
        img.decoding = 'async';
        img.classList.add('my-3', 'center', 'vf-img');
        
        processClasses(img, this.getAttribute('classes'));
        processStyles(img, this.getAttribute('styles'));
        // styles="max-width:400px" (o width fixa) en una pantalla mes
        // estreta desbordava: el limit en px passa a ser min(px, 100%).
        for (const prop of ['maxWidth', 'width']) {
            const v = img.style[prop];
            if (v && /^\d+(\.\d+)?px$/.test(v)) {
                img.style[prop] = 'min(' + v + ', 100%)';
            }
        }

        // Node que es substituix si la imatge falla: la imatge o el seu <a>.
        let holder = img;

        // Imatge que no existix (captura encara pendent, ruta mal escrita):
        // en lloc de la icona d'imatge trencada del navegador, un requadre
        // discret amb el text alternatiu.
        img.addEventListener('error', () => {
            const ph = document.createElement('div');
            ph.classList.add('vf-img-missing');
            const icon = document.createElement('i');
            icon.classList.add('far', 'fa-image');
            icon.setAttribute('aria-hidden', 'true');
            const txt = document.createElement('span');
            txt.textContent = alt || 'Imatge no disponible';
            ph.append(icon, txt);
            holder.replaceWith(ph);
            console.warn('vf-img: no s\'ha pogut carregar ' + src);
        }, { once: true });

        if (link && link !== "") {
            const a = document.createElement('a');
            a.href = link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.appendChild(img);
            holder = a;
            this.appendChild(a);
        } else {
            this.appendChild(img);
        }
        
       
    }


}

customElements.define('vf-img', VFImage);


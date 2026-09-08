// Renderitza en viu el codi HTML que se li passa dins, al costat (o davall)
// del vf-code corresponent. Pensat per a la unitat de HTML+CSS: l'alumnat
// veu el codi i el resultat sense haver d'obrir res.
//
// El contingut es llig amb this.textContent, NO this.innerHTML: el parser
// ja ha decodificat les entitats (&lt; -> <) en construir el node de text,
// aixi que textContent dona el HTML real, llest per a servir com a
// document complet dins de l'iframe (via srcdoc). vf-code, en canvi, fa
// servir innerHTML perque vol el HTML tornar a escapar (per a mostrar-lo
// com a text, no per a executar-lo).
//
// sandbox="allow-same-origin" i prou: sense allow-scripts, cap <script>
// del codi d'exemple s'executa mai (l'alumnat pot enganxar-hi el que
// vullga). allow-same-origin es nomes per a poder llegir contentDocument
// des d'ací i ajustar l'alcada de l'iframe al contingut real.
class VFPreview extends VFElement {

    render() {
        const html = this.textContent.trim();
        this.innerHTML = '';

        if (!html) {
            console.warn('vf-preview: no hi ha contingut per a renderitzar');
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.classList.add('vf-preview');

        const label = document.createElement('div');
        label.classList.add('vf-preview-label');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-eye');
        icon.setAttribute('aria-hidden', 'true');
        label.appendChild(icon);
        label.appendChild(document.createTextNode(this.getAttribute('label') || 'Result in the browser'));
        wrapper.appendChild(label);

        const frame = document.createElement('iframe');
        frame.classList.add('vf-preview-frame');
        frame.setAttribute('sandbox', 'allow-same-origin');
        frame.title = this.getAttribute('frame-title') || 'Live preview of the code above';
        frame.srcdoc = html;
        frame.addEventListener('load', () => {
            // Alcada real del contingut, no una alcada fixa a ull. Si el
            // sandbox bloqueja la lectura (no hauria de passar amb
            // allow-same-origin), es queda amb l'alcada minima del CSS.
            try {
                const doc = frame.contentDocument;
                const h = doc.documentElement.scrollHeight;
                if (h > 0) {
                    frame.style.height = h + 'px';
                }
            } catch (err) {
                console.warn('vf-preview: no se ha pogut ajustar l\'alcada', err);
            }
        });

        wrapper.appendChild(frame);

        processClasses(wrapper, this.getAttribute('classes'));
        processStyles(wrapper, this.getAttribute('styles'));

        this.appendChild(wrapper);
    }

}

customElements.define('vf-preview', VFPreview);

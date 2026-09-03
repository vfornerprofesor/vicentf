class VFText extends VFElement {
    // El primer render es retarda amb un setTimeout(0) (vegeu vf-element.js).
    static deferRender = true;

    render() {
        // innerHTML i no textContent: aixi es respecta el HTML que s'haja
        // escrit dins (<b>, <i>, <br>...) i les entitats &lt; &gt; no es
        // reinterpreten com a etiquetes.
        const text = this.innerHTML.trim();

        const text_processed = processTextBoldAndLinks(text);
        let p = document.createElement('p');
        p = processStyles(p, this.getAttribute('styles'));
        p = processClasses(p, this.getAttribute('classes'));
        p.innerHTML = text_processed;
        this.innerHTML = '';
        this.appendChild(p);
    }


}

customElements.define('vf-text', VFText);

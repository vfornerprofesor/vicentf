class VFText extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const text = this.getAttribute('text') || '- Sense text -';
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

class VFText extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            this.render();
        }, 0);
    }

    render() {
        const text = this.textContent.trim();

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

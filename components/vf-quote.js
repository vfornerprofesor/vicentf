class VFQuote extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        console.log("vf-quote render");
        const text = this.textContent.trim();
        //const text_without_spaces = text.replace(/\s+/g, ' ').trim();
        const text_processed = processTextBoldAndLinks(text);

        let blockquote = document.createElement('blockquote');
        blockquote = processStyles(blockquote, this.getAttribute('styles'));
        blockquote = processClasses(blockquote, this.getAttribute('classes'));
        this.innerHTML = "";
        blockquote.innerHTML = text_processed;
        this.appendChild(blockquote);
    }


}

customElements.define('vf-quote', VFQuote);

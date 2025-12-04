class VFQuote extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const text = this.textContent.trim();
        const text_processed = processTextBoldAndLinks(text);
        const blockquote = document.createElement('blockquote');
        blockquote = processStyles(blockquote, this.getAttribute('styles'));
        blockquote = processClasses(blockquote, this.getAttribute('classes'));
        
        blockquote.innerHTML = text_processed;
        this.innerHTML = "";
        this.appendChild(blockquote);
    }
}
customElements.define('vf-quote', VFQuote);
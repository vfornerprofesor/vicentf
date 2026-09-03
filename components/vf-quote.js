class VFQuote extends VFElement {
    render() {
        // Vegeu vf-text: innerHTML per a no perdre el HTML interior.
        const text = this.innerHTML.trim();
        const text_processed = processTextBoldAndLinks(text);
        let blockquote = document.createElement('blockquote');
        blockquote = processStyles(blockquote, this.getAttribute('styles'));
        blockquote = processClasses(blockquote, this.getAttribute('classes'));
        
        blockquote.innerHTML = text_processed;
        this.innerHTML = "";
        this.appendChild(blockquote);
    }
}
customElements.define('vf-quote', VFQuote);
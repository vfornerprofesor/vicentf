class VFFrame extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
      const link = this.getAttribute('link');
        if (!link) {
            console.warn('vf-frame: falta el atributo "link"');
            return;
        }
        
        const frame = document.createElement('iframe');
        frame.src = link;
        frame.title = this.getAttribute('title') || 'Contenido incrustado';
        
        processClasses(frame, this.getAttribute('classes'));
        processStyles(frame, this.getAttribute('styles'));
        
        this.appendChild(frame);
    }


}

customElements.define('vf-frame', VFFrame);

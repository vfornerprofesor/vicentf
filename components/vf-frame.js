class VFFrame extends VFElement {

    render() {
      const link = this.getAttribute('link');
        if (!link) {
            console.warn('vf-frame: falta el atributo "link"');
            return;
        }
        
        const frame = document.createElement('iframe');
        frame.src = link;
        // frame-title en lloc de reusar title=: title es un atribut global
        // de HTML, aixi que si es posava directament sobre <vf-frame> el
        // navegador tambe mostrava un rotol flotant no volgut en passar-hi
        // el ratoli per damunt. Es manté title= com a alternativa per si ja
        // s'havia fet servir aixi en algun lloc (avui, cap).
        frame.title = this.getAttribute('frame-title') || this.getAttribute('title') || 'Contingut incrustat';
        // Carrega diferida: els iframes (LearningApps, Genially, Scratch,
        // YouTube...) son el mes pesat del lloc; que no baixen fins que
        // s'apropen al viewport.
        frame.loading = 'lazy';
        // Alguns embeds (Scratch, video) ofereixen el seu propi boto de
        // pantalla completa; sense aquest atribut el navegador el bloqueja.
        frame.allowFullscreen = true;
        
        processClasses(frame, this.getAttribute('classes'));
        processStyles(frame, this.getAttribute('styles'));
        
        this.appendChild(frame);
    }


}

customElements.define('vf-frame', VFFrame);

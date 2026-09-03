class VFBtn extends VFElement {

    render() {
        // Si no hay link, usar un <button> en lugar de <a>
        const hasLink = this.getAttribute('link');
        let element;
        
        if (hasLink) {
            element = document.createElement('a');
            element.href = hasLink;
            if (this.hasAttribute('newtab')) {
                element.target = "_blank";
                element.rel = "noopener noreferrer"; // Seguridad
            }
            if (this.hasAttribute('download')) {
                element.setAttribute('download', '');
            }
        } else {
            element = document.createElement('button');
            element.type = "button";
        }

        element.classList.add('btn', 'btn-primary');

        if (this.hasAttribute('inverse')) {
            element.classList.add('btn-primary-inverse');
        }

        element = processClasses(element, this.getAttribute('classes'));
        element = processStyles(element, this.getAttribute('styles'));
        // Movem els nodes en lloc de copiar nomes el text: aixi es pot
        // posar una icona o <b>/<i> dins del boto, no nomes text pla.
        element.append(...this.childNodes);

        this.innerHTML = '';
        this.appendChild(element);
    }


}

customElements.define('vf-btn', VFBtn);

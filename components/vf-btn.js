class VFBtn extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }


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
        element.textContent = this.textContent.trim();
        
        this.innerHTML = '';
        this.appendChild(element);
    }


}

customElements.define('vf-btn', VFBtn);

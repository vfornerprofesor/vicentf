class VFHr extends HTMLElement {

    constructor() {
        super();
        this.ordered = false;
    }

    connectedCallback() {
        this.render();
    }

    render() {
       const hr = document.createElement('hr');
        hr.classList.add('vf-hr');
        
        if (this.hasAttribute('inverse')) {
            hr.classList.add('vf-hr-inverse');
        }
        
        this.appendChild(hr);
    }


}

customElements.define('vf-hr', VFHr);

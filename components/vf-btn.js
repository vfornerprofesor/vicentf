class VFBtn extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let a = document.createElement('a');
        a.href = this.getAttribute('link');
        a.classList.add('btn');
        a.classList.add('btn-primary');

        if(this.hasAttribute('inverse')) {
            a.classList.add('btn-primary-inverse');
        }

        a = processClasses(a, this.getAttribute('classes'));
        a = processStyles(a, this.getAttribute('styles'));
        a.textContent = this.textContent.trim();
        this.innerHTML = '';

        this.appendChild(a);
    }


}

customElements.define('vf-btn', VFBtn);

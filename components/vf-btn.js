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

        if(this.getAttribute('inverse') && this.getAttribute('inverse') == 'true') {
            a.classList.add('btn-primary-inverse');
        }

        a.textContent = this.getAttribute('text');


        this.appendChild(a);
    }


}

customElements.define('vf-btn', VFBtn);

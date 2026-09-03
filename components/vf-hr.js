class VFHr extends VFElement {

    render() {
       const hr = document.createElement('hr');
        hr.classList.add('vf-hr');

        if (this.hasAttribute('inverse')) {
            hr.classList.add('vf-hr-inverse');
        }

        processClasses(hr, this.getAttribute('classes'));
        processStyles(hr, this.getAttribute('styles'));

        this.appendChild(hr);
    }


}

customElements.define('vf-hr', VFHr);

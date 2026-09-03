class VFBadge extends VFElement {

    render() {
        const text = this.textContent.trim();

        const span = document.createElement('span');
        span.classList.add('vf-badge');
        span.textContent = text;

        processClasses(span, this.getAttribute('classes'));
        processStyles(span, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(span);
    }

}

customElements.define('vf-badge', VFBadge);

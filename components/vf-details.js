class VFDetails extends VFElement {

    render() {
        const summaryText = this.getAttribute('summary') || 'Mostra més';

        const details = document.createElement('details');
        details.classList.add('vf-details');

        const summary = document.createElement('summary');
        summary.textContent = summaryText;

        const body = document.createElement('div');
        body.classList.add('vf-details-body');
        // Movem els nodes originals (no els reserialitzem): aixi no es
        // destrueixen ni es tornen a crear els components vf-* que hi
        // haja a dins.
        body.append(...this.childNodes);

        details.appendChild(summary);
        details.appendChild(body);

        processClasses(details, this.getAttribute('classes'));
        processStyles(details, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(details);
    }

}

customElements.define('vf-details', VFDetails);

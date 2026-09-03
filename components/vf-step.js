class VFStep extends VFElement {

    render() {
        const title = this.getAttribute('title') || '';

        // El numero es la posicio entre els germans <vf-step> del mateix
        // <vf-steps>, no un comptador global: aixi dos <vf-steps>
        // independents a la mateixa pagina tornen a començar per 1.
        const parent = this.parentElement;
        const siblings = parent
            ? Array.from(parent.children).filter((c) => c.tagName === 'VF-STEP')
            : [this];
        const number = siblings.indexOf(this) + 1;

        const wrapper = document.createElement('div');
        wrapper.classList.add('vf-step');

        const marker = document.createElement('div');
        marker.classList.add('vf-step-marker');
        marker.textContent = number > 0 ? number : '';

        const body = document.createElement('div');
        body.classList.add('vf-step-body');

        if (title) {
            const titleEl = document.createElement('p');
            titleEl.classList.add('vf-step-title');
            titleEl.textContent = title;
            body.appendChild(titleEl);
        }

        // Movem els nodes originals (no els reserialitzem): aixi no es
        // destrueixen components vf-* que hi haja a dins (vf-img, vf-code...).
        body.append(...this.childNodes);

        wrapper.appendChild(marker);
        wrapper.appendChild(body);

        processClasses(wrapper, this.getAttribute('classes'));
        processStyles(wrapper, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(wrapper);
    }

}

customElements.define('vf-step', VFStep);

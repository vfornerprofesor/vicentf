class VFCallout extends VFElement {

    static ICONS = {
        atencio: 'fa-exclamation-triangle',
        consell: 'fa-lightbulb',
        exercici: 'fa-pencil-alt',
        recorda: 'fa-thumbtack'
    };

    render() {
        const type = this.getAttribute('type') || 'atencio';
        const icon = VFCallout.ICONS[type] || VFCallout.ICONS.atencio;
        // Igual que vf-quote: innerHTML per a no perdre el HTML interior,
        // i passat pel mini-llenguatge (*negreta*, [enllaç](url)...).
        const text = this.innerHTML.trim();
        const text_processed = processTextBoldAndLinks(text);

        const wrapper = document.createElement('div');
        wrapper.classList.add('vf-callout', 'vf-callout-' + type);

        const iconEl = document.createElement('i');
        iconEl.classList.add('fas', icon);
        iconEl.setAttribute('aria-hidden', 'true');

        const body = document.createElement('div');
        body.classList.add('vf-callout-body');
        body.innerHTML = text_processed;

        wrapper.appendChild(iconEl);
        wrapper.appendChild(body);

        processClasses(wrapper, this.getAttribute('classes'));
        processStyles(wrapper, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(wrapper);
    }

}

customElements.define('vf-callout', VFCallout);

class VFTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const level = parseInt(this.getAttribute('level')) || 1;
        const textTitle = this.textContent.trim();
        const textSubtitle = this.getAttribute('subtitle');
        const centered = this.hasAttribute('centered');

        let div_title = document.createElement('div');
        let title = null;
        let subtitle = null;
        if (level === 1) {
            div_title.classList.add('jumbotron');
            title = document.createElement('h1');
            title.classList.add('display-4');

            if (textSubtitle) {
                subtitle = document.createElement('p');
                subtitle.classList.add('lead');
            }
        } else {
            if (level == 2) {
                title = document.createElement('h2');
                title.classList.add('block_colored', 'block_h2');
            } else {
                if (level == 3) {
                    title = document.createElement('h3');
                    title.classList.add('block_black', 'block_h3');

                } else {
                    title = document.createElement('h4');
                }
            }

        }
        if (textTitle) {
            title.textContent = textTitle;
            title.id = this.createValidId(textTitle);
        }
        if (subtitle && textSubtitle) {
            subtitle.textContent = textSubtitle;
        }
        title = processStyles(title, this.getAttribute('styles'));
        title = processClasses(title, this.getAttribute('classes'));

        if (level != 1) {
            const url = new URL(window.location.href);
                url.hash = title.id;
            const icon = document.createElement('i');
            icon.setAttribute('href', url.toString());
            icon.classList.add('fas');
            icon.classList.add('fa-copy');
            icon.classList.add('vf-icon-copy');
            icon.classList.add('vf-icon-copy-hide');
            icon.id = title.id + '_icon';

            title.appendChild(icon);

            title.addEventListener('mouseover', () => {
                title.children[0].classList.remove('vf-icon-copy-hide');
            });

            title.addEventListener('mouseout', () => {
                title.children[0].classList.add('vf-icon-copy-hide');
            });

            title.addEventListener('click', () => {
                navigator.clipboard.writeText(title.children[0].getAttribute('href'));
            });

        }

        if (centered) {
            title.classList.add('center');
        }

        div_title.appendChild(title);
        if (subtitle) {
            if (centered) {
                subtitle.classList.add('center');
            }
            div_title.appendChild(subtitle);
        }
        this.innerHTML = '';
        this.appendChild(div_title);
    }

    createValidId(text) {
        // Crear ID más robusto
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

}

customElements.define('vf-title', VFTitle);

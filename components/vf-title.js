class VFTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        let level = this.getAttribute('level');
        if (level == null) level = 1;
        let textTitle = this.textContent.trim();
        let textSubtitle = this.getAttribute('subtitle');

        let centered = false;
        if(this.hasAttribute('centered')) {
            centered = true;
        }

        let div_title = document.createElement('div');
        let title = null;
        let subtitle = null;
        if (level == 1) {
            div_title.classList.add('jumbotron');
            title = document.createElement('h1');
            title.classList.add('display-4');

            if(textSubtitle) {
                subtitle = document.createElement('p');
                subtitle.classList.add('lead');
            }
        } else {
            if (level == 2) {
                title = document.createElement('h2');
                title.classList.add('block_colored');
                title.classList.add('block_h2');

            } else {
                if (level == 3) {
                    title = document.createElement('h3');
                    title.classList.add('block_black');
                    title.classList.add('block_h3');
    
                } else {
                    title = document.createElement('h4');
                }
            }

        }
        if(textTitle) {
            title.textContent = textTitle;
        }
        if(subtitle && textSubtitle) {
            subtitle.textContent = textSubtitle;
        }
        title = processStyles(title, this.getAttribute('styles'));
        title = processClasses(title, this.getAttribute('classes'));

        if(centered) {
            title.classList.add('center');
        }

        div_title.appendChild(title);
        if(subtitle) {
            if(centered) {
                subtitle.classList.add('center');
            }
            div_title.appendChild(subtitle);
        }
        this.innerHTML = '';
        this.appendChild(div_title);
    }
}

customElements.define('vf-title', VFTitle);

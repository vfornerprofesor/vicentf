class VFImage extends HTMLElement {

    constructor() {
        super();
        this.link = "";
    }

    connectedCallback() {
        setTimeout(() => {
            this.render();
        }, 0);
    }

    render() {

        const link = this.getAttribute('link');
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt') || '';
        
        if (!src) {
            console.warn('vf-img: falta el atributo "src"');
            return;
        }
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.classList.add('my-3', 'center', 'vf-img');
        
        processClasses(img, this.getAttribute('classes'));
        processStyles(img, this.getAttribute('styles'));
        
        if (link && link !== "") {
            const a = document.createElement('a');
            a.href = link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.appendChild(img);
            this.appendChild(a);
        } else {
            this.appendChild(img);
        }
        
       
    }


}

customElements.define('vf-img', VFImage);


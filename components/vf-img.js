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
      let img = document.createElement('img');
      img.src = this.getAttribute('link');
      img = processClasses(img, this.getAttribute('classes'));
      img = processStyles(img, this.getAttribute('styles'));
      this.appendChild(img);
    }


}

customElements.define('vf-img', VFImage);

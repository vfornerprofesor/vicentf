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
        
        let a;
        if(this.getAttribute('link') && this.getAttribute('link') != "") {
            a = document.createElement('a');
            a.href = this.getAttribute('link');
            a.target = "_blank";
        };

      let img = document.createElement('img');
      img.src = this.getAttribute('src');
      img = processClasses(img, this.getAttribute('classes'));
      img = processStyles(img, this.getAttribute('styles'));
      img.classList.add("img-fluid");
      img.classList.add("my-3");
      img.classList.add("center");

      if(a) {
        a.appendChild(img);
        this.appendChild(a);
      } else {
          this.appendChild(img);
      }
    }


}

customElements.define('vf-img', VFImage);

//classes: img-scale-hover
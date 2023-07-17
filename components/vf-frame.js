class VFFrame extends HTMLElement {

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
      let frame = document.createElement('iframe');
      frame.src = this.getAttribute('link');
      frame = processClasses(frame, this.getAttribute('classes'));
      frame = processStyles(frame, this.getAttribute('styles'));
      this.appendChild(frame);
    }


}

customElements.define('vf-frame', VFFrame);

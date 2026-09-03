class VFContent extends VFElement {
    render() {
      let div = document.createElement('div');
      div.classList.add('block');

      if(this.hasAttribute('colored')) {
        div.classList.add('block_color');
      }
      div = processClasses(div, this.getAttribute('classes'));

      // Movem els nodes originals (no els reserialitzem amb innerHTML): aixi
      // no es destrueixen ni es tornen a crear els components que ja hi haja
      // a dins (vf-list, vf-title...), i no es dupliquen si ja havien
      // renderitzat abans que vf-content s'executara.
      div.append(...this.childNodes);
      this.innerHTML = '';
      this.appendChild(div);
    }

  }
  
  customElements.define('vf-content', VFContent);
  
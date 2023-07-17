class VFContent extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      let div = document.createElement('div');
      div.classList.add('block');

      if(this.getAttribute('colored') && this.getAttribute('colored') == 'true') {
        div.classList.add('block_color');
      }
      
      div.innerHTML = this.innerHTML;
      this.innerHTML = '';
      this.appendChild(div);
    }
  
  }
  
  customElements.define('vf-content', VFContent);
  
class VFRow extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('row');
    if (this.getAttribute('centered') && this.getAttribute('centered') === 'true') {
      this.classList.add('row-center');
    }

  }

}

customElements.define('vf-row', VFRow);

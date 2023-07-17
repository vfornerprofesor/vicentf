class VFRow extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('row');
  }

}

customElements.define('vf-row', VFRow);

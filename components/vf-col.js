class VFCol extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.classList.add('col');
  }

}

customElements.define('vf-col', VFCol);

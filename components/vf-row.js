class VFRow extends VFElement {
  render() {
    this.classList.add('row');
    if (this.hasAttribute('centered')) {
      this.classList.add('row-center');
    }

  }

}

customElements.define('vf-row', VFRow);

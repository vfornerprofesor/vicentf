class VFCol extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = this.innerHTML;
    div = processClasses(div, this.getAttribute('classes'));
    div = processStyles(div, this.getAttribute('styles'));
    this.innerHTML = '';
    this.appendChild(div);
    //this.classList.add('col');
  }

}

customElements.define('vf-col', VFCol);

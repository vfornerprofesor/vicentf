class VFCol extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.classList.add('col');
    
    if (this.hasAttribute('link')) {
      this.style.cursor = 'pointer';
      this.addEventListener('click', () => {
        const link = this.getAttribute('link');
        const newWindow = window.open(link, "_blank");
        if (newWindow) {
          newWindow.opener = null; // Seguridad
        }
      });
    }
    
    processClasses(this, this.getAttribute('classes'));
    processStyles(this, this.getAttribute('styles'));
  }
}
customElements.define('vf-col', VFCol);

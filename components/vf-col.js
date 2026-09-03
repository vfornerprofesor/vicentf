class VFCol extends VFElement {
  render() {
    this.classList.add('col');

    if (this.hasAttribute('link')) {
      // Un <a> real en lloc d'un listener de click sobre l'element: aixi es
      // pot obrir amb Ctrl+clic, clic central, menu contextual ("Obrir en
      // pestanya nova"...), es pot arribar per teclat, i el navegador
      // mostra la URL de destinacio en passar-hi el ratolí per damunt.
      const a = document.createElement('a');
      a.href = this.getAttribute('link');
      // Com vf-btn: per defecte navega a la mateixa pestanya (la majoria de
      // vf-col enllacen a altres seccions del mateix lloc, com les targetes
      // d'unitats/index.html); amb l'atribut newtab s'obri en una de nova.
      if (this.hasAttribute('newtab')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.classList.add('vf-col-link');
      a.append(...this.childNodes);
      this.appendChild(a);
    }

    processClasses(this, this.getAttribute('classes'));
    processStyles(this, this.getAttribute('styles'));
  }
}
customElements.define('vf-col', VFCol);

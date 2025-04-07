class VFCol extends HTMLElement {
  constructor() {
    super();
    this.rendered = false;
  }

  connectedCallback() {
    this.render();
    /*if (!this.hasAttribute('data-rendered')) {
      this.setAttribute('data-rendered', 'true');
    }*/
  }
  render() {
    /*
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = this.innerHTML;
    div = processClasses(div, this.getAttribute('classes'));
    div = processStyles(div, this.getAttribute('styles'));
    this.innerHTML = '';
    this.appendChild(div);
    console.log(div.innerHTML);
    debugger;
    //this.classList.add('col');
    */
    this.classList.add('col');

    if (this.hasAttribute('link')) {
      this.onclick = function () {
        window.open(this.getAttribute('link'), "_blank");
      };
    }

    let a = this;
    a = processClasses(a, this.getAttribute('classes'));
    a = processStyles(a, this.getAttribute('styles'));
   
  }

}

customElements.define('vf-col', VFCol);

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

      // Taules escrites sense el seu <div class="table-responsive">: en
      // mobil eixamplaven la pagina sencera. Les emboliquem ací perque
      // facen scroll horitzontal dins del bloc.
      for (const table of div.querySelectorAll('table')) {
        if (table.closest('.table-responsive, vf-code, vf-preview, pre')) {
          continue;
        }
        const wrap = document.createElement('div');
        wrap.classList.add('table-responsive');
        table.replaceWith(wrap);
        wrap.appendChild(table);
      }

      this.innerHTML = '';
      this.appendChild(div);
    }

  }
  
  customElements.define('vf-content', VFContent);
  
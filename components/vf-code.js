class VFCode extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            this.render();
        }, 0);
    }

    render() {
        let pre = document.createElement('pre');
        pre.classList.add('pre_code');
        let code = document.createElement('code');
        code.classList.add('code_block');
 
        if(this.getAttribute('language')) {
            code.classList.add('language-'+this.getAttribute('language'));
        }
        
        const lines = this.innerHTML.trim().split('\n');

        let totalSpaces = this.innerHTML.split('\n')[1].match(/^\s*/)[0].length;

        let newLines = '';
        for(let l of lines) {
            if(l.substring(0, totalSpaces) === ' '.repeat(totalSpaces)) {
                l = l.substring(totalSpaces);
            }
            newLines += l + '\n';
        }

        code.innerHTML = newLines;
        pre.appendChild(code);
        this.innerHTML = '';
        this.appendChild(pre);

        //PINTAR EL CÓDIGO
        hljs.highlightAll();
    }


}

customElements.define('vf-code', VFCode);
// TO USE HTML CODE GO TO /html-helper.html
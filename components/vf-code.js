class VFCode extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let pre = document.createElement('pre');
        pre.classList.add('pre_code');
        let code = document.createElement('code');
        code.classList.add('code_block');

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
    }


}

customElements.define('vf-code', VFCode);

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


        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-copy', 'vf-icon');
        icon.addEventListener('click', () => {
            const tempElement = document.createElement('textarea');
            tempElement.innerHTML = newLines; // Decodifica entidades HTML en texto
            document.body.appendChild(tempElement);
            tempElement.select();
            document.execCommand('copy'); // Copia el texto seleccionado
            document.body.removeChild(tempElement);

            // Mostrar el mensaje y configurar el desvanecimiento
            message.style.display = 'block';
            message.style.opacity = '1';
            
            setTimeout(() => {
                message.style.transition = 'opacity 1s';
                message.style.opacity = '0';
            }, 500);

            setTimeout(() => {
                message.style.display = 'none';
            }, 1000);
        });

        let message = document.createElement('p');
        message.textContent = 'Copiat!';
        message.classList.add('code_copied');
        message.style.display = 'none';

        this.appendChild(icon);
        this.appendChild(message);
        //PINTAR EL CÓDIGO
        hljs.highlightAll();
    }


}

customElements.define('vf-code', VFCode);
// TO USE HTML CODE GO TO /html-helper.html
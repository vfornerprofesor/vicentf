class VFCode extends VFElement {

    render() {
        let pre = document.createElement('pre');
        pre.classList.add('pre_code');
        let code = document.createElement('code');
        code.classList.add('code_block');
 
        if(this.getAttribute('language')) {
            code.classList.add('language-'+this.getAttribute('language'));
        }
        const lines = this.innerHTML.trim().split('\n');

        // Indentacio a llevar de cada linia: la de la segona linia del bloc.
        // Si el codi s'ha escrit en una sola linia no hi ha segona linia; abans
        // aixo llancava TypeError i el bloc no es renderitzava.
        const secondLine = this.innerHTML.split('\n')[1];
        const totalSpaces = secondLine ? secondLine.match(/^\s*/)[0].length : 0;

        let newLines = '';
        for(let l of lines) {
            if(totalSpaces > 0 && l.substring(0, totalSpaces) === ' '.repeat(totalSpaces)) {
                l = l.substring(totalSpaces);
            }
            newLines += l + '\n';
        }

        code.innerHTML = newLines;
        pre.appendChild(code);
        this.innerHTML = '';
        this.appendChild(pre);


        // Icona dins d'un boto real: activable amb teclat i anunciada per
        // lectors de pantalla (abans era un <i> nu, nomes clicable amb ratoli).
        let iconGlyph = document.createElement('i');
        iconGlyph.classList.add('fas', 'fa-copy');
        iconGlyph.setAttribute('aria-hidden', 'true');

        let icon = document.createElement('button');
        icon.type = 'button';
        icon.classList.add('vf-icon', 'vf-icon-btn');
        icon.setAttribute('aria-label', 'Copiar codi');
        icon.appendChild(iconGlyph);
        icon.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(newLines);
                message.style.display = 'block';
                message.style.opacity = '1';
                
                setTimeout(() => {
                    message.style.transition = 'opacity 1s';
                    message.style.opacity = '0';
                    setTimeout(() => message.style.display = 'none', 1000);
                }, 500);
            } catch (err) {
                console.error('Error al copiar:', err);
            }
        });

        let message = document.createElement('p');
        message.textContent = 'Copiat!';
        message.classList.add('code_copied');
        message.style.display = 'none';

        this.appendChild(icon);
        this.appendChild(message);
        // Ressaltem nomes aquest bloc, no hljs.highlightAll(): highlightAll()
        // recorre TOT el document cada vegada, i amb N blocs de codi a la
        // pagina aixo era treball O(N) per bloc (O(N²) en total) i generava
        // avisos "element already highlighted" a la consola.
        if (typeof hljs !== 'undefined') {
            hljs.highlightElement(code);
        }
    }


}

customElements.define('vf-code', VFCode);
// TO USE HTML CODE GO TO /html-helper.html
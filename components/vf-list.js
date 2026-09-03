class VFList extends VFElement {
    render() {
        const ordered = this.hasAttribute('ordered');
        const listElement = ordered ?
            document.createElement('ol') :
            document.createElement('ul');

        processClasses(listElement, this.getAttribute('classes'));
        processStyles(listElement, this.getAttribute('styles'));

        // Movem els <li> originals en lloc de reserialitzar-los amb innerHTML,
        // per no destruir ni duplicar components que ja hi haja a dins.
        listElement.append(...this.childNodes);

        // Si no s'ha escrit cap <li> (nomes text solt, una linia per
        // element), en generem un per linia no buida. Nomes actua quan no
        // hi ha CAP <li>: cap llista existent que ja escriga els <li> a ma
        // es veu afectada per aixo.
        if (!listElement.querySelector('li')) {
            const lines = listElement.textContent
                .split('\n')
                .map(l => l.trim())
                .filter(l => l.length > 0);
            listElement.innerHTML = '';
            for (const line of lines) {
                const li = document.createElement('li');
                li.textContent = line;
                listElement.appendChild(li);
            }
        }

        // El mini-llenguatge (*negreta* i [text](url)) tambe funciona als <li>,
        // com a vf-text i vf-quote. S'exclouen els <li> que continguen codi:
        // alli un asterisc es part del codi, no format.
        for (const li of listElement.querySelectorAll('li')) {
            if (li.querySelector('vf-code, code, pre')) {
                continue;
            }
            li.innerHTML = processTextBoldAndLinks(li.innerHTML);
        }

        this.innerHTML = '';
        this.appendChild(listElement);
    }
}
customElements.define('vf-list', VFList);
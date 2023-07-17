class VFList extends HTMLElement {

    constructor() {
        super();
        this.ordered = false;
    }

    connectedCallback() {
        setTimeout(() => {
            this.render();
        }, 0);
    }

    render() {
        if (this.getAttribute('ordered') && this.getAttribute('ordered') == true) {
            this.ordered = true;
        }

        let listElement = null;
        if (this.ordered) {
            listElement = document.createElement('ol');

        } else {
            listElement = document.createElement('ul');
        }

        listElement = processClasses(listElement, this.getAttribute('classes'));
        listElement = processStyles(listElement, this.getAttribute('styles'));

        listElement.innerHTML = this.innerHTML;
        removeAllChildren(this);
        this.appendChild(listElement);
    }


}

customElements.define('vf-list', VFList);

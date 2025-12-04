class VFList extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const ordered = this.hasAttribute('ordered');
        const listElement = ordered ? 
            document.createElement('ol') : 
            document.createElement('ul');
        
        processClasses(listElement, this.getAttribute('classes'));
        processStyles(listElement, this.getAttribute('styles'));
        
        listElement.innerHTML = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(listElement);
    }
}
customElements.define('vf-list', VFList);
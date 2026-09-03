// Contenidor de <vf-step>. No genera cap element propi: nomes marca la
// classe que dona el layout en columna i la linia de continuitat entre
// passos (vegeu components/vf-step.js i styles/general.css).
class VFSteps extends VFElement {
    render() {
        this.classList.add('vf-steps');
    }
}

customElements.define('vf-steps', VFSteps);

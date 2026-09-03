// Classe base comuna per als components vf-*. NOMES aporta la guarda que
// evita renderitzar dues vegades el mateix element (vegeu
// mejoras/2026_09_02_mejoras_componentes.md, ID X5): vf-content i vf-list
// desconnecten i tornen a connectar els seus fills en construir el seu
// propi contingut, i sense aquesta guarda qualsevol listener afegit en
// render() (per exemple el click de vf-col) acabaria duplicat.
//
// Cada component nomes ha d'implementar render(). Els dos que necessiten
// retardar el primer render amb un setTimeout(0) (vf-text i vf-img) ho
// declaren amb "static deferRender = true;" en lloc d'escriure el seu propi
// connectedCallback.
//
// IMPORTANT: aquest fitxer s'ha de carregar (i, per tant, aparèixer al
// <script src> de header.html) ABANS que cap altre components/vf-*.js,
// perque totes les classes vf-* l'esteneixen amb "extends VFElement".
class VFElement extends HTMLElement {
    connectedCallback() {
        if (this.dataset.vfRendered) {
            return;
        }
        this.dataset.vfRendered = 'true';

        if (this.constructor.deferRender) {
            setTimeout(() => this.render(), 0);
        } else {
            this.render();
        }
    }
}

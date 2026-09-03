class VFPassword extends VFElement {
    render() {
        const password = this.getAttribute('pass');

        // Estat propi de cada instancia (en lloc d'IDs fixos cercats amb
        // getElementById): aixi es poden posar diverses <vf-password> a la
        // mateixa pagina (per exemple, diversos reptes en un joc) sense que
        // es trepitgen les unes a les altres.
        this._password = password;
        this._failedAttempts = 0;

        const div = document.createElement('div');
        div.classList.add('vf-modal');

        const paragraph = document.createElement('vf-text');
        paragraph.textContent = 'Indica la contrasenya per accedir:';
        div.appendChild(paragraph);

        const input = document.createElement('input');
        input.type = 'password';
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.checkPassword();
            }
        });
        div.appendChild(input);
        this._input = input;

        const btn = document.createElement('vf-btn');
        btn.addEventListener('click', () => this.checkPassword());
        btn.textContent = 'Accedir';
        div.appendChild(btn);

        const error = document.createElement('p');
        error.style.color = 'red';
        div.appendChild(error);
        this._error = error;

        this.appendChild(div);
    }

    checkPassword() {
        if (this._password != this._input.value) {
            this._failedAttempts++;

            // Els dos primers intents fallits nomes deixen tornar a provar:
            // no te sentit expulsar per una errada en teclejar. Nomes al
            // tercer intent fallit expulsem de la pagina.
            if (this._failedAttempts < 3) {
                this._error.textContent = 'Contrasenya incorrecta. Torna-ho a provar.';
                this._input.value = '';
                this._input.focus();
                return;
            }

            this._input.disabled = true;
            this._startExpulsionCountdown();
            return;
        }

        // Encertada: aquesta instancia ja no fa falta. Si era l'ultima
        // <vf-password> que quedava a la pagina (el cas normal, amb una
        // sola), es mostra el contingut; si n'hi havia mes d'una (diversos
        // reptes seguits), cal encertar-les totes abans de mostrar-lo.
        this.remove();
        if (document.getElementsByTagName('vf-password').length === 0) {
            showBlock('content');
        }
    }

    _startExpulsionCountdown() {
        let secondsLeft = 3;
        this._error.textContent = 'Contrasenya incorrecta massa vegades... Redirigint en ' + secondsLeft + 's';

        const interval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                clearInterval(interval);
                // Si la pagina es va obrir directament (enllaç compartit,
                // pestanya nova) no hi ha historial i history.back() deixava
                // l'usuari atrapat.
                if (history.length > 1) {
                    history.back();
                } else {
                    location.href = 'index.html';
                }
                return;
            }
            this._error.textContent = 'Contrasenya incorrecta massa vegades... Redirigint en ' + secondsLeft + 's';
        }, 1000);
    }
}

customElements.define('vf-password', VFPassword);

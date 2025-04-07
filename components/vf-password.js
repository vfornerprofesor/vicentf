class VFPassword extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        let password = this.getAttribute('pass');

        let div = document.createElement('div');
        div.id = 'vf-pass-div';
        div.setAttribute('pass', password);
        div.classList.add('vf-modal');

        let paragraph = document.createElement('vf-text');
        paragraph.textContent = 'Indica la contrasenya per accedir:';
        div.appendChild(paragraph);

        let input = document.createElement('input');
        input.id = 'vf-pass-input';
        input.setAttribute('type', 'text');
        div.appendChild(input);

        let btn = document.createElement('vf-btn');
        btn.addEventListener('click', () => {
            VFPassword.checkPassword();
        });
        btn.textContent = 'Accedir';
        div.appendChild(btn);

        let error = document.createElement('p');
        error.style.color='red';
        error.id = 'vf-pass-error';
        div.appendChild(error);

        this.appendChild(div);
    }

    static checkPassword() {
        if(document.getElementById('vf-pass-div').getAttribute('pass') != document.getElementById('vf-pass-input').value) {
            document.getElementById('vf-pass-error').textContent = 'Contrasenya incorrecta... Redirigint en 3s';
            setTimeout(() => {
                document.getElementById('vf-pass-error').textContent = 'Contrasenya incorrecta... Redirigint en 2s';
                setTimeout(() => {
                    document.getElementById('vf-pass-error').textContent = 'Contrasenya incorrecta... Redirigint en 1s';
                    setTimeout(() => {
                        history.back();
                    }, 1000);
                }, 1000);
            }, 1000);
        } else {
            showBlock('content');
            document.getElementsByTagName('vf-password')[0].remove();
        }
    }
}

customElements.define('vf-password', VFPassword);

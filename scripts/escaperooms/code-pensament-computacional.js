let proves = [
    {
        titol: 'Prova 1',
        pista_ubicacio: '🚽💩',
        solucio: 'ROSA'
    },
    {
        titol: 'Prova 2',
        pista_ubicacio: '🌲🌲🌲🌲',
        solucio: 'NOVA YORK'
    },
    {
        titol: 'Prova 3',
        pista_ubicacio: '🪑🪑🪑',
        solucio: '36'
    },
    {
        titol: 'Prova 4',
        pista_ubicacio: '🏀🏀🏀',
        solucio: '226'
    }
];

const escaperoomDiv = document.getElementById('escaperoom');
let provesCompletades = new Array(proves.length).fill(false);

proves.forEach((prova, index) => {
    const container = document.createElement('div');
    container.style.marginBottom = '20px';

    const titol = document.createElement('h3');
    titol.innerText = prova.titol;

    const pistaBtn = document.createElement('button');
    pistaBtn.innerText = '🔍 Mostra pista';
    pistaBtn.style.marginLeft = '10px';

    const pistaSpan = document.createElement('span');
    pistaSpan.innerText = ` Pista: ${prova.pista_ubicacio}`;
    pistaSpan.style.display = 'none';
    pistaSpan.style.marginLeft = '10px';

    pistaBtn.addEventListener('click', () => {
        pistaSpan.style.display = pistaSpan.style.display === 'none' ? 'inline' : 'none';
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escriu la solució';
    input.style.marginRight = '10px';

    const validaBtn = document.createElement('button');
    validaBtn.innerText = '✅ Validar';

    const resultat = document.createElement('span');
    resultat.style.marginLeft = '10px';

    validaBtn.addEventListener('click', () => {
        const respostaUsuari = input.value.trim().toUpperCase();
        const respostaCorrecta = prova.solucio.trim().toUpperCase();
        if (respostaUsuari === respostaCorrecta) {
            resultat.innerText = '✔️';
            resultat.style.color = 'green';
            provesCompletades[index] = true;
        } else {
            resultat.innerText = '❌';
            resultat.style.color = 'red';
            provesCompletades[index] = false;
        }

        comprovaFiEscapeRoom();
    });

    container.appendChild(titol);
    container.appendChild(pistaBtn);
    container.appendChild(pistaSpan);
    container.appendChild(document.createElement('br'));
    container.appendChild(input);
    container.appendChild(validaBtn);
    container.appendChild(resultat);

    escaperoomDiv.appendChild(container);
});

const missatgeFinal = document.createElement('h2');
missatgeFinal.innerText = '🎉 Has salvat el cranc del virus informàtic! 🦀';
missatgeFinal.style.color = 'green';
missatgeFinal.style.display = 'none';
escaperoomDiv.appendChild(missatgeFinal);

function comprovaFiEscapeRoom() {
    if (provesCompletades.every(v => v)) {
        missatgeFinal.style.display = 'block';
    }
}

function processStyles(element, styles) {
    // Exigim que hi haja almenys uns dos punts perque siga una declaracio CSS:
    // aixi styles="col-md-4" (que en realitat hauria de ser classes=) segueix
    // sense fer res, en lloc de deixar un style="" buit a l'element.
    if (styles && styles.indexOf(':') !== -1) {
        // Deixem que el navegador parsege la declaracio: amb split(':') es
        // perdia qualsevol valor que continguera dos punts, com ara
        // background: url(https://...) o els gradients.
        element.style.cssText += ';' + styles;
    }
    return element;
}

function processClasses(element, classes) {
    if (classes && classes.length > 0) {
        // Separem per qualsevol espai en blanc i descartem els buits: amb
        // split(' ') un doble espai generava '' i classList.add('') llancava
        // InvalidCharacterError, que trencava el render del component.
        classes = classes.trim().split(/\s+/).filter(c => c.length > 0);
        for (let c of classes) {
            element.classList.add(c);
        }
    }
    return element;
}

function isExternalUrl(url) {
    try {
        return new URL(url, window.location.href).hostname !== window.location.hostname;
    } catch (e) {
        // URL relativa mal formada o similar: la tractem com a interna.
        return false;
    }
}

function processTextBoldAndLinks(text) {
    // Negreta: *text*. Exclou l'asterisc mateix del contingut (perque no
    // s'ho mengera tot fins al darrer asterisc de la frase quan n'hi ha mes
    // d'un parell) i exigeix que no hi haja espai enganxat als asteriscs
    // (perque /* comentaris */ de codi no es confonguen amb negreta).
    let formattedText = text.replace(/\*([^*\s](?:[^*]*?[^*\s])?)\*/g, '<strong>$1</strong>');

    // Cursiva: ~text~. Amb el mateix criteri que la negreta.
    formattedText = formattedText.replace(/~([^~\s](?:[^~]*?[^~\s])?)~/g, '<em>$1</em>');

    // Enllaços [text](url), amb suport per a |download. Nomes s'obrin en
    // pestanya nova si son a un altre lloc: un enllaç intern (a una altra
    // pagina del mateix lloc) navega a la mateixa pestanya, com faria
    // qualsevol enllaç normal.
    const finalText = formattedText.replace(
        /\[([^\]|]+)(\|download)?\]\((.*?)\)/g,
        (match, linkText, downloadFlag, url) => {
            const downloadAttr = downloadFlag ? ' download' : '';
            const targetAttr = isExternalUrl(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${url}"${targetAttr}${downloadAttr}>${linkText}</a>`;
        }
    );

    return finalText;
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Copia text al porta-retalls.
 *
 * navigator.clipboard NOMES existeix en contextos segurs (https:// o
 * http://localhost). Obrint el lloc per file://, per la IP de la xarxa
 * (http://192.168.x.x:8000) o per qualsevol http:// que no siga localhost,
 * `navigator.clipboard` es undefined i el `.writeText()` peta amb
 * "Cannot read properties of undefined (reading 'writeText')".
 *
 * Per a eixos casos caiem al metode antic: un <textarea> fora de pantalla,
 * seleccionar-lo i document.execCommand('copy'). Esta obsolet pero funciona
 * en tots els navegadors i no exigix context segur.
 *
 * Torna una Promise<boolean>: true si s'ha copiat, false si no s'ha pogut.
 */
async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Pot fallar si l'usuari denega el permis: provem el fallback.
            console.warn('copyToClipboard: ha fallat navigator.clipboard, provem execCommand', err);
        }
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    // Fora de la vista i sense provocar scroll ni zoom al mobil.
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // En iOS .select() a soles no basta.
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    let ok = false;
    try {
        ok = document.execCommand('copy');
    } catch (err) {
        console.error('copyToClipboard: execCommand tambe ha fallat', err);
    }

    document.body.removeChild(textarea);
    return ok;
}

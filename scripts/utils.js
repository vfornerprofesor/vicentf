
function processStyles(element, styles) {
    if (styles && styles.length > 0) {
        styles = styles.split(';');
        for (let s of styles) {
            let style = s.split(':');
            if (style.length == 2) {
                element.style[style[0].trim()] = style[1].trim();
            }
        }
    }
    return element;
}

function processClasses(element, classes) {
    if (classes && classes.length > 0) {
        classes = classes.split(' ');
        for (let c of classes) {
            element.classList.add(c);
        }
    }
    return element;
}

function processTextBoldAndLinks(text) {
    // Reemplaza los asteriscos (*) por etiquetas <strong> para el texto en negrita
    const formattedText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    // Reemplaza los corchetes [] por etiquetas <a> para los enlaces
    const finalText = formattedText.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank">$1</a>'
    );
    return finalText;
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function updateTextChangingLessThanAndGreaterThanSigns(text) {
    text = text.replaceAll('<', '&lt;');
    text = text.replaceAll('>', '&gt;');
    return text;
}

function scrollToSection(sectionId) {
    debugger;
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
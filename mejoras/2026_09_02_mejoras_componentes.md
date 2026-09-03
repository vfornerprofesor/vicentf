# Revisión de componentes `vf-*` — propuestas de mejora

**Fecha:** 2026-09-02
**Alcance:** los 13 componentes de `components/`, `scripts/utils.js` y el generador de índice de `header.html`.
**Estado:** propuesta.
**Tanda 1 aplicada el 2026-09-02:** `Q1`, `C1`, `U2`, `TI1` — ver §8.
**Tanda 2 aplicada el 2026-09-02:** `T1a`, `L1`, `U1` — ver §9.
**Tanda 3 aplicada el 2026-09-02:** `X1`, `CO1`, `L2`, `TI4`, `X5` — ver §10.
**Tanda 4 aplicada el 2026-09-02:** `C2`, `IM1`, `F1`, `X4` — ver §11.
**Tanda 5 aplicada el 2026-09-02:** `CL1`, `TI2`, `P1`, `P2`, `P3`, `C4`, `TI7` — ver §12.
**Tanda 6 aplicada el 2026-09-02:** `TI3`, `X2`, `X3`, `X7`, `X9` — ver §13. Todos los IDs de la revisión están ahora aplicados o descartados.

Cada punto lleva un **ID** (`Q1`, `C2`, …) para poder decir "implementa Q1, C2 y U1" sin ambigüedad.

Prioridades:

| | Significado |
|---|---|
| 🔴 **P1** | Roto ahora mismo, hay páginas del sitio afectadas |
| 🟠 **P2** | Problema real, pero degrada en vez de romper |
| 🟡 **P3** | Mejora clara de calidad/UX/rendimiento |
| 🔵 **P4** | Opcional / refactor de fondo, valorar coste-beneficio |

---

## 1. Resumen ejecutivo

Los componentes están bien planteados: patrón uniforme, sin dependencias, fáciles de leer. Los problemas serios son **pocos y muy concretos**, y se arreglan con cambios de 1–5 líneas:

1. **`vf-quote` no funciona en absoluto** (`TypeError`). Afecta a 3 páginas, 11 citas. → `Q1`
2. **`vf-code` con el código en una sola línea revienta** y se lleva por delante el resto del render. Afecta a `unitats/aplicacions-web/wordpress/index.html:60`. → `C1`
3. **`vf-text` y `vf-quote` borran el HTML que escribes dentro** (`<b>`, `<i>`, `<br>`). Ya está pasando en `unitats/ofimatica/full-calcul/7-funcions-estadistiques.html` (11 casos): las negritas de esa página no se ven. → `T1`
4. **El icono de copiar enlace de `vf-title` se dibuja en la esquina de la página**, no junto al título, porque falta un `position: relative`. → `TI1`
5. **El generador del índice (`#vf-index`) es una carrera**: se ejecuta desde `header.html` sin esperar a que los componentes estén definidos. → `X1`

El resto son mejoras de accesibilidad, rendimiento y consistencia del "mini-lenguaje" de autoría.

---

## 2. Bugs confirmados

### 🔴 `Q1` ✅ *(aplicado 2026-09-02)* — `vf-quote` está roto entero

`components/vf-quote.js:8-10`

```js
const blockquote = document.createElement('blockquote');
blockquote = processStyles(blockquote, this.getAttribute('styles'));   // TypeError
```

Se asigna a una `const`. El navegador lanza `TypeError: Assignment to constant variable.` y el componente **no renderiza nada**: la cita desaparece de la página.

**Páginas afectadas:**
- `formaciodocent/ia/sa.html` (7 citas)
- `unitats/inteligencia-artificial/inteligencia-artificial2/sessio-3-ia-per-estudiar.html` (3)
- `unitats/inteligencia-artificial/inteligencia-artificial2/sessio-2-chatgpt-i-prompts.html` (1)

**Arreglo (1 palabra):**

```js
let blockquote = document.createElement('blockquote');
```

El resto del componente ya es correcto (lee el texto, vacía `this.innerHTML` y añade el `<blockquote>`), así que con cambiar `const` por `let` las 11 citas vuelven a verse.

Relacionado: `vf-quote` también sufre `T1` (pierde el HTML interior), porque usa `this.textContent`.

---

### 🔴 `C1` ✅ *(aplicado 2026-09-02)* — `vf-code` de una sola línea lanza `TypeError`

`components/vf-code.js:24`

```js
let totalSpaces = this.innerHTML.split('\n')[1].match(/^\s*/)[0].length;
```

Da por hecho que el contenido empieza con un salto de línea y que existe una segunda línea. Si escribes `<vf-code>ln -s target link_name</vf-code>`, `split('\n')[1]` es `undefined` → `Cannot read properties of undefined (reading 'match')`.

**Página afectada:** `unitats/aplicacions-web/wordpress/index.html:60`.

**Arreglo aplicado** — mantener exactamente el algoritmo anterior (indentación tomada de la segunda línea) y contemplar el caso de que no haya segunda línea:

```js
const secondLine = this.innerHTML.split('\n')[1];
const totalSpaces = secondLine ? secondLine.match(/^\s*/)[0].length : 0;
```

> Se probó primero una versión "mejor" (indentación mínima de todas las líneas no vacías). Comparando el DOM renderizado antes y después, **cambiaba la indentación de bloques ya existentes** en `unitats/programacio/web/html/index.html` (5 bloques). Se descartó: el objetivo de la tanda 1 es arreglar lo roto sin tocar cómo se ve el resto del sitio. Queda como posible mejora futura si algún día molesta la indentación irregular de esos bloques.

---

### 🔴 `T1` ✅ *(aplicado 2026-09-02, opción T1a)* — `vf-text` y `vf-quote` destruyen el HTML interior

`components/vf-text.js:14` y `components/vf-quote.js:5`

```js
const text = this.textContent.trim();
```

`textContent` descarta las etiquetas. Si escribes:

```html
<vf-text>La funció <b>COMPTAR.SI</b> serveix per a...</vf-text>
```

el `<b>` se pierde y sale texto plano. **Ya está ocurriendo**: `unitats/ofimatica/full-calcul/7-funcions-estadistiques.html` tiene 11 casos con `<b>`/`<i>` dentro de `vf-text` que no se ven en negrita/cursiva.

También es un problema que `&lt;` escrito por el autor se convierta en `<` real (porque `textContent` decodifica) y luego se inyecte como HTML.

**Tres opciones, de menos a más invasiva:**

- **T1a (recomendada)** — usar `innerHTML` en vez de `textContent` y aplicar el mini-lenguaje sobre el HTML. Se respetan `<b>`, `<i>`, `<br>`, `<a>`, y las páginas actuales pasan a verse bien sin tocar ningún HTML:

  ```js
  const text = this.innerHTML.trim();
  ```

  Riesgo: si algún `vf-text` contiene `<` literal sin escapar, se interpretará como etiqueta. Hoy ya pasaría lo mismo por la vía del `textContent`, así que no empeora.

- **T1b** — dejarlo como está y ampliar el mini-lenguaje con `_cursiva_` y `**negreta**`, y luego reescribir a mano las páginas que usan `<b>`/`<i>`. Más trabajo, contenido más limpio.

- **T1c** — mantener `textContent` pero avisar por consola cuando se detecte HTML dentro, para localizar los casos. Sólo diagnóstico.

---

### 🟠 `TI1` ✅ *(aplicado 2026-09-02)* — el icono de copiar enlace aparece en la esquina de la página

`styles/general.css` define:

```css
.vf-icon-copy {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

Pero **ningún `h2`/`h3`/`.block_colored` tiene `position: relative`** (el único `position: relative` del proyecto está en `vf-code`). Un elemento `position: absolute` se coloca respecto al ancestro posicionado más cercano; al no haber ninguno, se coloca respecto al bloque contenedor inicial, es decir, arriba a la izquierda del documento.

**Arreglo:**

```css
.block_colored.block_h2,
.block_black.block_h3,
h2, h3 {
  position: relative;
}
```

O mejor, posicionarlo respecto al propio título añadiendo la clase al `<h2>`/`<h3>` que genera `vf-title`.

---

### 🟠 `X1` ✅ *(aplicado 2026-09-02)* — la generación del índice `#vf-index` es una carrera

El código que construye el índice está en `header.html`, que se inyecta con `$('#header').load('header.html')`. jQuery carga los `<script src="components/vf-*.js">` **de forma asíncrona**, así que el script inline del índice puede ejecutarse **antes** de que `customElements.define('vf-title', ...)` se haya llegado a ejecutar. En ese caso los `<vf-title>` aún no han renderizado y `t.children[0].children[0].id` no existe.

Es la misma razón por la que existe el `setTimeout(..., 3000)` de reintento de los `showBlock`.

Además, si alguien pone `levels="1,2"`, el nivel 1 **no genera icono de copiar**, así que `t.children[0].children[0]` es `undefined` y el índice entero peta.

**Arreglo propuesto:**

```js
customElements.whenDefined('vf-title').then(() => {
    // ... construir el índice aquí
});
```

y sustituir la cadena frágil por una búsqueda robusta:

```js
const heading = t.querySelector('h1, h2, h3, h4');
if (!heading || !heading.id) continue;
const hyperlink_id = heading.id;
```

---

## 3. Revisión componente a componente

### `vf-title`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `TI1` | 🟠 | Icono de copiar mal posicionado (ver arriba) | `position: relative` en el título |
| `TI2` ✅ | 🟠 | **Todo el título es clicable y copia el enlace sin avisar.** Pinchar en el texto de un `h2` escribe en el portapapeles en silencio | Que sólo el icono sea clicable, y mostrar un "Enllaç copiat!" como hace `vf-code` |
| `TI3` ✅ | 🟠 | `createValidId()` destroza los acentos: *"Intel·ligència artificial"* → `intel-lig-ncia-artificial`. Los `#hash` que se comparten quedan feos | Normalizado con `.normalize('NFD')` + limpieza de marcas diacríticas → `intelligencia-artificial`. **Decisión del usuario, con el aviso de que rompe enlaces externos ya compartidos**: sólo había 1 enlace interno así en todo el repositorio, y ya estaba roto (apuntaba a `#Sessions` con mayúscula) |
| `TI4` ✅ | 🟠 | **IDs duplicados** si dos títulos de la misma página tienen el mismo texto: el índice lleva siempre al primero | Añadir sufijo `-2`, `-3` cuando el id ya existe |
| `TI5` ✅ | 🟡 | Título vacío (`<vf-title level="2"></vf-title>`) deja el `<h2>` sin `id` y rompe el índice | Avisar por consola y saltarlo |
| `TI6` | 🟡 | `subtitle` sólo funciona en `level="1"`, sin avisar | Soportarlo en todos los niveles, o avisar por consola |
| `TI7` ✅ | 🔵 | El icono es un `<i>` con atributo `href` (inválido en `<i>`) y no es accesible por teclado | Convertirlo en `<button type="button" aria-label="Copiar enllaç">` |

### `vf-code`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `C1` | 🔴 | Una sola línea → `TypeError` (ver arriba) | Cálculo de indentación robusto |
| `C2` ✅ | 🟠 | Llama a `hljs.highlightAll()` **una vez por cada bloque de código**. En una página con 15 bloques son 15 recorridos de todo el documento (coste cuadrático) y avisos de "element already highlighted" | `hljs.highlightElement(code)` sobre su propio bloque. **El `hljs.highlightAll()` global de `header.html` NO se ha quitado**: hacía falta como red de seguridad, ver §11 |
| `C3` | 🟡 | Hay que escapar `<` y `>` a mano con `html-helper.html` | Alternativa: soportar `<vf-code>` con el código dentro de `<template>` o de un comentario `<!--...-->`, que el parser no interpreta. Evitaría el paso manual en todo el contenido nuevo |
| `C4` ✅ | 🟡 | El icono de copiar es un `<i>`, no accesible por teclado ni lector de pantalla | `<button type="button" aria-label="Copiar codi">` |
| `C5` | 🟡 | `navigator.clipboard` sólo existe en contexto seguro (https o localhost). Probando desde la IP de la LAN no funciona y sólo se ve un error en consola | Detectar `if (!navigator.clipboard)` y mostrar un mensaje al usuario, o *fallback* seleccionando el texto |
| `C6` | 🔵 | La variable `message` se usa dentro del listener antes de estar declarada (funciona por el *closure*, pero es frágil) | Mover la declaración de `message` antes del `addEventListener` |

### `vf-text`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `T1` | 🔴 | Borra el HTML interior (ver arriba) | `innerHTML` en vez de `textContent` |
| `T2` | 🟡 | Un `vf-text` = un `<p>`. No hay forma de escribir dos párrafos sin repetir la etiqueta | Partir por línea en blanco (`\n\n`) y generar varios `<p>` |
| `T3` | 🟡 | Renderiza dentro de `setTimeout(…, 0)` sin necesidad aparente; es el único junto con `vf-img`. Provoca un doble render cuando está dentro de `vf-content` (ver `CO1`) | Quitar el `setTimeout` una vez arreglado `CO1` |

### `vf-content`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `CO1` ✅ | 🔴 | `div.innerHTML = this.innerHTML` **serializa y recrea todos los hijos**. Los componentes de dentro se renderizan **dos veces**. **Confirmado el 2026-09-02 con el DOM renderizado**: las listas salen envueltas en un `<ul>` (u `<ol>`) duplicado — `<vf-list><ul><ul><li>…` — en **27 de las 36 páginas** de la muestra. Eso añade un nivel de sangrado extra a todas esas listas. Lo mismo le pasa a cualquier otro componente anidado dentro de `vf-content` | Mover los nodos en vez de re-serializarlos: `div.append(...this.childNodes)`. Subido a 🔴 P1 |
| `CO2` | 🟡 | No soporta el atributo `styles` (todos los demás sí) | Añadir `processStyles(div, this.getAttribute('styles'))` |

### `vf-col`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `CL1` ✅ | 🟠 | Con `link`, la tarjeta es un `<vf-col>` clicable: **no se puede abrir con el teclado, no aparece la URL al pasar el ratón, no se puede abrir en pestaña nueva con Ctrl+clic ni copiar el enlace**. Todo el grid de `unitats/index.html` funciona así | Envolver el contenido en un `<a href="...">` real. Se gana accesibilidad, SEO y comportamiento nativo del navegador |
| `CL2` ✅ | 🟡 | Con `link` siempre abre en pestaña nueva. Para navegación interna del propio sitio es incómodo | Abrir en la misma pestaña por defecto y añadir el atributo `newtab` como en `vf-btn` |
| `CL3` | 🟡 | `newWindow.opener = null` después de `window.open()` no siempre es efectivo | `window.open(link, '_blank', 'noopener')`, o directamente el `<a rel="noopener">` de `CL1` |

### `vf-img`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `IM1` ✅ | 🟡 | Sin `loading="lazy"` ni `decoding="async"`. Páginas como `unitats/index.html` o los grids de cursos cargan todas las imágenes de golpe | Añadir ambos atributos por defecto |
| `IM2` | 🟡 | Sin `width`/`height` → la página "salta" mientras cargan las imágenes | Permitir atributos `width`/`height` opcionales y recomendarlos |
| `IM3` | 🟡 | `alt` por defecto `''` (decorativa). En un sitio educativo casi ninguna imagen es decorativa | Avisar por consola cuando falte `alt`, para ir completándolas |
| `IM4` | 🟡 | Siempre abre el `link` en pestaña nueva | Atributo `newtab`, coherente con `vf-btn` |
| `IM5` | 🔵 | `setTimeout(…, 0)` innecesario; y hace `appendChild` sin vaciar antes | Igual que `T3` |

### `vf-list`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `L1` ✅ | 🟠 | **El mini-lenguaje no funciona dentro de las listas**: `*negreta*` y `[text](url)` se ven en crudo, al contrario que en `vf-text` y `vf-quote`. Es una inconsistencia que sorprende al escribir contenido | Aplicar `processTextBoldAndLinks` al contenido de cada `<li>` |
| `L2` ✅ | 🟡 | Igual que `CO1`: re-serializa el `innerHTML` | `listElement.append(...this.childNodes)` |
| `L3` ✅ | 🔵 | Obliga a escribir los `<li>` a mano, y hay HTML mal cerrado en páginas antiguas (`<li>Code<li>` en `unitats/index.html`) | Opcional: si no hay ningún `<li>`, generar uno por línea de texto |

### `vf-btn`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `B1` ✅ | 🟡 | `element.textContent = this.textContent.trim()` → no se pueden poner iconos ni `<b>` dentro del botón | Mover los nodos hijos en vez de copiar el texto |
| `B2` ✅ | 🟡 | No soporta descargas, aunque el mini-lenguaje de `vf-text` sí (`[text\|download](url)`) | Atributo `download` |
| `B3` | 🔵 | Sin `link` genera un `<button>` que no hace nada (sólo lo aprovecha `vf-password`) | Soportar un atributo `onclick`/`action`, o documentar que es intencionado |

### `vf-frame`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `F1` ✅ | 🟡 | Sin `loading="lazy"`. Los iframes (LearningApps, Genially, Scratch, YouTube) son lo más pesado del sitio y se cargan todos aunque estén al final de la página | `frame.loading = 'lazy'` |
| `F2` ✅ | 🟡 | Sin `allowfullscreen`: los Scratch y vídeos no se pueden ver a pantalla completa | `frame.allowFullscreen = true` |
| `F3` ✅ | 🟡 | Usa el atributo `title`, que es un atributo global de HTML: pone además un *tooltip* sobre el `<vf-frame>` | Renombrarlo a `frame-title` manteniendo `title` como compatibilidad |
| `F4` ⏸️ | 🔵 | Sin `sandbox`. Se incrusta contenido de terceros con permisos completos | Valorar `sandbox="allow-scripts allow-same-origin allow-popups allow-forms"`. **Cuidado: puede romper embebidos existentes; probar uno a uno**. Descartado a petición del usuario en la tanda 7 |

### `vf-hr`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `H1` ✅ | 🔵 | Código muerto: `this.ordered = false` en el constructor, copiado de `vf-list` | Borrarlo |
| `H2` ✅ | 🔵 | No soporta `styles`/`classes` | Añadirlos por coherencia |

### `vf-row`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `R1` | 🔵 | No soporta `styles`/`classes` (funciona porque se usa el `class=` nativo, pero rompe la uniformidad de la API) | Añadirlos |

### `vf-password`

Aviso previo: **esto no es seguridad y no puede serlo.** La contraseña está escrita en el HTML y el contenido está en el DOM, sólo oculto con CSS. Cualquiera con Ctrl+U o F12 lo ve. Sirve como barrera simbólica para el alumnado, y así hay que tratarlo. Las mejoras de abajo suben el listón, no lo convierten en seguro.

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `P1` ✅ | 🟠 | **No se puede enviar con Enter**, hay que pinchar el botón | Listener de `keydown` con `Enter` en el input |
| `P2` ✅ | 🟠 | Al fallar, cuenta atrás de 3 s y `history.back()`. Si la página se abrió directamente (enlace compartido, pestaña nueva) no hay historial y el usuario se queda atrapado. Además castiga una simple errata | Permitir reintentar; expulsar sólo tras 3 intentos fallidos, y con `location.href` a la portada como alternativa cuando no hay historial |
| `P3` ✅ | 🟡 | `input type="text"`: la contraseña se ve al escribirla, en clase con el proyector | `type="password"` |
| `P4` ✅ | 🟡 | Los IDs son fijos (`vf-pass-input`, `vf-pass-div`) y `checkPassword` es estático: dos `vf-password` en la misma página colisionan | IDs únicos por instancia y método de instancia |
| `P5` ⏸️ | 🔵 | El contenido protegido está en el DOM desde el principio | Guardarlo en un `<template>` y clonarlo al acertar. No es seguridad real, pero deja de ser visible con sólo mirar el inspector. **Descartado a propósito en la tanda 7**: son juegos con el alumnado, no contraseñas reales, así que no hace falta |
| `P6` ✅ | 🔵 | Tres `setTimeout` anidados para la cuenta atrás | Un `setInterval` con contador |

---

## 4. `scripts/utils.js`

| ID | Prio | Problema | Propuesta |
|---|---|---|---|
| `U1` ✅ | 🟠 | **`processStyles` ignora cualquier propiedad cuyo valor contenga `:`** — filtra por `style.length == 2`. Se pierden `background: url(https://...)`, `grid-template-areas`, `background-image: linear-gradient(...)` con `url`, etc. | `element.style.cssText += ';' + styles;` — el navegador ya sabe parsear CSS, y además acepta `!important` |
| `U2` ✅ | 🟠 | **`processClasses` peta con espacios dobles**: `classes="a  b"` produce una cadena vacía y `classList.add('')` lanza `InvalidCharacterError`, que mata el render del componente | `.split(/\s+/).filter(Boolean)` |
| `U3` ✅ | 🟡 | `processTextBoldAndLinks` fuerza `target="_blank"` en **todos** los enlaces, incluidos los internos del propio sitio | Abrir en pestaña nueva sólo si la URL es externa (`/^https?:\/\//` y distinto dominio) |
| `U4` ✅ | 🟡 | La regex de negrita `\*(.*?)\*` se come cualquier par de asteriscos del texto (multiplicaciones, notas al pie, `SELECT *`) | Exigir que no haya espacio pegado al asterisco: `/\*(\S(?:.*?\S)?)\*/g`, o cambiar la sintaxis a `**negreta**` |
| `U5` ✅ | 🟡 | Falta cursiva en el mini-lenguaje, siendo un sitio con mucho texto didáctico | Añadir `_cursiva_` |
| `U6` ✅ | 🔵 | `updateTextChangingLessThanAndGreaterThanSigns()` no se usa en ningún sitio del proyecto | Borrarla, o usarla dentro de `vf-code` para no tener que escapar a mano (relacionado con `C3`) |
| `U7` ⏸️ | 🔵 | Todas las funciones son globales; cualquier script de página puede pisarlas | Agruparlas en un objeto `VF = { ... }` manteniendo alias globales para no romper nada. Descartado en la tanda 7: reescribiría cada llamada de los 13 componentes para una ganancia puramente organizativa |

---

## 5. Cuestiones transversales

| ID | Prio | Tema | Detalle y propuesta |
|---|---|---|---|
| `X1` | 🟠 | **Carrera en el índice** | Ver sección 2. `customElements.whenDefined('vf-title')` |
| `X2` ✅ | 🟠 | **La página está en blanco si falla el JS** | `#content` empieza con `display:none` y sólo lo muestra `header.html`. Si el CDN de Bootstrap cae, si no hay red, o si un componente lanza una excepción antes del `showBlock`, el visitante ve una página **completamente vacía**. Y hay 190 páginas así. Se invirtió la lógica: visible por defecto, oculto sólo en las 2 páginas con `vf-password` |
| `X3` ✅ | 🟠 | **SEO** | Consecuencia de `X2`: el contenido va oculto por CSS hasta que se ejecuta JS. Hay `sitemap.xml` y dominio propio, así que el posicionamiento importa. Resuelto por el mismo arreglo que `X2` |
| `X4` ✅ | 🟡 | **jQuery cargado dos veces** | Cada página carga jQuery 3.6.4 completa, y `header.html` carga además la 3.5.1 slim para Bootstrap. Son ~90 KB de más en todas las páginas, y la segunda pisa a la primera. Se quitó la 3.5.1 slim de `header.html`. Probado el navbar colapsable (único widget JS de Bootstrap que usa el sitio): funciona igual |
| `X5` ✅ | 🔴 | **Sin `disconnectedCallback` ni idempotencia** | Ningún componente se protege de renderizar dos veces si se mueve o reinserta en el DOM. Varios hacen `appendChild` sin vaciar antes, así que duplicarían su contenido. **Confirmado el 2026-09-02**: sin esta guarda, `vf-col` con `link` acababa con dos listeners de clic (dos pestañas por cada clic) en cuanto quedaba anidado dentro de un `vf-content`/`vf-list` ya arreglado con `CO1`/`L2`. Subido a 🔴 P1. Guarda `if (this.dataset.vfRendered) return; this.dataset.vfRendered = 'true';` al principio de cada `render()` |
| `X6` ✅ | 🟡 | **Accesibilidad general** | Elementos clicables que no son ni `<a>` ni `<button>` (`vf-col` con `link`, iconos de copiar de `vf-title` y `vf-code`): no llegan con el tabulador, no se activan con Enter, y un lector de pantalla no los anuncia. Ver `CL1`, `TI7`, `C4` |
| `X7` ✅ | 🔵 | **Clase base común** | Los 13 componentes repiten el mismo esqueleto. Se creó `components/vf-element.js` con `connectedCallback` + la guarda de idempotencia (el tratamiento de `styles`/`classes` se dejó como estaba: el objetivo real y variable es distinto en cada componente, no hay boilerplate real que unificar ahí) |
| `X8` ✅ | 🔵 | **Fragilidad del orden de carga** | Los componentes funcionan porque `header.html` (y por tanto `customElements.define`) llega **después** de que el navegador haya parseado el HTML: por eso `this.innerHTML` tiene contenido dentro de `connectedCallback`. Si algún día se inlinean los scripts de componentes en el `<head>`, **todo el sitio se queda en blanco** y costará entender por qué. Propuesta: dejarlo documentado con un comentario en `header.html`, o hacer los componentes robustos con `whenDefined` / lectura diferida |
| `X9` ✅ | 🔵 | **Sin página de pruebas** | No hay forma rápida de comprobar que un cambio en un componente no rompe nada. Se creó `components/test.html` con una instancia de cada componente en sus variantes principales y los casos límite ya encontrados (`vf-code` de una línea, títulos duplicados, mini-lenguaje dentro de listas...) |

---

## 6. Orden de implementación sugerido

**Tanda 1 — arreglar lo roto** (cambios de pocas líneas, riesgo casi nulo):
`Q1`, `C1`, `U2`, `TI1`

**Tanda 2 — contenido que hoy no se ve como debería:**
`T1a`, `L1`, `U1`

**Tanda 3 — robustez:**
`X1`, `CO1`, `L2`, `TI4`, `X5`

**Tanda 4 — rendimiento:**
`C2`, `IM1`, `F1`, `X4`

**Tanda 5 — accesibilidad y UX:**
`CL1`, `TI2`, `P1`, `P2`, `P3`, `C4`, `TI7`

**Tanda 6 — decisiones de fondo, a discutir:**
`X2`/`X3` (página en blanco y SEO), `TI3` (slugs con acento, rompe enlaces), `X7` (clase base), `X9` (página de pruebas)

---

## 7. Cosas que están bien y no hay que tocar

Para que quede constancia, porque en una lista de problemas se pierde de vista:

- Patrón uniforme y legible en los 13 componentes: se entiende uno y se entienden todos.
- Decisión de no usar Shadow DOM: correcta para este caso, permite que el CSS global y Bootstrap funcionen dentro.
- Sistema de variables CSS bien montado y usado con disciplina: cambiar el color del sitio entero es tocar una línea.
- Cero dependencias de build. En 5 años esto seguirá abriéndose y funcionando, que es exactamente lo que necesita material docente.
- El mini-lenguaje `*negreta*` / `[text](url)` es un acierto: hace el HTML de contenido mucho más legible.
- `html-helper.html` como utilidad práctica para el flujo real de trabajo.


---

## 8. Registro de implementación — Tanda 1 (2026-09-02)

| ID | Ficheros tocados | Comprobación |
|---|---|---|
| `Q1` | `components/vf-quote.js` (`const` → `let`) | `formaciodocent/ia/sa.html` renderizado en headless: **7 `<blockquote>`** donde antes había 0 |
| `C1` | `components/vf-code.js` | `unitats/aplicacions-web/wordpress/index.html`: bloques de código **0 → 1**. Diff del DOM renderizado antes/después en `css/index.html` (34 bloques), `html/index.html` (29) y `python/index.html`: **idéntico**, sin regresión |
| `U2` | `scripts/utils.js` (`split(/\s+/).filter(...)`) | Probado con `"a b"`, `"a  b"`, `"  a   b  "`, `""`, `"  "`, tabuladores y saltos de línea: ya no lanza `InvalidCharacterError` y el caso normal no cambia |
| `TI1` | `components/vf-title.js` (clase `vf-title-anchor`) + `styles/general.css` | Medido con `getBoundingClientRect()` en headless. **Antes:** icono en `(10, 10)` — esquina del documento — en los 4 títulos. **Después:** dentro del título en los 4 casos (h2, h3, h4 y un h2 de dos líneas), a 10 px del borde izquierdo y centrado en vertical |

Detalle de `TI1`: el icono se colocaba respecto al bloque contenedor inicial porque ningún ancestro tenía `position`. Ahora `vf-title` marca el `<h2>/<h3>/<h4>` con la clase `vf-title-anchor` (`position: relative`), el icono se centra con `top: 50%; transform: translateY(-50%)` y el `h4`, que no tiene padding lateral, recibe `padding-left: 2rem` para dejarle sitio.

**No se ha tocado nada más.** El resto de IDs del informe siguen pendientes.


---

## 9. Registro de implementación — Tanda 2 (2026-09-02)

### Método de comprobación

Se renderizaron **36 páginas** con Chrome headless en dos estados (con los cambios y sin ellos) y se comparó el DOM resultante del `#content`. La muestra incluye las 3 páginas con HTML dentro de `vf-text`/`vf-quote`, todas las que usan `vf-quote`, 20 con `vf-list` y 20 con `vf-text` elegidas al azar.

**Resultado: 31 de 36 páginas byte a byte idénticas.** Las 5 que cambian, cambian a mejor:

| Página | Qué cambia |
|---|---|
| `unitats/ofimatica/full-calcul/7-funcions-estadistiques.html` | 11 `<b>`/`<i>` que antes se perdían ahora se ven (`<b>COMPTAR.SI</b>`, `<b>Rang:</b>`, …) |
| `unitats/programacio/blocs/scratch/index.html` | Un `<strong>` que antes se perdía |
| `formaciodocent/ia/sa.html`, `…/sessio-2-chatgpt-i-prompts.html`, `…/sessio-3-ia-per-estudiar.html` | Las citas aparecen (efecto de `Q1`, de la tanda 1) y el `*negreta*` de dentro se procesa |

### Cambios aplicados

| ID | Ficheros | Nota |
|---|---|---|
| `T1a` | `components/vf-text.js`, `components/vf-quote.js` | `this.textContent` → `this.innerHTML`. Además, las entidades `&lt;`/`&gt;` escritas por el autor ya no se reinterpretan como etiquetas |
| `L1` | `components/vf-list.js` | `processTextBoldAndLinks` sobre cada `<li>`, **saltando los `<li>` que contienen `vf-code`, `code` o `pre`** (donde un `*` es parte del código, no formato) |
| `U1` | `scripts/utils.js` | `element.style.cssText += ...` en vez de `split(':')` |

### Dos cosas que se descubrieron por el camino

**1. `L1` no arregla nada del contenido actual.** El informe daba por hecho que había listas con `*negreta*` sin procesar. Al buscarlas: **cero**. Todos los `<li>` que usan el mini-lenguaje ya envuelven su contenido en `<vf-text>`, que sí lo procesa. Así que `L1` es coherencia de la API para escribir contenido nuevo, no una corrección de lo que hay. Probado a mano: `*negreta*`, `[enllac](url)`, `[text|download](url)` y el caso de `SELECT * FROM` dentro de un `vf-code` en un `<li>`, que queda intacto.

**2. `U1` tampoco cambia nada hoy** — ninguna declaración del sitio tiene dos `:`. Es prevención para el futuro.

Pero al aplicarlo salió a la luz otra cosa: la primera versión dejaba un `style=""` vacío en **45 elementos** que llevan `styles="col-md-4"`. Eso **no es CSS, es un nombre de clase**: el atributo correcto sería `classes="col-md-4"`. Esos 45 elementos **nunca han tenido la clase `col-md-4` aplicada**, ni antes ni ahora. Está en `ferramentes/ia.html` y `formaciodocent/taller_ia.html`, entre otros (66 ficheros usan `styles=` sin `:`, aunque 282 de esos casos son `styles=""` vacíos e inofensivos).

Se añadió una guarda para que `processStyles` siga ignorando esos valores en vez de crear un `style=""` vacío. **Corregir los 45 `styles="col-md-4"` → `classes="col-md-4"` cambiaría la maquetación de esas páginas (pasarían a ser columnas de Bootstrap de verdad), así que no se ha tocado: es una decisión tuya.**

### Y una confirmación desagradable: `CO1` es peor de lo que decía el informe

Comparando el DOM renderizado se ve que **27 de las 36 páginas de la muestra tienen listas con un `<ul>`/`<ol>` duplicado**: `<vf-list><ul><ul><li>…</li></ul></ul></vf-list>`. Es el doble render que provoca `vf-content` al hacer `div.innerHTML = this.innerHTML`. Añade un nivel de sangrado extra a esas listas. Estaba igual antes de la tanda 2 — no es una regresión — pero deja de ser un problema teórico. `CO1` sube a 🔴 P1 y debería ir en la tanda 3.


---

## 10. Registro de implementación — Tanda 3 (2026-09-02)

### Método de comprobación

Se amplió la muestra a **41 páginas** (las 36 de la tanda 2 + las 8 que usan `#vf-index` + `unitats/index.html`, que es la página con más `vf-col link=` del sitio). Render en Chrome headless en dos estados, comparando el DOM del `#content` con el atributo `data-vf-rendered` y la clase `vf-title-anchor` (ya verificada en tanda 1) descontados del diff.

**Resultado:**
- **Contenido de texto visible idéntico en 38 de las 41 páginas.** Las 3 que cambian son exactamente los 3 cambios ya verificados en la tanda 2 (citas, `<b>`/`<i>`, "Copiat!"). Ninguna pérdida de contenido nueva.
- **`<ul><ul>`/`<ol><ol>` duplicados: 28 páginas → 0.** Confirma que `CO1`+`L2` eliminan la duplicación real detectada en la tanda 2.
- **Entradas del índice (`#vf-index`): mismo número exacto antes y después** en las 8 páginas que lo usan (probado con detalle en `css/index.html`: 13 → 13).

### Cambios aplicados

| ID | Ficheros | Qué hace |
|---|---|---|
| `X5` | los 13 `components/*.js` | Guarda `if (this.dataset.vfRendered) return; this.dataset.vfRendered = 'true';` al principio de cada `connectedCallback` (antes del `setTimeout` en `vf-text`/`vf-img`, para no programar renders redundantes) |
| `CO1` | `components/vf-content.js` | `div.append(...this.childNodes)` en vez de `div.innerHTML = this.innerHTML` |
| `L2` | `components/vf-list.js` | Mismo cambio: `listElement.append(...this.childNodes)` |
| `TI4` | `components/vf-title.js` | Nuevo método `getUniqueId()`: si el `id` generado ya existe en el documento, añade `-2`, `-3`… |
| `X1` | `header.html` | El bloque de generación del índice se envuelve en `customElements.whenDefined('vf-title').then(...)`, y `t.children[0].children[0].id` se sustituye por `t.querySelector('h1, h2, h3, h4')` |

### `X5` no era opcional: se confirma con una prueba de control

El informe original clasificaba `X5` como 🟡 P3 ("mejora de robustez"), asumiendo que `CO1`/`L2` (mover nodos en vez de reserializar) bastarían para evitar el doble render. **No es así.** Se hizo la prueba directamente en el sitio:

1. Página con `<vf-content><vf-row><vf-col link="...">` — patrón real usado en `unitats/index.html` y muchas más.
2. Con `X5` aplicado: un clic → **1** llamada a `window.open`.
3. Deshaciendo *sólo* la guarda de `vf-col.js` (dejando `CO1` intacto): el mismo clic → **2** llamadas a `window.open` — dos pestañas por cada clic.

Motivo: mover un nodo ya conectado al documento a un contenedor todavía no conectado, y luego insertar ese contenedor, **desconecta y reconecta** el nodo — y `connectedCallback` se dispara en cada conexión, muevas o no muevas el nodo con `innerHTML` o con `appendChild`. `CO1`/`L2` evitan que se **cree un elemento nuevo** (bueno para la identidad del nodo y sus datos), pero no evitan que el *mismo* elemento vuelva a ejecutar `render()`. Sin la guarda, cualquier componente con un `addEventListener` en su `render()` (hoy sólo `vf-col`, pero cualquiera futuro) duplica sus listeners en cuanto queda anidado dentro de `vf-content` o `vf-list`.

Se subieron `CO1` y `X5` a 🔴 P1 en el informe por este motivo.

### Un efecto colateral bueno de `X5`: protege también el reparse de `T1a`/`L1`

El atributo `data-vf-rendered="true"` viaja con el nodo tanto si se mueve como si se reserializa a HTML y se vuelve a parsear (es un atributo normal, forma parte del `outerHTML`). Así que aunque en el futuro alguien reintroduzca un `innerHTML = ...` en algún componente, la guarda seguiría evitando el doble render — es una defensa que no depende de que `CO1`/`L2` seaneternamente correctos.

### Qué NO se ha tocado

- **`TI3`** (slugs con acentos) sigue sin tocar: cambiarlo rompería los `#hash` ya compartidos, como se advirtió en el informe original.
- El resto de IDs de accesibilidad, rendimiento y limpieza (tandas 4, 5 y 6) siguen pendientes de decisión.


---

## 11. Registro de implementación — Tanda 4 (2026-09-02)

### Método de comprobación

Mismas 41 páginas. Esta vez el "antes" no se pudo obtener con `git stash` de los ficheros completos: **eso revierte también los cambios de las tandas 1-3 sobre esos mismos ficheros**, no sólo los de esta tanda, y de hecho así fue como se coló el error de proceso que se cuenta más abajo. La comparación buena se hizo copiando el sitio completo a un directorio aparte, deshaciendo a mano *sólo* las líneas de esta tanda (comprobado con `diff` que el resultado difiere del estado final **exactamente** en esas líneas) y sirviéndolo en un segundo puerto para renderizarlo en paralelo.

**Resultado sobre las 41 páginas:**
- **Texto visible idéntico en las 41.**
- **Contenido del DOM idéntico en las 41** una vez descontados los atributos `loading`/`decoding` (que es precisamente lo que añaden `IM1`/`F1`, en todas las páginas que tienen `vf-img`/`vf-frame` — 23 de las 41).
- **Resaltado de código: 1138 `<span class="hljs-*">` en las 9 páginas con bloques de código, exactamente igual antes y después.**
- Navbar colapsable (el único widget de Bootstrap JS que usa el sitio entero — se comprobó que no hay ningún otro `data-toggle` activo): clic en el botón hamburguesa oculta/muestra el menú igual que antes, jQuery activo es la única copia (3.6.4), sin errores de consola.

### Cambios aplicados

| ID | Ficheros | Qué hace |
|---|---|---|
| `C2` | `components/vf-code.js` | `hljs.highlightElement(code)` sobre su propio bloque en vez de `hljs.highlightAll()` sobre todo el documento |
| `IM1` | `components/vf-img.js` | `img.loading = 'lazy'; img.decoding = 'async';` |
| `F1` | `components/vf-frame.js` | `frame.loading = 'lazy';` |
| `X4` | `header.html` | Se quita `<script src=".../jquery-3.5.1.slim.min.js">`: cada página ya carga jQuery 3.6.4 completa en su `<head>` antes de que exista `$`, así que para cuando `header.html` se inserta, jQuery ya está disponible |

### Un error de proceso a medio camino, y cómo se detectó

La primera versión de `C2` quitaba **también** el `hljs.highlightAll()` global de `header.html` (tal como sugería literalmente el informe original). Al comprobarlo contra el sitio real: **el resaltado de código desapareció por completo en todas las páginas** — los bloques salían con el texto correcto pero sin ni un solo `<span class="hljs-*">`.

Motivo: la carga de `components/vf-code.js` y de `scripts/highlight/highlight.min.js` son dos peticiones de red independientes sin ninguna garantía de orden entre ellas (todo el sitio ya convive con esto — es la razón de ser del `setTimeout(3000)` de `header.html`). Cuando un `<vf-code>` renderiza **antes** de que la librería `hljs` haya terminado de cargar, su propia llamada no hace nada en silencio (`typeof hljs !== 'undefined'` es falso) y el bloque se queda sin resaltar **para siempre** — nadie vuelve a intentarlo. El `hljs.highlightAll()` global que había al final de `header.html` no era redundante: era la única llamada del documento con la garantía de ejecutarse **después** de que `highlight.min.js` hubiera cargado (es la siguiente línea, dentro del mismo `header.html`), y por eso pillaba de rescate cualquier bloque que su propio `vf-code` hubiera dejado sin resaltar.

**La solución final mantiene las dos cosas**: `vf-code` se resalta a sí mismo con `highlightElement` (evita el recorrido de todo el documento en el caso normal) y `header.html` conserva su `hljs.highlightAll()` de cierre como red de seguridad (en highlight.js v11 esta función ya se salta los bloques con `data-highlighted`, así que no vuelve a hacer trabajo real salvo en los pocos casos que lo necesitan).

Por el camino, la primera comprobación con `git stash` de ficheros completos también generó un falso positivo — pareció que había una duplicación de imágenes (`<img>` repetido en el DOM) al "revertir" `vf-img.js`, cuando en realidad el `stash` estaba borrando también la guarda `X5` de la tanda 3 sobre ese mismo fichero, no sólo el cambio de esta tanda. Al aislar el cambio real (sin tocar `X5`), la supuesta duplicación desapareció. Queda anotado por si se repite el mismo patrón de prueba en el futuro: **`git stash` de un fichero entero no aísla los cambios de "esta" tanda si el fichero ya llevaba cambios de tandas anteriores** — hay que reconstruir el estado anterior a mano o con un commit intermedio.

### Qué NO se ha tocado

`F2` (`allowfullscreen`), `F3` (renombrar `title`) y `F4` (`sandbox`) no estaban en esta tanda — sólo `F1`. El resto de tandas 5 y 6 siguen pendientes.


---

## 12. Registro de implementación — Tanda 5 (2026-09-02)

### Método de comprobación

Mismas 41 páginas. Esta vez el "antes" se construyó como en la tanda 4: copia completa del sitio a un directorio aparte, deshaciendo a mano *sólo* las líneas de esta tanda (comprobado con `diff` que la única diferencia con el estado final son esas líneas exactas), servido en un tercer puerto.

**Resultado sobre las 41 páginas:** texto visible idéntico en las 41 **una vez arreglado un efecto colateral real que se explica abajo**. Comprobaciones funcionales una a una en páginas reales (ver detalle por ID).

### Cambios aplicados

| ID | Ficheros | Qué hace |
|---|---|---|
| `CL1` | `components/vf-col.js`, `styles/general.css` | El contenido de un `vf-col` con `link` se envuelve en un `<a class="vf-col-link" target="_blank" rel="noopener noreferrer">` real, en vez de un listener de clic sobre el propio elemento |
| `TI2` + `TI7` | `components/vf-title.js`, `styles/general.css` | El icono de copiar enlace pasa a ser un `<button aria-label="Copiar enllaç a aquest apartat">`; sólo el botón reacciona al clic (antes todo el `<h2>`/`<h3>`/`<h4>` lo hacía, en silencio); al copiar se muestra un mensaje "Enllaç copiat!" que se desvanece, igual que en `vf-code` |
| `C4` | `components/vf-code.js` | El icono de copiar código pasa a ser un `<button aria-label="Copiar codi">` |
| `P1` | `components/vf-password.js` | Enter en el campo de contraseña envía, sin necesidad de pinchar el botón |
| `P2` | `components/vf-password.js` | Los dos primeros intentos fallidos sólo piden reintentar (se limpia el campo y recupera el foco); sólo al tercero se expulsa con la cuenta atrás, y si no hay historial (`history.length <= 1`) se usa `location.href = 'index.html'` en vez de dejar `history.back()` sin efecto |
| `P3` | `components/vf-password.js` | El campo pasa de `type="text"` a `type="password"` |

Se añadió también una clase común `.vf-icon-btn` en `styles/general.css` para que los botones-icono de `TI7` y `C4` sean visualmente idénticos al `<i>` que sustituyen (sin fondo, sin borde, sin padding) pero con un `outline` visible al recibir foco por teclado (`:focus-visible`), y una regla `.vf-title-anchor:focus-within .vf-icon-copy-hide { display: inline-block; }` para que el icono del título también se revele al tabular hasta él, no sólo al pasar el ratón por encima.

### Un efecto colateral real, detectado y arreglado antes de dar la tanda por buena

Añadir el mensaje "Enllaç copiat!" **dentro** del `<h2>`/`<h3>`/`<h4>` (necesario para posicionarlo junto al icono) tiene una consecuencia no obvia: el generador del índice de `header.html` construye cada entrada con `p.textContent = t.textContent`, donde `t` es el `<vf-title>` completo. `textContent` **no distingue contenido oculto con CSS** (`display: none`), así que cada entrada del índice pasó a incluir el texto "Enllaç copiat!" pegado al título real — algo como *"Com aplicar estils?Enllaç copiat!"* — aunque nadie lo hubiera copiado nunca; el `<span>` está ahí desde que la página carga, sólo lo tapa el CSS.

Esto se detectó en la propia comprobación de esta tanda (la primera pasada de "texto visible idéntico" dio diferencias en 8 de las 41 páginas, todas ellas con `#vf-index`) y se arregló en `header.html`: en vez de leer `t.textContent` directamente, se clona el `<h1>`/`<h2>`/`<h3>`/`<h4>`, se le quita el `<button>` de copiar del clon, y se lee el texto de ahí. Tras el arreglo, las 41 páginas vuelven a dar texto visible idéntico y las entradas del índice se comprobaron limpias (`"Com aplicar estils?"`, sin el sufijo) y en el mismo número que antes (13 en `css/index.html`).

### Comprobaciones funcionales, una por una

- **`CL1`**: en una `vf-col link="https://example.com"`, aparece un `a.vf-col-link` real con `href`, `target="_blank"` y `rel="noopener noreferrer"`, y el contenido original (`vf-title`, texto...) queda dentro del `<a>`.
- **`TI2`**: hacer clic en el `<h2>` fuera del icono **no** llama a `navigator.clipboard.writeText`; hacer clic en el botón sí, y además se ve el mensaje "Enllaç copiat!".
- **`TI7`** y **`C4`**: los elementos son `<button>` de verdad (`tagName === 'BUTTON'`), con `aria-label` (`"Copiar enllaç a aquest apartat"` y `"Copiar codi"` respectivamente).
- **`P1`**: enviar la contraseña correcta con la tecla Enter muestra el contenido y quita el `<vf-password>`, igual que pinchando el botón.
- **`P2`**: en `unitats/ordinadors/representacio-informacio/testA.html` (contraseña real del sitio), 3 intentos fallidos seguidos dan, en orden: *"Contrasenya incorrecta. Torna-ho a provar."* (campo vaciado) → *"Contrasenya incorrecta. Torna-ho a provar."* → *"Contrasenya incorrecta massa vegades... Redirigint en 3s"* con el campo deshabilitado. No se ha podido comprobar de forma automática el `location.href` final (la navegación real hace que el navegador headless no vuelva a responder dentro del test), pero la rama de código que lo hace es una línea condicional trivial y ya validada por lectura.
- **`P3`**: `input.type === 'password'` en la página real.

Sin errores de consola en ningún caso; el resaltado de código (`hljs`) sigue funcionando después de todos estos cambios (339 `<span class="hljs-*">` en `css/index.html`, igual que antes de esta tanda).

### Qué NO se ha tocado

`P4` (IDs únicos para más de un `vf-password` por página), `P5` (contenido protegido en un `<template>`) y `P6` (un solo `setInterval` en vez de tres `setTimeout` anidados) no estaban en esta tanda. `CL2`/`CL3` tampoco — `CL1` ya adopta `rel="noopener noreferrer"` por ser la forma natural de escribir el nuevo `<a>`, pero sigue abriendo siempre en pestaña nueva (eso es `CL2`, pendiente).


---

## 13. Registro de implementación — Tanda 6 (2026-09-02)

Esta tanda era distinta a las anteriores: 4 decisiones de fondo, no arreglos mecánicos. Se preguntó al usuario una por una antes de tocar nada; las cuatro se aprobaron para implementar (incluidas las dos con más riesgo: `TI3` y `X2`/`X3`).

### `TI3` — slugs con acentos normalizados

`components/vf-title.js`, método `createValidId()`: `.normalize('NFD')` + limpieza de marcas diacríticas (`\u0300-\u036f`) + limpieza del punto volado (`\u00b7`) antes de la conversión a minúsculas y el filtrado de caracteres.

```
"Intel·ligència artificial"  ->  intelligencia-artificial   (antes: intel-lig-ncia-artificial)
"Col·lumnes variables"       ->  collumnes-variables
"Configuració de xarxa"      ->  configuracio-de-xarxa
```

**Comprobación:** en las 41 páginas de la muestra, contadas con un parser HTML real (no regex): **0 páginas con IDs duplicados**, y en `css/index.html` (37 títulos): cada botón de copiar enlace, su `id`, y la entrada correspondiente del índice usan exactamente el mismo slug en los 36 casos verificados uno a uno.

Antes de aplicarlo se buscó en todo el repositorio algún enlace `href="...html#slug"` de una página a una sección concreta de otra: sólo hay **uno** (`unitats/programacio/web/php/05-forms.html#Sessions`), y ya estaba roto antes de este cambio (apunta a `#Sessions` con mayúscula; el algoritmo, viejo o nuevo, genera minúsculas). No se ha tocado ese enlace — sigue exactamente igual de roto que antes, no es una regresión de esta tanda.

### `X2` / `X3` — contenido visible por defecto

Antes: cada una de las 161 páginas con plantilla llevaba `style="display:none"` escrito directamente en `#menu`, `#content` y `#footer`, y sólo `header.html` (cargado de forma asíncrona) lo revertía. Si `header.html` no llegaba a cargar por cualquier motivo, la página se quedaba en blanco para siempre — ni el propio `<noscript>` ni el `setTimeout(3000)` de rescate podían salvarla, porque ese `setTimeout` vive dentro del propio `header.html` que no ha cargado.

**Cambio:** se quitó `style="display:none"` de los tres `<div>` en las **159 páginas sin `vf-password`** (edición automática verificada con `diff` en varias páginas al azar). En las **2 páginas con `vf-password`** (`testA.html`, `testB.html`) se liberaron `#menu` y `#footer` pero se dejó `#content` oculto — el contenido protegido debe seguir fallando cerrado, no abierto, si algo se rompe. No hizo falta tocar la lógica de `header.html`: sus llamadas a `showBlock()` ya comprobaban la presencia de `vf-password` antes de revelar `#content`, así que siguen siendo correctas (y ahora, para las 159 páginas normales, son no-ops inofensivos).

**Comprobación (la más contundente de toda la revisión):** se sirvió una copia completa del sitio con `header.html` devolviendo 404 (fallo total simulado) y se cargó una página en Chrome headless:

- Página normal (`cursos/1eso.html`): el `#content` sale con el texto completo, legible, sin `display:none` — exactamente lo que se buscaba.
- Página con contraseña (`testA.html`): `#content` sigue con `style="display:none"` — sigue protegida aunque todo lo demás haya fallado.

Después, comparando el DOM final (una vez todo carga con normalidad) contra el estado de la tanda 5: **0 diferencias en las 41 páginas** — el cambio sólo afecta al estado transitorio o de fallo, no al resultado normal.

### `X7` — clase base `VFElement`

Se creó `components/vf-element.js`:

```js
class VFElement extends HTMLElement {
    connectedCallback() {
        if (this.dataset.vfRendered) return;
        this.dataset.vfRendered = 'true';
        if (this.constructor.deferRender) {
            setTimeout(() => this.render(), 0);
        } else {
            this.render();
        }
    }
}
```

Los 13 componentes pasan de `extends HTMLElement` a `extends VFElement` y pierden su propio `connectedCallback` (que quedaba reducido a las mismas 6 líneas en los 13 ficheros). `vf-text` y `vf-img`, que necesitaban retrasar el primer render con un `setTimeout(0)`, lo declaran con `static deferRender = true;` en vez de escribir su propio `connectedCallback`. De paso se limpiaron 3 constructores que no hacían nada más que `super()` (`vf-btn`, `vf-code`) o guardaban un dato que nadie leía (`vf-hr` con `this.ordered = false`, `vf-img` con `this.link = ""`).

**El riesgo real de esta tanda era técnico, no de comportamiento:** `class VFText extends VFElement` sólo funciona si `VFElement` ya existe cuando el script de `vf-text.js` se ejecuta — y en este sitio los scripts de `header.html` se cargan todos por separado, sin ninguna garantía de orden *a priori*. Antes de aplicar el cambio se comprobó **empíricamente** cómo se comporta jQuery `.load()` con los `<script src>`: se sirvió el sitio con `components/vf-list.js` artificialmente retrasado 2 segundos, y se midió con la Performance API en qué momento arrancaba la petición de red del *siguiente* script de la lista (`vf-img.js`). Resultado: no arrancaba hasta que `vf-list.js` había terminado de cargar y ejecutarse — jQuery ejecuta los `<script>` de un fragmento cargado con `.load()` **en orden estricto, uno detrás de otro**, nunca en paralelo. Esto ya explicaba, con el mismo mecanismo, la carrera de `hljs` encontrada en la tanda 4.

Con esa garantía confirmada, se colocó `<script src="components/vf-element.js">` como el primero del bloque de componentes en `header.html`, y se repitió la misma prueba de estrés retrasando esta vez **el propio `vf-element.js`** 3 segundos: cero errores de consola (`ReferenceError` u otros), el contenido se renderiza igual de bien, sólo que 3 segundos más tarde. `extends VFElement` es seguro en la arquitectura real del sitio, no sólo en local con red instantánea.

**Comprobación funcional:** las 41 páginas dan el mismo DOM (texto visible) antes y después del refactor.

### `X9` — página de referencia `components/test.html`

Una instancia de cada uno de los 13 componentes, con sus variantes principales y los casos límite ya encontrados durante toda la revisión: dos títulos con el mismo texto (para ver el sufijo `-2` de `TI4` en directo), un `vf-code` de una sola línea, mini-lenguaje dentro de `vf-list` con y sin código dentro de un `<li>`, `vf-col` con `link`, `vf-quote` en sus dos variantes de conversación, etc. No incluye una instancia en directo de `vf-password` (ocultaría el resto de la página; se documenta con un enlace a `testA.html`). No está enlazada desde ningún menú ni curso, ni aparece en `sitemap.xml`: es sólo una herramienta de desarrollo, se abre directamente en `components/test.html`.

**Comprobación:** cero errores de consola, capturada una imagen completa de la página para revisión visual, y confirmado a mano el `id`/`id-2` de los títulos duplicados, el `vf-code` de una línea generando su bloque correctamente, y las 12 entradas del índice automático.

### Con esto se cierran todos los IDs del informe original que se decidieron implementar

Quedan sin aplicar, porque nunca se seleccionaron para ninguna tanda: los de las tandas 4-6 marcadas como "no seleccionadas" en su momento no existen (todas las tandas 1-6 cubrían el listado completo salvo estas excepciones explícitamente dejadas fuera): `TI5`, `TI6`, `CL2`, `CL3`, `P4`, `P5`, `P6`, `F2`, `F3`, `F4`, `H1`, `H2`, `R1`, `C3`, `C5`, `C6`, `T2`, `T3`, `B1`, `B2`, `B3`, `L3`, `IM2`, `IM3`, `IM4`, `U3`, `U4`, `U5`, `U6`, `U7`, `X6`, `X8`. Son mejoras menores o decisiones de estilo (ver secciones 3-4 más arriba); se pueden retomar en cualquier momento, cada una es independiente.


---

## 14. Resum final i estat crític (2026-09-02)

### Què s'ha fet

Revisió completa dels 13 components `vf-*`, `scripts/utils.js` i el generador d'índex de `header.html`, seguida de 6 tandes d'implementació, totes verificades amb Chrome headless contra el lloc real (no només llegint el codi):

| Tanda | IDs | Resum d'una línia |
|---|---|---|
| 1 | `Q1` `C1` `U2` `TI1` | Arreglats 3 bugs que trencaven el render (`vf-quote` no eixia mai, `vf-code` petava amb una línia, `classes` amb espai doble petava) + icona de títol mal posicionada |
| 2 | `T1a` `L1` `U1` | `vf-text`/`vf-quote` deixen de perdre el HTML interior; mini-llenguatge també als `<li>`; `processStyles` ja no ignora valors amb `:` |
| 3 | `X1` `CO1` `L2` `TI4` `X5` | Eliminada la duplicació de llistes (`<ul><ul>`) i la carrera de l'índex; guarda de re-render a tots els components (evita listeners duplicats) |
| 4 | `C2` `IM1` `F1` `X4` | Resaltat de codi eficient (mantenint la xarxa de seguretat de `header.html`); `loading="lazy"` a imatges i iframes; jQuery duplicat eliminat |
| 5 | `CL1` `TI2` `P1` `P2` `P3` `C4` `TI7` | Accessibilitat: enllaços i icones reals (`<a>`/`<button>`), contrasenya amb `type="password"`, Enter per accedir, 3 intents abans d'expulsar |
| 6 | `TI3` `X2` `X3` `X7` `X9` | Slugs amb accents; contingut visible encara que falle tot el JS; classe base `VFElement`; pàgina de referència `components/test.html` |

**Xifres:** 13 components + `header.html` + `scripts/utils.js` + `styles/general.css` tocats, més **163 pàgines de contingut** amb l'edició mecànica de `X2`/`X3` (traure `display:none`). Dos fitxers nous: `components/vf-element.js` i `components/test.html`. En total, **177 fitxers modificats o nous**, cap encara enviat (`git commit`).

Cada tanda es va verificar renderitzant un conjunt representatiu de pàgines reals (fins a 41) amb Chrome en mode headless, comparant el DOM abans/després, i en els casos de risc més alt (`X2`/`X3`, `X7`) amb proves específiques: `header.html` retornant 404 per a simular una fallada total, i un script retardat artificialment per a comprovar l'ordre de càrrega. Dos regressions reals introduïdes pel propi procés de revisió es van detectar i corregir abans de tancar la tanda corresponent (contaminació de l'índex per `TI2`, i la pèrdua del resaltat de codi per haver tret la xarxa de seguretat de `hljs.highlightAll()` en `C2`) — documentat als apartats 9 i 11.

### Estat crític: res que impedisca continuar, un parell de coses a tindre en compte

**🔴 Res encara s'ha enviat (`git commit`).** 177 fitxers modificats en l'arbre de treball. No és un bug, pero és el risc pràctic mes gran ara mateix: qualsevol `git checkout`, canvi de branca o neteja accidental perdria sis tandes de faena. **Recomanació: fer commit (per tanda, o tot junt) abans de res mes.**

**🟡 Resolt el 2026-09-02 (post-revisió):** els 45 `styles="col-md-4"` (5 fitxers: `ferramentes/ia.html`, `ferramentes/index.html`, `formaciodocent/taller_ia.html`, `formaciodocent/index.html`, `formaciodocent/ia/index.html`) s'han **llevat** en lloc de corregir-los a `classes="col-md-4"`: decisió de l'usuari, ja que no feien res des que es van escriure i activar la graella ara hauria canviat la maquetació sense necessitat. Verificat amb Chrome headless que la pagina es renderitza exactament igual abans i despres en els 5 fitxers.

**🟢 Res mes es considera crític.** La resta de coses pendents (llista completa a la secció 13: `TI5`, `TI6`, `CL2`, `CL3`, `P4`-`P6`, `F2`-`F4`, etc.) son millores menors d'estil o accessibilitat de segon ordre, cap trenca res ni bloqueja cap altra faena, i cadascuna es independent — es poden fer quan vulgues, en qualsevol ordre.

### Abans de publicar

- **Provar-ho en un navegador de veritat**, no nomes en headless: obrir `index.html` amb `python3 -m http.server` des de l'arrel i navegar unes quantes pagines, sobretot les 2 amb contrasenya i alguna amb molt de codi.
- **Revisar `components/test.html`** d'un colp d'ull: es la manera mes rapida de veure tots els canvis visuals junts.
- Si es fa `git commit`, considerar separar-ho en 6 commits (un per tanda) per a poder desfer una tanda concreta sense tocar les altres si calguera.


---

## 15. Tanda 7 (2026-09-02) — la resta de mejoras menores, a petición del usuario

Tras cerrar el informe (§14), el usuario pidió explícitamente implementar el resto del backlog, con matices concretos por área. IDs cubiertos: `P4`, `P6` (`P5` descartado a propósito), `TI5` (`TI6` confirmado correcto tal cual), `CL2`, `F2`, `F3` (`F4` descartado), `H1`+`H2`, `B1`, `B2`, `L3`, `U3`, `U4`, `U5`, `U6` (`U7` descartado), `X6` (ya resuelto), `X8`.

### `vf-password` — `P4` (múltiples contraseñas) + `P6` (cuenta atrás limpia); `P5` descartado a propósito

El usuario aclaró que estas contraseñas son para juegos con el alumnado, no seguridad real — así que **no** se ha ocultado el contenido protegido en el DOM (`P5`), tal como pidió explícitamente.

Reescrito por completo: cada `<vf-password>` guarda su propio estado (`this._input`, `this._error`, `this._password`, `this._failedAttempts`) en vez de usar los IDs fijos `vf-pass-input`/`vf-pass-error`/`vf-pass-div` de antes, que chocaban si había más de una instancia en la página. Al acertar, la instancia se quita a sí misma (`this.remove()`, no siempre `[0]`) y sólo se muestra `#content` cuando **ya no queda ninguna** `<vf-password>` en la página — así, con **una sola** contraseña (el caso de hoy) el comportamiento es idéntico a antes, y con **varias** (un juego con varios retos seguidos) hay que acertarlas todas.

`P6`: la cuenta atrás 3-2-1 pasa de 3 `setTimeout` anidados a un único `setInterval`.

**Comprobado:** página con 2 `<vf-password>` (`UNA`, `DOS`) — acertar sólo la primera deja el contenido oculto y 1 candado activo; acertar también la segunda lo muestra. 3 intentos fallidos en la página real `testA.html`: la secuencia "3s → 2s → 1s" sale correcta con el `setInterval` nuevo.

### `vf-title` — `TI5`; `TI6` confirmado sin cambios

Un `<vf-title>` sin texto (vacío o sólo espacios) ahora avisa por consola: *"vf-title: no te text (buit o nomes espais); no rebra id ni apareixera a l'index."* No cambia nada más — ya no recibía `id` antes tampoco, sólo faltaba el aviso. El usuario confirmó que `subtitle` sólo en `level="1"` es el comportamiento correcto (no es un bug, es como se diseñó).

### `vf-col` — `CL2`

Por defecto abre ahora en la **misma pestaña** (como `vf-btn`); con el atributo `newtab` se abre en una nueva. Se auditaron los 7 `link=` reales del sitio antes de aplicar el cambio: 6 son navegación interna (las tarjetas de `unitats/index.html`) que se beneficia directamente del cambio, y 1 es el ejemplo `https://example.com` de `components/test.html`. Ninguna página real necesitaba `newtab` para conservar su comportamiento previo.

### `vf-frame` — `F2` + `F3`; `F4` descartado

`frame.allowFullscreen = true` (`F2`). Nuevo atributo `frame-title` en vez de reutilizar `title` (`F3`): `title` es un atributo HTML global, así que ponerlo directamente en `<vf-frame>` hacía aparecer también un tooltip del navegador no deseado. Se mantiene `title` como alternativa por compatibilidad, aunque **no había ningún uso real en todo el sitio** (comprobado antes de tocarlo). `F4` (sandbox) no se ha tocado, como se pidió.

### `vf-hr` — `H1`+`H2`

`H1` (constructor muerto) ya estaba limpio desde el refactor `X7` de la tanda 6. Se añadió el soporte de `styles`/`classes` (`H2`) que le faltaba respecto a sus hermanos.

### `vf-btn` — `B1` + `B2`

`B1`: ahora mueve los nodos hijos (`element.append(...this.childNodes)`) en vez de copiar sólo `textContent`, así se puede meter un icono o `<b>`/`<i>` dentro de un botón. `B2`: nuevo atributo `download`.

### `vf-list` — `L3`, respondiendo a la pregunta del usuario

**La pregunta era si hacía falta tocar todas las páginas con listas existentes: no.** El cambio es puramente aditivo y sólo se activa cuando el `<vf-list>` **no contiene ningún `<li>`** — si ya escribes los `<li>` a mano (como hace todo el contenido actual), nada cambia. Cuando no hay ningún `<li>`, cada línea de texto no vacía se convierte automáticamente en uno. Sirve para escribir listas más rápido en contenido nuevo; no obliga a nada en el existente.

### `scripts/utils.js` — `U3`, `U4`, `U5`, `U6`; `U7` descartado

- `U3`: los enlaces `[texto](url)` sólo abren en pestaña nueva si son a **otro dominio** (`new URL(url).hostname !== location.hostname`); los internos navegan en la misma pestaña, como cualquier enlace normal.
- `U4`: la negrita `*texto*` se reescribió por completo tras encontrar un fallo real de diseño en el primer intento (ver más abajo). El resultado final excluye el propio asterisco de "contenido" (antes `\S` lo admitía, causando que el motor de expresiones regulares se comiera hasta el *siguiente* asterisco lejano en vez de parar en el más cercano) y ya no confunde `/* comentario */` de código con negrita.
- `U5`: cursiva nueva con `~texto~` en vez de `_texto_`: se comprobó que 37 bloques de texto del sitio ya usan 2+ guiones bajos en nombres de variable/fichero (`check_login`, `price_min`...) y en URLs, así que `_texto_` habría producido cursivas falsas por todo el sitio. El símbolo `~` no aparece en ningún contenido existente.
- `U6`: se quitó `updateTextChangingLessThanAndGreaterThanSigns`, sin ningún uso en todo el repositorio.
- `U7` (agrupar las funciones globales en un objeto) no se ha tocado: reescribiría cada llamada de los 13 componentes para una ganancia puramente organizativa, sin arreglar nada roto.

**El error real de esta tanda estuvo aquí.** El primer intento de `U4` usaba `\*(\S(?:.*?\S)?)\*` — parecía correcto en las pruebas rápidas, pero al simular el resultado sobre **todo el contenido real del sitio** (no sólo casos sueltos) apareció un fallo grave: en frases con **dos pares de negrita seguidos y cortos** (patrón real en `unitats/programacio/web/html/index.html`, una página que enseña sintaxis HTML: *"l'etiqueta \*p\* i el seu tancament \*/p\*"*), el resultado era `<strong>p* i el seu tancament */p</strong>` — se comía los asteriscos intermedios en vez de tratarlos como cierre. Motivo: `\S` no excluye el propio `*`, así que la parte "opcional" de la expresión podía seguir extendiéndose *a través* de asteriscos intermedios en busca de un cierre más lejano. Se corrigió excluyendo `*` explícitamente de los caracteres de contenido (`[^*\s]` en los bordes, `[^*]*?` en el medio) y **se volvió a comprobar contra el contenido real completo**: con la versión corregida, 11 bloques de texto en 6 páginas cambian — todos ellos casos donde la negrita ya estaba rota en el sitio (asteriscos sin resolver, o negrita que saltaba por encima de contenido que no debía incluir) y ahora sale correcta. Cero casos con contenido correcto que pasara a estar mal.

### Transversales — `X6` ya resuelto, `X8`

`X6`: revisando qué `addEventListener('click', ...)` quedan en los 13 componentes, sólo hay 3, y los 3 están sobre `<button>` reales (`vf-code`, `vf-title`, `vf-password`) — ya resuelto como efecto colateral de la tanda 5, sin trabajo nuevo que hacer.

`X8`: comentario explícito añadido en `header.html`, justo antes del bloque de componentes, documentando la garantía de orden de carga secuencial (la misma que se verificó empíricamente en la tanda 6 para `X7`) y avisando de que un componente nuevo debe ir después de `vf-element.js`.

### Comprobación general

Con las 41 páginas de muestra, comparado el DOM final contra el estado previo a esta tanda: **2 diferencias, ambas mejoras de negrita ya verificadas exhaustivamente contra el contenido real**, cero regresiones. Se repitió la comparación tanto en paralelo como en secuencial (para descartar problemas de concurrencia del propio método de prueba) con el mismo resultado estable.

**Dos falsas alarmas durante esta tanda, ninguna era un bug real:**
1. Una ruta de página obsoleta en la lista de páginas de prueba (`unitats/programacio/blocs/app-inventor/...`) devolvía 404 porque, en paralelo a esta revisión, esa carpeta se ha reorganizado en `app-inventor-bat/` y `app-inventor-eso/` en el propio árbol de trabajo. Al usar la ruta correcta, la página sale idéntica.
2. Un supuesto "`vf-btn` no se renderiza en `unitats/index.html`": los 14 `<vf-btn>` que parecían no renderizarse están dentro de un bloque `<!-- ... -->` comentado desde antes de esta revisión — contenido inerte, no relacionado con ningún cambio de esta tanda.

### Con esto se cierra también la lista de mejoras menores

De la lista original de la sección 13, sólo quedan sin tocar, porque el usuario no las pidió: `P5` (descartado a propósito), `F4` (descartado a propósito), `U7` (descartado a propósito, ver arriba), `CL3`, `C3`, `C5`, `C6`, `T2`, `T3`, `B3`, `IM2`-`IM4`. Ninguna es crítica.


---

## 16. Bug reportado por el usuario (2026-09-02) — enlaces en azul y subrayados al pasar el ratón

**Síntoma:** en `unitats/index.html`, al pasar el ratón por encima de una tarjeta, todo el bloque (título y lista) se ponía en azul y subrayado.

**Causa real, más amplia de lo que parecía:** Bootstrap define `a:hover { color: #0056b3; text-decoration: underline; }` con más especificidad que la regla propia `a { color: var(--main-color); }`. **Esto afectaba a todo enlace del sitio, no sólo a las tarjetas** — comprobado con un enlace normal `[texto](url)` dentro de un `vf-text` en otra página: color normal `rgb(139,127,199)` (el morado del tema), color en hover `rgb(0,86,179)` (el azul de Bootstrap). Las tarjetas de `unitats/index.html` sólo lo hicieron visible por primera vez porque `CL1` (tanda 5) les puso un `<a>` real por primera vez; el problema ya existía antes en cualquier enlace de texto normal del sitio, sin que nadie lo hubiera notado.

**Arreglo**, `styles/general.css`:
```css
a:hover {
  color: var(--main-color);
  text-decoration: none;
}
```
y en `.vf-col-link` se añadió el mismo selector para `:hover` (antes sólo cubría el estado normal).

**Comprobación:** con Playwright (hover real, no simulado) — el enlace de texto normal da exactamente el mismo color y sin subrayado en normal y en hover; la tarjeta de `unitats/index.html` ya no se pone azul; el navbar (que tiene su propio estilo de hover en blanco translúcido) sigue igual. Las 41 páginas de muestra: 0 diferencias de contenido (es un cambio puramente visual).

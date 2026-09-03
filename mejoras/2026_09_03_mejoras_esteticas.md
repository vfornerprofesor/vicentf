# Revisión estética del sitio — propuestas de mejora

**Fecha:** 2026-09-03
**Alcance:** apariencia del sitio en conjunto (`styles/*.css`, `header.html`, `menu.html`, `footer.html`) y de los componentes `vf-*` tal y como se ven en pantalla.
**Método:** navegación real del sitio servido con `python3 -m http.server` (Chrome, 1440×900 y 500×641), medidas tomadas del DOM y de los CSS. No es una revisión de código: los bugs funcionales están en `2026_09_02_mejoras_componentes.md`.
**Estado:** propuesta. Nada aplicado.

Cada punto lleva un **ID** para poder decir "aplica `EC1`, `EL1` y `EM2`" sin ambigüedad. Los prefijos no colisionan con los del informe de componentes.

| Prefijo | Área |
|---|---|
| `EC` | Color y contraste |
| `ET` | Tipografía |
| `EL` | Layout y ritmo vertical |
| `EM` | Móvil / responsive |
| `EB` | Bloques y componentes concretos |
| `EI` | Índice de página |
| `EN` | Navegación (menú, footer, scroll-to-top) |
| `ES` | Sistema de diseño (tokens, escalas) |
| `EA` | Accesibilidad visual |
| `EP` | Componentes nuevos propuestos |

| | Prioridad |
|---|---|
| 🔴 **P1** | Se ve mal o falla ahora mismo en páginas reales |
| 🟠 **P2** | Degrada la lectura o la jerarquía visual |
| 🟡 **P3** | Mejora clara de acabado |
| 🔵 **P4** | Refactor de fondo, valorar coste-beneficio |

---

## 1. Resumen ejecutivo

El sitio tiene una identidad clara y coherente: violeta suave, esquinas redondeadas, sombras que crecen al pasar el ratón. **El problema no es que falte estilo, es que hay demasiado del mismo estilo.** Los seis defectos que más pesan:

1. **No hay contenedor con ancho máximo.** El texto ocupa todo el ancho de la ventana: en un monitor de 1440px una línea de párrafo mide 1147px ≈ **130 caracteres**, cuando lo cómodo son 60–75. → `EL1`
2. **El violeta principal no tiene contraste suficiente para texto blanco.** Blanco sobre `--main-color` = **3.52:1** (AA pide 4.5:1); sobre `--main-color-hover` = **2.57:1**, o sea que *el contraste empeora al pasar el ratón*. Los enlaces del cuerpo tienen ese mismo 3.52:1 sobre blanco. → `EC1`, `EC2`
3. **El menú fijo tapa el contenido por debajo de 992px.** El navbar mide 101,6px al plegarse y `#content` sólo reserva `margin-top: 5em` (80px): **21,6px de solapamiento** en todos los móviles y tablets. → `EM1`
4. **El sitio es una tarta de capas horizontales.** Jumbotron violeta a todo ancho → bloque blanco a todo ancho → barra `h2` violeta a todo ancho → bloque blanco → barra `h3` **casi negra** a todo ancho. Siete elementos distintos comparten el mismo `--gradient-primary`, así que el color ya no señala nada. → `EL2`, `EC3`
5. **765 líneas de CSS y una sola media query** (para `.vf-frame-half`). Todo lo demás es fijo: `.block` mantiene sus 56px de padding lateral en una pantalla de 500px (el 22% del ancho), el `h1` mantiene sus 56px de cuerpo. → `EM2`, `EM3`
6. **Los estilos de maquetación viven en los HTML, no en el CSS**: 144 `styles="max-height:200px"`, 93 `styles="width:20em"`, 289 `styles=""` vacíos. Cambiar el aspecto de las tarjetas obliga a tocar 200 ficheros. → `ES3`

Ninguno de los seis necesita reescribir nada: son entre 5 y 40 líneas de CSS cada uno.

---

## 2. Color y contraste

### `EC1` 🔴 El violeta principal no vale para texto blanco

Ratios reales de la paleta actual (calculados sobre los valores de `:root`):

| Color | Sobre blanco | ¿AA texto normal (4.5)? | ¿AA texto grande (3.0)? |
|---|---|---|---|
| `--main-color` `#8b7fc7` | **3.52** | ❌ | ✅ |
| `--main-color-hover` `#a599d9` | **2.57** | ❌ | ❌ |
| `--main-color-light` `#c4baeb` | **1.81** | ❌ | ❌ |
| `--accent-color` `#9b87d6` | **3.07** | ❌ | ✅ (justo) |
| `--accent-secondary` `#b5a4e3` | **2.24** | ❌ | ❌ |
| `--main-color-dark` `#6d5fb3` | **5.33** | ✅ | ✅ |

Dónde duele:

- `.btn-primary` (287 botones en el sitio): texto blanco sobre el gradiente `#8b7fc7 → #a599d9`. La mitad derecha del botón está a 2.57:1. **Y al hacer hover el fondo pasa a `--main-color-hover` sólido, o sea al peor valor de todos.** Un botón debe ganar contraste al enfocarse, no perderlo.
- `.vf-index-*`: texto blanco sobre el mismo gradiente.
- `.nav-link`, `.navbar-brand`: blanco sobre el mismo gradiente.
- `.footer`: blanco sobre el mismo gradiente.

Propuesta: **oscurecer un escalón toda la rampa** y dejar los violetas claros sólo para fondos decorativos, nunca detrás de texto.

```css
:root {
  --main-color:        #6d5fb3;  /* era #8b7fc7 → 5.33:1 con blanco */
  --main-color-hover:  #5b4e9c;  /* más oscuro que el base, no más claro */
  --main-color-light:  #c4baeb;  /* sólo fondos/bordes, nunca bajo texto */
  --main-color-dark:   #4a3f80;
  --gradient-primary: linear-gradient(135deg, #6d5fb3 0%, #7d6fc4 100%);
}
```

El aspecto general no cambia (sigue siendo el mismo violeta), pero el texto blanco pasa a leerse. Si prefieres conservar el violeta claro tal cual como color de marca, la alternativa es no poner texto blanco encima nunca: usar `--black-color` sobre los fondos claros y reservar el blanco para `--main-color-dark`.

### `EC2` 🟠 Los enlaces del cuerpo de texto están lavados

`a { color: var(--main-color) }` sobre fondo blanco da 3.52:1. En las páginas de unidad, con párrafos largos, los enlaces se pierden. Se ve claramente en `unitats/programacio/web/css/index.html` ("CSS de W3Schools") y en `components/test.html`.

Con `EC1` aplicado el problema se arregla solo (5.33:1). Si no se aplica `EC1`, al menos:

```css
a { color: var(--main-color-dark); }
a:hover { color: var(--main-color); text-decoration: underline; }
```

El subrayado en hover **sí** conviene recuperarlo aquí: el override actual (`text-decoration: none` para todos los enlaces, ver el comentario de `general.css:47`) quita la única señal no cromática de que algo es un enlace. Lo correcto es mantener el override del *color* azul de Bootstrap pero devolver el subrayado a los enlaces de texto corrido, y quitarlo sólo en los enlaces que ya son un botón o una tarjeta (`.btn`, `.vf-col-link`, `.nav-link`, `.navbar-brand`).

### `EC3` 🟠 Siete elementos comparten el mismo gradiente

`--gradient-primary` se usa hoy en: `.jumbotron` (h1), `h2.block_colored`, `#vf-index`, `.navbar`/`#menu`, `.footer`, `.btn-primary`, `.block_color` y `.col-unit:hover`. Cuando todo es del mismo color, el color deja de comunicar jerarquía: en `unitats/index.html`, el título de la tarjeta y el botón de acción tienen exactamente el mismo aspecto, así que no se sabe qué se puede pulsar.

Propuesta de reparto:

| Rol | Tratamiento |
|---|---|
| `h1` / jumbotron | Gradiente lleno (es el único de la página) |
| `h2` | **Sin fondo**: texto en `--main-color-dark` + regla inferior de 3px en `--main-color-light` |
| `h3` | **Sin fondo**: texto en `--black-color`, peso 600, más pequeño que h2 |
| `h4` | Texto en `--grey-color`, versalitas o peso 600 |
| Botón primario | Gradiente lleno |
| Botón secundario | `btn-primary-inverse` (ya existe) |
| Menú / footer | Sólido `--main-color-dark`, sin gradiente (no compiten con el contenido) |
| `#vf-index` | Fondo claro `--light-grey` con texto oscuro (ver `EI1`) |

Esto es el cambio con más impacto visual del informe y el más barato: son ~20 líneas en `blocks.css`.

### `EC4` 🟠 `.block_black` es lo más ruidoso de la página y marca el nivel menos importante

`h3` se pinta como un rectángulo `linear-gradient(#2a2a2a → #555)` a todo ancho, con `box-shadow: 0 4px 15px rgba(0,0,0,0.3)`. En `components/test.html` y en cualquier unidad, el `h3` **pesa visualmente más que el `h2`**, que es su padre. Es la única aparición de negro en todo un sitio que por lo demás es violeta y blanco: parece un banner de error.

Con `EC3` desaparece. Si se quiere conservar algo de peso para el `h3`, la versión suave:

```css
.block_h3 {
  background: none;
  color: var(--black-color);
  border-left: 4px solid var(--main-color);
  padding-left: 1rem;
  box-shadow: none;
}
```

### `EC5` 🟡 Colores literales en el CSS

`blocks.css` define `.code_block { background-color: #f8f9fa }` y `.block_black` usa `rgba(0,0,0,0.3)`; `general.css` usa `#7dc99b` en `blockquote.conversation_me` y `rgba(255,255,255,0.2)` en `menu.css`. Son pocos, pero rompen la regla del proyecto y son justo los que se olvidan al cambiar la paleta. Llevarlos a `:root` como `--code-bg`, `--shadow-strong`, `--option1-border`, `--overlay-light`.

### `EC6` 🔵 El fondo de página no separa nada

`body` lleva `linear-gradient(to bottom, #fafafa, #ffffff)`. Los `.block` son blancos con `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`. Resultado: tarjeta blanca sobre fondo casi blanco, separadas sólo por una sombra al 10%. En pantallas con brillo bajo o proyectadas en clase, los bloques no se distinguen del fondo.

```css
body { background: #f2f0f7; }              /* un violeta desaturado muy claro */
.block { background: var(--white-color); border: 1px solid rgba(109,95,179,.08); }
```

Ahora sí se ve dónde empieza y acaba cada bloque, y las sombras pasan a ser un refuerzo en vez del único recurso.

---

## 3. Tipografía

### `ET1` 🔴 Línea de 130 caracteres

Medido en `unitats/programacio/web/css/index.html` a 1274px de ventana: `#content` = 1259px, párrafo = 1147px, cuerpo 16px → ~130 caracteres por línea. Para texto didáctico que los alumnos leen en pantalla, el rango cómodo es 60–75. Se soluciona con `EL1` (contenedor) o, como mínimo:

```css
vf-text p, blockquote, .block li { max-width: 68ch; }
```

### `ET2` 🟠 No hay escala tipográfica

En los 765 líneas de CSS sólo hay cinco declaraciones de `font-size`, y ninguna para `h1`–`h4`: todo son los valores por defecto de Bootstrap 4. Consecuencias: el salto `h2`(2rem) → `h3`(1.75rem) es de sólo un 14%, casi imperceptible, y como cada nivel tiene además un fondo distinto, la jerarquía la lleva **el color** en vez del tamaño. Si se aplica `EC3` (quitar fondos), hay que dar tamaños explícitos o los niveles dejan de distinguirse:

```css
:root {
  --fs-h1: clamp(2rem, 1.2rem + 3vw, 3.5rem);
  --fs-h2: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
  --fs-h3: 1.35rem;
  --fs-h4: 1.1rem;
}
.display-4        { font-size: var(--fs-h1); }
.block_h2, h2     { font-size: var(--fs-h2); }
.block_h3, h3     { font-size: var(--fs-h3); }
h4                { font-size: var(--fs-h4); }
```

El `clamp()` resuelve de paso `EM3`.

### `ET3` 🟡 Interlineado corto para texto largo

`line-height` heredado de Bootstrap: 24px sobre 16px = 1.5. Para párrafos didácticos largos, 1.6–1.7 se lee bastante mejor. `body { line-height: 1.65 }`, y `1.25` para los encabezados (que con 1.5 quedan demasiado sueltos cuando ocupan dos líneas, como "Intel·ligència artificial" en `unitats/index.html`).

### `ET4` 🟡 Los títulos son barras vacías

Con `vf-title level="2"`, un título de tres palabras genera un rectángulo de color de 1400×100px con el texto pegado al borde izquierdo y el 85% del ancho vacío. Es mucho peso visual para poca información. Con `EC3` desaparece; si se quieren conservar los fondos, al menos limitar el ancho de la barra al del contenedor de texto y darle `padding` simétrico.

---

## 4. Layout y ritmo vertical

### `EL1` 🔴 Falta el contenedor

Es el cambio más rentable de todo el informe. Nada en el sitio limita el ancho, así que en cualquier monitor moderno el contenido se estira de borde a borde.

```css
#content {
  max-width: 1140px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}
```

Efectos secundarios buenos: los `.block` dejan de tocar los bordes de la ventana, las filas de tarjetas dejan de quedar tan dispersas, y las barras de título dejan de tener 800px de vacío a la derecha.

Cuidado: hay que comprobar `.vf-frame-full` (`width:100%; height:80vh`) y las páginas de escape room, que sí pueden querer todo el ancho. Se resuelve con una clase de escape:

```css
.full-bleed { width: 100vw; margin-inline: calc(50% - 50vw); }
```

### `EL2` 🟠 Tarta de capas

Todos los elementos de bloque son rectángulos del mismo ancho apilados, separados por `margin-bottom: 1.5rem` idéntico. No hay ninguna variación de ritmo: el ojo no encuentra dónde empieza una sección. Con `EL1` + `EC3` mejora mucho; además conviene un ritmo vertical que agrupe título con su contenido:

```css
.block            { margin-bottom: 1rem; }      /* dentro de la sección: junto */
.block_h2         { margin-top: 3rem; }         /* entre secciones: aire */
.block_h3         { margin-top: 2rem; }
```

Ahora mismo `.block_h1 { margin-top: 3em }` y `.block_h3 { margin-top: 1em }` existen pero `.block_h2` no tiene ninguno, así que el `h2` queda igual de separado de la sección anterior que del texto que introduce.

### `EL3` 🟠 Las filas de tarjetas quedan desalineadas

En `index.html`, la última fila ("Ferramentes / Escape rooms / Formació docent") tiene tres tarjetas de imágenes con proporciones muy distintas (PNG transparente 314×247, foto 1343×509, ilustración apaisada). Sin altura ni recorte comunes, la tercera cae sola a una segunda línea, centrada y huérfana, y sus botones no se alinean entre sí.

```css
.vf-card-img {
  aspect-ratio: 16 / 10;
  object-fit: cover;
  width: 100%;
  border-radius: 12px;
}
vf-row { align-items: stretch; }
```

Es también lo que resuelve `EP1` (componente `vf-card`).

### `EL4` 🟠 Los botones son barras a todo ancho

`.btn-primary { width: calc(100% - 4vh); display: block; }`. Cada botón ocupa todo el ancho de su columna, así que "1 ESO" en `index.html` es una barra de 340px con dos caracteres dentro, y "Accedeix a les unitats" ocupa media pantalla. El tamaño del botón acaba dependiendo del contenedor, no de su importancia.

Invertir el valor por defecto: botón ajustado al contenido, y `.btn-block` explícito cuando de verdad se quiera a todo ancho.

```css
.btn-primary {
  display: inline-block;
  width: auto;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
}
.btn-block-full { display: block; width: 100%; }
```

Esto cambia el aspecto de 287 botones, así que conviene mirarlo página a página o, más seguro, introducirlo como clase nueva (`btn-auto`) y migrar por secciones. `btn-short` ya hace algo parecido (`width: fit-content`) y se usa en `cursos/*.html`: en realidad la propuesta es **hacer que `btn-short` sea el comportamiento por defecto**.

### `EL5` 🟡 Márgenes en `vh`

`.btn-primary { margin: 2vh auto }` y `width: calc(100% - 4vh)`: la separación vertical y el ancho de los botones cambian según la **altura** de la ventana. En una pantalla de portátil apaisada los botones se pegan; en un monitor vertical se separan. `rem` para ambos.

### `EL6` 🟡 El `hr` no se usa y el separador real es el hueco

`vf-hr` existe (`width:90%`, 2px sólidos de color) pero apenas aparece en el contenido. Como los bloques ya vienen en tarjetas, un `hr` violeta a todo ancho añade ruido. Sugerencia: convertirlo en separador discreto (`height:1px; background: var(--main-color-light); width: 40%`) o dejarlo para separar unidades didácticas dentro de un mismo bloque.

---

## 5. Móvil y responsive

### `EM1` 🔴 El menú fijo tapa el título en todo lo que baje de 992px

Medido a 500px de ancho: `#menu` (fijo) mide **101,6px** de alto; `#content` reserva `margin-top: 5em` = **80px**. El jumbotron empieza en y=80 y el menú acaba en y=101,6: **21,6px del título quedan debajo de la barra**. Se ve en cualquier página interna en móvil. Como `.navbar-expand-lg` colapsa por debajo de 992px, afecta a móviles y tablets, que es donde más se consulta el sitio.

La causa es que la altura del menú es variable (marca larga + botón hamburguesa que caen en dos filas) y el margen es fijo. Dos arreglos, mejor los dos:

```css
/* 1. que el navbar no crezca: marca más compacta en móvil */
@media (max-width: 991.98px) {
  .navbar-brand { font-size: 1rem; }
  .navbar-brand img { height: 24px; }
  .navbar { padding: 0.4rem 0.75rem; }
}

/* 2. que el margen se calcule solo */
:root { --menu-h: 64px; }
#content { margin-top: calc(var(--menu-h) + 1.5rem); scroll-margin-top: var(--menu-h); }
```

Y en `header.html`, tras cargar el menú, medir y publicar la altura real:

```js
const m = document.getElementById('menu');
if (m) {
  const set = () => document.documentElement.style
      .setProperty('--menu-h', m.offsetHeight + 'px');
  set();
  new ResizeObserver(set).observe(m);
}
```

Ese `scroll-margin-top` arregla de paso otro defecto: al pulsar una entrada del índice o abrir un `#hash`, el título de destino queda ahora mismo justo debajo del menú, medio tapado.

### `EM2` 🔴 Una sola media query en todo el CSS

`grep -c "@media" styles/*.css` → `general.css: 1`, el resto a cero. Todo lo demás está calculado para escritorio. Lo mínimo que falta:

```css
@media (max-width: 767.98px) {
  .block, .block_colored, .block_black { padding: 1.25rem 1rem; }
  .jumbotron { padding: 2rem 1rem; margin-top: 1rem; }
  .col { padding: 8px; }
  .col-unit { margin: 8px 0; padding: 14px; }
  blockquote { margin-inline: 0; }
  blockquote.conversation_me,
  blockquote.conversation_other { max-width: 90%; margin-inline: 0; }
  #escaperoom { margin-inline: 0; gap: 16px; }
  .vf-frame-full { height: 60vh; }
  #scrollToTopBtn { width: 44px; height: 44px; bottom: 12px; right: 12px; font-size: 20px; }
}
```

El primero es el que más se nota: `.block` mantiene hoy `padding: 2rem 3.5rem`, o sea **112px de padding lateral en una pantalla de 500px** — el 22% del ancho perdido antes de escribir nada.

### `EM3` 🟠 Los títulos no se encogen

`.display-4` de Bootstrap 4 son 3.5rem fijos = **56px medidos en una ventana de 500px**. "Digitalització saludable" o "Intel·ligència artificial" a 56px en un móvil ocupan tres líneas y media pantalla. Se arregla con el `clamp()` de `ET2`.

### `EM4` 🟠 La marca del menú no cabe

"Vicent Forner - Professor d'Informàtica" a 1.4rem + logo de 30px no cabe en 500px: el texto llena la fila entera y la hamburguesa cae debajo, dejando un navbar de dos filas (la causa de `EM1`). Además de reducir el cuerpo (`EM1`), conviene acortar el texto en pantallas pequeñas:

```html
<a class="navbar-brand" href="index.html">
  <img src="assets/logo.png" alt="" height="30">
  <span class="d-none d-sm-inline">Vicent Forner - Professor d'Informàtica</span>
  <span class="d-sm-none">Vicent Forner</span>
</a>
```

### `EM5` 🟡 Las columnas fuerzan scroll horizontal

`vf-col.col-min-400px { min-width: 400px }` y los 93 `styles="width:20em"` (320px) no se reducen en móvil. Con el padding de `.col` (15px) y el de `.block` (56px), una columna de 400px necesita 512px de ventana. Convertir los mínimos en `min(400px, 100%)`:

```css
vf-col.col-min-200px { min-width: min(200px, 100%); }
vf-col.col-min-300px { min-width: min(300px, 100%); }
vf-col.col-min-400px { min-width: min(400px, 100%); }
```

---

## 6. Bloques y componentes

### `EB1` 🔴 La tarjeta de unidad se desmonta al pasar el ratón

En `unitats/index.html`, `.col-unit:hover` pone `background: var(--gradient-primary)` en toda la tarjeta. Pero el `h2` de dentro es `.block_colored`, o sea **el mismo gradiente**: al hacer hover el título desaparece dentro del fondo. Y los `<li>` de la lista quedan en `--black-color` sobre violeta. Comprobado en pantalla: la tarjeta pasa de "título destacado + lista legible" a "mancha violeta".

Arreglo mínimo:

```css
.col-unit:hover .block_colored {
  background: rgba(255, 255, 255, 0.18);
  box-shadow: none;
}
.col-unit:hover .list-unit li { color: var(--white-color); }
```

Mejor todavía, con `EC3` aplicado el `h2` deja de tener fondo y el problema no existe.

### `EB2` 🟠 No se distingue el título de la tarjeta del botón

Misma página, y también `index.html`: `h2.block_colored` y `.btn-primary` comparten gradiente, radio y sombra. Visualmente idénticos, pero uno es un encabezado y el otro una acción. Los alumnos no tienen forma de saber dónde pulsar (en realidad, en `unitats/index.html` es la tarjeta **entera** la que enlaza, cosa que tampoco se comunica). Sugerencias:

- Aplicar `EC3` (títulos sin fondo).
- Dar a la tarjeta enlazada una señal explícita: cursor `pointer`, un `↗` o `→` en la esquina, y `outline` en `:focus-visible`.

### `EB3` 🟠 El botón de copiar código es invisible

`vf-code .vf-icon { color: var(--shadow-color) }` = `rgba(139,127,199,0.3)`, sobre `.code_block { background: #f8f9fa }`. Ratio aproximado 1.3:1 — hay que saber que está para verlo. Es la misma clase `.vf-icon` que se usa en `vf-title`, donde tampoco destaca. Darle color propio:

```css
.vf-icon { color: var(--grey-color); opacity: .55; }
.vf-icon:hover, .vf-icon-btn:hover .vf-icon { opacity: 1; color: var(--main-color-dark); }
```

### `EB4` 🟠 Los bloques de código quedan huérfanos

`vf-code { width: fit-content; min-width: 250px }`: un `SELECT` corto genera una cajita de 320px pegada a la izquierda de un bloque de 1140px. En una página con varios `vf-code` de longitudes distintas, el margen derecho queda dentado. Además el tema de highlight.js es el `default.min.css` (rojos, azules y verdes saturados), que choca con la paleta violeta.

```css
vf-code { width: 100%; max-width: 68ch; }   /* alineado con el texto (ET1) */
.pre_code { overflow-x: auto; }             /* líneas largas: scroll, no desbordar */
```

Y valorar cambiar el tema de highlight a uno de bajo contraste cromático (`github.min.css` o `atom-one-light.min.css`), que conviven mejor con el violeta y siguen siendo legibles proyectados.

### `EB5` 🟡 `blockquote` centrado con `margin-inline: 30px`

Los `blockquote` normales llevan `margin-inline: 30px` fijo, así que dentro de un `.block` que ya tiene 56px de padding acaban a 86px del borde en escritorio y a 46px en móvil (donde sobra). Pasarlo a `margin-inline: 0` en móvil (`EM2`) y a un valor relativo en escritorio.

Los de conversación (`conversation_me`/`conversation_other`) están bien resueltos y son de lo más logrado del sitio: burbuja verde a la derecha, violeta a la izquierda. Merecería la pena **reutilizar ese lenguaje** en otros sitios (ver `EP2`).

### `EB6` 🟡 Las imágenes no tienen tratamiento común

467 `<vf-img>` en el sitio, con `styles="max-height:200px"` repetido 144 veces y `max-width:400px` 34 veces. Sin recorte ni proporción común, y con orígenes muy distintos (capturas, fotos de stock, ilustraciones planas), las rejillas quedan irregulares. Además `vf-img` sólo añade `.my-3 .center`, sin borde ni sombra por defecto: unas imágenes llevan `boxshadow` y otras no, según la página.

Propuesta: dos clases y ninguna decisión más en el HTML.

```css
.vf-img { border-radius: 10px; }
.vf-img-card  { aspect-ratio: 16/10; object-fit: cover; width: 100%; box-shadow: 0 2px 10px var(--shadow-soft); }
.vf-img-plain { max-width: 100%; height: auto; }  /* capturas: sin recortar */
```

### `EB7` 🔵 `vf-content colored` casi no se usa

Sólo 8 apariciones de `<vf-content colored>` frente a 512 `<vf-content>`. Es la única forma que hay hoy de destacar un bloque, y produce un bloque violeta lleno donde el texto negro no se lee bien. Es el hueco que llena `vf-callout` (`EP2`).

---

## 7. Índice de página

### `EI1` 🟠 El índice ocupa una pantalla entera

Medido en `unitats/programacio/web/css/index.html`: el `#vf-index` mide **748px de alto** en una ventana de 900px. El lector abre la página y lo primero que ve, entero, es el índice; el contenido queda fuera de pantalla. Con 12 entradas y una por línea es inevitable.

```css
#vf-index {
  background: var(--light-grey);          /* ver EC3: fuera el gradiente */
  border: 1px solid var(--main-color-light);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  columns: 2;                             /* dos columnas en escritorio */
  column-gap: 2rem;
}
@media (max-width: 767.98px) { #vf-index { columns: 1; } }
.vf-index-1, .vf-index-2, .vf-index-3, .vf-index-4 {
  color: var(--main-color-dark);
  break-inside: avoid;
  padding: 6px 10px;
  width: auto;
}
```

Con dos columnas y padding menor, esas 12 entradas bajan de 748px a unos 260px.

### `EI2` 🟠 El escalón de sangrado es desproporcionado

`.vf-index-1..4` sangran al `5% / 10% / 15% / 20%` del ancho. En un monitor de 1400px eso son saltos de 70px por nivel, y como el borde izquierdo blanco se dibuja en cada entrada, el conjunto queda como una escalera rota (se ve en la captura del índice de CSS: los bordes de nivel 2 y de nivel 3 no se alinean entre sí). Con sangrado en `em` el escalón es proporcional al texto y los bordes forman una guía continua:

```css
.vf-index-1 { margin-left: 0; }
.vf-index-2 { margin-left: 1.5em; }
.vf-index-3 { margin-left: 3em; }
.vf-index-4 { margin-left: 4.5em; }
```

### `EI3` 🟠 El título "Índex" es violeta sobre violeta

El generador de `header.html` inserta un `<vf-title level="2">Índex</vf-title>` dentro de `#vf-index`. Como `level="2"` es `.block_colored`, queda un rectángulo violeta claro sobre el fondo violeta del índice: se ve en `components/test.html` y en todas las páginas con índice. Con `EC3` desaparece; mientras tanto, `#vf-index .block_colored { background: none; box-shadow: none; }`.

### `EI4` 🟡 Sólo 9 de 207 páginas tienen índice

Hay **46 páginas con 5 o más títulos de nivel 2/3 que no llevan `#vf-index`**, entre ellas `unitats/programacio/web/js/09-objectes.html` (20 títulos), `08-llistes.html` y `07-funcions.html` (16 cada una), `unitats/programacio/web/php/04-control-structures.html` (14). Son páginas de scroll muy largo sin ninguna ayuda de navegación. No es un cambio de CSS: es añadir una línea al HTML de esas 46 páginas. Con `EI1` aplicado (índice compacto) el coste visual de añadirlo es bajo.

### `EI5` 🔵 Índice lateral fijo

Para las páginas más largas, la mejora de verdad es un índice pegajoso en columna lateral (`position: sticky; top: var(--menu-h)`) que marque la sección actual con `IntersectionObserver`. Es el patrón habitual en documentación técnica y encaja con el tipo de contenido. Coste: ~40 líneas de JS en `header.html` y una media query para plegarlo a la disposición actual por debajo de 992px.

---

## 8. Navegación, menú y footer

### `EN1` 🟠 El menú no indica en qué página estás

Los cinco enlaces (`Inici`, `Unitats`, `Cursos`, `Ferramentes`, `Contacte`) se ven idénticos siempre. Como `menu.html` se inyecta con jQuery en todas las páginas, basta con marcar el activo al cargarlo:

```js
$('#menu').load('menu.html', function () {
  const here = location.pathname.split('/').filter(Boolean)[0] || 'index.html';
  $('#menu .nav-link').each(function () {
    if (this.getAttribute('href').replace('.html','').startsWith(here.replace('.html','')))
      this.classList.add('active');
  });
});
```

```css
.nav-link.active { background: rgba(255,255,255,.22); font-weight: 700; }
```

### `EN2` 🟠 El botón "subir" aparece demasiado pronto y salta

`footer.html` lo muestra a partir de `scrollTop > 20` (o sea, casi inmediatamente) y alterna `display: none/block`, lo que hace que aparezca y desaparezca de golpe. Además, `55×55px` con `bottom/right: 25px` se solapa con el contenido en pantallas estrechas (visible en las capturas de `index.html` a 500px).

```js
const show = () => scrollToTopBtn.classList.toggle('is-visible', scrollY > 400);
addEventListener('scroll', show, { passive: true });
```

```css
#scrollToTopBtn { display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
#scrollToTopBtn.is-visible { opacity: 1; pointer-events: auto; }
```

(Nota: el `display: none` inicial hay que quitarlo del CSS para que la opacidad funcione.)

De paso, el `addEventListener('scroll')` actual no es pasivo y escribe `style.display` en cada evento.

### `EN3` 🟡 El footer está vacío

Una franja violeta de 1.5rem con "Powered by Vicent Forner 2023" — año congelado, sin enlaces. Es lo último que ve el visitante y no ofrece nada. Propuesta: tres columnas (Seccions / Contacte / Llicència i font), el año generado con JS, y enlace a la licencia de uso de los materiales, que ya se menciona en `index.html` ("es poden utilitzar sempre i quan s'anomene aquesta font") pero no está enlazada en ninguna parte.

### `EN4` 🟡 El menú se despliega debajo del contenido en móvil

`#menu` es `position: fixed` con `z-index: 1000` y `.dropdown-menu` hereda el contexto; con `EM1` conviene revisar que el `collapse` desplegado no empuje ni tape el jumbotron. Comprobarlo tras aplicar `EM1`.

---

## 9. Sistema de diseño

### `ES1` 🟠 No hay escala de espaciado

Valores usados hoy, todos a mano: `2rem 3.5rem`, `1.5rem`, `3rem`, `25px 0`, `20px`, `15px`, `12px`, `10px 15px`, `2vh`, `5em`, `3em`, `1em`, `5%`, `10%`, `30px`. Nada es múltiplo de nada. Basta con seis tokens y usarlos:

```css
:root {
  --space-1: .25rem; --space-2: .5rem;  --space-3: 1rem;
  --space-4: 1.5rem; --space-5: 2rem;   --space-6: 3rem;
}
```

### `ES2` 🟡 Radios y sombras sin escala

Radios en uso: 3, 5, 8, 10, 12, 15px y 50%. Sombras: siete combinaciones distintas de desenfoque/opacidad. Tres de cada bastan:

```css
:root {
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;
  --elev-1: 0 1px 3px rgba(42,42,42,.08);
  --elev-2: 0 4px 12px rgba(42,42,42,.10);
  --elev-3: 0 8px 24px rgba(109,95,179,.22);
}
```

### `ES3` 🟠 El estilo vive en el HTML

Recuento real de atributos `styles=` en los 207 HTML:

| Valor | Veces |
|---|---|
| `styles=""` (vacío) | 289 |
| `styles="max-height:200px"` | 144 |
| `styles="width:20em"` | 93 |
| `styles="max-width:400px"` (con y sin `;`) | 34 |
| `styles="width: 50%;min-width: 200px;"` | 8 |
| resto | ~15 |

Los tres primeros son en realidad **tres clases**: la tarjeta de curso (`width:20em`), su imagen (`max-height:200px`) y la imagen de sección (`max-width:400px`). Definirlas en `general.css` y sustituir es un `sed` por fichero, y a partir de ahí el aspecto de las 200 páginas se cambia desde un sitio. Los 289 `styles=""` vacíos son ruido puro y se pueden borrar sin efecto.

### `ES4` 🟡 `transition: all`

Aparece en 20 reglas. Anima también propiedades que no se quieren animar (y en `.col-unit:hover`, que cambia `background`, `border-color`, `box-shadow` y `transform` a la vez, provoca repintados de toda la tarjeta). Listar las propiedades: `transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease`.

---

## 10. Accesibilidad visual

### `EA1` 🔴 464 de 467 imágenes sin texto alternativo

`vf-img` ya soporta `alt`, pero sólo 3 de las 467 apariciones lo usan; el componente pone `alt=""` cuando falta, así que todas se anuncian como decorativas. Muchas de esas imágenes **son** el contenido (capturas de App Inventor, esquemas, enunciados de ejercicios). No es un cambio de CSS, es trabajo de contenido, pero conviene registrarlo: en un sitio educativo público es lo primero que se audita.

Paso intermedio barato: hacer que `vf-img` avise en consola cuando falte `alt` y no sea una imagen marcada como decorativa (`alt=""` explícito), igual que ya hace con `src`.

### `EA2` 🟠 No hay indicador de foco salvo en dos iconos

`.vf-icon-btn:focus-visible` es la única regla de foco del sitio. Los 287 botones, los enlaces del menú, las tarjetas enlazadas (`.vf-col-link`) y las entradas del índice no muestran nada al navegar con teclado — y como `a:hover { text-decoration: none }` está forzado globalmente, tampoco hay señal al pasar el ratón.

```css
:where(a, button, .vf-index-1, .vf-index-2, .vf-index-3, .vf-index-4):focus-visible {
  outline: 3px solid var(--main-color-dark);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### `EA3` 🟠 Las entradas del índice no son elementos interactivos

`header.html` genera `<div onclick="scrollToSection(...)">`. Un `div` no recibe foco, no aparece en la navegación por tabulador y no se anuncia como enlace. Cambiarlo por `<a href="#id">` (que además da el comportamiento nativo de "abrir en pestaña nueva", copiar dirección, etc.) y quitar el `onclick`; el `scroll-behavior: smooth` ya está en `html`, así que la animación se conserva sin JS.

### `EA4` 🟡 Sin `prefers-reduced-motion`

Todo el sitio anima: `transition: all .3s` en 20 reglas, `transform: translateY(-3px)` y `scale(1.05)` en hover, `scroll-behavior: smooth`. Para quien tenga activada la reducción de movimiento en su sistema (y en un instituto, para alumnado con sensibilidad vestibular o TDAH, no es un caso raro):

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

### `EA5` 🔵 Sin modo oscuro

No hay `color-scheme` ni ninguna regla `prefers-color-scheme`. Con toda la paleta ya en variables de `:root`, un modo oscuro es redefinir ~15 tokens dentro de una media query. No es urgente, pero es de lo más barato que se puede añadir dado cómo está montado el CSS. Requiere revisar el tema de highlight.js (`EB4`), que sí es claro fijo.

---

## 11. Componentes nuevos que faltan

### `EP1` 🟠 `vf-card` — tarjeta de recurso

El patrón "imagen + botón que enlazan al mismo sitio" se repite por todo `cursos/*.html` e `index.html`, escrito a mano cada vez con `styles="width:20em"` + `styles="max-height:200px"` + `classes="btn-short"`. Es la causa directa de `EL3` (filas desalineadas) y de la mitad de `ES3`.

```html
<vf-card link="unitats/ordinadors/gestio-arxius"
         img="assets/gestio-arxius.png"
         alt="Carpetes i fitxers ordenats">
    Gestió d'arxius
</vf-card>
```

Genera una tarjeta única: imagen recortada a proporción fija, título, área de pulsación completa, altura homogénea en la fila. Sustituye ~150 bloques de HTML repetido y arregla la desalineación de un plumazo.

### `EP2` 🟠 `vf-callout` — avisos y consejos

Un sitio didáctico necesita marcar "atenció", "recorda", "consell", "exercici", "errada habitual". Hoy la única herramienta es `<vf-content colored>` (8 usos, y produce un bloque violeta lleno de texto negro poco legible) o poner el texto en negrita.

```html
<vf-callout type="atencio">Recorda tancar sempre l'etiqueta.</vf-callout>
<vf-callout type="consell">Pots fer-ho més ràpid amb Ctrl+D.</vf-callout>
<vf-callout type="exercici">Fes ara els exercicis 1 a 5.</vf-callout>
```

Cuatro variantes, cada una con su color de borde izquierdo e icono de FontAwesome (que ya está cargado). Es el componente que más cambiaría la lectura de las unidades largas, donde ahora mismo todo el texto tiene exactamente el mismo peso.

### `EP3` 🟡 `vf-details` — solución plegable

Muchas páginas de ejercicios llevan el enunciado y la solución seguidos, o la solución en una página aparte. Un `<details>` nativo, estilizado con la paleta, permite "Mostra la solució" sin JS y sin duplicar páginas.

### `EP4` 🔵 `vf-steps` — pasos numerados

Los tutoriales (App Inventor, WordPress, Moodle) son secuencias de "paso + captura". Ahora se escriben como `vf-title level=4` + `vf-img` sueltos, sin numeración visual ni conexión entre pasos. Un componente de pasos con número en círculo y línea vertical de continuidad daría estructura a docenas de páginas.

### `EP5` 🔵 `vf-badge` — etiqueta de nivel

Para marcar en las tarjetas de unidad a qué cursos corresponde cada una (`1r ESO`, `2n BAT`, `SMX`). Hoy la relación curso↔unidad sólo existe navegando desde `cursos/`, no desde `unitats/`.

---

## 12. Plan de aplicación sugerido

Ordenado por relación impacto/riesgo. Cada tanda es independiente y se puede revisar por separado.

| Tanda | IDs | Qué se consigue | Riesgo |
|---|---|---|---|
| **1** | `EL1`, `ET1`, `ET3` | Contenedor y medida de línea. Es el cambio que más se nota y toca sólo `#content`. | Bajo. Revisar `vf-frame-full` y escape rooms. |
| **2** | `EM1`, `EM2`, `EM3`, `EM4`, `EM5` | El sitio deja de estar roto en móvil. | Bajo. Sólo añade media queries y una variable. |
| **3** | `EC1`, `EC2`, `EA2`, `EA4` | Contraste y foco. Accesibilidad mínima. | Medio: cambia el tono del violeta en todo el sitio. Conviene verlo en una página antes de confirmar. |
| **4** | `EC3`, `EC4`, `ET2`, `EL2`, `EB1`, `EB2`, `EI3` | Jerarquía visual: se acaban la tarta de capas y el "todo violeta". | **Alto impacto visual.** Es el cambio de aspecto de verdad; hay que quererlo. |
| **5** | `EI1`, `EI2`, `EA3`, `EI4` | Índice compacto, navegable con teclado, y en las 46 páginas largas que no lo tienen. | Bajo. |
| **6** | `EB3`, `EB4`, `EB5`, `EB6`, `EN1`, `EN2`, `EN3` | Acabado: código, imágenes, menú activo, footer. | Bajo. |
| **7** | `ES1`, `ES2`, `ES3`, `ES4`, `EC5` | Tokens y limpieza de `styles=` en el HTML. | Medio por volumen (200 ficheros), nulo en riesgo visual si se hace tras la tanda 4. |
| **8** | `EP1`, `EP2` | Los dos componentes que faltan de verdad. | Medio: componentes nuevos + migración progresiva. |
| **9** | `EL4`, `EL5`, `EA1`, `EI5`, `EP3`, `EP4`, `EP5`, `EA5`, `EB7` | Resto. | Variable. |

**Si sólo se va a hacer una cosa:** la tanda 1 (`EL1`). Un contenedor de 1140px centrado arregla por sí solo la medida de línea, el vacío de las barras de título, la dispersión de las rejillas de tarjetas y la sensación de que el contenido "flota".

**Si se van a hacer dos:** tanda 1 y tanda 2. El sitio se consulta desde móviles de alumnos, y ahora mismo el menú tapa el título de cada página.

---

## 13. Lo que está bien y no hay que tocar

Para que la lista de arriba no dé una impresión equivocada:

- **La identidad visual funciona.** El violeta suave es distinguible, poco común en sitios educativos y nada agresivo. El problema es la dosis, no el color.
- **El lenguaje de interacción es coherente en todo el sitio**: `translateY(-2px/-3px)` + sombra que crece. Se aplica igual en botones, bloques, tarjetas e índice. Eso no es fácil de conseguir y conviene mantenerlo (afinando la duración y respetando `prefers-reduced-motion`).
- **Las burbujas de conversación** (`conversation_me` / `conversation_other`) son el mejor componente visual del sitio: reconocibles al instante, con buen contraste (10.4:1 y 9.1:1) y bien resueltas en `width: fit-content; max-width: 75%`.
- **El icono de copiar enlace de `vf-title`**, que aparece en hover y en `:focus-within`, es un detalle de acabado por encima de lo habitual en un sitio de estas características.
- **Todo el color ya está en variables CSS.** Es lo que hace que las propuestas `EC1` y `EA5` sean de cinco líneas en vez de un rediseño.

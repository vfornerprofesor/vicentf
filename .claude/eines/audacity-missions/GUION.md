# Agència Orella — guion de grabación (Audacity, projecte còmic)

Grabaciones en castellano. Graba cada archivo "limpio" (sin efectos) y guárdalo en
`.claude/eines/audacity-missions/brut/` con el nombre exacto indicado (la extensión da
igual: `.wav`, `.mp3`, `.m4a`, `.ogg`...). Después ejecuta:

```bash
bash .claude/eines/audacity-missions/preparar.sh
```

El script deja los recursos finales (ya "estropeados" cuando toca) en
`assets/projectes/comic/audio/audacity/missions/`, que es donde apunta `audacity.html`.

Consejos generales:

- Voces reales (tú, compañeros, alumnado de otros cursos) hacen más gracia que la IA.
  Si usas IA: ElevenLabs (voces + generador de efectos) o cualquier TTS en castellano.
- Para la misión 1 conviene tener **dos voces distintas** (A y B).
- Habla con exageración, como un actor de doblaje. Cuanto más teatral, mejor.
- Deja ~0,5 s de silencio al principio y al final; el script recorta lo que sobre.

---

## Misión 1 — Mensajes cortados (dividir y unir audios)

Parte 1, conversación: `m1_A` (todas las frases del ladrón A) y `m1_B` (todas las del B).
El alumnado las divide con Ctrl+I y las intercala. Palabra clave: CROQUETA.

Parte 2, canción: palabras sueltas desordenadas, repartidas entre dos voces.
Queen, *Bohemian Rhapsody*: «Is this the real life? Is this just fantasy?»

`m1_cancion_1` (voz 1):
```
fantasy. [pause] [pause] real. [pause] [pause] is. [pause] [pause] the.
```
`m1_cancion_2` (voz 2):
```
life. [pause] [pause] just. [pause] [pause] this. [pause] [pause] is. [pause] [pause] this.
```
Solución: Is this the real life? Is this just fantasy? → Queen, Bohemian Rhapsody.

---

## Misión 2 — Llamada desde la fábrica (reducción de ruido)

Archivo: `m2_informador`. Voz nerviosa, con prisa. La hora y la contraseña dilas
**más flojito** (así sin limpiar cuesta entenderlas). El script añade 2 s de solo ruido
al principio (para el perfil) y un zumbido + ruido rosa constante encima.

> Agente... ¿me oye? Aquí el informador. No tengo mucho tiempo, las máquinas hacen muchísimo
> ruido. Apunte bien: nos vemos el jueves a las *diecisiete cuarenta y cinco*, al lado de la
> fuente del patio. La contraseña es... *pingüino*. Repito: *pingüino*. Corto y cierro.

**Respuestas:** 17:45 · fuente del patio · PINGÜINO

---

## Misión 3 — El locutor desastre (borrar fallos e insertar)

Archivo: `m3_noticias`. Una sola toma con los fallos **de verdad** (tos, estornudo, móvil
sonando con tu tono real, "eeeh"). Donde pone [HUECO] deja **2 segundos en silencio**.

> Buenos días, Betxí. Aquí Radio Oreja con las noticias de hoy. *(tos fuerte)* Perdón.
> El tiempo: hoy hará sol por la mañana, pero por la tarde caerán... [HUECO] ...sobre toda
> la comarca. *(estornudo)* Eeeh... eeeh... *(suena el móvil)* ¡Ay, perdón, es mi madre!
> *(cuelga)* Recuerden llevar paraguas. ¡Hasta mañana!

Opciones para el hueco (un archivo cada una, misma voz):

| Archivo        | Texto |
|----------------|-------|
| `m3_opcion_1`  | pizzas congeladas |
| `m3_opcion_2`  | gotas de lluvia |
| `m3_opcion_3`  | profesores de matemáticas |

**Solución:** opción 2. Deben quitar tos, "perdón", estornudo, "eeeh", móvil y "es mi madre".
(Si eligen otra opción y queda gracioso, se puede valorar igual 😉.)

---

## Misión 4 — El laboratorio de voces (tono, invertir, velocidad)

Los archivos finales se llaman `m4_mensaje_1/2/3` sin pista del efecto: el alumnado tiene
que descubrir cuál aplicar.

| Archivo grabado | Texto (grábalo normal) | El script hace | Alumnado debe |
|-----------------|------------------------|----------------|---------------|
| `m4_reves`   | La llave está debajo de la maceta. | invertir → `m4_mensaje_1` | *Efecte > Inverteix* |
| `m4_lento`   | El tesoro está en el gimnasio, detrás de las colchonetas. | 60 % velocidad (lento y grave) → `m4_mensaje_2` | *Canvia la velocitat* ≈ +67 % |
| `m4_ardilla` | Mañana no hay examen... ¡Es broma! Sí que hay. | 170 % velocidad (rápido y agudo) → `m4_mensaje_3` | *Canvia la velocitat* ≈ −41 % |
| `m4_villano` | Nadie puede detenerme. ¡Ja, ja, ja, ja! | nada → `m4_villano` | crear versión malvado (tono −5…−8 + eco) y robot/duende (tono +6…+10) |

**Palabra clave:** MACETA (del mensaje 1). Los otros dos sirven para comprobar que lo han hecho.

---

## Misión 5 — Terror en 30 segundos (efectos de sonido)

Archivo: `m5_narrador`. Voz de cuentacuentos misterioso. Donde pone [x s] deja ese
silencio para que metan el efecto.

> Era una noche de tormenta... [3 s — truenos y lluvia]
> Estaba solo en casa cuando oí pasos en la escalera... [3 s — pasos]
> Me acerqué a la puerta del desván. Se abrió muy, muy despacio... [3 s — chirrido]
> Y entonces, en la oscuridad, vi dos ojos brillantes... [2 s — maullido / grito]
> Era el gato de la vecina. Otra vez.

---

## Misión 6 — Cuña de radio (filtro radio/teléfono + envolvente de volumen)

| Archivo        | Voz | Texto |
|----------------|-----|-------|
| `m6_locutor_1` | locutor entusiasta | ¿Estás harto de los deberes? ¿Te aburren las mates? ¡Llega DEBERESBOT, el robot que hace los deberes por ti! Escucha lo que dicen nuestros clientes: |
| `m6_cliente`   | cliente feliz (por teléfono) | Hola, yo lo compré la semana pasada y ahora ya sé que dos más dos son... ¿pez? |
| `m6_locutor_2` | locutor | DEBERESBOT. Porque suspender también es un arte. Disponible en tiendas que no existen. |
| `m6_musica`    | — | Música alegre sin derechos de [Pixabay Music](https://pixabay.com/music/) (estilo "upbeat"/"commercial"), 30-60 s. |

El alumnado: filtro teléfono al cliente, música de fondo que baja cuando hablan y sube al
principio y al final.

# Unitat "Programming with JavaScript" — especificació de canvis per a la web

Destinatari: `vf-web`. Font pedagògica: la SA "La meua primera aplicació" (2n CFGM SMX, Introducció a la programació).

Contingut per a l'alumnat **en anglés**, amb el to i els components de les lliçons actuals (`vf-title` de nivell 2 per apartat, `vf-text`, `vf-code language="javascript"`, `vf-callout type="exercici" | "consell" | "atencio"`, `vf-details` per a les poques solucions, botons anterior / índex / següent al final). En aquest document, els blocs de text per a l'alumnat estan en anglés; les instruccions per a `vf-web`, en valencià.

Convencions dins dels blocs:

- `## Títol` → `vf-title level="2"`.
- `> **Tip:**` → `vf-callout type="consell"`; `> **Watch out:**` → `vf-callout type="atencio"`.
- `**Exercise N.M.**` → `vf-callout type="exercici"`.
- `*paraula*` → èmfasi com en les lliçons actuals.

---

## 1. Nova estructura de la unitat

Les lliçons es reordenen per resultats d'aprenentatge (RA): cada part acaba amb la prova del seu RA. Les lliçons existents conserven l'ordre relatiu; les noves s'hi intercalen. Proposta: **renumerar tots els fitxers** perquè el número coincidisca amb l'ordre.

| Nou fitxer | Origen | Part |
|---|---|---|
| `01-first-program.html` | igual | Part 1 — The basics (RA1) |
| `02-variables.html` | igual | Part 1 |
| `03-operators.html` | igual + avís de prova RA1 | Part 1 |
| `04-dom.html` | igual | Part 2 — Control the flow (RA3) |
| `05-conditions.html` | igual | Part 2 |
| `06-loops.html` | igual | Part 2 |
| `07-functions.html` | igual, sense "Test 1" ni "Mini-project 1" | Part 2 |
| `08-debugging.html` | **nova** (N1) | Part 2 |
| `09-errors.html` | **nova** (N2) + Mini-project 1 + avís de prova RA3 | Part 2 |
| `10-arrays.html` | antiga `08-arrays.html` + apartat nou (N3) | Part 3 — Working with data (RA6) |
| `11-objects.html` | antiga `09-objects.html` | Part 3 |
| `12-array-methods.html` | **nova** (N4) | Part 3 |
| `13-regex.html` | **nova** (N5) | Part 3 |
| `14-collections.html` | **nova** (N6) | Part 3 |
| `15-json-xml.html` | **nova** (N7) + avís de prova RA6 | Part 3 |
| `16-events.html` | antiga `10-events.html` | Part 4 — Making it interactive (RA5) |
| `17-elements.html` | antiga `11-elements.html` | Part 4 |
| `18-forms.html` | antiga `12-forms.html`, sense "Test 2" | Part 4 |
| `19-localstorage.html` | antiga `13-localstorage.html` + apartat nou (N8) + avís de prova RA5 | Part 4 |
| `20-built-in-objects.html` | **nova** (N9) | Part 5 — Using objects (RA2) |
| `21-static-libraries.html` | **nova** (N10) + avís de prova RA2 | Part 5 |
| `22-classes.html` | **nova** (N11) | Part 6 — Your own classes (RA4) |
| `23-private-static.html` | **nova** (N12) | Part 6 |
| `24-inheritance.html` | **nova** (N13) | Part 6 |
| `25-modules.html` | **nova** (N14) + avís de prova RA4 | Part 6 |
| `26-project.html` | antiga `14-project.html` | Final project |
| `27-next.html` | antiga `15-next.html` | Final project |

En renumerar:

- Canviar també el número dels exercicis de les lliçons mogudes: antiga 8 → 10, 9 → 11, 10 → 16, 11 → 17, 12 → 18, 13 → 19 (p. ex. *Exercise 8.6* passa a *Exercise 10.6*).
- Moure les carpetes `exercises/` i `assets/unitats/programacio/web/javascript/` de les lliçons renumerades (`08-arrays` → `10-arrays`, `12-forms` → `18-forms`, `14-project` → `26-project`) i actualitzar-ne les rutes.
- Actualitzar els botons anterior/següent de totes les lliçons.
- Buscar en totes les lliçons `lesson \d+`, `exercise \d+\.\d+` i `mini-project` i corregir les referències. Les conegudes:
  - `07-functions.html`: "You have been using them since lesson 4" es manté.
  - `17-elements.html` (antiga 11): l'exercici 11.1 diu "Rewrite exercise 10.4" → "Rewrite exercise 16.4"; en el Mini-project 2, "that comes in lesson 13" → "lesson 19".
  - `19-localstorage.html` (antiga 13): l'exercici 13.3 parla del mini-project 2; es manté, però cal renumerar-lo.
- Únic enllaç extern a les lliçons fora de la unitat: `mejoras/2026_09_07_unitats_html_css_js.md` (document intern, sense canvis obligatoris).

### Arxius de partida nous

| Ruta | Contingut |
|---|---|
| `exercises/08-debugging/average.html` | Pàgina amb un camp de notes separades per comes, un botó i la funció `average(marks)` amb un error de lògica (la suma comença en 1). |
| `exercises/08-debugging/leap.html` | Funció `isLeapYear(year)` amb un error (oblida la regla dels 100 anys: dona `true` per a 1900). |
| `exercises/15-json-xml/books.json` | Catàleg de 4 llibres (`title`, `author`, `year`, `price`). |
| `exercises/15-json-xml/books.xml` | El mateix catàleg en XML (`<catalog><book><title>…`). |
| `exercises/21-static-libraries/dayjs.min.js` | Còpia local de Day.js, per si falla la connexió. |
| `exercises/24-inheritance/bank.html` | `BankAccount` de la lliçó 22 ja feta, per a començar els exercicis d'herència. |

---

## 2. Lliçons noves

### 08 — Testing and debugging (`08-debugging.html`)

Títol: **Testing and debugging**

## Two kinds of errors

A *syntax error* is a mistake in how the code is written: a missing `)`, a `}` in the wrong place, a word typed wrong. The browser refuses to run the file and shows a red message in the console.

A *logic error* is worse: the code runs, there is nothing red in the console, but the result is wrong. The average of 5 and 7 comes out as 6.5. The computer did exactly what you wrote; you wrote the wrong thing.

```javascript
// Syntax error: the browser stops here
const total = (5 + 7;

// Logic error: it runs, and gives 5.33 instead of 6
const average = 5 + 7 / 2;
```

## Reading an error message

```text
Uncaught ReferenceError: totl is not defined    script.js:12
```

Three things to read, always in this order:

- *The type*: `SyntaxError` (badly written), `ReferenceError` (a name that does not exist), `TypeError` (you used something the wrong way, e.g. `null.length`).
- *The message*: what went wrong, in plain English.
- *The line*: click on `script.js:12` and the browser takes you there.

> **Tip:** The line the browser shows is where it *noticed* the problem. Sometimes the real mistake is one or two lines above.

## Breakpoints: stopping the program

`console.log` is useful, but you have to guess where to put it. A *breakpoint* stops the program on a line and lets you look at every variable.

1. Open DevTools (F12) → tab *Sources* (Chrome) or *Debugger* (Firefox).
2. Open your `script.js` on the left.
3. Click on a line number. A blue mark appears: that is the breakpoint.
4. Do whatever runs that code (click the button). The program stops on that line.
5. Move with the buttons: *Step over* (F10) runs one line; *Step into* (F11) goes inside a function; *Resume* (F8) continues until the next breakpoint.
6. Hover over any variable to see its value, or look at the *Scope* panel.

You can also stop the program from your code with the word `debugger;`. It only stops when DevTools is open.

> **Watch out:** Remove every `debugger;` before you deliver your work.

## Assertions: tests that check themselves

An *assertion* says "this must be true". If it is true, nothing happens. If it is false, a red message appears in the console.

```javascript
function square(n) {
    return n * n;
}

console.assert(square(3) === 9, "square(3) should be 9");
console.assert(square(0) === 0, "square(0) should be 0");
console.assert(square(-2) === 4, "square(-2) should be 4");
```

For each function, test three kinds of case:

- a *normal* case (`square(3)`),
- an *edge* case, at the limit (`square(0)`),
- a *strange* case: negative numbers, empty text, an empty array (`square(-2)`).

Put your assertions at the end of the file, or in a separate `tests.js`. Every time you change a function, reload and look at the console: if nothing is red, you did not break anything.

## Documenting a function

A comment above each function says what it does. If you write it in *JSDoc* format, VS Code shows it when you hover over any call to that function.

```javascript
/**
 * Returns the biggest of three numbers.
 * @param {number} a - first number
 * @param {number} b - second number
 * @param {number} c - third number
 * @returns {number} the biggest one
 */
function biggest(a, b, c) {
    // ...
}
```

Type `/**` and press Enter above a function: VS Code writes the skeleton for you.

## Common mistakes

- Reading only the first word of the error and not the line.
- Writing assertions that test what the function *does* instead of what it *should do*: copy the expected value from your head, not from the console.
- Comments that repeat the code (`i++ // add one to i`). Explain *why*, not *what*.
- Forgetting `debugger;` or test `console.log`s in the delivered code.

## Exercises

**Exercise 8.1.** Put a breakpoint inside your function `biggest` from exercise 7.3. Call it with 4, 9 and 2 and go line by line with F10. Write a table with the value of `max` after each line.

**Exercise 8.2.** Download the starter file `average.html`. The average is wrong. Find the bug *with the debugger* (not by reading the code) and fix it. Above the line you fixed, write a comment saying what was wrong.

**Exercise 8.3.** Write three `console.assert` (normal, edge and strange case) for each of your functions `square`, `isEven` and `biggest` of lesson 7.

**Exercise 8.4.** Download `leap.html`. Write assertions for 2024, 2023, 2000 and 1900. One of them fails: use it to find the bug and fix the function.

**Exercise 8.5.** Write the JSDoc comment of every function of your calculator (exercise 7.4) and check that VS Code shows it when you hover over a call.

Sense solucions.

---

### 09 — Errors and exceptions (`09-errors.html`)

Títol: **Errors and exceptions**

## When things go wrong

Your code is correct, but the world is not: the user types "abc" where you expected a number, divides by zero, or leaves a field empty. Without control, you get `NaN`, `Infinity` or a program that stops working.

## throw: "I cannot go on"

When a function receives data it cannot work with, it can *throw* an error. The function stops right there.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("You cannot divide by zero");
    }
    return a / b;
}
```

## try and catch: "if something fails, do this"

Whoever calls the function decides what to do with the error:

```javascript
button.addEventListener("click", function () {
    try {
        const result = divide(Number(aInput.value), Number(bInput.value));
        output.textContent = result;
        output.className = "";
    } catch (error) {
        output.textContent = error.message;
        output.className = "error";
    }
});
```

If everything inside `try` works, `catch` is skipped. If anything throws, JavaScript jumps straight to `catch`, and `error.message` is the text you wrote in `new Error(...)`.

`finally` runs at the end *always*, whether there was an error or not:

```javascript
try {
    // ...
} catch (error) {
    // ...
} finally {
    aInput.value = "";
}
```

## Your own errors

An error has a `name` and a `message`. The browser's errors are called `TypeError`, `ReferenceError`... You can give yours a name too, so that you know where they come from:

```javascript
function readNumber(input) {
    const text = input.value.trim();

    if (text === "") {
        const error = new Error("The field is empty");
        error.name = "ValidationError";
        throw error;
    }
    // ...
}
```

## Who throws and who catches

The same rule as `return`: functions that *calculate* throw; the function connected to the button *catches* and shows the message in the page. Calculations never write in the page, and the button never does maths.

## Common mistakes

- An empty `catch`: the error disappears and you never know what happened.
- One giant `try` around the whole program. Put it only around what can fail.
- `throw "error"` with a text instead of `new Error(...)`: you lose the name and the line.
- Showing the error with `alert`. Show it in the page, next to the field.

## Exercises

**Exercise 9.1.** In your calculator of exercise 5.5, the division throws an error when the second number is 0. The button catches it and shows the message in red.

**Exercise 9.2.** Write `readNumber(input)`: it returns the number in the field, or throws an error with name `"ValidationError"` and a different message when the field is empty, when it is not a number, or when it is outside a range you choose. Use it in exercises 7.1, 7.2 and 7.3.

**Exercise 9.3.** Add `finally` to exercise 9.2 so that the field is always emptied.

**Exercise 9.4.** Call a function that does not exist inside a `try`. In the `catch`, show a different message for your own errors (`error.name === "ValidationError"`) and for the browser's errors.

## Mini-project 1: My toolbox page

Moure aquí l'apartat sencer de la lliçó 7 i afegir a la llista "Rules" dues regles:

- every calculation function has at least two `console.assert` that pass;
- at least one function throws an error when the data is not valid, and the page catches it and shows the message.

Afegir al final l'avís de la prova RA3 (vegeu §4).

---

### 10 — Arrays: apartat nou "Arrays inside arrays" (N3)

Afegir després de "Useful methods" i abans de "Exercises".

## Arrays inside arrays

An array can contain other arrays. That is how you store a *grid*: a board game, a seating plan, a timetable.

```javascript
const board = [
    ["X", "O", ""],
    ["",  "X", ""],
    ["O", "",  "X"]
];

board[0][1];        // "O"  -> row 0, column 1
board[2][2] = "O";  // change one cell
board.length;       // 3 rows
board[0].length;    // 3 columns
```

Read `board[row][column]`: first which row, then which position inside that row.

To go through the whole grid, one loop inside another:

```javascript
let html = "<table>";
for (let row = 0; row < board.length; row++) {
    html += "<tr>";
    for (let col = 0; col < board[row].length; col++) {
        html += `<td>${board[row][col]}</td>`;
    }
    html += "</tr>";
}
html += "</table>";
output.innerHTML = html;
```

> **Watch out:** `board[1, 2]` is not an error, but it does not do what you think. Always two pairs of brackets: `board[1][2]`.

Exercicis nous, al final de la llista actual:

**Exercise 10.8.** Create the tic-tac-toe board as an array of three arrays, all empty, and draw it as a table with two loops.

**Exercise 10.9.** When the user clicks on an empty cell, put `X` or `O` in turns: change the array and redraw. Show a message when a row is full of the same symbol.

**Exercise 10.10.** Check columns and diagonals too, and announce the winner.

---

### 12 — Array methods: filter, map and reduce (`12-array-methods.html`)

Títol: **Array methods: filter, map and reduce**

## The same loops, again and again

Look at the loops you have written: most of them do one of four things. *Find* one element. *Keep* some elements. *Transform* every element. *Add up* all of them. Arrays have one method for each job. You give them a small function that says what to do with *one* element, and they do the loop for you.

```javascript
const products = [
    { name: "Mouse", price: 15, stock: 10 },
    { name: "Keyboard", price: 30, stock: 0 },
    { name: "Screen", price: 150, stock: 4 }
];
```

## forEach: do something with each one

```javascript
products.forEach(function (product, index) {
    console.log(index, product.name);
});
```

## find: the first one that matches

```javascript
const keyboard = products.find(p => p.name === "Keyboard");   // the object, or undefined
```

## filter: keep the ones that match

```javascript
const available = products.filter(p => p.stock > 0);   // a NEW array with 2 products
```

## map: transform each one

```javascript
const names = products.map(p => p.name);               // ["Mouse", "Keyboard", "Screen"]
const withVat = products.map(p => p.price * 1.21);     // [18.15, 36.3, 181.5]
```

## reduce: turn the whole array into one value

```javascript
const totalStock = products.reduce((total, p) => total + p.stock, 0);   // 14
```

`reduce` starts with the value at the end (`0`), and for each element it runs the function with the total so far and the element. What the function returns is the new total.

## some and every: yes or no

```javascript
products.some(p => p.stock === 0);     // true: at least one is out of stock
products.every(p => p.price < 200);    // true: all of them are under 200
```

## Chaining

Each method returns an array, so you can join them:

```javascript
const cheapNames = products
    .filter(p => p.price < 50)
    .map(p => p.name)
    .sort();
```

Read it like a sentence: "the products under 50, then their names, then sorted".

## Which one do I need?

| I want… | Method | It returns |
|---|---|---|
| to do something with each one | `forEach` | nothing |
| the first one that matches | `find` | one element or `undefined` |
| only some of them | `filter` | a new, shorter array |
| the same number, changed | `map` | a new array, same length |
| one single value | `reduce` | one value |
| to know if any / all match | `some` / `every` | `true` or `false` |

## Common mistakes

- Arrow function with braces and no `return`: `p => { p.price * 2 }` returns `undefined`. Either no braces, or write `return`.
- Using `map` when you want `filter`: you get an array of `true` and `false`.
- Forgetting the initial value of `reduce` (the `0`).
- `sort` changes the original array. `filter` and `map` do not.

## Exercises

**Exercise 12.1.** Redo exercise 11.3 (total value of the stock) with `reduce`.

**Exercise 12.2.** Redo exercise 11.5 (names of the products out of stock) with `filter` and `map`.

**Exercise 12.3.** Redo exercise 11.7 (average, best student, how many passed) with `reduce`, `find` and `filter`. No `for` loop allowed.

**Exercise 12.4.** With `some` and `every`, show whether any product is out of stock and whether all of them cost less than 50 €.

**Exercise 12.5.** In one chain: the names of the products under 20 €, in alphabetical order, joined with commas.

Solució opcional (com en les lliçons actuals) només del 12.1.

---

### 13 — Regular expressions (`13-regex.html`)

Títol: **Regular expressions**

## What a regular expression is

A *regular expression* (regex) is a pattern that describes a kind of text: "five digits", "eight digits and a letter", "something, an @, something, a dot, something". You use it to *check* a text, *find* parts inside it, or *replace* them.

```javascript
const postcode = /^\d{5}$/;

postcode.test("46001");     // true
postcode.test("4600");      // false
postcode.test("46001A");    // false
```

## The pieces

| Piece | Means | Example |
|---|---|---|
| `\d` | a digit | `\d\d` → "42" |
| `\w` | a letter, digit or `_` | |
| `\s` | a space | |
| `[A-Z]` | one of these characters | `[aeiou]` → a vowel |
| `[^0-9]` | any character *except* these | |
| `.` | any character | |
| `{5}` | exactly 5 times | `\d{5}` |
| `{2,4}` | from 2 to 4 times | |
| `+` | one or more | `\d+` |
| `*` | zero or more | |
| `?` | optional | `-?\d+` → "-3" or "3" |
| `^` and `$` | start and end of the text | |
| `\.` | a real dot | |

After the closing `/` you can add *flags*: `i` (ignore capitals), `g` (find all, not only the first).

## Three methods

```javascript
// test: does it match? -> true / false
/^\d{8}[A-Z]$/i.test("12345678z");          // true

// match: give me the parts that match
"Call 961 234 567 or 600 111 222".match(/\d+/g);   // ["961", "234", "567", "600", "111", "222"]

// replace: change what matches
"961-234-567".replace(/-/g, " ");           // "961 234 567"
```

## Patterns you will use

```javascript
const postcode = /^\d{5}$/;
const dni = /^\d{8}[A-Z]$/i;
const email = /^\S+@\S+\.\S+$/;       // simple: good enough for a form
const hasNumber = /\d/;
const hasCapital = /[A-Z]/;
```

> **Watch out:** Without `^` and `$`, the pattern only has to appear *somewhere*: `/\d{5}/.test("abc123456789")` is `true`.

## Common mistakes

- Forgetting `^` and `$`.
- Writing the pattern in quotes: `"^\d{5}$"` is a string, not a regex.
- Using `.` when you mean a real dot: write `\.`.
- Trying to write the perfect email regex. A simple pattern plus a confirmation email is what real websites do.

## Exercises

**Exercise 13.1.** Given an array of 8 strings, show next to each one whether it is a valid postcode.

**Exercise 13.2.** The same with a simple email pattern. Include tricky cases: `"ana@"`, `"@mail.com"`, `"ana@mail"`.

**Exercise 13.3.** Redo the password check of exercise 5.3 with three regular expressions: at least 8 characters, a number, a capital letter.

**Exercise 13.4.** Validate a DNI (8 digits and a letter) and show the letter alone, taken out with `match`.

**Exercise 13.5.** A phone written as `"961-23 45 67"`: remove every space and dash with `replace`.

**Exercise 13.6.** Take all the numbers out of a sentence with `match` and the flag `g`, and add them up.

Sense solucions.

---

### 14 — Sets and maps (`14-collections.html`)

Títol: **Sets and maps**

## More than arrays

An array is a list in order, where values can repeat and you find things by position. Sometimes you need something else.

## Set: values without repetition

```javascript
const tags = new Set(["music", "sport", "music", "films"]);

tags.size;              // 3   ("music" only once)
tags.add("games");
tags.has("sport");      // true
tags.delete("films");

for (const tag of tags) {
    // music, sport, games
}

const asArray = [...tags];   // back to an array
```

The quickest way to remove repeated values from an array: `[...new Set(array)]`.

## Map: a key and its value

```javascript
const stock = new Map();

stock.set("Mouse", 10);
stock.set("Keyboard", 0);

stock.get("Mouse");     // 10
stock.has("Screen");    // false
stock.size;             // 2

for (const [name, units] of stock.entries()) {
    // "Mouse" 10, "Keyboard" 0
}
```

A classic use: counting.

```javascript
const counts = new Map();
for (const word of text.split(" ")) {
    counts.set(word, (counts.get(word) || 0) + 1);
}
```

## Going through any collection

`for...of` works with arrays, strings, sets and maps. Behind it there is an *iterator*: an object that gives you the elements one by one. Arrays and maps also have `.keys()`, `.values()` and `.entries()`, which return iterators too.

```javascript
for (const [index, name] of ["Ana", "Luis"].entries()) {
    // 0 "Ana", 1 "Luis"
}
```

## Which one?

| | Array | Set | Map | Object |
|---|---|---|---|---|
| Keeps the order | yes | yes | yes | mostly |
| Repeated values | yes | no | keys no | keys no |
| Find by | position | value (`has`) | key (`get`) | key (`.name`) |
| Typical use | a list of things | unique values | counting, looking up | one thing with its properties |

## Common mistakes

- `map.Mouse` or `map["Mouse"]` instead of `map.get("Mouse")`.
- Looking for `set[0]`: a set has no positions.
- `JSON.stringify(new Set([1, 2]))` gives `"{}"`. Convert to an array first.

## Exercises

**Exercise 14.1.** Redo exercise 10.6 (no duplicates) with a `Set`, in one line.

**Exercise 14.2.** The user types a text; show how many times each word appears, using a `Map`. Show the result as a list, from the most repeated word to the least.

**Exercise 14.3.** Copy the comparison table above into your notebook and add one example of your own in each column.

**Exercise 14.4.** For each situation, choose Array, Set, Map or object, and write why in one line: the students of a class in the order of the list; the different countries the visitors of a web come from; the phone number of each friend; a film with title, year and director; the marks of an exam to calculate the average.

Sense solucions.

---

### 15 — JSON and XML (`15-json-xml.html`)

Títol: **JSON and XML**

## Data that travels

When two programs share data (your page and a server, an app and a file), they send it as *text*, in a format both understand. The two most common ones are *JSON* and *XML*. Here is the same data in both:

```json
[
    { "title": "Dune", "author": "Frank Herbert", "year": 1965 },
    { "title": "Matilda", "author": "Roald Dahl", "year": 1988 }
]
```

```xml
<catalog>
    <book>
        <title>Dune</title>
        <author>Frank Herbert</author>
        <year>1965</year>
    </book>
    <book>
        <title>Matilda</title>
        <author>Roald Dahl</author>
        <year>1988</year>
    </book>
</catalog>
```

JSON looks like JavaScript, and it is what you will use most. XML looks like HTML, and you will still find it in configuration files, invoices and older services.

## JSON rules

- Keys always in *double quotes*.
- Texts in double quotes, never single.
- No comma after the last element.
- Only data: no functions, no `undefined`, no comments.

## From JavaScript to JSON and back

```javascript
const text = JSON.stringify(books);              // one long line
const pretty = JSON.stringify(books, null, 2);   // indented, easy to read
const onlyTitles = JSON.stringify(books, ["title"], 2);

const again = JSON.parse(text);                  // a real array again
```

If the text is not valid JSON, `JSON.parse` throws a `SyntaxError`. Data that comes from outside can always be broken, so:

```javascript
try {
    const data = JSON.parse(text);
    // ...
} catch (error) {
    output.textContent = "The data is not valid.";
}
```

## Reading XML

The browser has a class for that, `DOMParser`. It turns the text into a document that you search exactly like a web page:

```javascript
const parser = new DOMParser();
const xml = parser.parseFromString(xmlText, "application/xml");

for (const book of xml.querySelectorAll("book")) {
    const title = book.querySelector("title").textContent;
    // ...
}
```

## Which tool for what

| I want to… | I use |
|---|---|
| turn an object or array into JSON text | `JSON.stringify` |
| turn JSON text into an object or array | `JSON.parse` |
| read an XML text | `DOMParser` |

## Common mistakes

- Single quotes in JSON written by hand.
- `JSON.parse` of something that is already an object.
- No `try/catch` around `JSON.parse` of external data.

## Exercises

**Exercise 15.1.** Turn the products array of exercise 11.2 into JSON text, show the text in a `<pre>`, and turn it back into an array.

**Exercise 15.2.** Copy the content of `books.json` into a string. Parse it, change the price of one book, add a new book and show the result as indented JSON.

**Exercise 15.3.** Remove one quote from the JSON of 15.2 and show a clear message instead of a broken page.

**Exercise 15.4.** Copy the content of `books.xml` into a string and show the list of titles using `DOMParser`.

**Exercise 15.5.** Use the second parameter of `JSON.stringify` to keep only the title and the year.

Afegir al final l'avís de la prova RA6 (§4).

---

### 19 — localStorage: apartat nou "All the ways in and out" (N8)

Afegir després de "Seeing it in DevTools" i abans de "Exercises".

## All the ways in and out

By now you have used many ways to get information and to show it. This is the complete list for a program in the browser:

| I want to… | I use |
|---|---|
| ask something quickly (only for tests) | `prompt` |
| tell something that blocks the page | `alert` |
| ask yes or no | `confirm` |
| see values while I program | `console.log`, `console.table` |
| read what the user types, show results | the page (DOM): inputs, `textContent`, `createElement` |
| remember data after closing the browser | `localStorage` |
| get data from a server | `fetch` (next steps, lesson 27) |

`console.table` shows an array of objects as a table in the console. Very useful to check your data:

```javascript
console.table(tasks);
```

And to show numbers and dates as people expect them:

```javascript
(1234.5).toLocaleString("ca-ES", { minimumFractionDigits: 2 });     // "1.234,50"
(0.215).toLocaleString("ca-ES", { style: "percent", maximumFractionDigits: 1 });  // "21,5 %"
new Date().toLocaleDateString("ca-ES");                               // "20/5/2027"
```

Exercicis nous, al final de la llista:

**Exercise 19.7.** Make the table above your own: for each row, write one line of code of your own work in this unit that uses it.

**Exercise 19.8.** In your mini-project 2, show the array with `console.table` every time it is saved, and in the page the number of items with `toLocaleString`.

**Exercise 19.9.** Save the date of the last change and show it under the list: "Last change: 20/5/2027".

Afegir al final l'avís de la prova RA5 (§4).

---

### 20 — Objects and built-in classes (`20-built-in-objects.html`)

Títol: **Objects and built-in classes**

## You have been using objects all along

A string has `.length` and `.toUpperCase()`. An array has `.push()`. An element of the page has `.textContent` and `.classList`. All of them are *objects*: data with its own properties and its own functions.

## The vocabulary

- A *class* is the plan. An *object* (or *instance*) is a thing made with that plan. One cookie cutter (class), many cookies (objects).
- A *property* is a piece of data of the object: `text.length`.
- A *method* is a function of the object: `text.toUpperCase()`.
- *Encapsulation*: the object keeps its data inside and you use it through its methods, without knowing how it works inside. You use `array.sort()` without knowing how it sorts.
- *Inheritance*: a class can be built on top of another and get everything it has. You will build your own in lesson 24.

## new: making an object from a class

Some objects are written directly (`"hello"`, `[1, 2]`). Others are made with `new` and the name of the class. That call runs the class's *constructor*, which can receive parameters:

```javascript
const today = new Date();                    // now
const exam = new Date(2027, 5, 20);          // 20 June 2027 (months start at 0!)
const party = new Date("2027-06-24");        // from a text
const tags = new Set(["a", "b", "a"]);       // from an array
```

## Date

```javascript
const d = new Date(2027, 5, 20);

d.getFullYear();            // 2027
d.getMonth();               // 5  -> June
d.getDate();                // 20
d.getDay();                 // 0 = Sunday ... 6 = Saturday
d.toLocaleDateString("ca-ES");   // "20/6/2027"

// Days between two dates
const ms = exam.getTime() - today.getTime();
const days = Math.ceil(ms / (1000 * 60 * 60 * 24));
```

## Common mistakes

- January is month 0, December is 11.
- `date1 === date2` is `false` even if they are the same day: they are two different objects. Compare `getTime()`.
- Forgetting `new`: `Date()` without `new` gives a text, not an object.

## Exercises

**Exercise 20.1.** Show today's date and time in the page in local format.

**Exercise 20.2.** Calculate how many days are left until your birthday. If it has already passed this year, count until next year.

**Exercise 20.3.** An `<input type="date">` for the date of birth: show the exact age in years.

**Exercise 20.4.** Create the same date in three ways (numbers, text, milliseconds) and check that their `getTime()` is equal.

Sense solucions.

---

### 21 — Static methods, parameters and libraries (`21-static-libraries.html`)

Títol: **Static methods, parameters and libraries**

## Two kinds of methods

Most methods belong to an object: you need the object first. *Static* methods belong to the class itself: you call them on the class name.

| Method of an object | Static method |
|---|---|
| `"hola".toUpperCase()` | `Math.round(4.6)` |
| `prices.push(10)` | `Number.isInteger(4.6)` |
| `today.getDay()` | `JSON.parse(text)` |
| `(4.567).toFixed(2)` | `Array.isArray(x)` |

A static method does not need an object because it does not work with *one* object's data: rounding a number, converting a text, checking a value.

## Parameters

Parameters go in order, and some are optional:

```javascript
"JavaScript".slice(0, 4);          // "Java"
"JavaScript".slice(4);             // "Script"  -> the second one was optional
(3.14159).toFixed(2);              // "3.14"
```

Some methods accept an *object of options* as a parameter:

```javascript
(19.9).toLocaleString("ca-ES", { style: "currency", currency: "EUR" });   // "19,90 €"
(19.9).toLocaleString("en-US", { style: "currency", currency: "USD" });   // "$19.90"
```

## Libraries: other people's code

A *library* is code written by other people that you add to your page. You do not reinvent dates, charts or animations: you use a library and read its documentation.

To add it, a `<script>` with its address (a *CDN*) *before* your own script:

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="script.js"></script>
```

Now your code can use what the library offers:

```javascript
dayjs().format("DD/MM/YYYY");                     // "20/05/2027"
dayjs("2027-06-24").diff(dayjs(), "day");         // days until 24 June
```

> **Tip:** If there is no internet, the CDN fails. Download the file, put it in your folder and change the `src` to the local file.

## Common mistakes

- Your script before the library: "dayjs is not defined".
- Calling a static method on an object (`4.6.round()`) or an object method on the class (`String.toUpperCase("a")`).
- Copying code from the library's website without reading what each parameter means.

## Exercises

**Exercise 21.1.** Classify these 10 calls into "method of an object" and "static": `Math.max(3, 8)`, `"hi".includes("h")`, `JSON.stringify(a)`, `list.indexOf(3)`, `Number.parseFloat("2.5")`, `today.getFullYear()`, `Math.random()`, `text.split(",")`, `Array.isArray(list)`, `(5).toFixed(1)`.

**Exercise 21.2.** Add Day.js to a page. Show today's date as `DD/MM/YYYY` and the days until your birthday with `diff`. Compare it with your result of exercise 20.2.

**Exercise 21.3.** A price field: show the price in euros and in dollars with the options of `toLocaleString`.

**Exercise 21.4.** Find the library canvas-confetti, add it, and launch confetti when a button is clicked.

Afegir al final l'avís de la prova RA2 (§4).

---

### 22 — Your own classes (`22-classes.html`)

Títol: **Your own classes**

## Why classes

In lesson 11 you made products as objects: `{ name: "Mouse", price: 15 }`. If you make 50 products, all of them should have the same properties, and the functions that work with a product are loose somewhere else in your code. A *class* puts both together: the shape of the data and the functions that use it.

## Writing a class

```javascript
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    average() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    toString() {
        return `${this.name}: ${this.average().toFixed(2)}`;
    }
}
```

The parts of a class:

- the *name*, in PascalCase: `Student`;
- the *constructor*: runs once, when the object is created, and gives a value to each property;
- the *properties*: `this.name`, `this.marks`;
- the *methods*: functions inside the class, without the word `function`.

`this` means "the object I am": inside `average()`, `this.marks` are the marks *of this student*.

## Creating and using objects

```javascript
const ana = new Student("Ana", [7, 8, 9]);
const luis = new Student("Luis", [4, 6, 5]);

ana.average();          // 8
luis.toString();        // "Luis: 5.00"

const group = [ana, luis, new Student("Marta", [10, 9, 9])];
for (const student of group) {
    // draw student.toString() in the page
}
```

## Common mistakes

- Forgetting `new`: `Student("Ana", [7])` gives an error.
- Forgetting `this.` inside a method: `marks` alone does not exist there.
- Commas between methods, as in an object. Classes do not use them.
- Writing `function average()` inside the class.

## Exercises

**Exercise 22.1.** Write the class `Student` above, create three students and show them in the page with `toString()`.

**Exercise 22.2.** Redo exercise 11.2 with a class `Product` (name, price, stock) and a method `stockValue()`. The array is now an array of `Product` objects, drawn as cards.

**Exercise 22.3.** A class `BankAccount` with owner and balance, and the methods `deposit(amount)` and `withdraw(amount)`. If there is not enough money, `withdraw` throws an error. A small page with two buttons uses it.

**Exercise 22.4.** Add `toString()` to `Product` and `BankAccount` and use it to show them.

**Exercise 22.5.** In this code, mark the name, the constructor, each property and each method:

```javascript
class Song {
    constructor(title, seconds) {
        this.title = title;
        this.seconds = seconds;
    }
    minutes() {
        return Math.floor(this.seconds / 60);
    }
}
```

Solució opcional només del 22.1.

---

### 23 — Private fields and static methods (`23-private-static.html`)

Títol: **Private fields and static methods**

## Protecting the data

```javascript
account.balance = 1000000;   // nobody should be able to do this
```

If any part of the code can change a property, the class cannot guarantee that the data is correct. *Encapsulation* means: the data is inside, and you change it only through the methods.

## Private fields: #

A property whose name starts with `#` can only be used *inside* the class:

```javascript
class BankAccount {
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount("Ana");
account.deposit(50);
account.balance;        // 50   (through the get)
account.#balance;       // SyntaxError: you cannot touch it from outside
```

## get and set

`get` lets you *read* a private value as if it were a property. `set` lets you *change* it, with a check first:

```javascript
class Product {
    #price;

    constructor(name, price) {
        this.name = name;
        this.price = price;          // goes through the set
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("The price cannot be negative");
        }
        this.#price = value;
    }
}
```

## Static methods in your classes

A static method belongs to the class, not to each object. Typical use: creating an object from plain data.

```javascript
class Product {
    // ...
    static fromJSON(data) {
        return new Product(data.name, data.price);
    }
}

const p = Product.fromJSON({ name: "Mouse", price: 15 });
```

## Saving objects in localStorage

`JSON.stringify` saves the public data, but not the methods and not the `#private` fields. When you read it back, you get plain objects, not `Product`s. Two steps:

```javascript
class Product {
    // ...
    toJSON() {
        return { name: this.name, price: this.#price };
    }
}

// Save
localStorage.setItem("products", JSON.stringify(products));

// Load: plain data -> Product objects again
const data = JSON.parse(localStorage.getItem("products")) || [];
const products = data.map(d => Product.fromJSON(d));
```

## Common mistakes

- Forgetting the `#` in one of the uses inside the class.
- Calling a static method on an object: `p.fromJSON(...)`. It is `Product.fromJSON(...)`.
- After loading from `localStorage`, calling a method on a plain object: "p.total is not a function". You forgot `fromJSON`.

## Exercises

**Exercise 23.1.** Change your `BankAccount` so that the balance is `#balance`, with a `get balance()`. Try to read `account.#balance` from outside and copy the error.

**Exercise 23.2.** Add to `Product` a `set price` that throws an error with negative prices. Check it with `try/catch`.

**Exercise 23.3.** Save an array of `Product` in `localStorage` and, when the page loads, rebuild the objects with `Product.fromJSON`. Check that their methods work after F5.

**Exercise 23.4.** A static property `Product.count` that goes up every time a product is created.

Sense solucions.

---

### 24 — Inheritance (`24-inheritance.html`)

Títol: **Inheritance**

## Building on another class

A car is a vehicle. A motorbike is a vehicle. They share brand, model and a description, but each one has something of its own. *Inheritance* lets a class get everything from another and add or change only what is different.

```javascript
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    describe() {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);         // first: the constructor of Vehicle
        this.doors = doors;
    }

    describe() {
        return `${super.describe()}, ${this.doors} doors`;
    }
}

const c = new Car("Seat", "Ibiza", 5);
c.describe();       // "Seat Ibiza, 5 doors"
```

- `extends`: Car is a Vehicle.
- `super(...)`: calls the constructor of the parent class. It must go first.
- Writing a method with the same name *overrides* it; `super.describe()` still calls the parent's version.

## Your own kinds of error

`Error` is a class too, so you can extend it:

```javascript
class InsufficientFundsError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientFundsError";
    }
}

try {
    account.withdraw(500);
} catch (error) {
    if (error instanceof InsufficientFundsError) {
        output.textContent = "Not enough money.";
    } else {
        output.textContent = "Something unexpected happened.";
    }
}
```

## When to use it

Only when one class really *is a kind of* the other ("a car is a vehicle"). If you just want to reuse a function, a normal function is simpler.

## Common mistakes

- Using `this` in the constructor before calling `super`.
- Forgetting `super(...)`: "Must call super constructor".
- Long chains of classes inheriting from classes. One level is usually enough.

## Exercises

**Exercise 24.1.** Write `Vehicle` and `Car` as above, create two cars and show their description.

**Exercise 24.2.** Add `Motorbike extends Vehicle` with the engine size, and override `describe()` using `super.describe()`.

**Exercise 24.3.** Starting from `bank.html`, create `InsufficientFundsError`, throw it from `withdraw`, and show a different message for it in the `catch`.

**Exercise 24.4.** An array with cars and motorbikes mixed: go through it calling `describe()` on each one. Why does each one use its own version?

Sense solucions.

---

### 25 — Modules (`25-modules.html`)

Títol: **Modules**

## One file is not enough

Your project will have classes, the code of the page and the tests. In one file, that is hundreds of lines. *Modules* let you split the code into files that use each other.

## export and import

```javascript
// js/model.js
export class Product {
    // ...
}

export class Cart {
    // ...
}
```

```javascript
// js/main.js
import { Product, Cart } from "./model.js";

const p = new Product("Mouse", 15);
```

```html
<script type="module" src="js/main.js"></script>
```

## A library of classes

`model.js` is now *your own library*: a set of classes that knows nothing about the page. Any file can import it: the page (`main.js`) and the tests (`tests.js`).

```text
my-app/
├── index.html
├── tests.html
├── css/style.css
└── js/
    ├── model.js     -> the classes (no document, no querySelector)
    ├── main.js      -> the page: events, draw(), localStorage
    └── tests.js     -> console.assert on the classes
```

> **Watch out:** Modules do not work if you open the page with a double click (the address starts with `file://`). Always use Live Server.

## Common mistakes

- `import { Product } from "./model"` without `.js`.
- Forgetting `type="module"` in the `<script>`.
- `onclick="add()"` in the HTML stops working: functions in a module are not global. Use `addEventListener`.
- Writing `document.querySelector` inside `model.js`. The model must not know the page.

## Exercises

**Exercise 25.1.** Move `Product` and `BankAccount` to `js/model.js` with `export`, and import them in `js/main.js`. The page must work exactly as before.

**Exercise 25.2.** Create `tests.html` and `js/tests.js`. The tests import the same classes and check them with at least six `console.assert`.

**Exercise 25.3.** A second page that uses the same `model.js` with a different interface (for example, only a table).

Afegir al final l'avís de la prova RA4 (§4).

---

## 3. Canvis a lliçons existents

### `03-operators.html`

Afegir al final l'avís de la prova RA1 (§4).

### `07-functions.html`

- Eliminar l'apartat "Test 1".
- Moure l'apartat "Mini-project 1: My toolbox page" a `09-errors.html` (amb les dues regles noves).

### `17-elements.html` (antiga 11)

- Mini-project 2: "that comes in lesson 13" → "that comes in lesson 19".
- Exercici 17.1: "Rewrite exercise 10.4" → "Rewrite exercise 16.4".

### `18-forms.html` (antiga 12)

- Eliminar l'apartat "Test 2".
- En l'apartat "Validating", afegir una línia: *"For postcodes, DNI or emails, use the regular expressions of lesson 13."*
- Exercici 18.3: afegir *"Use a regular expression for the email."*

### `26-project.html` (antiga 14)

Substituir "Requirements for the code", "Milestones" i "Delivery" pel següent. Són els requisits mínims (nivell Suficient de la rúbrica del projecte). "Choose one", les opcions A i B i "The HTML and CSS you are given" es mantenen.

## Requirements (the minimum to pass)

*Structure*
- Folders and files: `index.html`, `css/`, `js/main.js`, `js/model.js`, `js/tests.js`. Names in lowercase, no spaces. It opens with Live Server.

*It works*
- Everything listed for your option (A or B) works.
- Every decision works (right or wrong answer, empty field, filters, final message) and every loop ends.
- *No errors in the console* when you use it normally.

*Classes*
- At least *2 classes* in `model.js` (for example `Question` and `Quiz`, or `Task` and `TaskList`), exported and imported in `main.js`.
- Your data is an *array of objects of your classes*.
- At least one *static method* that you use (for example `fromJSON` to rebuild the objects when you load).
- The model *throws an error* with a clear message when it gets invalid data (empty text, a question with no options).

*Tests*
- `tests.js` with at least *6 `console.assert`* on the methods of your classes. All green, and a summary line in the console.

*Data*
- `localStorage` with `JSON.stringify` when you save and `JSON.parse` when you load.
- `try/catch` when you load and around calls that can throw.
- At least *two different array methods* among `filter`, `map`, `reduce`.
- `for...of` or `forEach` to go through your lists.
- At least one field checked with a *regular expression*.

*Interface*
- At least *3 `addEventListener`* of *2 different types*. No `onclick` in the HTML.
- `createElement` and `textContent` for anything the user typed.
- Numbers with a proper format (score, counters, percentages).

*Language*
- At least 5 different methods or properties of strings, arrays or elements.
- One *external library* added with a `<script>` (for example Day.js or canvas-confetti) and used.

*Documentation and delivery*
- A comment above every function and method.
- `surname-name-project.zip` with a `README.txt`: your name, the option, how to use it, what was hardest, what you would add.
- A 3-minute presentation: show it working and explain *one function* line by line. Your teacher will ask you one question about your code.

> **Watch out:** If your app does not open or shows an error when it loads, it is returned to you to fix before it is marked.

## Milestones

1. Your choice, the paper drawing of the screen and of your classes (properties and methods).
2. The model works: classes in `model.js`, tested with `tests.js`. All green.
3. It works on the screen: `draw()`, events, validation.
4. It remembers: `localStorage` with `try/catch`.
5. Tested, no console errors, comments, README, zip, presentation.

## How it is marked

Your project is marked with a rubric of four levels (Insufficient, Sufficient, Good, Excellent) for each skill it shows. The requirements above are the *Sufficient* level. To get more, look at the rubric your teacher gives you: each level adds something concrete (for example, JSDoc comments, one event handler for all the buttons of a list, or the logic inside the classes instead of `main.js`).

### `27-next.html` (antiga 15)

A "Things that exist and you have not seen", eliminar *Classes* i *Modules* (ara es veuen en les lliçons 22-25). La resta es manté.

---

## 4. Avisos de prova (un al final de l'última lliçó de cada part)

Format: `vf-title level="2"` "RA test" + `vf-callout type="atencio"`. Text comú:

> **RA_ test.** Next session you have the test of this part: 55 minutes, on the computer, alone and without notes. You deliver your folder in a zip. It checks every skill of the list "RA_" in the unit index.

Contingut específic, una línia després del text comú:

| Lliçó | Prova | Què hi entra |
|---|---|---|
| 03 | RA1 | Creating the project folder, comments on each block, variables and constants, predicting operators and type conversions. |
| 09 | RA3 | A function with a loop and conditions, a trace table, fixing 5 errors with DevTools, throwing and catching errors, assertions, a JSDoc comment. |
| 15 | RA6 | Arrays of arrays, a list of objects (add, remove, change), going through collections, Set and Map, regular expressions, JSON, `filter`/`map`/`reduce`/`sort`. |
| 19 | RA5 | `prompt` and the console, formatting numbers and dates, the ways in and out, and a form that adds items to a list with events. |
| 21 | RA2 | Objects and classes vocabulary, a small complete program, `Date` and `Set`, methods and properties, static methods, parameters, using a library. |
| 25 | RA4 | The parts of a class, a class with constructor, private field, get/set and a static method, a child class, and a module with your classes. |

---

## 5. `index.html` de la unitat

### "What you will learn"

Substituir la llista per:

- What a program is, and how a computer follows your instructions one by one.
- How to store data in variables, and what kinds of data exist.
- How to make decisions with *if* and repeat work with loops, and how to put it all in functions.
- How to find and fix your own errors, test your code automatically, and handle errors without breaking the page.
- How to work with lists of data: arrays, objects, sets and maps, and the methods *filter*, *map* and *reduce*.
- How to check texts with regular expressions, and how data travels as JSON and XML.
- How to change a web page from JavaScript and react when the user clicks, types or sends a form.
- How to save data in the browser so it is still there tomorrow.
- How to use the objects JavaScript gives you, and libraries written by other people.
- How to build your own classes and organise your code in modules.
- How to build a complete application and deliver it.

### "How I know I have learned it"

Substituir tot l'apartat. Un `vf-title level="3"` per RA amb el pes, i una llista "I can…" (un punt per criteri, en el mateix ordre que els criteris de la SA).

**RA1 — I understand how a program is built (10 %)**
- I can name the blocks of a program: data, input, process and output.
- I can create a project folder with `index.html` and `script.js` linked.
- I can work with VS Code, Live Server and the browser console.
- I know the data types (number, string, boolean…) and what each one is for.
- I can change a program to use variables instead of repeated values.
- I use `const` for values that do not change, and I write literals correctly.
- I use arithmetic, comparison and logical operators, and I can predict their result.
- I know when JavaScript converts types by itself, and I can convert them myself.
- I write comments that help to understand the code.

**RA2 — I can use the objects JavaScript gives me (10 %)**
- I can explain class, object, property, method, encapsulation and inheritance.
- I can write small complete programs: input, process and output.
- I create objects with `new`: `Date`, `Set`, `Map`.
- I use the methods and properties of strings, arrays and page elements.
- I call static methods such as `Math.round` or `JSON.parse`.
- I give methods the right parameters, including optional ones.
- I can add an external library to my page and use it.
- I choose the right constructor for what I need (`new Date(2027, 5, 20)`).

**RA3 — I can control the flow of a program and fix it (20 %)**
- I write `if`, `else if`, `else` and `switch` for real problems.
- I choose the right loop, and my loops always end.
- I use `break`, `continue` and `return` when they make the code simpler.
- I catch errors with `try` and `catch` so the page does not break.
- I build complete programs that combine conditions, loops and functions.
- I find and fix errors with the console and breakpoints.
- I comment and document my functions (JSDoc) and my project (README).
- I throw my own errors with a clear message.
- I test my functions with `console.assert`.

**RA4 — I can build my own classes (10 %)**
- I can recognise the parts of a class.
- I can define a class.
- I can give a class properties and methods.
- I can write a constructor.
- I build programs that create and use objects of my own classes.
- I protect data with private fields, `get` and `set`.
- I can make a class that inherits from another.
- I can write and use static methods.
- I organise my classes in a module that other files import.

**RA5 — I can build interactive pages (25 %)**
- I use the console to ask for and show information.
- I show numbers, prices and dates with the right format.
- I know the ways a program can get information and show it, and when to use each one.
- I react to clicks, typing and forms with `addEventListener`.
- I read what the user types and show results and messages in the page.

**RA6 — I can work with data (25 %)**
- I use arrays, also arrays of arrays.
- I know the classes JavaScript has for data: `Array`, `Set`, `Map`, `String`, `RegExp`.
- I keep lists of objects and add, remove and change their elements.
- I go through lists with `for...of` and `forEach`.
- I choose between array, set, map and object for each problem.
- I check and search texts with regular expressions.
- I know which tools read and write JSON and XML.
- I convert data to JSON and back.
- I use `filter`, `map`, `reduce` and `sort` instead of long loops.

### Apartat nou després de l'anterior: "How you are marked"

Com a `vf-title level="2"`:

## How you are marked

Your mark is built from the skills above, not from separate exams.

1. Each skill ("I can…") gets a mark from 1 to 10, from the *test* of its part, from your *final project*, or from both. When it is checked in both, the one that shows the skill better counts more.
2. The mark of each RA is the average of its skills, weighted by how important each one is.
3. Your final mark is the average of the six RA, with these weights:

| RA | What it is about | Weight | Checked in |
|---|---|---|---|
| RA1 | How a program is built | 10 % | RA1 test (after lesson 3) |
| RA2 | Using JavaScript's objects | 10 % | RA2 test (after lesson 21) and the project |
| RA3 | Control the flow and fix errors | 20 % | RA3 test (after lesson 9) and the project |
| RA4 | Your own classes | 10 % | RA4 test (after lesson 25) and the project |
| RA5 | Interactive pages | 25 % | RA5 test (after lesson 19) and the project |
| RA6 | Working with data | 25 % | RA6 test (after lesson 15) and the project |

Every test and the project are marked with a rubric of four levels. Your teacher will show you the rubric before each one.

### "Lessons"

Substituir les parts per:

- **Part 1 — The basics**: 1, 2, 3.
- **Part 2 — Control the flow**: 4, 5, 6, 7, 8, 9.
- **Part 3 — Working with data**: 10, 11, 12, 13, 14, 15.
- **Part 4 — Making it interactive**: 16, 17, 18, 19.
- **Part 5 — Using objects**: 20, 21.
- **Part 6 — Your own classes**: 22, 23, 24, 25.
- **Final project**: 26, 27.

Títols de les targetes:

| Núm. | Títol |
|---|---|
| 8 | Testing and debugging |
| 9 | Errors and exceptions |
| 12 | Array methods: filter, map and reduce |
| 13 | Regular expressions |
| 14 | Sets and maps |
| 15 | JSON and XML |
| 20 | Objects and built-in classes |
| 21 | Static methods, parameters and libraries |
| 22 | Your own classes |
| 23 | Private fields and static methods |
| 24 | Inheritance |
| 25 | Modules |

La resta de targetes conserven el títol i canvien el número.

### Text de benvinguda

"At the end you will build your own complete application: a quiz or a to-do list, entirely your own work." → afegir: *"organised in your own classes, tested and saved in the browser."*

/*
   JavaScript exam 4
   Name: Marta García López
   Group: 2n SMX A
   Date: 11/02/2027

   Ways in and out of this program:
   - prompt: a quick question when the shop opens (only once, not for the data).
   - console: to check the data while I program (console.log, console.table).
   - confirm: a yes or no before deleting the shelves.
   - the page (DOM): everything the user types and sees.
   - localStorage: to keep the products and the shelves after closing the browser.
*/

// ===== Exercise 1: Products =====
const MAX_NAME = 30;
const CODE_PATTERN = /^[A-Z]{3}-\d{3}$/;
const form = document.querySelector("#productForm");
const nameInput = document.querySelector("#name");
const codeInput = document.querySelector("#code");
const priceInput = document.querySelector("#price");
const unitsInput = document.querySelector("#units");
const nameCount = document.querySelector("#nameCount");
const formMessages = document.querySelector("#formMessages");
const productList = document.querySelector("#productList");
const summary = document.querySelector("#summary");

const employee = prompt("Who opens the shop today?");
if (employee === null || employee.trim() === "") {
    console.log("Shop opened");
} else {
    console.log(`Shop opened by ${employee.trim()}`);
}

/**
 * Returns the units with the right word.
 * @param {number} n - the number of units
 * @returns {string} "1 unit", "0 units", "3 units"...
 */
function unitsText(n) {
    // Line 9, logic: with n > 1, 0 was singular. Only 1 is singular.
    if (n === 1) {
        // Line 12, logic: the other return also said "units": it is the singular case.
        return `${n} unit`;
    }
    return `${n} units`;
}

console.assert(unitsText(3) === "3 units", "normal: 3 units");
console.assert(unitsText(1) === "1 unit", "edge: 1 unit");
console.assert(unitsText(0) === "0 units", "strange: 0 units");

function euros(amount) {
    return `${amount.toLocaleString("ca-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

// DATA: the products saved before, or an empty list
let products = [];
try {
    products = JSON.parse(localStorage.getItem("products")) || [];
} catch (error) {
    products = [];
}

function save() {
    localStorage.setItem("products", JSON.stringify(products));
    console.table(products);
}

function draw() {
    productList.innerHTML = "";
    products.forEach(function (product, index) {
        const li = document.createElement("li");
        li.textContent = `${product.name} (${product.code}) · ${euros(product.price)} · ${unitsText(product.units)}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = index;
        li.appendChild(deleteButton);
        productList.appendChild(li);
    });
    const outOfStock = products.filter(product => product.units === 0).length;
    const stockValue = products.reduce((total, product) => total + product.price * product.units, 0);
    summary.textContent = `${products.length} products · ${outOfStock} out of stock · stock value: ${euros(stockValue)}`;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (const input of form.querySelectorAll("input")) {
        input.classList.remove("wrong");
    }

    // INPUT
    const name = nameInput.value.trim();
    const code = codeInput.value.trim().toUpperCase();
    const price = Number(priceInput.value.replace(/,/g, "."));
    const units = Number(unitsInput.value);

    // PROCESS
    const errors = [];
    const wrongInputs = [];
    if (name === "" || name.length > MAX_NAME) {
        errors.push(`The name must have from 1 to ${MAX_NAME} characters.`);
        wrongInputs.push(nameInput);
    }
    if (!CODE_PATTERN.test(code)) {
        errors.push("The code must be 3 letters, a dash and 3 digits, for example MOU-001.");
        wrongInputs.push(codeInput);
    }
    if (priceInput.value.trim() === "" || isNaN(price) || price <= 0) {
        errors.push("The price must be a number bigger than 0.");
        wrongInputs.push(priceInput);
    }
    if (unitsInput.value.trim() === "" || isNaN(units) || units < 0) {
        errors.push("The units must be a number, 0 or more.");
        wrongInputs.push(unitsInput);
    }

    // OUTPUT
    formMessages.innerHTML = "";
    if (errors.length > 0) {
        const list = document.createElement("ul");
        for (const error of errors) {
            const li = document.createElement("li");
            li.textContent = error;
            list.appendChild(li);
        }
        formMessages.appendChild(list);
        formMessages.className = "error";
        for (const input of wrongInputs) {
            input.classList.add("wrong");
        }
        wrongInputs[0].focus();
        return;
    }

    const existing = products.find(product => product.code === code);
    if (existing === undefined) {
        products.push({ name: name, code: code, price: price, units: units });
    } else {
        existing.units += units;
    }
    save();
    draw();
    formMessages.textContent = "Product saved.";
    formMessages.className = "ok";
    form.reset();
    nameCount.textContent = `0 / ${MAX_NAME}`;
    nameInput.focus();
});

nameInput.addEventListener("input", function () {
    nameCount.textContent = `${nameInput.value.length} / ${MAX_NAME}`;
    nameCount.className = nameInput.value.length > MAX_NAME ? "error" : "";
});

// One listener for every Delete button of the list
productList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    products.splice(Number(event.target.dataset.index), 1);
    save();
    draw();
});

draw();

// ===== Exercise 2: Shelves =====
// The units in each place of the shelves when the shop opens. 0 = empty.
const START_SHELVES = [
    [3, 0, 5, 1],
    [2, 2, 0, 0],
    [4, 1, 1, 6]
];
const shelvesDiv = document.querySelector("#shelves");
const shelvesInfo = document.querySelector("#shelvesInfo");

// A copy row by row, so that START_SHELVES never changes
function copyOfStart() {
    return START_SHELVES.map(row => row.slice());
}

let shelves = [];
try {
    shelves = JSON.parse(localStorage.getItem("shelves")) || copyOfStart();
} catch (error) {
    shelves = copyOfStart();
}

function saveShelves() {
    localStorage.setItem("shelves", JSON.stringify(shelves));
}

function drawShelves() {
    shelvesDiv.innerHTML = "";
    const table = document.createElement("table");
    let empty = 0;
    let total = 0;
    for (let row = 0; row < shelves.length; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < shelves[row].length; col++) {
            const td = document.createElement("td");
            td.textContent = shelves[row][col];
            td.dataset.row = row;
            td.dataset.col = col;
            if (shelves[row][col] === 0) {
                td.classList.add("empty");
                empty++;
            }
            total += shelves[row][col];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    shelvesDiv.appendChild(table);
    shelvesInfo.textContent = `Empty places: ${empty} · Total units: ${total}`;
}

// One listener for the whole grid: event.target is the cell that was clicked
shelvesDiv.addEventListener("click", function (event) {
    if (event.target.tagName !== "TD") {
        return;
    }
    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);
    shelves[row][col]++;
    saveShelves();
    drawShelves();
});

document.querySelector("#resetShelves").addEventListener("click", function () {
    if (confirm("Start the shelves again?")) {
        shelves = copyOfStart();
        saveShelves();
        drawShelves();
    }
});

drawShelves();

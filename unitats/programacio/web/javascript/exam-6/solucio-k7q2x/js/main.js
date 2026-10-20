/*
   JavaScript exam 6
   Name: Marta García López
   Group: 2n SMX A
   Date: 15/04/2027
*/
import { Product, DigitalProduct, applyDiscount } from "./model.js";

// ===== Exercise 2: the page =====
// The catalogue of the shop, for the first time the page opens.
const catalogText = '[{"name": "Zelda", "price": 59.95, "units": 2}, {"name": "Tetris", "price": 9.5, "units": 10}, {"name": "Minecraft", "price": 29.95, "units": 3, "platform": "PC"}, {"name": "Mario Kart", "price": 49.9, "units": 1, "platform": "Switch"}]';

const NAME_PATTERN = /^[A-Za-z0-9 ]{2,30}$/;
const form = document.querySelector("#productForm");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const unitsInput = document.querySelector("#units");
const platformInput = document.querySelector("#platform");
const nameCheck = document.querySelector("#nameCheck");
const message = document.querySelector("#message");
const productList = document.querySelector("#productList");
const summary = document.querySelector("#summary");

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

function euros(amount) {
    return amount.toLocaleString("ca-ES", { style: "currency", currency: "EUR" });
}

// DATA: the saved products, or the catalogue the first time
let products = [];
try {
    const text = localStorage.getItem("products") || catalogText;
    products = JSON.parse(text).map(data => Product.fromObject(data));
} catch (error) {
    showMessage("The saved data is not valid. We start with an empty shop.", "error");
}

function save() {
    localStorage.setItem("products", JSON.stringify(products));
    console.table(products.map(product => product.toJSON()));
}

function draw() {
    productList.innerHTML = "";
    products.forEach(function (product, index) {
        const li = document.createElement("li");
        li.textContent = product.toString();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = index;
        li.appendChild(deleteButton);
        productList.appendChild(li);
    });

    const total = products.reduce((sum, product) => sum + product.total(), 0);
    const platforms = new Set(products.filter(product => product instanceof DigitalProduct).map(product => product.platform));
    let platformText = "";
    for (const platform of platforms) {
        platformText += platformText === "" ? platform : `, ${platform}`;
    }
    summary.textContent = `${products.length} products · total: ${euros(total)} · platforms: ${platformText} · updated ${dayjs().format("DD/MM/YYYY HH:mm")}`;
}

nameInput.addEventListener("input", function () {
    nameCheck.textContent = NAME_PATTERN.test(nameInput.value.trim()) ? "✓" : "✗";
});

productList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    products.splice(Number(event.target.dataset.index), 1);
    save();
    draw();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // INPUT
    const name = nameInput.value.trim();
    const price = Number(priceInput.value.replace(/,/g, "."));
    const units = unitsInput.value.trim() === "" ? undefined : Number(unitsInput.value);
    const platform = platformInput.value.trim();

    // PROCESS
    if (!NAME_PATTERN.test(name)) {
        showMessage("The name must have from 2 to 30 letters, numbers or spaces.", "error");
        nameInput.focus();
        return;
    }
    if (units !== undefined && (isNaN(units) || units < 0)) {
        showMessage("The units must be a number, 0 or more.", "error");
        unitsInput.focus();
        return;
    }
    let product;
    try {
        product = platform === "" ? new Product(name, price, units) : new DigitalProduct(name, price, units, platform);
    } catch (error) {
        showMessage(error.name === "PriceError" ? error.message : "Something unexpected happened.", "error");
        priceInput.focus();
        return;
    }
    const existing = products.find(item => item.name === name);
    if (existing === undefined) {
        products.push(product);
    } else {
        existing.units += product.units;
    }
    save();

    // OUTPUT
    draw();
    showMessage(`${name} added.`, "ok");
    form.reset();
    nameCheck.textContent = "";
    nameInput.focus();
});

draw();

// ===== Tests =====
console.assert(applyDiscount(100, 20) === 80, "normal: 100 with 20 % is 80");
console.assert(applyDiscount(50, 0) === 50, "edge: 0 % does not change the price");
console.assert(applyDiscount(80, 100) === 0, "edge: 100 % is free");
console.assert(new Product("Zelda", 59.95, 2).total() === 119.9, "2 Zeldas: 119.9");
console.assert(new Product("Tetris", 9.5).units === 1, "units by default: 1");
let priceError = false;
try {
    new Product("Broken", -5);
} catch (error) {
    priceError = error.name === "PriceError";
}
console.assert(priceError, "strange: a negative price throws a PriceError");
console.assert(Product.fromObject({ name: "Doom", price: 5, units: 1, platform: "PC" }) instanceof DigitalProduct, "fromObject with a platform gives a DigitalProduct");

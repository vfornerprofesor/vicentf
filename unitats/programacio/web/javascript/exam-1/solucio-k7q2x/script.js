/*
   JavaScript exam 1
   Name: Marta García López
   Group: 2n SMX A
   Date: 15/10/2026
*/
console.log("Exam 1 is running");

// ===== Exercise 1: Stationery shop =====

// DATA
const SHOP_NAME = "Paper & Co";
const OWNER_NAME = "Vicent";
const PEN_PRICE = 1.25;
const VAT_RATE = 0.21;
const PENS_PER_BOX = 12;

// INPUT
const customerName = prompt("What is your name?");
// prompt always gives text. Without Number, paid would be "40" and pens "20":
// - and * would convert them on their own (implicit), but + would join the texts.
const pens = Number(prompt("How many pens do you want?"));
const paid = Number(prompt("How much money do you give?"));
console.log(customerName, pens, paid);

// PROCESS
const boxes = Math.floor(pens / PENS_PER_BOX);
const loosePens = pens % PENS_PER_BOX;
const subtotal = pens * PEN_PRICE;
const vat = subtotal * VAT_RATE;
const total = subtotal + vat;
const change = paid - total;
const changeEuros = Math.floor(change);
const changeCents = Math.round(change * 100) % 100;
const enoughMoney = paid >= total;
const freeBag = pens >= 24 || total > 30;
const isOwner = customerName === OWNER_NAME;
const discountNextTime = !isOwner && pens >= PENS_PER_BOX;

// OUTPUT
document.write(`<h2>Exercise 1</h2>`);
document.write(`Hello, ${customerName}! Welcome to ${SHOP_NAME}.<br>`);
document.write(`${pens} pens: ${boxes} boxes and ${loosePens} loose pens<br>`);
document.write(`Price: ${subtotal.toFixed(2)} euros<br>`);
document.write(`VAT (${VAT_RATE * 100} %): ${vat.toFixed(2)} euros<br>`);
document.write(`Total: ${total.toFixed(2)} euros<br>`);
document.write(`Change: ${change.toFixed(2)} euros = ${changeEuros} euros and ${changeCents} cents<br>`);
document.write(`Enough money: ${enoughMoney}<br>`);
document.write(`Free bag: ${freeBag}<br>`);
document.write(`The customer is the owner: ${isOwner}<br>`);
document.write(`Discount next time: ${discountNextTime}<br>`);
document.write(`Types: ${typeof customerName}, ${typeof pens}, ${typeof paid}<br>`);

// ===== Exercise 2: The film =====

// DATA
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;
const LONG_FILM = 120;

// INPUT
const duration = Number(prompt("How many minutes does the film last?"));
const startHour = Number(prompt("Start time: hour (0-23)?"));
const startMinute = Number(prompt("Start time: minute (0-59)?"));

// PROCESS
const hours = Math.floor(duration / MINUTES_PER_HOUR);
const minutes = duration % MINUTES_PER_HOUR;
const endTotal = startHour * MINUTES_PER_HOUR + startMinute + duration;
const endOfDay = endTotal % MINUTES_PER_DAY;
const endHour = Math.floor(endOfDay / MINUTES_PER_HOUR);
const endMinute = endOfDay % MINUTES_PER_HOUR;
const isLong = duration > LONG_FILM;
const afterMidnight = endTotal >= MINUTES_PER_DAY;

// OUTPUT
document.write(`<h2>Exercise 2</h2>`);
document.write(`It lasts ${hours} h ${minutes} min<br>`);
document.write(`It ends at ${endHour}:${String(endMinute).padStart(2, "0")}<br>`);
document.write(`Long film: ${isLong}<br>`);
document.write(`It ends after midnight: ${afterMidnight}<br>`);

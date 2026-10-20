/*
   JavaScript exam 5
   Name: Marta García López
   Group: 2n SMX A
   Date: 04/03/2027

   - Class and object: Date is a class (the plan); new Date(2027, 5, 18) is an
     object made with it. Each trip date I create is a different object.
   - Instance: an object made from a class with new. destinations (new Set(...))
     is an instance of Set.
   - Encapsulation: I use objects through their methods without knowing how they
     work inside: date.getTime(), destinations.size, trips.sort(...).
   - Inheritance: a class built on top of another gets everything it has. All the
     errors I throw are objects of the class Error; TypeError is a class that
     inherits from Error.
*/

// ===== Exercise 1: My trips =====
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const tripForm = document.querySelector("#tripForm");
const destinationInput = document.querySelector("#destination");
const dateInput = document.querySelector("#tripDate");
const budgetInput = document.querySelector("#budget");
const daysLeft = document.querySelector("#daysLeft");
const tripMessage = document.querySelector("#tripMessage");
const tripList = document.querySelector("#tripList");
const tripSummary = document.querySelector("#tripSummary");

// DATA: the trips saved before, or an empty list
let trips = [];
try {
    trips = JSON.parse(localStorage.getItem("trips")) || [];   // static
} catch (error) {
    trips = [];
}

function save() {
    localStorage.setItem("trips", JSON.stringify(trips));      // static
}

function showMessage(text, type) {
    tripMessage.textContent = text;
    tripMessage.className = type;
}

function euros(amount) {
    return amount.toLocaleString("ca-ES", { style: "currency", currency: "EUR" });
}

// "rOME " -> "Rome"
function niceName(text) {
    const clean = text.trim().toLowerCase();
    return clean.slice(0, 1).toUpperCase() + clean.slice(1);
}

/**
 * Reads the budget from a text.
 * @param {string} text - what the user typed
 * @returns {number} the budget
 * @throws {Error} BudgetError if it is empty, not a number or negative
 */
function readBudget(text) {
    let message = "";
    const budget = Number(text.replace(/,/g, "."));
    if (text.trim() === "") {
        message = "Write the budget.";
    } else if (isNaN(budget)) {
        message = "The budget must be a number.";
    } else if (budget < 0) {
        message = "The budget cannot be negative.";
    }
    if (message !== "") {
        const error = new Error(message);
        error.name = "BudgetError";
        throw error;
    }
    return budget;
}

function draw() {
    tripList.innerHTML = "";
    trips.sort((a, b) => a.date.localeCompare(b.date));
    trips.forEach(function (trip, index) {
        const date = dayjs(trip.date);
        const li = document.createElement("li");
        li.textContent = `${trip.destination} · ${date.format("ddd DD/MM/YYYY")} · in ${date.diff(dayjs(), "day")} days · ${euros(trip.budget)}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = index;
        li.appendChild(deleteButton);
        tripList.appendChild(li);
    });

    const destinations = new Set(trips.map(trip => trip.destination));
    let names = "";
    for (const name of destinations) {
        names += names === "" ? name : `, ${name}`;
    }
    const total = trips.reduce((sum, trip) => sum + trip.budget, 0);
    const average = trips.length === 0 ? 0 : Math.round(total / trips.length);   // static
    tripSummary.textContent = `${trips.length} trips · ${destinations.size} destinations: ${names} · total ${euros(total)} · about ${euros(average)} per trip`;
}

// When the date changes: how many days are left, with Date
dateInput.addEventListener("change", function () {
    if (dateInput.value === "") {
        daysLeft.textContent = "";
        return;
    }
    const destination = niceName(destinationInput.value) || "Your trip";
    const tripDay = new Date(dateInput.value + "T00:00:00");
    const days = Math.ceil((tripDay.getTime() - new Date().getTime()) / MS_PER_DAY);   // static
    daysLeft.textContent = days < 0 ? "That date has already passed." : `${destination}: ${days} days left`;
});

tripForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // INPUT
    const destination = niceName(destinationInput.value);
    const date = dateInput.value;
    // PROCESS
    if (destination === "") {
        showMessage("Write the destination.", "error");
        destinationInput.focus();
        return;
    }
    if (date === "") {
        showMessage("Choose the date of the trip.", "error");
        dateInput.focus();
        return;
    }
    let budget;
    try {
        budget = readBudget(budgetInput.value);
    } catch (error) {
        showMessage(error.message, "error");
        budgetInput.focus();
        return;
    }
    const existing = trips.find(trip => trip.destination === destination);
    if (existing === undefined) {
        trips.push({ destination: destination, date: date, budget: budget });
    } else {
        existing.date = date;
        existing.budget = budget;
    }
    save();
    // OUTPUT
    draw();
    showMessage(`Trip to ${destination} saved.`, "ok");
    tripForm.reset();
    daysLeft.textContent = "";
    destinationInput.focus();
});

tripList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    trips.splice(Number(event.target.dataset.index), 1);
    save();
    draw();
});

draw();

// ===== Exercise 2: The end of the course =====
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const courseOutput = document.querySelector("#courseOutput");

/**
 * Returns the number of days from the date a to the date b.
 * @param {Date} a - the first date
 * @param {Date} b - the second date
 * @returns {number} the days (negative if b is before a)
 */
function daysBetween(a, b) {
    // Line 15, logic: without brackets it divided by 1000 and then MULTIPLIED by 60 * 60 * 24.
    return (b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24);
}

console.assert(daysBetween(new Date(2027, 0, 1), new Date(2027, 0, 11)) === 10, "normal: 1 to 11 January is 10 days");
console.assert(daysBetween(new Date(2027, 0, 1), new Date(2027, 0, 1)) === 0, "edge: the same day is 0");
console.assert(daysBetween(new Date(2027, 0, 4), new Date(2027, 0, 1)) === -3, "strange: b before a is -3");

const endWithNumbers = new Date(2027, 5, 18);            // the months start at 0: June is 5
const endWithText = new Date("2027-06-18T00:00:00");     // with the hour, so it is local time
const sameDate = endWithNumbers.getTime() === endWithText.getTime();
const daysToEnd = Math.ceil(daysBetween(new Date(), endWithNumbers));   // static
const weeksToEnd = Math.floor(daysToEnd / 7);                            // static
const exactWeeks = Number.isInteger(daysToEnd / 7);                      // static
const daysWithDayjs = dayjs("2027-06-18").diff(dayjs(), "day");

courseOutput.innerHTML = `
    End of the course: ${endWithNumbers.toLocaleDateString("ca-ES")} (${dayNames[endWithNumbers.getDay()]})<br>
    The two dates are the same: ${sameDate}<br>
    Days left: ${daysToEnd} (Day.js says ${daysWithDayjs})<br>
    Weeks left: ${weeksToEnd} · exact weeks: ${exactWeeks}
`;

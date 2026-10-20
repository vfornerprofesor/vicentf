/*
   JavaScript exam 3
   Name: Marta García López
   Group: 2n SMX A
   Date: 17/12/2026
*/

// ===== Exercise 1: Our books =====
// DATA: the books of the club, as JSON text (as if they came from a server).
const booksText = '[{"title": "Dune", "author": "Frank Herbert", "year": 1965, "pages": 612, "genre": "science fiction", "read": true}, {"title": "Matilda", "author": "Roald Dahl", "year": 1988, "pages": 240, "genre": "adventure", "read": false}, {"title": "The BFG", "author": "Roald Dahl", "year": 1982, "pages": 208, "genre": "adventure", "read": true}, {"title": "Holes", "author": "Louis Sachar", "year": 1998, "pages": 272, "genre": "mystery", "read": false}]';
const YEAR_PATTERN = /^\d{4}$/;

const booksMessage = document.querySelector("#booksMessage");
const booksOutput = document.querySelector("#booksOutput");
const statsOutput = document.querySelector("#statsOutput");
const exportOutput = document.querySelector("#exportOutput");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#year");
const pagesInput = document.querySelector("#pages");
const genreInput = document.querySelector("#genre");
const bookTitleInput = document.querySelector("#bookTitle");

function showMessage(text, type) {
    booksMessage.textContent = text;
    booksMessage.className = type;
}

let books = [];
try {
    books = JSON.parse(booksText);
} catch (error) {
    showMessage("The list of books is not valid.", "error");
}

// Returns the average number of pages of a list of books (0 if the list is empty).
function averagePages(list) {
    if (list.length === 0) {
        return 0;
    }
    // Line 14, logic: without the 0 at the end, reduce started with the first book (an object).
    const total = list.reduce((sum, book) => sum + book.pages, 0);
    // Line 15, logic: it divided by books.length (the global array) instead of list.length.
    return total / list.length;
}

console.assert(averagePages([{ pages: 100 }, { pages: 300 }]) === 200, "normal: 100 and 300 pages -> 200");
console.assert(averagePages([{ pages: 150 }]) === 150, "edge: one book -> its pages");
console.assert(averagePages([]) === 0, "strange: empty list -> 0");

function draw() {
    let html = "";
    books.forEach(function (book, index) {
        const state = book.read ? "read" : "not read";
        html += `${index + 1}. ${book.title} (${book.year}) · ${book.author} · ${book.genre} · ${book.pages} pages · ${state}<br>`;
    });
    booksOutput.innerHTML = html;
    drawStats();
}

function drawStats() {
    const readTitles = books.filter(book => book.read).map(book => book.title);
    const totalPages = books.reduce((total, book) => total + book.pages, 0);
    const byYear = books.slice().sort((a, b) => a.year - b.year).map(book => book.title);
    // Set: we only want each author once
    const authors = new Set(books.map(book => book.author));
    // Map: each genre (key) with how many books it has (value)
    const genres = new Map();
    for (const book of books) {
        genres.set(book.genre, (genres.get(book.genre) || 0) + 1);
    }
    let genresText = "";
    for (const [genre, count] of genres.entries()) {
        genresText += `${genre}: ${count} · `;
    }
    statsOutput.innerHTML = `
        Read: ${readTitles.join(", ")}<br>
        Total pages: ${totalPages}<br>
        From oldest to newest: ${byYear.join(", ")}<br>
        Average pages: ${averagePages(books).toFixed(1)}<br>
        Different authors: ${authors.size}<br>
        Books per genre: ${genresText}
    `;
}

/**
 * Returns the position of the book with that title, or -1.
 * @param {string} title - the title to look for
 * @returns {number} the position in the array books, or -1 if it is not there
 */
function indexOfTitle(title) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            return i;
        }
    }
    return -1;
}

/**
 * Removes the book with that title from the array books.
 * @param {string} title - the title of the book
 * @returns {void}
 * @throws {Error} NotFoundError if there is no book with that title
 */
function removeBook(title) {
    const position = indexOfTitle(title);
    if (position === -1) {
        const error = new Error(`There is no book called "${title}".`);
        error.name = "NotFoundError";
        throw error;
    }
    books.splice(position, 1);
}

document.querySelector("#addBook").addEventListener("click", function () {
    // INPUT
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const yearText = yearInput.value.trim();
    const pages = Number(pagesInput.value);
    const genre = genreInput.value.trim().toLowerCase();
    // PROCESS
    if (title === "") {
        showMessage("Write the title of the book.", "error");
        return;
    }
    if (!YEAR_PATTERN.test(yearText)) {
        showMessage("The year must have 4 digits, for example 1998.", "error");
        return;
    }
    if (isNaN(pages) || pages <= 0) {
        showMessage("The pages must be a number bigger than 0.", "error");
        return;
    }
    books.push({ title: title, author: author, year: Number(yearText), pages: pages, genre: genre, read: false });
    // OUTPUT
    draw();
    showMessage(`"${title}" added.`, "ok");
    titleInput.value = "";
});

document.querySelector("#removeBook").addEventListener("click", function () {
    const title = bookTitleInput.value.trim();
    try {
        removeBook(title);
        draw();
        showMessage(`"${title}" removed.`, "ok");
    } catch (error) {
        showMessage(error.message, "error");
    }
});

document.querySelector("#markRead").addEventListener("click", function () {
    const title = bookTitleInput.value.trim();
    const position = indexOfTitle(title);
    if (position === -1) {
        showMessage(`There is no book called "${title}".`, "error");
        return;
    }
    books[position].read = true;
    draw();
    showMessage(`"${title}" is read now.`, "ok");
});

document.querySelector("#exportButton").addEventListener("click", function () {
    exportOutput.textContent = JSON.stringify(books, null, 2);
});

draw();

// ===== Exercise 2: Reading room =====
// "X" = occupied, "" = free. 3 rows of 5 seats.
const OCCUPIED = "X";
const seats = [
    ["X", "X", "X", "X", "X"],
    ["X", "", "X", "", "X"],
    ["", "", "", "X", ""]
];
const seatsOutput = document.querySelector("#seatsOutput");
const seatsInfo = document.querySelector("#seatsInfo");
const seatMessage = document.querySelector("#seatMessage");

function isRowFull(row) {
    for (const seat of seats[row]) {
        if (seat !== OCCUPIED) {
            return false; // one free seat is enough to know it
        }
    }
    return true;
}

function countFree() {
    let free = 0;
    for (const row of seats) {
        for (const seat of row) {
            if (seat !== OCCUPIED) {
                free++;
            }
        }
    }
    return free;
}

function drawSeats() {
    let html = "<table>";
    for (let row = 0; row < seats.length; row++) {
        html += "<tr>";
        for (let col = 0; col < seats[row].length; col++) {
            html += `<td>${seats[row][col]}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    seatsOutput.innerHTML = html;

    let info = "";
    for (let row = 0; row < seats.length; row++) {
        info += `Row ${row + 1} full: ${isRowFull(row)} · `;
    }
    seatsInfo.textContent = `${info}Free seats: ${countFree()}`;
}

document.querySelector("#bookSeat").addEventListener("click", function () {
    const row = Number(document.querySelector("#seatRow").value) - 1;
    const col = Number(document.querySelector("#seatCol").value) - 1;
    if (isNaN(row) || isNaN(col) || row < 0 || row >= seats.length || col < 0 || col >= seats[row].length) {
        seatMessage.textContent = "That seat does not exist.";
        seatMessage.className = "error";
        return;
    }
    if (seats[row][col] === OCCUPIED) {
        seatMessage.textContent = "That seat is already occupied.";
        seatMessage.className = "error";
        return;
    }
    seats[row][col] = OCCUPIED;
    drawSeats();
    seatMessage.textContent = `Row ${row + 1}, seat ${col + 1}: booked.`;
    seatMessage.className = "ok";
});

drawSeats();

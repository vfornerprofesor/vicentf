// Write here your comment with your name, group and date.


// ===== Exercise 1: Our books =====
// The books of the club, as JSON text (as if they came from a server).
const booksText = '[{"title": "Dune", "author": "Frank Herbert", "year": 1965, "pages": 612, "genre": "science fiction", "read": true}, {"title": "Matilda", "author": "Roald Dahl", "year": 1988, "pages": 240, "genre": "adventure", "read": false}, {"title": "The BFG", "author": "Roald Dahl", "year": 1982, "pages": 208, "genre": "adventure", "read": true}, {"title": "Holes", "author": "Louis Sachar", "year": 1998, "pages": 272, "genre": "mystery", "read": false}]';

// Returns the average number of pages of a list of books (0 if the list is empty).
// This function is given, but it has 2 errors.
function averagePages(list) {
    if (list.length === 0) {
        return 0;
    }
    const total = list.reduce((sum, book) => sum + book.pages);
    return total / books.length;
}



// ===== Exercise 2: Reading room =====
// "X" = occupied, "" = free. 3 rows of 5 seats.
const seats = [
    ["X", "X", "X", "X", "X"],
    ["X", "", "X", "", "X"],
    ["", "", "", "X", ""]
];


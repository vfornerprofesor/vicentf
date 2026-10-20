// Write here your comment with your name, group and date
// and the explanations that the exam asks for.


// ===== Exercise 1: My trips =====



// ===== Exercise 2: The end of the course =====
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Returns the number of days from the date a to the date b (negative if b is before a).
// This function is given, but it has 1 error.
function daysBetween(a, b) {
    return (b.getTime() - a.getTime()) / 1000 * 60 * 60 * 24;
}


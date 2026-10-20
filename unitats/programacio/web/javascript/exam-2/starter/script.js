// Write here your comment with your name, group and date.


// ===== Exercise 1: Final mark of a student =====



// ===== Exercise 2: The group =====
// The marks of the group. A negative mark means "end of the list":
// that mark and the ones after it do not count.
const groupMarks = [6.5, 8, 4, 9.5, 3, 7, -1, 10, 5];

// Returns the best mark of the list, until the first negative one.
// This function is given, but it has 3 errors.
function bestMark(marks) {
    let best = 0;
    for (const mark of marks) {
        if (mark < 0 {
            continue;
        }
        if (mark < best) {
            best = mark;
        }
    }
    return best;
}


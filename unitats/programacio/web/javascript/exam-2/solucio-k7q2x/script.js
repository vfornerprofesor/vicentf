/*
   JavaScript exam 2
   Name: Marta García López
   Group: 2n SMX A
   Date: 12/11/2026
*/

// ===== Exercise 1: Final mark of a student =====

// DATA
const EXAM_WEIGHT = 0.3;
const PROJECT_WEIGHT = 0.4;
const MIN_MARK = 0;
const MAX_MARK = 10;

const exam1Input = document.querySelector("#exam1");
const exam2Input = document.querySelector("#exam2");
const projectInput = document.querySelector("#project");
const markOutput = document.querySelector("#markOutput");

/**
 * Reads a mark from an input.
 * @param {HTMLInputElement} input - the field with the mark
 * @returns {number} the mark as a number
 * @throws {Error} ValidationError if the field is empty, is not a number or is outside 0-10
 */
function readMark(input) {
    const text = input.value.trim();
    let message = "";
    if (text === "") {
        message = "Every mark must be written.";
    } else if (isNaN(Number(text))) {
        message = `"${text}" is not a number.`;
    } else if (Number(text) < MIN_MARK || Number(text) > MAX_MARK) {
        message = `The marks go from ${MIN_MARK} to ${MAX_MARK}.`;
    }
    if (message !== "") {
        const error = new Error(message);
        error.name = "ValidationError";
        throw error;
    }
    return Number(text);
}

/**
 * Returns the final mark: 30 % each exam and 40 % the project.
 * @param {number} exam1 - mark of the first exam
 * @param {number} exam2 - mark of the second exam
 * @param {number} project - mark of the project
 * @returns {number} the final mark
 */
function finalMark(exam1, exam2, project) {
    return exam1 * EXAM_WEIGHT + exam2 * EXAM_WEIGHT + project * PROJECT_WEIGHT;
}

/**
 * Returns the word for a mark.
 * @param {number} mark - a mark from 0 to 10
 * @returns {string} Fail, Pass, Good or Excellent
 */
function gradeWord(mark) {
    if (mark >= 9) {
        return "Excellent";
    } else if (mark >= 7) {
        return "Good";
    } else if (mark >= 5) {
        return "Pass";
    }
    return "Fail";
}

document.querySelector("#calculate").addEventListener("click", function () {
    try {
        // INPUT
        const exam1 = readMark(exam1Input);
        const exam2 = readMark(exam2Input);
        const project = readMark(projectInput);
        // PROCESS
        const mark = finalMark(exam1, exam2, project);
        const word = gradeWord(mark);
        // OUTPUT
        markOutput.textContent = `Final mark: ${mark.toFixed(2)} · ${word}`;
        markOutput.className = mark >= 5 ? "ok" : "error";
    } catch (error) {
        markOutput.textContent = error.message;
        markOutput.className = "error";
    }
});

// ===== Exercise 2: The group =====
// The marks of the group. A negative mark means "end of the list":
// that mark and the ones after it do not count.
const groupMarks = [6.5, 8, 4, 9.5, 3, 7, -1, 10, 5];
const groupOutput = document.querySelector("#groupOutput");
const groupSummary = document.querySelector("#groupSummary");

// Returns the best mark of the list, until the first negative one.
function bestMark(marks) {
    let best = 0;
    for (const mark of marks) {
        // Line 18, syntax: the bracket of the condition was not closed.
        if (mark < 0) {
            // Line 19, logic: continue skipped the -1 and went on reading 10 and 5.
            break;
        }
        // Line 21, logic: with < it kept the lowest mark, not the best one.
        if (mark > best) {
            best = mark;
        }
    }
    return best;
}

console.assert(bestMark([6, 9, 7]) === 9, "normal: the best of 6, 9, 7 is 9");
console.assert(bestMark([5, -1, 10]) === 5, "edge: the 10 after -1 does not count");
console.assert(bestMark([-1, 8]) === 0, "strange: no valid mark gives 0");

document.querySelector("#showGroup").addEventListener("click", function () {
    let html = "<table>";
    let count = 0;
    let passed = 0;
    let total = 0;
    for (const mark of groupMarks) {
        if (mark < 0) {
            break; // the end of the list: nothing after it counts
        }
        const word = gradeWord(mark);
        const colour = mark >= 5 ? "ok" : "error";
        html += `<tr><td>Student ${count + 1}</td><td>${mark}</td><td class="${colour}">${word}</td></tr>`;
        count++;
        total += mark;
        if (mark >= 5) {
            passed++;
        }
    }
    html += "</table>";
    groupOutput.innerHTML = html;
    const average = count === 0 ? 0 : total / count;
    groupSummary.textContent = `${count} marks · ${passed} passed · ${count - passed} failed · average ${average.toFixed(2)} · best ${bestMark(groupMarks)}`;
});

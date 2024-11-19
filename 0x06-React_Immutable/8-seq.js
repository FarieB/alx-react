import { Seq } from 'immutable';

/**
 * Filters students with a score >= 70 and capitalizes their names.
 * Prints the resulting object to the console.
 * @param {Object} grades - The object containing student grades.
 */
export function printBestStudents(grades) {
    // Create an Immutable Seq from the grades object
    const bestStudents = Seq(grades)
        .filter(student => student.score >= 70) // Filter students with score >= 70
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase(),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase(),
        })); // Capitalize first and last names

    // Convert the Seq back to a JavaScript object and print
    console.log(bestStudents.toObject());
}

// Example usage:
const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 45,
        firstName: 'john',
        lastName: 'doe',
    },
    3: {
        score: 75,
        firstName: 'jane',
        lastName: 'smith',
    },
};

printBestStudents(grades);
// Output:
// {
//     "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
//     "3": { score: 75, firstName: "Jane", lastName: "Smith" }
// }

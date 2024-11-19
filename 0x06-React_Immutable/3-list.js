import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} - The immutable List representation of the array.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Appends an element to the immutable List.
 * @param {List} list - The immutable List to append to.
 * @param {string} element - The string to append.
 * @returns {List} - The updated immutable List.
 */
export function addElementToList(list, element) {
    return list.push(element);
}

// Example usage:
const list = getListObject([1, 2, 3]);
console.log(list); // Output: List [ 1, 2, 3 ]

const updatedList = addElementToList(list, 'newElement');
console.log(updatedList); // Output: List [ 1, 2, 3, 'newElement' ]

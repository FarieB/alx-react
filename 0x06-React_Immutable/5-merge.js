import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into a single Immutable List.
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - The Immutable List containing all elements from both arrays.
 */
export function concatElements(page1, page2) {
    return List(page1).concat(page2);
}

/**
 * Merges two objects into a single Immutable List.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - The Immutable List containing the merged values.
 */
export function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    const mergedMap = map1.merge(map2);
    return List(mergedMap.values());
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatElements(array1, array2)); 
// Output: List [ 1, 2, 3, 4, 5, 6 ]

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, d: 5 };
console.log(mergeElements(object1, object2)); 
// Output: List [ 1, 4, 3, 5 ]

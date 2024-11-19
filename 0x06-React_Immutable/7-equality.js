import { Map, is } from 'immutable';

/**
 * Checks if two Immutable Maps are equal.
 * @param {Map} map1 - The first Immutable Map.
 * @param {Map} map2 - The second Immutable Map.
 * @returns {boolean} - True if the two maps are equal, false otherwise.
 */
export function areMapsEqual(map1, map2) {
    return is(map1, map2);
}

// Example usage:
const map1 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

const map2 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

const map3 = Map({
    firstName: 'John',
    lastName: 'Doe',
});

console.log(areMapsEqual(map1, map2)); // Output: true
console.log(areMapsEqual(map1, map3)); // Output: false

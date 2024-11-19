import { fromJS } from 'immutable';

/**
 * Accesses the value of an object at a defined path.
 * @param {Object} object - The plain object to access.
 * @param {Array} array - The array defining the path to the key.
 * @returns {undefined|string|Map} - The value at the defined path.
 */
export default function accessImmutableObject(object, array) {
    // Convert the plain object into an Immutable Map
    const immutableObject = fromJS(object);

    // Use the path to access the value
    return immutableObject.getIn(array);
}

// Example usage:
const result = accessImmutableObject(
    {
        name: {
            first: "Guillaume",
            last: "Salva"
        }
    },
    ['name', 'first']
);

console.log(result); // Output: "Guillaume"

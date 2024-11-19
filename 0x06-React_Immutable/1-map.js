// Import the Map function from Immutable.js
const { Map } = require('immutable');

/**
 * Converts a plain JavaScript object into an immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} - The immutable Map representation of the object.
 */
function getImmutableObject(object) {
    return Map(object);
}

// Example usage:
const input = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableObject = getImmutableObject(input);
console.log(immutableObject);

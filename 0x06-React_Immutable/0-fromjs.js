// Import the required function from Immutable.js
const { fromJS } = require('immutable');

/**
 * Converts a plain JavaScript object into an immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} - The immutable Map representation of the object.
 */
function getImmutableObject(object) {
    return fromJS(object);
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

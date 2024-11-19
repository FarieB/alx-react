import { Map } from 'immutable';

// Creating an Immutable Map with the initial object
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Modifying values in the map to create a second map
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

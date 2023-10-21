import { jest } from '@jest/globals';

const getPrimaryImageAspectRatio = require('./imageLoader.js');

class aspectRatio {
    constructor(ratio) {
        this.PrimaryImageAspectRatio = ratio;
    }
}

jest.test('Given zero items, get null returned', () => {
    jest.expect(getPrimaryImageAspectRatio([])).toBe(null);
});

jest.test('Given 3:4 aspect ratio, returns 2:3', () => {
    jest.expect(getPrimaryImageAspectRatio([aspectRatio(3 / 4)])).toBe(2 / 3);
});


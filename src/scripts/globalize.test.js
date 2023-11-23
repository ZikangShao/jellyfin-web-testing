import { describe, expect, test } from 'vitest';
import globalize from './globalize';

describe('getCurrentLocale', () => {
    test('getCurrentLocale returns en-us', () => {
        expect(globalize.getCurrentLocale()).toBe('en-us');
    });
});

describe('getIsRTL', () => {
    test('getIsRTL returns false', () => {
        expect(globalize.getIsRTL()).toBe(false);
    });
    test('getIsRTL returns true', () => {
        expect(!globalize.getIsRTL()).toBe(true);
    });
});

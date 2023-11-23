import { describe, expect, test } from 'vitest';
import globalize from './globalize';

describe('getCurrentLocale', () => {
    test('getCurrentLocale returns en-us', () => {
        expect(globalize.getCurrentLocale()).toBe('en-us');
    });
});

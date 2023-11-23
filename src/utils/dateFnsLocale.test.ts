import { describe, test, expect } from 'vitest';
import { getLocale, getLocaleWithSuffix } from './dateFnsLocale';
import enUS from 'date-fns/locale/en-US';

describe('getLocale', () => {
    test('getLocale returns en-us', () => {
        expect(getLocale()).toBe(enUS);
    });
});

describe('getLocale', () => {
    test('getLocale returns en-us', () => {
        expect(getLocaleWithSuffix()).toEqual({ addSuffix: true, locale: enUS });
    });
});

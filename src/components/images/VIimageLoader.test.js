import { describe, expect, test } from 'vitest';
import getPrimaryImageAspectRatio from './imageLoader';

describe('getPrimaryImageAspectRatio', () => {
    test('Given zero items, get null returned', () => {
        const items = [];

        const result = getPrimaryImageAspectRatio(items);
        expect(result).toBeNull();
    });

    test('Given 201:300 aspect ratio, returns 2:3', () => {
        const items = [
            { PrimaryImageAspectRatio: 201 / 300 }
        ];

        const result = getPrimaryImageAspectRatio(items);
        expect(result).toBeCloseTo(2 / 3);
    });

    test('Given 32:19 aspect ratio, returns 16:9', () => {
        const items = [
            { PrimaryImageAspectRatio: 32 / 19 }
        ];

        const result = getPrimaryImageAspectRatio(items);
        expect(result).toBeCloseTo(16 / 9);
    });

    test('Given 100:99 aspect ratio, returns 1', () => {
        const items = [
            { PrimaryImageAspectRatio: 100 / 99 }
        ];

        const result = getPrimaryImageAspectRatio(items);
        expect(result).toBeCloseTo(1);
    });

    test('Given 401/300 aspect ratio, returns 2:3', () => {
        const items = [
            { PrimaryImageAspectRatio: 401 / 300 }
        ];

        const result = getPrimaryImageAspectRatio(items);
        expect(result).toBeCloseTo(2 / 3);
    });
});

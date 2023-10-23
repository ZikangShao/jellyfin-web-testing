import { describe, expect, test } from 'vitest';
import datetime from './datetime';

describe('getDisplayDuration', () => {
    test('getDisplayDuration returns 1h 0m for 36000000000 ticks', () => {
        expect(datetime.getDisplayDuration(36000000000)).toBe('1h 0m');
    });

    test('getDisplayDuration returns 1m for 600000000 ticks', () => {
        expect(datetime.getDisplayDuration(600000000)).toBe('1m');
    });

    test('getDisplayDuration returns 1m for 1000 ticks', () => {
        expect(datetime.getDisplayDuration(10000000)).toBe('1m');
    });

    test('getDisplayDuration returns 1m for 0 ticks', () => {
        expect(datetime.getDisplayDuration(0)).toBe('1m');
    });

    test('getDisplayDuration returns 2h 0m for 72000000000 ticks', () => {
        expect(datetime.getDisplayDuration(72000000000)).toBe('2h 0m');
    });

    test('getDisplayDuration returns 4h 23m for 158000000000 ticks', () => {
        expect(datetime.getDisplayDuration(158000000000)).toBe('4h 23m');
    });
});

describe('getDisplayRunningTime', () => {
    test('getDisplayRunningTime returns 0:00 for 0 ticks', () => {
        expect(datetime.getDisplayRunningTime(0)).toBe('0:00');
    });

    test('getDisplayRunningTime returns 0:00 for 1 ticks', () => {
        expect(datetime.getDisplayRunningTime(1)).toBe('0:00');
    });

    test('getDisplayRunningTime returns 0:01 for 10000000 ticks', () => {
        expect(datetime.getDisplayRunningTime(10000000)).toBe('0:01');
    });

    test('getDisplayRunningTime returns 1:00 for 600000000 ticks', () => {
        expect(datetime.getDisplayRunningTime(600000000)).toBe('1:00');
    });

    test('getDisplayRunningTime returns 1:00:00 for 36000000000 ticks', () => {
        expect(datetime.getDisplayRunningTime(36000000000)).toBe('1:00:00');
    });

    test('getDisplayRunningTime returns 16:40:00 for 600000000000 ticks', () => {
        expect(datetime.getDisplayRunningTime(600000000000)).toBe('16:40:00');
    });
});


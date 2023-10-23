import { expect, test } from 'vitest';
import datetime from './datetime';

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


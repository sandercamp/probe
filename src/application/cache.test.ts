import { isExpirableItem, cacheIsEnabled, toCache, fromCache } from './cache';

describe('isExpirableItem()', () => {
    const testCases = [
        { value: null, expected: false },
        { value: 1, expected: false },
        { value: 'ExpirableItem', expected: false },
        { value: { expirs: new Date(), value: null }, expected: false },
        { value: { expires: new Date(), value: 1 }, expected: true },
        { value: { expires: new Date(), value: null }, expected: true }
    ];

    it.each(testCases)(
        'checks if the provided value is an ExpirableItem',
        ({ value, expected }) => expect(isExpirableItem(value)).toBe(expected)
    );
});

test('cacheIsEnabled()', () => {
    expect(cacheIsEnabled()).toBe(true);
});

test('toCache()', () => {
    toCache(2, 'test');

    expect(fromCache('test')).toBe(2);
});

import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import { usePictureOfTheDay } from './api';

fetchMock.enableMocks();
beforeEach(() => {
    fetchMock.resetMocks();

    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('Test custom hook', () => {

    it('checking default state', () => {
        fetchMock.mockResponseOnce(JSON.stringify('test'));

        const { result } = renderHook(() => usePictureOfTheDay())

        expect(result.current).toBe(null);
    })
})

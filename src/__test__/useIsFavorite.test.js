import { renderHook } from '@testing-library/react-hooks';

import useIsFavorite from '../utils/hooks/useIsFavorite';
import { mockFavorites } from '../mockData';

describe('Testing useIsFavorite hooks', () => {
  const user = { name: 'Wizeline' };

  it('Finding a favorite video', async () => {
    const { result } = renderHook(() =>
      useIsFavorite('YuW0CE_8i1I', mockFavorites, user)
    );
    expect(result.current).toBe(mockFavorites[0]);
  });

  it('Looking for a not favorite video', async () => {
    const { result } = renderHook(() =>
      useIsFavorite('codMybQ6iHo', mockFavorites, user)
    );
    expect(result.current).not.toBe(mockFavorites[0]);
  });
});

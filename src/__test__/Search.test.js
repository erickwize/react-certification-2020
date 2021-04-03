import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Search from '../components/Search/Search';

describe('ThemeButton test', () => {
  it('Looking for elements', () => {
    render(<Search />);

    const search = screen.getByPlaceholderText('Buscar contenido');
    expect(search).toBeInTheDocument();
  });
  // Firing events
  it('Updates search box on typing', async () => {
    render(<Search />);
    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'Wizeline');
    expect(await screen.getByDisplayValue('Wizeline')).toBeInTheDocument();
  });

  it('Fire event when Enter key is pressed', async () => {
    const handleChange = jest.fn();
    render(<Search handleChange={handleChange} />, { wrapper: MemoryRouter });
    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'Wizeline{enter}');
    expect(await screen.getByDisplayValue('Wizeline')).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

// SIMULATE API CALL HERE

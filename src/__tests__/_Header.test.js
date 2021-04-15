import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import HeaderMenu from '../components/Header';

afterEach(() => {
  cleanup();
});

const doSearch = jest.fn();

it('Should render Header', () => {
  const header = render(<HeaderMenu />);
  const headerComponent = screen.getByTestId('yt-header');
  expect(headerComponent).toBeInTheDocument();
  expect(headerComponent).toContainHTML('Dark mode');
  expect(headerComponent).toContainHTML('input');
  expect(header).toMatchSnapshot();
});

it('Toggle Header Dark mode', () => {
  render(<HeaderMenu />);

  const switchInput = screen.getByLabelText('Dark mode', { type: 'checkbox' });
  expect(switchInput).toBeInTheDocument();
  fireEvent(
    switchInput,
    new MouseEvent('click', {
      checked: true,
    })
  );
  expect(switchInput.checked).toBe(true);
  fireEvent(
    switchInput,
    new MouseEvent('click', {
      checked: false,
    })
  );
  expect(switchInput.checked).toBe(false);
});

it('Search value change', () => {
  render(<HeaderMenu doSearch={doSearch} />);

  const SearchInput = screen.getByPlaceholderText('Search...');
  expect(SearchInput).toBeInTheDocument();
  SearchInput.focus();
  fireEvent.change(SearchInput, { target: { value: 'wizeline' } });
  expect(SearchInput.value).toBe('wizeline');

  fireEvent.keyDown(SearchInput, { key: 'Enter', code: 'Enter' });
  setTimeout(() => {
    expect(doSearch).toHaveBeenCalledWith('wizeline');
  }, 10);

  fireEvent.blur(SearchInput, { key: 'Enter', code: 'Enter' });
  setTimeout(() => {
    act(() => {
      expect(doSearch).toHaveBeenCalledWith('wizeline');
    });
  }, 10);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPage from './Video.page';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../hooks/useSearch';
import { act } from 'react-dom/test-utils';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)

test('render without crash', async () => {
  const promise = Promise.resolve();

  render(
    <Wrapper>
      <VideoPage />
    </Wrapper>
  );

  await act(() => promise);
});

test('renders an iframe', async () => {
  const promise = Promise.resolve();

  render(
    <Wrapper>
      <VideoPage />
    </Wrapper>
  );

  await act(() => promise);
  
  expect(screen.getByTestId('youtube-video')).toBeInTheDocument();
  
});
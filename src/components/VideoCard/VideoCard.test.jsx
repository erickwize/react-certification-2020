import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../hooks/useSearch';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)

test('renders videocard', () => {
  const video = {
    "id": "nmXMgqjQzls",
    "title": "Video Tour | Welcome to Wizeline Guadalajara",
    "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
   "thumbnail": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg"
  }
  render(
    <Wrapper>
      <VideoCard video={video} />
    </Wrapper>
  );
  const title = screen.getByText('Video Tour | Welcome to Wizeline Guadalajara', { selector: 'h2' });
  const description = screen.getByText(
    "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
    { selector: 'p' }
  );
  const image = screen.getByAltText('video thumbnail', { selector: 'img' });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

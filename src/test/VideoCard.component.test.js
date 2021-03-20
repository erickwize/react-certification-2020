import React from 'react';
import VideoCard from '../components/Video/VideoCard.component';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Video Card", () => {
  it("Render card Infi", () => {
    render(<VideoCard/>);
    expect(screen.getByTestId('video-title'));
    expect(screen.getByTestId('video-description'));
  });

  it('Property src to img', () => {
    render(<VideoCard />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveProperty("src");
  });

});

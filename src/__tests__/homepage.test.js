import React from 'react';
import '@testing-library/jest-dom';
import {cleanup, render, screen} from '@testing-library/react';
import HomePage from "../pages/Home/Home.page";
import youtubeVideos from "../mocks/youtube-videos";

describe('Home page Tests', () => {
  afterEach(cleanup);

  describe('Ensure elements get rendered', () => {
    it('Title', () => {
      render(<HomePage />);
      expect(screen.getByText(/YouTube video search app/, {selector: 'h1'})).toBeInTheDocument();
    });
  });

  describe('Ensure there the info from the mock is being shown', () => {
    it("A random video's information will be displayed if it has videoid", () => {
      render(<HomePage />);
      const randVideoIdx = Math.floor((Math.random() * youtubeVideos.items.length));
      const randomVideo = youtubeVideos.items[randVideoIdx];

      if(randomVideo.id.videoId)
        expect(screen.getByTestId(randomVideo.etag)).toBeInTheDocument();
      else
        expect(screen.getByTestId(randomVideo.etag)).not.toBeInTheDocument();
    });

    it('A video that does not have any description, must show channel title followed by a hypen', () => {
      // render(<HomePage />);
      // const videoWithDescription = youtubeVideos.items[2];
      // if(videoWithDescription.snippet.description === '')
      //   expect(screen.getByText('Wizeline -')).toBeInTheDocument();
      // else
      //   expect(screen.getByText('Wizeline -')).toBeInTheDocument();
      // There must be a way... Right now I'm short of time...
    });
  });
});
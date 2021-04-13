import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { VideoDetail } from './VideoDetail.component';
import { MemoryRouter } from 'react-router-dom';

describe('VideoDetail', () => {
    it('should render correctly', async() => {
        global.gapi = {
            load:jest.fn(),
        }
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(
                <MemoryRouter initialEntries={['/video/test-route']}>
                    <VideoDetail/>
                </MemoryRouter>).container;
        });
        const component = screen.getByTestId('video-detail');
        const videoFrame =  screen.getByTestId('video-frame');
        const videoInfo =  screen.getByTestId('video-info');
        const relatedVideos =  screen.getByTestId('related-videos');
        const infoToggle = screen.getByTestId('info-toggle');
        expect(component).toBeInTheDocument();
        expect(videoFrame).toBeInTheDocument();
        expect(videoInfo).toBeInTheDocument();
        expect(relatedVideos).toBeInTheDocument();
        expect(infoToggle).toBeInTheDocument();
        expect(infoToggle.textContent).toBe("Show more");
    });

    it('should render correctly', async() => {
        global.gapi = {
            load:jest.fn(),
        }
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(
                <MemoryRouter initialEntries={['/video/test-route']}>
                    <VideoDetail/>
                </MemoryRouter>).container;
        });
        const component = screen.getByTestId('video-detail');
        const videoFrame =  screen.getByTestId('video-frame');
        const videoInfo =  screen.getByTestId('video-info');
        const relatedVideos =  screen.getByTestId('related-videos');
        const infoToggle = screen.getByTestId('info-toggle');
        fireEvent.click(infoToggle);
        expect(component).toBeInTheDocument();
        expect(videoFrame).toBeInTheDocument();
        expect(videoInfo).toBeInTheDocument();
        expect(relatedVideos).toBeInTheDocument();
        expect(infoToggle).toBeInTheDocument();
        expect(infoToggle.textContent).toBe("Show less");
    });
});
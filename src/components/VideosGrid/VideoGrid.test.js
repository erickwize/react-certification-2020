import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideosGrid } from './VideosGrid.component';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../providers/Global.provider';

const data = require('../../mock-data/youtube-videos-mock.json');

describe('VideoGrid', ()=>{
    it('should render the component and its children correctly', ()=>{
        render(
        <BrowserRouter>
            <GlobalProvider>
                <VideosGrid data={data}/>
            </GlobalProvider>
        </BrowserRouter>);
        const container = screen.getAllByAltText(/thumbnail/i);
        expect(container.length).toBe(25);
    });
});
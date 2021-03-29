import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideosGrid } from './VideosGrid.component';

const data = require('../../mock-data/youtube-videos-mock.json');

describe('VideoGrid', ()=>{
    it('should render the component and its children correctly', ()=>{
        render(<VideosGrid data={data}/>);
        const container = screen.getAllByAltText(/thumbnail/i);
        expect(container.length).toBe(25);
    });
});
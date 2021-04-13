import React from 'react';
import { act, render } from '@testing-library/react';
import App from './App.component';
import { BrowserRouter } from 'react-router-dom';

describe('App component', ()=>{

    it('should render correctly showing header and main container', async ()=>{
        global.gapi = {
            load:jest.fn(),
        }
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(<App/>).container;
        });
        const header = renderedComponent.querySelector('header');
        const main = renderedComponent.querySelector('main');
        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
    });
});
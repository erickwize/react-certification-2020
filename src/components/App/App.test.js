import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App component', ()=>{
    it('should render correctly showing header and main container',()=>{
        const { container } = render(<App/>);
        const header = container.querySelector('header');
        const main = container.querySelector('main');
        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
    });
});
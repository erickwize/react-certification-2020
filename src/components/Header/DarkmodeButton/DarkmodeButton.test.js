import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkmodeButton } from './DarkmodeButton.component';

describe('DarkmodeButton component', ()=>{    
    
    it("should include a button", ()=>{
        const { container } = render(<DarkmodeButton/>)
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
    });
    
    it("the button should include an svg", ()=>{
        render(<DarkmodeButton/>);
        const svg = screen.getByTestId("darkmodeIcon");
        expect(svg).toBeInTheDocument();
    });
});
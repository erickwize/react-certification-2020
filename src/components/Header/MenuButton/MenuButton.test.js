import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuButton } from './MenuButton.component';

describe('MenuButton component', ()=>{    
    
    it("should include a button", ()=>{
        const { container } = render(<MenuButton/>)
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
    });
    
    it("the button should include an svg", ()=>{
        render(<MenuButton/>);
        const svg = screen.getByTestId("menuIcon");
        expect(svg).toBeInTheDocument();
    });
});
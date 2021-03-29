import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProfileButton } from './ProfileButton.component';

describe('ProfileButton component', ()=>{    
    
    it("should include a button", ()=>{
        const { container } = render(<ProfileButton/>)
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
    });
    
    it("the button should include an svg", ()=>{
        render(<ProfileButton/>);
        const svg = screen.getByTestId("profileIcon");
        expect(svg).toBeInTheDocument();
    });
});
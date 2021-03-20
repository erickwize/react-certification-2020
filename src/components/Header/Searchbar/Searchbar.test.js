import React from 'react';
import { render, screen } from '@testing-library/react';
import { Searchbar } from './Searchbar.component';

describe('Searchbar component', ()=>{    
    
    it("should include a input", ()=>{
        const { container } = render(<Searchbar/>)
        const input = container.querySelector('input');
        expect(input).toBeInTheDocument();
    });

    it("searchbar should have a placeholder that says 'Search'", ()=>{
        render(<Searchbar/>)
        const input = screen.getByPlaceholderText(/Search/);
        expect(input).toBeInTheDocument();
    });
    
    it("the component should include an svg", ()=>{
        render(<Searchbar/>);
        const svg = screen.getByTestId("searchbarIcon");
        expect(svg).toBeInTheDocument();
    });
});
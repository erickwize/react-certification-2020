import React from 'react';
import {render, screen} from '@testing-library/react';
import LogoText from './LogoText.component';

describe('Logo Text', () => {
    it('renders', () => {
        render( <LogoText/> );
        const wizePart = screen.getByRole('heading');
        const TubePart = screen.getByAltText('imagen');
        expect(wizePart).toBeInTheDocument();
        expect(TubePart).toBeInTheDocument();   
    });

    it('renders correctly', () => {
        render( <LogoText/> );
        const wizePart = screen.getByRole('heading');
        const TubePart = screen.getByAltText('imagen');
        expect(wizePart.textContent).toBe("Wize");
        expect(TubePart.src.endsWith("tube.png")).toBeTruthy();
    });

    it('renders correctly', () => {
        render( <LogoText/> );
        const wizePart = screen.getByRole('heading');
        const TubePart = screen.getByAltText('imagen');
        expect(wizePart).toMatchSnapshot();
        expect(TubePart).toMatchSnapshot();
    });
})
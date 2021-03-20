import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header.component';

describe('Header component', ()=>{
    it('should render correctly', ()=>{
        render(<Header />);
        const menuButton = screen.getByTestId('menuButton');
        const searchbar = screen.getByTestId('searchbar');
        const darkmodeButton = screen.getByTestId('darkmodeButton');
        const profileButton = screen.getByTestId('profileButton');
        expect(menuButton).toBeInTheDocument();
        expect(searchbar).toBeInTheDocument();
        expect(darkmodeButton).toBeInTheDocument();
        expect(profileButton).toBeInTheDocument();
    });
});
import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchBar from './SearchBar.component';
import StoreProvider from '../../../store/StoreProvider';

describe('Search Bar', () => {
    it('renders', () => {
        render(
            <StoreProvider>
                <SearchBar/>
            </StoreProvider>
        )
        const searchBar = screen.getByPlaceholderText("Search")
        expect(searchBar).toBeInTheDocument();
    });

    it('starts with wizeline value', () => {
        render(
            <StoreProvider>
                <SearchBar/>
            </StoreProvider>
        )
        const searchBar = screen.getByPlaceholderText("Search")
        expect(searchBar.value).toBe("wizeline");
    });

    it('matches snapshot', () => {
        render(
            <StoreProvider>
                <SearchBar/>
            </StoreProvider>
        )
        const searchBar = screen.getByPlaceholderText("Search")
        expect(searchBar).toMatchSnapshot();
    });
})
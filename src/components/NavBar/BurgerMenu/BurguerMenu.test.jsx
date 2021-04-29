import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import BurguerMenu from './BurgerMenu.component';
import AuthProvider from '../../../providers/Auth';
import StoreProvider from '../../../store/StoreProvider';

describe('Burguer Menu', () => {
    it('renders', () => {
        render(
            <StoreProvider>
                <AuthProvider>
                    <BurguerMenu/>
                </AuthProvider>
            </StoreProvider>
        )
        const burguerMenu = screen.getByTestId('burger');
        expect(burguerMenu).toBeInTheDocument();
    });

    it('passes snapshot before clicking', () => {
        render(
            <StoreProvider>
                <AuthProvider>
                    <BurguerMenu/>
                </AuthProvider>
            </StoreProvider>
        )
        const burguerMenu = screen.getByTestId('burger');
        expect(burguerMenu).toMatchSnapshot();
    });

    it('passes snapshot after clicking', () => {
        render(
            <StoreProvider>
                <AuthProvider>
                    <BurguerMenu/>
                </AuthProvider>
            </StoreProvider>
        )
        const burguerMenu = screen.getByTestId('burger');
        fireEvent.click(burguerMenu);
        expect(burguerMenu).toMatchSnapshot();
    });
})
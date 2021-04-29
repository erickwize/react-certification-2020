import React from 'react';
import {render, screen} from '@testing-library/react';
import AvatarMenu from './AvatarMenu.component';
import AuthProvider from '../../../providers/Auth';

describe('Avatar Menu', () => {
    it('renders', () => {
        render(
        <AuthProvider>
            <AvatarMenu/>
        </AuthProvider>
        )
        const image = screen.getByAltText("123");
        expect(image).toBeInTheDocument();
    });
    
    test('starts as not logged in', () => {
        render(
        <AuthProvider>
            <AvatarMenu/>
        </AuthProvider>
        )
        const image = screen.getByAltText("123");
        expect(image.src.endsWith("avatar.jpg")). toBeTruthy();
    });

    test('matches snapshot', () => {
        render(
        <AuthProvider>
            <AvatarMenu/>
        </AuthProvider>
        )
        const image = screen.getByAltText("123");
        expect(image).toMatchSnapshot();
    })
})
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import GlobalProvider from '../../providers/Global.provider';
import { Routes } from '../Routes/Routes.component';

describe('Login component', () => {
    it('should render correctly', ()=>{
        const createRouter = (initialEntry = '/') => {
            return (
                <MemoryRouter initialEntries={[initialEntry]}>
                    <GlobalProvider>
                        <Routes/>
                    </GlobalProvider>
                </MemoryRouter>
            )
        }
        render(createRouter('/login'))
        expect(true).toBe(true);
    });
});
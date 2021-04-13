import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Searchbar } from './Searchbar.component';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));


describe('Searchbar component', ()=>{

    beforeEach(() => {
        mockHistoryPush.mockRestore();
    });

    it("should correctly render an input with placeholder and include an sgv", ()=>{
        const { container } = render(<Searchbar/>)
        const input = container.querySelector('input');
        const placeholder = screen.getByPlaceholderText(/Search/);
        const svg = screen.getByTestId("searchbarIcon");
        expect(input).toBeInTheDocument();
        expect(placeholder).toBeInTheDocument();
        expect(svg).toBeInTheDocument();
    });

    it('should handle the type, handle the submit, call the setSearchValue() state setter and redirect to "/"', () => {
        const setSearchValue = jest.fn();
        render(<Searchbar setSearchValue={setSearchValue} history={history}/>);
        const form = screen.getByTestId('form');
        const input = screen.getByPlaceholderText(/Search/);

        fireEvent.change(input, { target: { value: 'test' } });
        // If the handleSubmit function in component does
        // e.preventDefault() we should expect the return
        // of the fireEvent.submit() function to be false
        const isDefaultPrevented = fireEvent.submit(form);

        expect(input).toBeInTheDocument();
        expect(input.value).toBe('test');
        expect(isDefaultPrevented).toBe(false);
        expect(setSearchValue.mock.calls[0][0]).toBe('test');
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });

    it('should handle the type, handle the svg click, call the setSearchValue() state setter and redirect to "/"', () => {
        const setSearchValue = jest.fn();
        render(<Searchbar setSearchValue={setSearchValue}/>);
        const input = screen.getByPlaceholderText(/Search/);
        const svg = screen.getByTestId("searchbarIcon");

        
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.click(svg);

        expect(input).toBeInTheDocument();
        expect(input.value).toBe('test');
        expect(setSearchValue.mock.calls[0][0]).toBe('test');
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
});
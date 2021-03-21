import React from 'react';
import Header from './Header.component';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders title text content correctly", () => {
    const { queryByTestId } = render(<Header/>)

    expect(queryByTestId("title-content")).toHaveTextContent("Wizeline Challenge")
})

it("renders input placeholder correctly", () => {
    const { queryByPlaceholderText } = render(<Header/>)

    expect(queryByPlaceholderText("Search")).toBeTruthy()
})

describe("image", () => {
    it("image must have src = 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' and alt = 'user'", () => {
        const {queryByTestId} = render(<Header/>)

        expect(queryByTestId("image")).toHaveAttribute('src', 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png');
        expect(queryByTestId("image")).toHaveAttribute('alt', 'user');
    })
})

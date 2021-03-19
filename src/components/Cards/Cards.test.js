import React from 'react';
import Cards from './Cards.component';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Card", () => {
    it("renders card correctly based on props", () => {
        const { queryByTestId } = render(<Cards img="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo" title="Wizeline" channel="Wizeline" description="Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ..." date="2014-09-27T01:39:18Z"/>)

        expect(queryByTestId("card-img")).toHaveAttribute('src', "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo")
        expect(queryByTestId("card-img")).toHaveAttribute('alt', "Wizeline")
        expect(queryByTestId("card-title")).toHaveTextContent("Wizeline")
        expect(queryByTestId("card-subtitle")).toHaveTextContent("By Wizeline • 2014-09-27")
        expect(queryByTestId("card-description")).toHaveTextContent("Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...")
    })
})

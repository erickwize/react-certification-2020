import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout component', ()=>{
    it('should render correctly',()=>{
        const {container} =  render(<Layout/>);
        const main = container.querySelector('main');
        expect(main).toBeInTheDocument();
    });
});
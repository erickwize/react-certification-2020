import React from 'react';
import ReactDOM from 'react-dom';
import  HomeCard from './';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

describe('HomePage tests',() => {

    it('must be rendering without crasing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<HomeCard></HomeCard>,div);

    });


});
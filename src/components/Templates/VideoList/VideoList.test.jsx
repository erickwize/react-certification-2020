import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import VideoList from './index';
import * as data from '../../../data/youtube-videos-mock.json';

describe('Test VideoList Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VideoList list={data} />, div);
  });
});

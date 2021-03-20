import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VideoCard from './index';

describe('Test VideoCard Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VideoCard />, div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<VideoCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

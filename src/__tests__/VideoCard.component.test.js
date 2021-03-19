import React from 'react';
import renderer from 'react-test-renderer';
import VideoCard from '../components/VideoCard';

it('renders correctly', () => {
  const tree = renderer.create(<VideoCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

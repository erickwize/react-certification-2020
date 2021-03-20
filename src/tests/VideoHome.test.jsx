import React from 'react';
import TestRenderer from 'react-test-renderer';
import VideoHome from '../components/VideoHome/VideoHome.component';

describe(`Component: VideoHome`, () => {
  test(`VideoHome renders with default props`, () => {
    const component = TestRenderer.create(<VideoHome />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

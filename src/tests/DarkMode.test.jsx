import React from 'react';
import TestRenderer from 'react-test-renderer';
import DarkMode from '../components/DarkMode/DarkMode.component';

describe(`Component: DarkMode`, () => {
  test(`DarkMode renders with default props`, () => {
    const component = TestRenderer.create(<DarkMode />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

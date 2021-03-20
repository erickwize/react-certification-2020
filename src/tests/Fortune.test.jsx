import React from 'react';
import TestRenderer from 'react-test-renderer';
import Fortune from '../components/Fortune/Fortune.component';

describe(`Component: Fortune`, () => {
  test(`Fortune renders with default props`, () => {
    const component = TestRenderer.create(<Fortune />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

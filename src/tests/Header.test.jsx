import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from '../components/Header/Header.component';

describe(`Component: Header`, () => {
  test(`Header renders with default props`, () => {
    const component = TestRenderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

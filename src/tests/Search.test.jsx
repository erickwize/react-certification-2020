import React from 'react';
import TestRenderer from 'react-test-renderer';
import Search from '../components/Search/Search.component';

describe(`Component: Search`, () => {
  test(`Search renders with default props`, () => {
    const component = TestRenderer.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

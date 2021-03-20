import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../components/App/App.component';

describe(`Component: App`, () => {
  test(`App renders with default props`, () => {
    const component = TestRenderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';
import MainMenu from '../components/MainMenu/MainMenu.component';

describe(`Component: MainMenu`, () => {
  test(`MainMenu renders with default props`, () => {
    const component = TestRenderer.create(<MainMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';
import UserMenu from '../components/UserMenu/UserMenu.component';

describe(`Component: UserMenu`, () => {
  test(`UserMenu renders with default props`, () => {
    const component = TestRenderer.create(<UserMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

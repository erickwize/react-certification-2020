import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, configure } from 'enzyme';
import Home from '../pages/Home';
import VideoCard from '../components/VideoCard';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check title by default', () => {
  const title = mount(<Home />);
  expect(title.find('h2').text()).toEqual('Mini Challenge 1');
});

it('renders VideoCard component', () => {
  const wrapper = mount(<Home />);
  expect(wrapper.containsMatchingElement(<VideoCard />)).toEqual(true);
});

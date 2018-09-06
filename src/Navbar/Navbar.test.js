import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have a link for the repo', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper.find('.navbar-item').prop('href')).toBe('https://github.com/marciogurka/desafiofrontendcargobr');
});

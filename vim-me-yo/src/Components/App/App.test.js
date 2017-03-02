import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import App from './App';
import Header from '../Header/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should render children props', () => {
  const wrapper = mount(<App children={<Header />} />)
  const header = <Header />
  expect(wrapper.contains(header)).toEqual(true)
});

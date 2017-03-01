import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('accepts a dynamic className', () => {
  const className = 'header-class'
  const newHeader = mount(<Header classes={className} />)
  expect(newHeader.find('.header-class').length).toEqual(1)
});

it('should return a login button if no access token present', () => {
  const wrapper = mount(<Header />)
  const login = <a href="http://localhost:9000/test">Login</a>
    expect(wrapper.contains(login)).toEqual(true)
});

it('should make an API call when search is being input', () => {
  const updateSearch = jest.fn()
  const wrapper = mount(<Header updateSearch={updateSearch} />)
  const input = wrapper.find('input')
  input.simulate('change')
  expect(updateSearch.mock.calls.length).toBe(1)
});

it('should return a logout button and welcome message if access token present', () => {
  const tokenProps = {
    user: {
      name: 'D Diddy Bop',
    },
    token: '1248192470',
  }
  const wrapper = mount(<Header token={tokenProps}/>)
  const logOut = jest.fn()
  const welcome = <h3>WELCOME, {tokenProps.user.name}</h3>
  const logout = <a onClick={logOut}>Log Out</a>
    expect(wrapper.contains(logout)).toEqual(true)
    expect(wrapper.contains(welcome)).toEqual(true)
});

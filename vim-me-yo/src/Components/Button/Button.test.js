import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('accepts a dynamic className', () => {
  const className = 'button-class'
  const newButton = mount(<Button classes={className} />)
  expect(newButton.find('.button-class').length).toEqual(1)
});

it('accepts a dynamic text', () => {
  const text = 'New Button'
  const newButton = mount(<Button text={text} />)
  expect(newButton.text()).toEqual('New Button')
});

it('when click its handleClick function runs once', () => {
  const handle = jest.fn()
  const newButton = mount(<Button handleClick={handle} />)
  newButton.simulate('click')
  expect(handle.mock.calls.length).toBe(1)
});

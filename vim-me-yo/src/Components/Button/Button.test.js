import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('accepts a dynamic className', () => {
  const className = 'button-class'
  ReactDOM.render(<Button classes={className}/>, div);
});

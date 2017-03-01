import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Header from './Header';

it('renders without crashing', () => {
  const handleClick = sinon.spy()
  const div = document.createElement('div');
  ReactDOM.render(<Header handleClick={handleClick} />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import VideoCards from './VideoCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCards />, div);
});

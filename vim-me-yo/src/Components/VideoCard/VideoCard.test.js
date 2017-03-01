import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import VideoCard from './VideoCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard />, div);
});

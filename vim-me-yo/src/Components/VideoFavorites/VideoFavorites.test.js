import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import VideoFavorites from './VideoFavorites';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoFavorites />, div);
});

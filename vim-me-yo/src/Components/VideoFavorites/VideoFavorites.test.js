import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import VideoFavorites from './VideoFavorites';

it.skip('renders without crashing', () => {
  const favoriteVideos = ['hi hello how are ya', 'a biscuit a day', 'fall down drum', 'paddies of rice and other short stories', 'camelot camelot', 'south park the documentary evergreen colorado', 'hi hello 2', 'satty unsatty', 'yum foods the documentary', 'jeff casimir portrait of a teachers teacher']
  const div = document.createElement('div');
  ReactDOM.render(<VideoFavorites favoriteVideos={favoriteVideos} />, div);
});

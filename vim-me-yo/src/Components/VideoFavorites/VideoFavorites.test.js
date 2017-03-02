import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import VideoFavorites from './VideoFavorites';
import { favoriteVideos } from '../../../mockdata'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoFavorites favoriteVideos={favoriteVideos} />, div);
});

it('should return all favorited vids', () => {
  const wrapper = mount(<VideoFavorites favoriteVideos={favoriteVideos} />);
  expect(wrapper.find('#smiley').length).toEqual(9)
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import VideoCards from './VideoCards';
import { favoriteVideos } from '../../../mockdata'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCards searchedVideos={favoriteVideos}/>, div);
});

it('should only return 6 out of 20 vids', () => {
  const wrapper = mount(<VideoCards searchedVideos={favoriteVideos}/>);
  expect(wrapper.find('#smiley').length).toEqual(6)
});

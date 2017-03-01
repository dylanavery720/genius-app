import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import VideoCards from './VideoCards';

it.skip('renders without crashing', () => {
    const searchedVideos = ['hi hello how are ya', 'a biscuit a day', 'fall down drum', 'paddies of rice and other short stories', 'camelot camelot', 'south park the documentary evergreen colorado', 'hi hello 2', 'satty unsatty', 'yum foods the documentary', 'jeff casimir portrait of a teachers teacher']
  const div = document.createElement('div');
  ReactDOM.render(<VideoCards searchedVideos={searchedVideos}/>, div);
});
// Need to make a much more in depth object to test, maybe copy and paste actual search object..
it.skip('should only return 6 out of 20 vids', () => {
    const searchedVideos = ['hi hello how are ya', 'a biscuit a day', 'fall down drum', 'paddies of rice and other short stories', 'camelot camelot', 'south park the documentary evergreen colorado', 'hi hello 2', 'satty unsatty', 'yum foods the documentary', 'jeff casimir portrait of a teachers teacher']
  const wrapper = shallow(<VideoCards searchedVideos={searchedVideos}/>);
  expect(wrapper.find('li').length).toEqual(6)
});

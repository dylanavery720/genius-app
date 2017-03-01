import React from 'react';
import ReactDOM from 'react-dom';
import { shawllow, mount } from 'enzyme';
import VideoCard from './VideoCard';

it('renders without crashing', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard tags={tags}/>, div);
});

it('accepts a dynamic className', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const className = 'videocard-class'
  const newVideoCard = mount(<VideoCard tags={tags} classes={className} />)
  expect(newVideoCard.find('.videocard-class').length).toEqual(1)
});

it('take a long list of tags and return a list of only the first 4', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const newVideoCard = mount(<VideoCard tags={tags} />)
  expect(newVideoCard.find('h3').length).toEqual(4)
});

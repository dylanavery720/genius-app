import React from 'react';
import ReactDOM from 'react-dom';
import { shawllow, mount } from 'enzyme';
import VideoCard from './ArtCard';

it('renders without crashing', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const div = document.createElement('div');
  ReactDOM.render(<ArtCard tags={tags}/>, div);
});

it('accepts a dynamic className', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const className = 'Artcard-class'
  const newArtCard = mount(<ArtCard tags={tags} classes={className} />)
  expect(newArtCard.find('.artcard-class').length).toEqual(1)
});

it('take a long list of tags and return a list of only the first 4', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const newArtCard = mount(<ArtCard tags={tags} />)
  expect(newArtCard.find('h3').length).toEqual(4)
});

it('should have a colored smiley face if favorited', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const newArtCard = mount(<ArtCard tags={tags} toggleC={true} />)
  expect(newArtCard.find('.mdl-button--colored').length).toEqual(1)
});

it('should have a colored smiley face if favorited', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const newArtCard = mount(<ArtCard tags={tags} toggleC={true} />)
  expect(newArtCard.find('.mdl-button--colored').length).toEqual(1)
});

it('should not have a colored smiley face if not favorited', () => {
  const tags = ['#er', '#navy', '#army', 'airforce', 'seals', 'walrus', 'whale', 'pigeon', 'TLC']
  const newArtCard = mount(<ArtCard tags={tags} toggleC={false} />)
  expect(newVideoCard.find('.mdl-button--colored').length).toEqual(0)
});

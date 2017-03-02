import React from 'react'
import { shallow, mount  } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { favoriteVideos } from '../../mockdata'
import VideoCardsContainer from './VideoCardsContainer'
import VideoCards from '../Components/VideoCards/VideoCards'

const mockStore = configureMockStore()({
  videos: {
    searchedVideos: favoriteVideos,
    favoriteVideos: favoriteVideos,
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><VideoCardsContainer /></Provider>);

  const Component = Container.find(VideoCards);

  return {
    Container,
    Component
  }
}

describe('VideoCardsContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Component.props().searchedVideos).toEqual({
      favoriteVideos,
    });
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('searchedVideos', 'addFavorite');
  });
});

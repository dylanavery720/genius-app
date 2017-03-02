import React from 'react'
import { shallow, mount  } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import favoriteVideos from '../../mockdata'
import VideoFavoritesContainer from './VideoFavoritesContainer'
import VideoFavorites from '../Components/VideoFavorites/VideoFavorites'

const mockStore = configureMockStore()({
  videos: {
    searchedVideos: favoriteVideos,
    favoriteVideos: favoriteVideos,
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><VideoFavoritesContainer /></Provider>);

  const Component = Container.find(VideoFavorites);

  return {
    Container,
    Component
  }
}

describe('VideoFavoritesContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Component.props().videos).toEqual({
      favoriteVideos: favoriteVideos,
    });
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('favoriteVideos');
  });
});

import React from 'react'
import { shallow, mount  } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import favoriteVideos from '../../mockdata'
import AppContainer from './AppContainer'
import App from '../Components/App/App'

const mockStore = configureMockStore()({
  videos: {
    searchedVideos: favoriteVideos,
    favoriteVideos: favoriteVideos,
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><AppContainer /></Provider>);

  const Component = Container.find(App);

  return {
    Container,
    Component
  }
}

describe('VideoFavoritesContainer', () => {
  const { Container, Component } = setup();

  it.skip('should pass the appropriate props from state', () => {
    expect(Component.props().videos).toEqual({
      children: null,
    });
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('displaySearched');
  });
});

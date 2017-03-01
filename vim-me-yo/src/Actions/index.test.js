import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { addFavorite, displaySearched } from './index';

const store = configureMockStore()();

// const mockStore = store({
//   videos: {
//     searchedVideos: [],
//     favoriteVideos: [],
//   },
// });

const mockVids = ['Office Space Trailer', 'Pi Trailer', 'Brides Maids Trailer', 'The Boss In Theatres Now', 'Mike and Milly S1'];

const mockFetchUrl = 'https://api.vimeo.com/videos?query=denver&access_token=347834783479334987394';


const mockFave = {
  id: 1,
  title: 'Mike and Milly S1',
};

const e = {
  target: { id: 4 },
};

describe('actions', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    store.clearActions();
    fetchMock.restore();
  });

  it('creates ADD_FAVE when adding a favorite', () => {
    const expectedAction = { type: 'ADD_FAVE', id: e.target.id, video: mockFave };
    store.dispatch(addFavorite(e, mockFave));
    const createdActions = store.getActions();
    expect(createdActions.length).toEqual(1);
    expect(createdActions[0]).toEqual(expectedAction);
  });

  it('creates DISPLAY_SEARCHED when API call returns data', () => {
    const expectedAction = { type: 'DISPLAY_SEARCHED', payload: mockVids };
    store.dispatch(displaySearched('denver', mockVids));
    const createdActions = store.getActions();
    expect(createdActions.length).toEqual(1);
    expect(createdActions[0]).toEqual(expectedAction);
  });
});

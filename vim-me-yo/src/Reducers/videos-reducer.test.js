import videos from './videos-reducer';

const initialState = {};

describe('movies reducer', () => {
  it('should return initial state as its default state', () => {
    expect(videos(initialState, {})).toEqual(initialState)
  });

  it('should return an array of videos when action is DISPLAY_SEARCHED', () => {
    const mockVids = ['Office Space Trailer', 'Pi Trailer', 'Brides Maids Trailer', 'The Boss In Theatres Now', 'Mike and Molly S1'];

    expect(videos(initialState, {
      type: 'DISPLAY_SEARCHED',
      payload: mockVids,
    })).toEqual({
      searchedVideos: mockVids,
    });
  });

  it.skip('should allow a user to add a Fave when action is ADD_FAVE', () => {
    const mockVid1 = ['Office Space Trailer', 'some other movie'];
    const id = 423;

    expect(videos(initialState, {
      type: 'ADD_FAVE',
      id: id,
      video: mockVid1,
    })).toEqual({
      payload: mockVid1 ,
    });
  });

});

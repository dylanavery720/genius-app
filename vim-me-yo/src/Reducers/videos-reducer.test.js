import art from './art';

const initialState = {};

describe('movies reducer', () => {
  it('should return initial state as its default state', () => {
    expect(art(initialState, {})).toEqual(initialState)
  });

  it('should return an array of art when action is DISPLAY_SEARCHED', () => {
    const mockVids = ['Office Space Trailer', 'Pi Trailer', 'Brides Maids Trailer', 'The Boss In Theatres Now', 'Mike and Molly S1'];

    expect(art(initialState, {
      type: 'DISPLAY_SEARCHED',
      payload: mockVids,
    })).toEqual({
      searcheVideos: mockVids,
    });
  });

  it('should allow a user to add a Fave when action is ADD_FAVE', () => {
    const mockVid1 = ['Office Space Trailer', 'some other movie'];
    const id = 423;

    expect(art(initialState, {
      type: 'ADD_FAVE',
      id,
      video: mockVid1,
    })).toEqual({
      payload: mockVid1,
    });
  });
});

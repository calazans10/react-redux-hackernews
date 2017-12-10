import deepFreeze from 'deep-freeze';
import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';
import storyReducer from './story';

describe('story reducer', () => {
  it('adds stories to the story state', () => {
    const stories = ['a', 'b', 'c', 'd'];
    const action = { type: STORIES_ADD, stories };

    const initialState = { stories: [], error: null };
    const expectedState = { stories, error: null };

    deepFreeze(initialState);
    const newState = storyReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('adds an error to the story state', () => {
    const error = new Error('An error');
    const action = { type: STORIES_FETCH_ERROR, error };

    const initialState = { stories: [], error: null };
    const expectedState = { stories: [], error };

    deepFreeze(initialState);
    const newState = storyReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('does nothing when receives an unknown action', () => {
    const action = { type: 'UNKNOWN' };

    const initialState = { stories: [], error: null };
    const expectedState = { stories: [], error: null };

    deepFreeze(initialState);
    const newState = storyReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});

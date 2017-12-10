import deepFreeze from 'deep-freeze';
import { STORIES_ADD } from '../constants/actionTypes';
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
});

import deepFreeze from 'deep-freeze';
import { STORY_ARCHIVE } from '../constants/actionTypes';
import archiveReducer from './archive';

describe('archive reducer', () => {
  it('adds an id to the archive state', () => {
    const id = '1';
    const action = { type: STORY_ARCHIVE, id };

    const initialState = [];
    const expectedState = ['1'];

    deepFreeze(initialState);
    const newState = archiveReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('does nothing when receives an unknown action', () => {
    const action = { type: 'UNKNOWN' };

    const initialState = [];
    const expectedState = [];

    deepFreeze(initialState);
    const newState = archiveReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});

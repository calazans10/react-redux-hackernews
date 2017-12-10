import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/actionTypes';
import { doAddStories, doFetchStories, doFetchErrorStories } from './story';

describe('story action', () => {
  it('adds stories', () => {
    const stories = ['a', 'b'];

    const expectedAction = {
      type: STORIES_ADD,
      stories
    };
    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });

  it('fetchs stories', () => {
    const query = 'Test';

    const expectedAction = {
      type: STORIES_FETCH,
      query
    };
    const action = doFetchStories(query);

    expect(action).toEqual(expectedAction);
  });

  it('fetchs error stories', () => {
    const error = new Error('An error');

    const expectedAction = {
      type: STORIES_FETCH_ERROR,
      error
    };
    const action = doFetchErrorStories(error);

    expect(action).toEqual(expectedAction);
  });
});

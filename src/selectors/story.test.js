import { getReadableStories, getFetchError } from './story';

describe('story selector', () => {
  it('retrieves readable stories', () => {
    const storyState = {
      error: null,
      stories: [
        { objectID: '1', title: 'foo' },
        { objectID: '2', title: 'bar' },
      ]
    };
    const archiveState = ['1'];
    const state = { storyState, archiveState };

    const expectedReadableStories = [{ objectID: '2', title: 'bar' }];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);
  });

  it('retrieves an error', () => {
    const storyState = {
      error: new Error('An error'),
      stories: []
    };
    const state = { storyState };

    const expectedFetchedError = new Error('An error');
    const fetchedError = getFetchError(state);

    expect(fetchedError).toEqual(expectedFetchedError);
  });
});

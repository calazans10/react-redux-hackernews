import { STORY_ARCHIVE } from '../constants/actionTypes';
import { doArchiveStory } from './archive';

describe('archive action', () => {
  it('archives a story', () => {
    const id = '1';

    const expectedAction = {
      type: STORY_ARCHIVE,
      id
    };
    const action = doArchiveStory(id);

    expect(action).toEqual(expectedAction);
  });
});

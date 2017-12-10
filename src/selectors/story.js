const isNotArchived = archivedIds => story => !archivedIds.includes(story.objectID);

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.stories.filter(isNotArchived(archiveState));

const getFetchError = ({ storyState }) => storyState.error;

export {
  getReadableStories,
  getFetchError
};

import React from 'react';
import PropTypes from 'prop-types';
import './Stories.css'

import Story from './Story';
import StoriesHeader from './StoriesHeader';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
};

const Stories = ({ stories }) =>
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />
    {stories.map(story => <Story key={story.objectID} story={story} columns={COLUMNS} />)}
  </div>

Stories.defaultProps = {
  stories: []
}

Stories.propTypes = {
  stories: PropTypes.array
}

export default Stories;

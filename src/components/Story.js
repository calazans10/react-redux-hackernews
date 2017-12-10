import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import './Story.css'

import { ButtonInline } from './Button';

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectID)}>Archive</ButtonInline>
      </span>
    </div>
  )
}

Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    author: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    objectID: PropTypes.string.isRequired
  }).isRequired,
  columns: PropTypes.object.isRequired,
  onArchive: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(null,mapDispatchToProps)(Story);

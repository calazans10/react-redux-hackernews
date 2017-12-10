import React from 'react';
import PropTypes from 'prop-types';
import './Story.css'

const Story = ({ story, columns }) => {
  const { title, url, author, num_comments, points } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}><a href={url}>{title}</a></span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}></span>
    </div>
  )
}

Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired
  }).isRequired
}

export default Story;

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TagsContainer, Chip } from './styles/TagsStyles'

export default class Tags extends Component {
  prepTags(gist) {
    // prepares tags, only returns unique tags, return plain text for files that have language undefined.
    const files = Object.values(gist.files);
    const tags = new Set();
    const arr = [];
    let cnt = 0;
    for (let file of files) {
      const tag = file.language || 'Plain Text';
      if (!tags.has(tag)) {
        cnt++;
        arr.push(<Chip key={cnt}>{tag}</Chip>);
        tags.add(tag);
      }
    }
    return arr;
  }

  render () {
    const { data } = this.props;
  	const uniqueTags = this.prepTags(data);

    return (
	    <TagsContainer>{uniqueTags}</TagsContainer>
    )
  }
}

Tags.propTypes = {
  data: PropTypes.object.isRequired
};
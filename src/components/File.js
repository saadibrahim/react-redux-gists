import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Name } from './styles/FileStyles'

export default class File extends Component {
  render () {
    const { link, name } = this.props;
    return (
      <div>
        <Name href={link}>{name}</Name>
      </div>
    )
  }
}

File.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Avatar } from '../styles/commonComponents'
import { ListItem, Username } from './styles/ForkStyles'

export default class Fork extends Component {
  render () {
  	const { data } = this.props;
  	const user = data.user
    return (
      <ListItem key={data.id}>
        <a href={`https://gist.github.com/${data.id}`}>
          <Avatar src={user.avatar_url} alt={`Avatar for ${user.login}`} />
          <Username>{user.login}</Username>
        </a>
      </ListItem>
    )
  }
}

Fork.propTypes = {
  data: PropTypes.object.isRequired
};
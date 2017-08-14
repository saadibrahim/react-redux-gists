import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Avatar, Card } from '../styles/commonComponents'
import { Description, List, Owner, Files, Username } from './styles/GistDetailsStyles.js'
import Tags from './Tags'

export default class SingleGist extends Component {
  render () {
    const { gist, forks, filesNames } = this.props;

    return (
      <div>
        <Card>
          <Description>{gist.description ? gist.description : 'No Description'}</Description>
          <Tags data={gist} />
          <Files>
            <strong>Files:</strong>
            {filesNames}
          </Files>
          <div>
            <strong>Owner:</strong>
            <Owner href={gist.owner.html_url}>
              <Avatar src={gist.owner.avatar_url} alt={`Avatar for ${gist.owner.login}`} />
              <Username>{gist.owner.login}</Username>
            </Owner>
          </div>
          {forks.length ?
            <div>
              <strong>Recent forks:</strong>
              <List>
                {forks}
              </List>
            </div>
            :
            <strong>No Forks</strong>
          }
        </Card>
      </div>
    )
  }
}

SingleGist.propTypes = {
  gist: PropTypes.object.isRequired,
  forks: PropTypes.array.isRequired,
  filesNames: PropTypes.array.isRequired,
};
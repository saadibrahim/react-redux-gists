import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CardList } from '../styles/commonComponents'
import { Description, StyledLink } from './styles/SingleGistStyles'
import Tags from './Tags'

export default class SingleGist extends Component {
  render () {
    const { data } = this.props;

    return (
    	<StyledLink to={`/gist/${data.id}`}>
	    	<CardList>
	    		<Description>{data.description ? data.description : 'No Description'}</Description>
	    		<Tags data={data} />
	    	</CardList>
    	</StyledLink>
    )
  }
}

SingleGist.propTypes = {
  data: PropTypes.object.isRequired
};
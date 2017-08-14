import React, { Component } from 'react'

export default class Notice extends Component {
  render () {
    const { text } = this.props;
    return (
			<div>
				<p>
					{text}
				</p>
			</div>
    )
  }
}
import React, { Component } from 'react'
import { Icon } from './styles/LoadingStyles'

export default class Tag extends Component {
  render () {
    return (
      <Icon className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></Icon>
    )
  }
}
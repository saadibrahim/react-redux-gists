import React, { Component } from 'react';
import { connect } from 'react-redux'
import { singleGistActions } from '../actions'
import Fork from '../components/Fork'
import GistDetails from '../components/GistDetails'
import Loading from '../components/Loading'
import Notice from '../components/Notice'
import File from '../components/File'

class Gist extends Component {
  componentDidMount() {
    const gistID = this.props.match.params.gistID;
    this.props.getSingleGist(gistID);
  }

  prepForks(forks) {
    let recentForks = forks.slice(0,3);
    return (
      recentForks.map((fork) => (
        <Fork key={fork.id} data={fork} />
      ))
    )
  }

  getFileNames(gist) {
    let files = Object.values(gist.files);
    return (
      files.map(({ raw_url, filename }, index) => (
        <File key={index} link={raw_url} name={filename}/>
      ))
    )
  }

  render() {
    const { gistID, fetching, data, error } = this.props.singleGist;

    let forks, filesNames;
    if(data.forks) {
      forks = this.prepForks(data.forks);
    }
    if(data.files) {
      filesNames = this.getFileNames(data);
    }

    if(fetching) {
      return (
        <Loading />
      )
    }

    return (
      <div>
        {gistID && !error ?
          <GistDetails gist={data} forks={forks} filesNames={filesNames} />
        :
          <Notice text={error} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleGist: state.singleGist
})

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleGist: (gistId) => dispatch(singleGistActions.getSingleGist(gistId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gist)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userGistsActions } from '../actions'
import SingleGist from '../components/SingleGist'
import Notice from '../components/Notice'
import Loading from '../components/Loading'
import { TextInput } from './styles/HomeStyles'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    const { fetching, data, username, error } = this.props.gists;
    if(fetching) {
      return (
        <Loading />
      )
    }

    return (
      <div>
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          <TextInput 
            value={this.state.value}
            onChange={e => this.handleChange(e)}
            required
            placeholder="Enter username and press enter"
          />
        </form>
        {data.length && !error ?
          <div>
            <h2>Public gists by {username}</h2>
            {data.map((gist) => {
              return <SingleGist getTagElements={() => this.getTagElements(gist)} key={gist.id} data={gist} />
            })}
          </div>
        :
          <Notice text={error} />
        }
      </div>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let value = this.state.value;
    if (!value.trim()) {
      return
    }
    this.props.getUserGists(value);
  }
}

const mapStateToProps = state => ({
  gists: state.userGists
})

const mapDispatchToProps = (dispatch) => {
  return {
    getUserGists: (value) => dispatch(userGistsActions.getUserGists(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

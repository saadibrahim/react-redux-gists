import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Gist from './Gist'
import { Wrapper, SiteName, Logo } from './styles/AppStyles'

class App extends Component {
  render() {
    return (
		  <Wrapper>
		  	<header>
		  		<Link to="/"><Logo src={require('../assets/images/octocat.png')} alt="github logo" /></Link>
		  		<SiteName>Github Gists</SiteName>
		  	</header>
		    <main>
		      <Route exact path="/" component={Home} />
		      <Route path="/gist/:gistID" component={Gist} />
		    </main>
		  </Wrapper>
    )
  }
}

export default App
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cats from './pages/Cats';
import CatDetail from './pages/CatDetail';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	      	<Header />

	      	<Route exact path="/" component={Home} />
	      	<Route exact path="/cats" component={Cats} />
          <Route path="/cats/:catId" component={CatDetail} />
	      </div>
      </Router>
    );
  }
}

export default App;

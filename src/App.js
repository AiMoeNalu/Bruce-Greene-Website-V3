import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import './App.scss';

import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSignedIn: false
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Fragment>
            <Route exact path='/' component={Homepage}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

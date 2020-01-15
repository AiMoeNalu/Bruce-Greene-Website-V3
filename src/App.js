import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import './App.scss';

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
        <Router>
          <Fragment>

            {/*<Route exact path='/' component=''/>*/}
            
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

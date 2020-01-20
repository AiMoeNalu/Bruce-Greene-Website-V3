import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import './App.scss';

import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSignedIn: true
    }
  }
  
  render() {
    return (
      <div className="App">
          <Route path='/' component={Header}/>
          <Route exact path='/' component={Homepage}/>
      </div>
    );
  }
}

export default App;

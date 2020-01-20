import React, { Component } from 'react';
import {
  Switch,
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

  componentDidMount(){
    window.location.pathname.replace("/Bruce-Greene-Website-V3/", "")
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
          </Switch>
      </div>
    );
  }
}

export default App;

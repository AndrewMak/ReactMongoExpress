import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ListProperties from './components/ListProperties'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavbar />
       <ListProperties/>
      </div>
    );
  }
}

export default App;

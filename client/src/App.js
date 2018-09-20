import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ListProperties from './components/ListProperties'
import { Container } from 'reactstrap';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faHome, faStore } from '@fortawesome/free-solid-svg-icons';
 
library.add(faCheckSquare, faCoffee, faHome, faStore)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <AppNavbar />
       <Container>
            <ItemModal />
       <ListProperties/>
       </Container>
      </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ListProperties from './components/ListProperties'
import { Container } from 'reactstrap';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

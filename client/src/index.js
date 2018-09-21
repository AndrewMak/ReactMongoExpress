import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './Sobre';

// ReactDOM.render( document.getElementById('root'));
ReactDOM.render(    
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

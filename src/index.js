import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { featureReducer } from './reducers/index';
//added redux and react-redux as dependencies, imported createStore and Provider

import 'bulma/css/bulma.css';
import './styles.scss';

const store= createStore(featureReducer); //createStore pass store as props through Provider. Wrapp App in provider like you would router. 

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>, 
  rootElement);

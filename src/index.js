import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import storeFactory from './store/index';

const store = storeFactory();
window.store = store;
ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
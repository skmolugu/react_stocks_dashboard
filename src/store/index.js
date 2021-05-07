import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];

export default () => {
    return applyMiddleware(...middlewares)(createStore)(reducer, {});
}
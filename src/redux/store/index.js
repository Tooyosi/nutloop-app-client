import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { getOauthToken } from '../actions/authAction';
import rootReducer from "../reducers/index"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const nextFn =  store => next => action => {
  const result = next(action);
  if (process.env.NODE_ENV === 'development')
    console.log("[Middleware] next state", store.getState());
  // continue processing this action
  return result
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, nextFn)));
// store.dispatch(getOauthToken())
export default store

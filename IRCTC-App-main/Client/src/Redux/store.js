import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { usersReducers } from './reducers/usersReducers';

const rootReducer = combineReducers({
    usersReducers: usersReducers,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
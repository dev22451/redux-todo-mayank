import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoReducer from './reducers/TodoReducers'
import thunk from 'redux-thunk'
import ApiReducer from './reducers/ApiReducer';

const reducer = combineReducers({
    Todo: TodoReducer,
    Api: ApiReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// configureStore代替了createStore
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunk)
))

export default store
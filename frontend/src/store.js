import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  producListReducer,
  producDetailsReducer,
} from './reducers/productReducers'

const reducer = combineReducers({
  productList: producListReducer,
  productDetails: producDetailsReducer,
})

const initialStore = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

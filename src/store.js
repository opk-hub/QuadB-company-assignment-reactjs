// src/store.js
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk' // Import Redux Thunk middleware

// Import your reducers here
import jobReducer from './reducers/jobReducer' // Replace with your actual reducer file

// Combine your reducers if you have multiple reducers
const rootReducer = combineReducers({
  job: jobReducer,
  // Add more reducers as needed
})

// Create the Redux store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk), // Apply Redux Thunk middleware
)

export default store

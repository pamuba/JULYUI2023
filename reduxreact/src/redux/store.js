// import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import LaptopReducer from './laptops/laptopReducer'
import rootReducer from './rootReducer'

// const store = createStore(rootReducer)

const store = configureStore({ reducer: rootReducer })

export default store
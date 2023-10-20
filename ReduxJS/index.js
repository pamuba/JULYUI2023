const redux = require('redux');
const createStore = redux.createStore;
const combieReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//action type
const BUY_LAPTOPS = 'BUY_LAPTOPS'
const BUY_PHONES = 'BUY_PHONES'


//action
function buyLaptop(){
    return {
        type:BUY_LAPTOPS,
        info:'Only 1 Laptop'
    }
}
function buyPhones(){
    return {
        type:BUY_PHONES,
        info:'Only 1 Phone'
    }
}
//Reducer
// fun(previousState, action) => newState

const initialState = {
    numOfLaptops: 10,
    numOfPhones: 20
}

const initialStateLaptopState = {
    numOfLaptops: 10
}
const initialStatePhoneState = {
    numOfPhones: 20
}

// const reducer = (state=initialState, action) => {
//     switch(action.type){
//         case BUY_LAPTOPS : return{
//             ...state,
//             numOfLaptops: state.numOfLaptops - 1 
//         }

//         case BUY_PHONES : return{
//             ...state,
//             numOfPhones: state.numOfPhones - 1 
//         }
        
//         default: return state
//     }
    
// }

//getState() - allows acces to the store state
//dispatch(action) - allows state to be updated
//subscribe(listener) - register the listeners


const LaptopReducer = (state=initialStateLaptopState, action) => {
    switch(action.type){
        case BUY_LAPTOPS : return{
            ...state,
            numOfLaptops: state.numOfLaptops - 1 
        }
        default: return state
    }
}

const PhoneReducer = (state=initialStatePhoneState, action) => {
    switch(action.type){
        case BUY_PHONES : return{
            ...state,
            numOfPhones: state.numOfPhones - 1 
        }
        default: return state
    }
}

const rootReducer = combieReducers({
    laptop: LaptopReducer,
    phone: PhoneReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(()=> {})

store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buyPhones())
store.dispatch(buyPhones())

unsubscribe()

// store.dispatch(buyLaptop())
// console.log('Updated State:', store.getState())

import { BUY_LAPTOPS } from './laptopTypes';

const initialState = {
    numOfLaptops: 10
}

const LaptopReducer = (state=initialState, action) => {
    console.log("Inside laptop")
    switch(action.type){
        case BUY_LAPTOPS : return{
            ...state,
            numOfLaptops: state.numOfLaptops - 1 
        }
        default: return state
    }
}

export default LaptopReducer

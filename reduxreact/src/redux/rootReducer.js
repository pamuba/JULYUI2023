import { combineReducers } from "redux";
import PhoneReducer from "./phones/phoneReducer";
import LaptopReducer from "./laptops/laptopReducer";

const rootReducer = combineReducers({
    laptop:LaptopReducer,
    phone:PhoneReducer
})

export default rootReducer;
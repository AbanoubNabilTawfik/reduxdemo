import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './Cake/user/userReducer';


const rootReducer= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
    
})

export default rootReducer;
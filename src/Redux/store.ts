import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from "./profileReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { setNewPasswordReducer } from "./setNewPasswordReducer";
import { signInReducer } from "./signInReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    forgotPasswordPage: forgotPasswordReducer,
    registrationPage: registrationReducer,
    setNewPasswordPage: setNewPasswordReducer,
    signInPage: signInReducer
    
})

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store;
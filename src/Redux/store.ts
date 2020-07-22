import { modalReducer } from './modalReducer';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from "./profileReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { setNewPasswordReducer } from "./setNewPasswordReducer";
import { signInReducer } from "./signInReducer";
import { tableZiziRaducer } from "./ziziPacksReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    forgotPasswordPage: forgotPasswordReducer,
    registrationPage: registrationReducer,
    setNewPasswordPage: setNewPasswordReducer,
    signInPage: signInReducer,
		tablePage: tableZiziRaducer,
		modal: modalReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store;
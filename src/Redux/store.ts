import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from "./profileReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { setNewPasswordReducer } from "./setNewPasswordReducer";
import { signInReducer } from "./signInReducer";
<<<<<<< HEAD
import {packsReducer} from "./packsReducer";
=======
import { tableZiziRaducer } from "./ziziPacksReducer";
>>>>>>> 7b4cbffb33c4680f341c3adcdb638fcd25e574b4


const rootReducer = combineReducers({
    profilePage: profileReducer,
    forgotPasswordPage: forgotPasswordReducer,
    registrationPage: registrationReducer,
    setNewPasswordPage: setNewPasswordReducer,
    signInPage: signInReducer,
<<<<<<< HEAD
    cardPacks: packsReducer
});
=======
    tablePage: tableZiziRaducer
    
})
>>>>>>> 7b4cbffb33c4680f341c3adcdb638fcd25e574b4

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store;
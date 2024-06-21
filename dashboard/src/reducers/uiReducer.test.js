import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from "../actions/uiActionTypes";
import { uiReducer } from "./uiReducers";
import { initialState } from "./uiReducers";
import { SELECT_COURSE } from "../actions/courseActionTypes"; 
// import { Map } from "immutable";
import 'jest-immutable-matchers'; 

describe (' test reducer function', () => {
    it('ui display notification  success', () => {
        const action = {type: DISPLAY_NOTIFICATION_DRAWER}


        const newState = uiReducer(initialState, action)
        // console.log(newState.toJS())/

        // expect(newState.toJS())

    })
    it('ui logged in', () => {
        const action = {type: LOGIN_SUCCESS }
     
        
        const newState = uiReducer(initialState, action)
        console.log(initialState.toJS())

        expect(newState.toJS()["isUserLoggedIn"]).toBe("true")

    })
})
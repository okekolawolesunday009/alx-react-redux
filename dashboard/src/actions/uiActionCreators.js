import { type } from '@testing-library/user-event/dist/type';
import Login from '../Login/Login';
import * as loginData from '../../src/login-success.json'

import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import { LOGIN_SUCCESS } from './uiActionTypes';
import { LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password) {
	return {
		type: LOGIN,
		user: { email, password },
	};
}

export const boundLogin = (email, password) => (dispatch) => {
    dispatch(login(email, password));
  };
  

export const logout = () => ({type: LOGOUT})
export const boundLogout = (dispatch) => dispatch(logout());


export function displayNotificationDrawer () {
    return {type: DISPLAY_NOTIFICATION_DRAWER}
 }

 export const boundDisplayNotificationDrawer = (dispatch) => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer () {
    return {type: HIDE_NOTIFICATION_DRAWER}
}

export const boundHideNotificationDrawer = (dispatch) => dispatch(hideNotificationDrawer());

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

export const bondSuccess = (user) => (dispatch) => dispatch(loginSuccess(user))




export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
export const bondFailure = (error) => (dispatch) => dispatch(loginFailure(error))




export const loginRequest = (email, password) => {
    
    return async (dispatch) => {
        // boundLogin(email, password);
        // return fetch("http://localhost:3000/login-success.json")
        // .then((res) => res.json(res))
        // .then((json) => dispatch(loginSuccess(json)))
        // .catch((error) => dispatch(loginFailure(error)))
        try {
            // Simulated login process with JSON data
            if (email === 'johann.salva@holberton.nz' && password === '12345') {
                const requestBody = {
                email: email,
                password: password
            };

            // Simulated fetch request without an actual URL
            const mockResponse = {
                success: true,
                message: 'Login successful',
                loginData
                
            };
            const json = mockResponse;

            // Dispatch loginSuccess action with the parsed JSON data
            dispatch(loginSuccess(json));
            } else {
                throw new Error('Invalid credentials');
            }
           }

            // Simulate parsing JSON response
            catch (error) {
            // Dispatch loginFailure action with the error
            dispatch(loginFailure(error.message));
        }
    }

}
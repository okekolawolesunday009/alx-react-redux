import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "./uiActionTypes"
import { login, loginRequest, logout } from "./uiActionCreators"
import { hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators"
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import { type } from "@testing-library/user-event/dist/type";

const applyMiddleware = [thunk]
const mockStore = configureMockStore(applyMiddleware)


describe('ui action creators function ', () => {

 
    test('login course', () => {
        const email = 'oke@gmail.com';
        const password = '12345'

        const result = { 
            type: 'LOGIN',
            user : { email, password } 
        }


        expect(login(email, password)).toEqual(result)
        
    })
    afterEach(() => {
        fetchMock.restore();
    })
    test('test login success json', () => {

        const email = 'oke@gmail.com';
        const password = '12345'
        const mockApiResponse = {token: 'mockToken'};

        fetchMock.getOnce("http://localhost:3000/login-success.json", {
            body: mockApiResponse,
            headers: { 'content-type': 'application/json'}

        });

        const expectedActions = [
            {type: LOGIN},
            {type: LOGIN_SUCCESS, payload: mockApiResponse}
        ]

        const store = mockStore({})

        return store.dispatch(loginRequest(email, password))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)

        })

    
        
    })
})
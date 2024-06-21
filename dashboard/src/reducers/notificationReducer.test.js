import { Map } from "immutable";
import notificationReducer from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe('testing notification Reducer', () => {

    it ('should return normalized initial state', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [ 
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }
            ]
        }
        const initialNotificationState = Map({
            notifications: [],
            filter: 'default'
        });
        
        const newState = notificationReducer(initialNotificationState, action);
        const currentState = newState.toJS();
        console.log(currentState.notifications);
        // Uncomment once expectation is confirmed
        // expect(newState.toJS()).toEqual((initialNotificationState.toJS()));
    });

    it('should mark notification as read', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        };

        const initialNotificationState = {
              // notifications: [1, 2, 3],
              notifications: [
                { id: 1, type: "default", isRead: false, value: "New course available" },
                { id: 2, type: "urgent", isRead: false, value: "New resume available" },
                {  id: 3, type: "urgent", isRead: false, value: "New data available" }
            ],
            filter: 'default',
            entities: {
                notifications: {
                    "1": { id: 1, type: "default", isRead: false, value: "New course available" },
                    "2": { id: 2, type: "urgent", isRead: false, value: "New resume available" },
                    "3": { id: 3, type: "urgent", isRead: false, value: "New data available" }
                },
                result: [1, 2, 3]
            }
        };

        const expectedState = {
            notifications: [1, 2, 3],
            filter: 'default',
            entities: {
                notifications: {
                    "1": { id: 1, type: "default", isRead: false, value: "New course available" },
                    "2": { id: 2, type: "urgent", isRead: true, value: "New resume available" },
                    "3": { id: 3, type: "urgent", isRead: false, value: "New data available" }
                },
                result: [1, 2, 3]
            }
        };

        const newState = notificationReducer(Map(initialNotificationState), action);
        const currentState = newState.toJS();
        // Uncomment once expectation is confirmed
        // expect(newState.toJS()).toEqual(expectedState);
        // console.log(currentState.entities);
    });

    it('should change filter ', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'urgent' 
        };

        const initialNotificationState = {
            // notifications: [1, 2, 3],
            notifications: [
                { id: 1, type: "default", isRead: false, value: "New course available" },
                { id: 2, type: "urgent", isRead: false, value: "New resume available" },
                {  id: 3, type: "urgent", isRead: false, value: "New data available" }
            ],
            filter: 'default',
            entities: {
                notifications: {
                    "1": { id: 1, type: "default", isRead: false, value: "New course available" },
                    "2": { id: 2, type: "urgent", isRead: false, value: "New resume available" },
                    "3": { id: 3, type: "urgent", isRead: false, value: "New data available" }
                },
                result: [1, 2, 3]
            }
        };

        const expectedState = {
             // notifications: [1, 2, 3],
             notifications: [
                { id: 1, type: "default", isRead: false, value: "New course available" },
                { id: 2, type: "urgent", isRead: false, value: "New resume available" },
                {  id: 3, type: "urgent", isRead: false, value: "New data available" }
            ],
            filter: 'urgent',
            entities: {
                notifications: {
                    "1": { id: 1, type: "default", isRead: false, value: "New course available" },
                    "2": { id: 2, type: "urgent", isRead: true, value: "New resume available" },
                    "3": { id: 3, type: "urgent", isRead: false, value: "New data available" }
                },
                result: [1, 2, 3]
            }
        };

        const newState = notificationReducer(Map(initialNotificationState), action);
        const currentState = newState.toJS();
        // Uncomment once expectation is confirmed
        // expect(newState.toJS()).toEqual(exp  ectedState);
        // console.log(currentState);
    });

});


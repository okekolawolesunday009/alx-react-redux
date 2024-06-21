import { Map } from "immutable";
import { setNotificationFilter } from "../actions/notificationActionCreators";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationNormalizr } from "../schema/notifications";
export const initialNotificationState = Map({
    notifications: [],
    filter: 'default'
});

const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        // case FETCH_NOTIFICATIONS_SUCCESS:
        //     return {
        //         ...state,
        //         notifications: action.data.map(notification => ({
        //             ...notification
        //         }))
        //     }
        // case MARK_AS_READ:
        //     return ({
        //         ...state,
        //         notifications: state.map(notification => 
        //             notification.id == action.index ? {...course, isRead: true} : notification
        //          )
        //     })
        // case SET_TYPE_FILTER:
        //     return  {
        //         ...state,
        //         filter: setNotificationFilter(action.filter),
        //         notifications: state.map(notification => 
        //             notification.id == action.index ? {...course, isRead: true} : notification
        //          )
        //     }
        // default:
        //     state
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const data = action.data.map(notification => ({
                ...notification,
                isRead: false
            }))
            const normalizedNot = notificationNormalizr(data)
            const newState = state.merge({
                notifications: normalizedNot.entities,
                // entities: normalizedNot.entities
            })
            return newState
        }
        case MARK_AS_READ: {
            return state.setIn (
                ['entities', 'notifications', action.index.toString(), 'isRead'], true
            )
        }
        case SET_TYPE_FILTER: {
            return state.set(
                'filter', action.filter
            )
        }
        default:
            return state


    }
}

export default notificationReducer
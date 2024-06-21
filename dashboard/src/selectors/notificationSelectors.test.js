import { List, Map, fromJS } from "immutable";
import { getUreadNotifications, getNotifications, filterTypeSelected, get, getAllToys, DisplayNotifications } from "./notificationSelectors";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import notificationReducer from "../reducers/notificationReducer";



describe('Notification selectors', () => {
    it('should return the filter type', () => {
        // const filterType = filterTypeSelected(initialNotificationState);
        // // expect(filterType).toBe('default');
        // console.log(filterType)//still debuging

        const initialNotificationState = {
            // notifications: [1, 2, 3],
            
            
              notifications : {
                filter: 'default',
                notifications: [
                    { id: 1, type: "default", isRead: false, value: "New course available" },
                    { id: 2, type: "urgent", isRead: true, value: "New resume available" },
                    { id: 3, type: "urgent", isRead: false, value: "New data available" }
                ]
              }
           
           
         
           // filter: 'default',
           // entities: {
           //     notifications: {
           //         "1": { id: 1, type: "default", isRead: false, value: "New course available" },
           //         "2": { id: 2, type: "urgent", isRead: false, value: "New resume available" },
           //         "3": { id: 3, type: "urgent", isRead: false, value: "New data available" }
           //     },
           //     result: [1, 2, 3]
           // }
       };

          
        // const getNot = getNotifications(initialNotificationState)
        // const Notifications = DisplayNotifications(initialNotificationState)
        // // console.log(initialNotificationState.toJS())
        // console.log(getNot)
        // console.log(Notifications)


        const unread = getUreadNotifications(initialNotificationState)
        console.log(unread)
      });


    


    

})
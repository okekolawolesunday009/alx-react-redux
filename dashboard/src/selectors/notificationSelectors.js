import { createSelector } from "reselect"


export const filterTypeSelected = (state) => state.notifications.filter//working
export const displayNotifications = (state) => state.notifications.notifications;

export const getNotifications = createSelector(
    [displayNotifications],
    // [(state) => state.notifications],
    (notifications) => (notifications.notifications)//Map not working

);

export const getUreadNotifications = createSelector(
    // [(state) => state.notifications.notifications],
    [displayNotifications],

    (notifications) => {
        const unreadNotifications = notifications.filter(notification => !notification.isRead);
       return (unreadNotifications)//map it causes issue why
    }

)
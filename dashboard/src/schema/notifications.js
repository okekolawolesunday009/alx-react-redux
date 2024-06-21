import { normalize, schema } from "normalizr";

// import * as notificationData from "../notifications.json"
const notificationData = require("../notifications.json");


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid'})
const notification = new schema.Entity("notifications", {
    author: user,
    context: message
})

export const normalized = normalize(notificationData, [notification])

const getAllNotificationsByUser = (userId) => {
    const filteredNotification = notificationData.filter((notification) => userId === notification.author.id)

    return filteredNotification.map((notification) => notification.context)

}
export default getAllNotificationsByUser;

export const notificationNormalizr = (data) => {
    return normalize(data, [notification])
}
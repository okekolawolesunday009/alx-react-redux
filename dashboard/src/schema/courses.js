import { normalize, schema } from "normalizr";

const courses = new schema.Entity("courses");

// export const normalizedCourse = normalize([], [coures])

// const getAllNotificationsByUser = (data) => {
//     const filteredNotification = notificationData.filter((notification) => userId === notification.author.id)

//     return filteredNotification.map((notification) => notification.context)

// }
// export default getAllNotificationsByUser;//ignore

export const coursesNormalizer  = (data) => {
    return normalize(data, [courses])
}
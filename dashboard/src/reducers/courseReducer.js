import { Map } from "immutable";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";


export const initialCourseState = Map([]);

 const courseReducer = (state = initialCourseState, action) => {
    switch (action.type) {
        // case FETCH_COURSE_SUCCESS:
        //     return action.data.map(course => ({
        //         ...course,
        //         isSelected: false
        //     }))
        // case SELECT_COURSE:
        //     return state.map(course => 
        //         course.id == action.index ? {...course, isSelected: true} : course
        //      )
        // case UNSELECT_COURSE:
        //     return state.map(course => 
        //         course.id == action.index ? {...course, isSelected: false} : course
        //      )
        // default:
        //     state

        //upddate to Immutable
        case FETCH_COURSE_SUCCESS:{
            const data = action.data.map((item) => ({
                id: item.id,
                name: item.name,
                isSelected: false,
                credit: item.credit

            }))
            const normalizedData = coursesNormalizer(data)
            return state.merge(normalizedData)
        }
        case SELECT_COURSE: {
            return state.setIn(
                ['entities', 'courses', action.index.toString(), 'isSelected'], true
            )
        }
        case UNSELECT_COURSE:
            return state.setIn(
                ['entities', 'courses', action.index.toString(), 'isSelected'], false
        )
        default:
            return state;
           
    }
}

export default courseReducer
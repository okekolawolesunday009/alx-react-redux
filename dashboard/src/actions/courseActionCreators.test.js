import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('course selection action ', () => {
    test('unselect course', () => {

        const result = { type: UNSELECT_COURSE, index: 1 } 

        expect(unSelectCourse(1)).toEqual(result)
        
    })
    test('select course', () => {

        const result = { type: SELECT_COURSE, index: 1 } 

        expect(selectCourse(1)).toEqual(result)
        
    })
})
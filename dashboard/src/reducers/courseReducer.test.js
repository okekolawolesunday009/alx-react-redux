import { List, Map, fromJS } from "immutable";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import courseReducer, { initialCourseState } from "./courseReducer";

describe('testing course Reducer', () => { 

    it ('shouldrturn empty initial state', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [ ]
          }
          const initialCourseState = Map({
            entities: {},
            result: []
        })
        
        const newState = courseReducer(initialCourseState, action)
        // console.log(newState.toJS())
        expect(newState.toJS()).toEqual((initialCourseState.toJS()));
    });

    it('fetch course LISTED', () => {
        const action = {
                type: SELECT_COURSE,
                index: 2
              }

            // const expectedState = [
            //       {
            //         id: 1,
            //         name: "ES6",
            //         credit: 60, isSelected: false
            //       },
            //       {
            //         id: 2,
            //         name: "Webpack",
            //         credit: 20, isSelected: false
            //       },
            //       {
            //         id: 3,
            //         name: "React",
            //         credit: 40, isSelected: false
            //       }
            //     ]

            const expectedState = {
                entities: {
                    courses: {
                        "1": { id: 1, name: "ES6", credit: 60, isSelected: false },
                        "2": { id: 2, name: "Webpack", credit: 20, isSelected: true },
                        "3": { id: 3, name: "React", credit: 40, isSelected: false }
                    }
                },
                result: [1, 2, 3]
            };
            const initialCourseState = Map({
                entities: {
                    courses: {
                        "1": { id: 1, name: "ES6", credit: 60, isSelected: false },
                        "2": { id: 2, name: "Webpack", credit: 20, isSelected: false },
                        "3": { id: 3, name: "React", credit: 40, isSelected: false }
                    }
                },
                result: [1, 2, 3]
            })

              const newState = courseReducer(initialCourseState, action)
              expect(newState.toJS()).toEqual(expectedState)
              const kola = newState.toJS()
            console.log(kola.entities)
    
    })


    // it(' selected course ', () => {
    //     const action = {
    //             type: SELECT_COURSE,
    //             index: 2
    //           }
    //         const initialState  = [
    //             {
    //                 id: 1,
    //                 name: "ES6",
    //                 credit: 60, isSelected: false
    //               },
    //               {
    //                 id: 2,
    //                 name: "Webpack",
    //                 credit: 20, isSelected: false
    //               },
    //               {
    //                 id: 3,
    //                 name: "React",
    //                 credit: 40, isSelected: false
    //               }
    //           ]
    //         const expectedState = [
    //               {
    //                 id: 1,
    //                 name: "ES6",
    //                 credit: 60, isSelected: false
    //               },
    //               {
    //                 id: 2,
    //                 name: "Webpack",
    //                 credit: 20, isSelected: true
    //               },
    //               {
    //                 id: 3,
    //                 name: "React",
    //                 credit: 40, isSelected: false
    //               }
    //             ]
            

    //           const newState = courseReducer(initialState, action)

    //           expect(newState).toEqual(expectedState)
    

    // })
    // it(' unselected course ', () => {
    //     const action = {
    //             type: UNSELECT_COURSE,
    //             index: 2
    //           }
    //         const initialState  = [
    //             {
    //                 id: 1,
    //                 name: "ES6",
    //                 credit: 60, isSelected: false
    //               },
    //               {
    //                 id: 2,
    //                 name: "Webpack",
    //                 credit: 20, isSelected: true
    //               },
    //               {
    //                 id: 3,
    //                 name: "React",
    //                 credit: 40, isSelected: false
    //               }
    //           ]
    //         const expectedState = [
    //               {
    //                 id: 1,
    //                 name: "ES6",
    //                 credit: 60, isSelected: false
    //               },
    //               {
    //                 id: 2,
    //                 name: "Webpack",
    //                 credit: 20, isSelected: false
    //               },
    //               {
    //                 id: 3,
    //                 name: "React",
    //                 credit: 40, isSelected: false
    //               }
    //             ]
            

    //           const newState = courseReducer(initialState, action)

    //           expect(newState).toEqual(expectedState)
    
    // })
})
import React from 'react'
import CourseListRow from './CourseListRow';
import PropTypes from "prop-types"
import { CourseShape } from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({listCourses}) {
  
 return(  
      <table id='CourseList' className={css(styles.table)}>
        <thead >
    
          <CourseListRow textFirstCell={"Available Courses"} isHeader={true}/>
          <CourseListRow textFirstCell={"Courses name"} textSecondCell={"Credit"} isHeader={true}/> 
    
        </thead>
        <tbody>

          { (listCourses.length > 0) ?
              ( 
                listCourses.map(course => (
                  <CourseListRow
                   key={course.id}
                    textFirstCell={course.name} 
                    textSecondCell={course.credit}
                     isHeader={false}/>
               ))
              )
            :
              (
              <div> <p>No course available yet</p></div>
               ) 
          }       

        </tbody>
      
    </table>
    

        )
  
};

const styles = StyleSheet.create({
  table: {
    width: "100%",
    border: "1px solid #ddd",
    fontSize: " 2rem",
    margin: "2em auto"

  },
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },

  td: {
    width: "80%",
  },
  nthTr2: {
    "nth-child(2)" : {
    textAlign: "left"
  }
},

})

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)).isRequired
};

CourseList.defaultProps = {
  listCourses: [],
};

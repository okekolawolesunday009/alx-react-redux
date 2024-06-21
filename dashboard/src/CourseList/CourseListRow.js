import React from 'react'
import PropTypes from "prop-types"
import {  css } from 'aphrodite';
import { useState } from 'react';


const rowStyle = {
    backgroundColor: "#f5f5f5ab",
  };
  
  const headerStyle = {
    backgroundColor: "#deb5b545",
  };

  const rowChecked = {
    backgroundColor: "#e6e4e4"
  }
export default function CourseListRow({isHeader=false, textFirstCell, textSecondCell=null}) {

   const [isChecked, setIsChecked] = useState(false);
   
   const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
   if (isHeader){

        if (textSecondCell === null) {

            return (
                <tr style={rowStyle}> 
                
                         <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
                </tr>
            )

        } else  {
            return (
                <tr style={headerStyle}> 
                   <td>{textFirstCell}</td>
                  <td>{textSecondCell}</td>
               </tr>

            )
        }
   
   } else {
   return (
    <tr style={isChecked ? rowChecked : headerStyle}>
    <td>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />{textFirstCell}
        {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
    </tr>
    );
   }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    textSecondCell: PropTypes.string,
  };


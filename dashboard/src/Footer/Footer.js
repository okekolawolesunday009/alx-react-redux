import React from 'react'
import { getFullYear, getFooterCopy } from '../Utils/utils'
import "./Footer.css"
import { useContext } from 'react';
import {AppContext} from "../App/AppContext"
import PropTypes from "prop-types";
import { connect } from 'react-redux';


export  function Footer({user}) {
  // console.log(user != undefined && user.user)
  return (
    <div className="App-footer">
        <p> {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        
        <p>
         {user && <a href="#">Contact us</a>}
        </p>
        


    </div>
  )
}
Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.ui.get("user"),
    
  };
};

export default connect(mapStateToProps, null)(Footer);

import React, { Component } from 'react'
import logo from "../Assets/holberton-logo.jpg"
import { StyleSheet, css } from 'aphrodite'
import { useContext } from 'react'
import { AppContext } from '../App/AppContext'
import { connect } from 'react-redux'
import PropTypes  from 'prop-types'
import { logout } from '../actions/uiActionCreators'

class Header extends Component{
  // const {user, logOut} = useContext(AppContext)
    // console.log(user.loginData != undefined && user.loginData.email)
    constructor(props) {
      super(props)

    }
 
  

  render () {

    const {logout, user} = this.props

    return (

    <div className={css(styles.Appheader)}>
        <div>
          <img className={css(styles["img"])} src={logo} alt='holberton_logo' width={300} height={300}/>

        </div>
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.loginData != undefined && user ?
         (
         <p>Welcome {user.loginData.email}
          <span
           onClick={() => logout()}>
            logout
           </span>
          </p>) :""}
    </div>
      
   )
  }
};

const styles = StyleSheet.create({
  Appheader : {
        display: "flex",
        alignItems: "center",
        borderBottom: "0.5rem solid red"
  },

  h1 : {
        fontSize: "3rem",
        color: "red"
  },

 "img" : {
    '@media (max-width: 767px)': {
      width: "10rem",
      height: "10rem"
    
    }
  }


});

Header.contextType = AppContext;

Header.defaultProps = {
  user:null,
  logout: () => {},


}

Header.prototypes = {
  user: PropTypes.object,
  logout: PropTypes.func


}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get("user")
  }

}

export const mapDispatchToProps = {

    logout

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
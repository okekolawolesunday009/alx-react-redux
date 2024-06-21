import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
// import {useState} from 'react'
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../Utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import {AppContext, user } from './AppContext';
import { connect } from 'react-redux';
// import { displayNotifications } from '../selectors/notificationSelectors';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';


export class App extends Component {

 

  constructor(props) {
    super(props); 
      this.state = {
        displayDrawer : false,
        user: user,
        logOut: this.logOut,
        listNotifications : [
          {
            id:1,
            type: "default",
            value:"New course available"
          },
          {
            id:2,
            type: "urgent",
            value:"New resume available"
          },
          {
            id:3,
            type: "urgent",
            html: getLatestNotification()
          }
        ]
        
      };
 
    // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    // this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    // this.login = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this)

  }
  logOut() {
    this.setState({
      user: user
    });
  }

  // logIn = (email, password) => {
  //   // this.setState({
  //   //   user: {
  //   //     email: email,
  //   //     password: password,
  //   //     isLoggedIn: true,
  //   //   }
  //   // });
  //   this.props.login(email, password)
  //   console.log(email,password)
  // };
  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  };
  
  
  // handleDisplayDrawer = () => {
  //   this.setState({displayDrawer: true})
    
  // };

  // handleHideDrawer = () => {
  //   this.setState({displayDrawer: false})
  // };
  
  handleKeyDown (e) {
    if (e.ctrlKey && e.key === 'h') {
        alert("Logging you out");
        this.props.logOut();
    };
  };
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown);
  }
          
   listCourses = [
    {
      id: 1, 
      name: "ES6",
      credit: 60

    },
    {
      id: 2, 
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40

    }
  ];
  
 
  render() {
    const {isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout} = this.props

    return (
      <>
      {/* <AppContext.Provider value={{ 
          user: this.state.user,
          logOut: this.state.logOut,}}> */}

      <div className={css(styles.App, styles.smallHtml)}>
         <Notifications 
         displayDrawer={displayDrawer}
         listNotifications={this.state.listNotifications}
         handleDisplayDrawer= {displayNotificationDrawer}
         handleHideDrawer= {hideNotificationDrawer}
         markNotificationAsRead={this.markNotificationAsRead}/>
            <div >
            <Header/>
            
            
            <div className={css(styles.AppBody)}>

                {!isLoggedIn ?
                <BodySectionWithMarginBottom title={"Login to continue"}>
                  <Login login={login}/>
                </BodySectionWithMarginBottom>: 
                <BodySectionWithMarginBottom title={"Course List"}>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
                }

                <BodySection title={"News from School"}>
                  <p >We are holberton</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                
                </BodySection>

            </div>

            
            
            <Footer/>
            </div>
                
      </div>
      {/* </AppContext.Provider> */}
      </>
    )
  }
}
const styles = StyleSheet.create({
  App: {
    height: "100vh",
    fontSize: "2rem",
  },
  AppBody: {
    padding: "4rem",
    height: "100%",
    '@media (max-width: 767px)': {
        padding: "2rem"
     },

  },

  Color: {
    color: "black"
  },

  height: {
    height: "100%"
  },

  smallHtml: {
      '@media (max-width: 767px)': {
        html: {
          fontSize: "47%",
          backgroundColor: "red"
       },

       img : {
        width: "10rem",
        height: "10rem"
       },
      //  AppBody: {
      //   height: "80%"
      // }

      }   
  }
});


App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    logout: PropTypes.func.isRequired, // Assuming you're using PropTypes for prop type validation,
    displayNotificationDrawer: PropTypes.func.isRequired ,
    hideNotificationDrawer: PropTypes.func.isRequired 
  };
App.defaultProps = {
    login: () => {},
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
  };
  export const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.ui.get('isUserLoggedIn'),  // Assuming 'isUserLoggedIn' is a key in your state
      displayDrawer: state.ui.get('isNotificationDrawerVisible'),  // Assuming 'isNotificationDrawerVisible' is a key in your state
    };
  };
export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login:loginRequest,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

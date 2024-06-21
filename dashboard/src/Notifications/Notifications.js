import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const Notifications = ({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead
}) => {
  const handleShow = () => {
    handleDisplayDrawer();
  };

  const handleHide = () => {
    handleHideDrawer();
  };

  const markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    markNotificationAsRead(id);
  };

  return (
    <>
      <div className={css(styles.menuItem)}>
        <p onClick={handleShow}>Your Notifications</p>
      </div>

      {displayDrawer && (
        <div className={css(styles.Notifications)}>
          <button
            style={{
              position: 'absolute',
              top: 10,
              right: 15,
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={handleHide}
          >
            X
          </button>
          {listNotifications.length !== 0 ? (
            <p>Here is the list of notifications</p>
          ) : null}

          <ul className={css(styles.ul)}>
            {listNotifications.map((notify) => (
              <NotificationItem
                key={notify.id}
                type={notify.type}
                value={notify.value}
                html={notify.html}
                id={notify.id}
                onMarkAsRead={markAsRead}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const opacityAnimation = {
  "0% ": {
    opacity: 0.5,
  },
  "100% ": {
    opacity: 1,
  }
};  
const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};


const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed red',
    width: '40%',
    position: 'absolute',
    right: 6,
    padding: '4rem',
    fontSize: 'var(--font-x-small)',
    "@media (max-width: 767px)" :{
     
       width: '100%',
       height:"100%",
       backgroundColor: "white",
       padding: "0",
       border: "none"
     
      
     }
  },

  ul: {
    "@media (max-width: 767px)" :{
    margin: "0",
    padding: "0",
    width: '100%',
    display: "flex",
    flexDirection: "column",
    gap:"2rem",

    }
  },


 

  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 'var(--font-x-small)',
    fontWeight: 'bold',
    ":hover": {
      cursor: "pointer",
      animationName: [bounceAnimation, opacityAnimation],
      animationDuration: '1s',
      animationIterationCount: "3",
    }
      
  },
});


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: PropTypes.array.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired
};

export default Notifications;

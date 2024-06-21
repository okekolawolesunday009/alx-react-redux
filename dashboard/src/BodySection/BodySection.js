import { StyleSheet, css } from 'aphrodite'
import React from 'react';
import PropTypes from 'prop-types';


export default function BodySection({title, children}) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
        <h2>{title}</h2>
        {children}

    </div>
  )
}
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px"
  }
});


BodySection.propTypes = {
  title: PropTypes.string
};

import React from 'react'
import classes from './Key.module.css'

const Key = ({symbol, styles, onClick}) => {
  return (
    <button
      style={styles}
      onClick={onClick}
      className={classes.key}
    >
      {symbol}
    </button>
  )
}

export default Key

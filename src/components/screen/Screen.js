import React from 'react'
import classes from './Screen.module.css'

const Screen = ({expression}) => {
  return (
    <div className={classes.screen}>
      <h1 className={classes.screen__text}>{expression}</h1>
    </div>
  )
}

export default Screen

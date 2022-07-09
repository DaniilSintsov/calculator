import React from 'react'
import classes from './Keyboard.module.css'
import Key from '../UI/button/Key'
import KeyClass from '../../classes/KeyClass'

const Keyboard = ({expression, setExpression}) => {
  const keys = [
    {
      symbol: 'AC',
      styles: {backgroundColor: 'var(--red)'},
      callback: (exp, setExp) => KeyClass.onKeyReset(exp, setExp)
    },
    {
      symbol: '( )',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp) => KeyClass.onKeyBrackets(exp, setExp)
    },
    {
      symbol: '%',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '/',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp, item) => KeyClass.onKeySign(exp, setExp, item)
    },

    {
      symbol: '7',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '8',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '9',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '*',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp, item) => KeyClass.onKeySign(exp, setExp, item)
    },

    {
      symbol: '4',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '5',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '6',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '-',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },

    {
      symbol: '1',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '2',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '3',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '+',
      styles: {backgroundColor: 'var(--green)'},
      callback: (exp, setExp, item) => KeyClass.onKeySign(exp, setExp, item)
    },

    {
      symbol: '0',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '.',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp, item) => KeyClass.onKeyNum(exp, setExp, item)
    },
    {
      symbol: '🠐',
      styles: {backgroundColor: 'var(--blue)'},
      callback: (exp, setExp) => KeyClass.onKeyDelete(exp, setExp)
    },
    {
      symbol: '=',
      styles: {backgroundColor: 'var(--red)'},
      callback: (exp, setExp) => KeyClass.onKeyCalculation(exp, setExp)
    }
  ]

  return (
    <div className={classes.keyboard}>
      <div className={classes.keyboard__wrapper}>
        {
          keys.map(key =>
            <Key
              key={key.symbol}
              styles={key.styles}
              onClick={() => key.callback(expression, setExpression, key.symbol)}
              symbol={key.symbol}
            />
          )
        }
      </div>
    </div>
  )
}

export default Keyboard

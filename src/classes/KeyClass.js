export default class KeyClass {
  static onKeyNum(exp, setExp, item) {
    console.log(exp.length)
    if (exp.length < 240) {
      if (exp.length && exp[0].length > 1) {
        setExp([exp.pop()])
      }
      if (exp.length % 16 === 15) {
        setExp([...exp, item, ' '])
      } else {
        setExp([...exp, item])
      }
    }
  }

  static onKeySign(exp, setExp, item) {
    if (exp.length < 240) {
      if (exp.length) {
        if (exp.length % 16 === 15) {
          setExp([...exp, item, ' '])
        } else {
          setExp([...exp, item])
        }
      }
    }
  }

  static onKeyCalculation(exp, setExp) {
    if (exp.length) {
      let result
      try {
        result = String(eval(exp.join(''))).split('')
        if (result[0] === 'I') {
          setExp(['0'])
        } else if (result.length > 16) {
          setExp(['Результат превышает 9999999999999999'])
        } else {
          setExp([...result])
        }
      } catch {
        setExp(['Ошибка синтаксиса'])
      }
    }
  }

  static onKeyDelete(exp, setExp) {
    if (exp.length) {
      setExp(exp.filter((_, i) => i !== exp.length - 1))
    }
  }

  static onKeyReset(exp, setExp) {
    if (exp.length) {
      setExp([])
    }
  }

  static onKeyBrackets(exp, setExp) {
    if (exp.length < 240) {
      if (exp.indexOf('(') === -1 ||
        exp[exp.length - 1] === '(' ||
        exp[exp.length - 1] === '+' ||
        exp[exp.length - 1] === '-' ||
        exp[exp.length - 1] === '*' ||
        exp[exp.length - 1] === '/' ||
        exp[exp.length - 1] === '%') {
        if (exp.length % 16 === 15) {
          setExp([...exp, '(', ' '])
        } else {
          setExp([...exp, '('])
        }
      } else if (exp.filter(item => item === '(').length > exp.filter(item => item === ')').length) {
        if (exp.length % 16 === 15) {
          setExp([...exp, ')', ' '])
        } else {
          setExp([...exp, ')'])
        }
      } else {
        if (exp.length % 16 === 15) {
          setExp([...exp, '(', ' '])
        } else {
          setExp([...exp, '('])
        }
      }
    }
  }
}

import './styles/App.css'
import Screen from './components/screen/Screen'
import Keyboard from './components/keyboard/Keyboard'
import {useState} from 'react'

function App() {
  const [expression, setExpression] = useState([])

  return (
    <div className="container">
      <Screen expression={expression}/>
      <Keyboard expression={expression} setExpression={setExpression}/>
    </div>
  )
}

export default App

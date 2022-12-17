import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MoralTask1 from './components/MoralTask1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="padre">
      <div className='header'>
        <h1>Tarea Moral| Modulo: React.js <br /> Academlo</h1>
      </div>
      <div className='App'>
        <MoralTask1 />
      </div>
    </div>
  )
}

export default App

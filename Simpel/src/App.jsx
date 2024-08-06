import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './compo/child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me!
        </button>
        <p>You clicked {count} times.</p>
      </div>
      <Child text="text from ParentComponent"/>
    </>
  )
}

export default App

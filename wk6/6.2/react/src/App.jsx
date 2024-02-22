import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const joyful = true;
  return (
    <>
      <div>
        <h1>Oh hello, world. My name is Sydni! 👽</h1>
        {joyful ? (<div>I am filled with joy to be done with this assignment 😁</div>) : (<div>I am not filled with joy to be done with this assignment 😁</div>)}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          guess how much brain power I used for this 🧠 {count}
        </button>
      </div>
    </>
  )
}

export default App

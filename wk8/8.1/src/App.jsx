import { useState } from 'react'
import './App.css'
import llama from './assets/llama.png';
import alpaca from './assets/alpaca.png';
import Animal from './Animal';

function App() {
  const [pet, setPet] = useState(llama)

  return (
    <>
      <div>
        <Animal url={pet} />
      </div>
      <div className="card">
        <button onClick={() => {
          console.log("click llama");
          setPet(llama);
        }}>
          Llama
        </button>

        <button onClick={() => {
          console.log("click alpaca");
          setPet(alpaca);
        }}>
          Alpaca
        </button>
      </div>
    </>
  )
}

export default App

import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Llama } from './views/Llama'
import { Alpaca } from './views/Alpaca'
import './App.css'

function App() {

  return (
    <>
      {/* nav here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llama">Llamas</Link></li>
        <li><Link to="/alpaca">Alpacas</Link></li>
      </ul>

      {/* Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llama" element={<Llama />} />
        <Route path="/alpaca" element={<Alpaca />} />

      </Routes>
    </>
  )
}

export default App

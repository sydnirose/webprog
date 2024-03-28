import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Song } from './views/Song';
import './App.css'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link>Go Back Home</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Song />} />
    </Routes>
    </>
  )
}

export default App

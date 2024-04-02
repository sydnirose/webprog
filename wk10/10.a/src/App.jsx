import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./views/Home";
import { PlantDetails } from "./views/PlantDetails";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<PlantDetails />} />
    </Routes>
  )
}

export default App

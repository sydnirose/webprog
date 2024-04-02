import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./views/Home";
import { PlantDetails } from "./views/PlantDetails";
import plantData from "./assets/plant-data.json";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<PlantDetails data={plantData} />} />
    </Routes>
  )
}

export default App

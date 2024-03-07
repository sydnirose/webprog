import { useState } from 'react'
import './App.css'
import TropicalAnimalsComponent from './TropicalAnimalsComponent';

function App() {
  const [headline, setHeadline] = useState("List of Tropical Animals");
  const [tropicalAnimals, setTropicalAnimals] = useState([
    "Sea Turtle",
    "Gorilla",
    "Frog",
    "Jaguar",
    "Monkey",
    "Elephant",
    "Salamander",
    "Snake"]);
    function deleteAnimal(animalName) {
      const updatedArray = tropicalAnimals.filter((animal) => {
        return animal !== animalName;
      });
      setTropicalAnimals(updatedArray);
    }
    function focusAnimal(animalName) {
      setHeadline(animalName)
    }

  return (
    <>
      <h1>{`${headline} is the focus`}</h1>
      {tropicalAnimals.map((loopAnimal) => {
        return (
        <TropicalAnimalsComponent
          key={loopAnimal}
          animalName={loopAnimal}
          deleteFn={deleteAnimal}
          focusFn={focusAnimal}
          />
        )
      })}
    </>
  )
}

export default App

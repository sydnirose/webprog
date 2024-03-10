import { useState } from 'react'
import './App.css'
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';

function App() {
  const [plants, setPlants] = useState([
    {
      commonName: "Monstera ",
      scientificName: "Monstera Deliciosa ",
      numOfSpecies: "There are 59 monstera species. ",
      nativeTo: "The monstera is native to southern Mexico, south of Panama. ",
      image: "./monstera.png",
      easy: true,
      id: "1"
    },
    {
      commonName: "Fiddle Leaf Fig ",
      scientificName: "Ficus Lyrata ",
      numOfSpecies: "The ficus has over 1000 species. ",
      nativeTo: "The fiddle leaf fig is native to western Africa. ",
      image: "./fiddle-leaf-fig.png",
      easy: false,
      id: "2"
    },
    {
      commonName: "Alocasia Frydek ",
      scientificName: "Alocasia Micholitziana ",
      numOfSpecies: "There are about 90 species of alocasias. ",
      nativeTo: "The alocasia is native to Asia, southeast Asia and Australia. ",
      image: "./alocasia-frydek.png",
      easy: false,
      id: "3"
    },
    {
      commonName: "ZZ Plant ",
      scientificName: "Zamioculcas Zamiifolia ",
      numOfSpecies: "There are roughly 15 species of ZZ plants. ",
      nativeTo: "The ZZ is native to eastern Africa. ",
      image: "./zz.png",
      easy: true,
      id: "4"
    },
    {
      commonName: "Bird of Paradise ",
      scientificName: "Strelitzia Nicolia ",
      numOfSpecies: "There are 45 bird of paradise species. ",
      nativeTo: "The monstera is native to south Africa. ",
      image: "./bird-of-paradise.png",
      easy: true,
      id: "5"
    },
    {
      commonName: "Snake Plant ",
      scientificName: "Dracaena Trifasciata ",
      numOfSpecies: "There are over 70 snake plant species. ",
      nativeTo: "The snake plant is native to West Africa. ",
      image: "./snake-plant.png",
      easy: true,
      id: "6"
    }
  ]);

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = plants.filter((plantArray) => {
    return plantArray.id !== id
  })
  setPlants(updatedArray);
}

function duplicateCard(id) {
  console.log("duplicate me", id);
  const matchingArray = plants.find((plantArray) => {
    return plantArray.id === id
  });
  setPlants([...plants, matchingArray]);
}

  return (
    <div className="page">
      {/* Masthead goes here */}
      <Masthead />

      <div className="collection">
        {/* plant map goes here */}
        {/* use ItemCard component in loop */}
        {plants.map((plantArray) => {
          return (
            <ItemCard
              key={plantArray.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...plantArray} />
          )
        })};
      </div>
    </div>
  )
}

export default App

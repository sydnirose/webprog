import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewPlantForm } from "../NewPlantForm/NewPlantForm";
import plantData from "../assets/plant-data.json";

export function Home() {
    const [plants, setPlants] = useState(plantData);

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
  const updatedArray = {...matchingArray, id: nanoid()}
  setPlants([...plants, updatedArray]);
}

// makes the new card from user input on form
function addCard(newCard) {
    const cardWithId = {
      ...newCard,
      id: nanoid()
    }
    setPlants([...plants, cardWithId])
  
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
        })}
        </div>
        <hr />
        <NewPlantForm addCardFn={addCard} />
    </div>
    );
}
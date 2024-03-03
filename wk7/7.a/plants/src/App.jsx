import "./App.css";
import { PlantRow } from "./PlantRow.jsx";

function App() {
  const plantArray = [
    {
      commonName: "Monstera ",
      scientificName: "Monstera Deliciosa ",
      numOfSpecies: "There are 59 monstera species. ",
      nativeTo: "The monstera is native to southern Mexico, south of Panama. ",
      image: "/monstera.png",
    },

    {
      commonName: "Fiddle Leaf Fig ",
      scientificName: "Ficus Lyrata ",
      numOfSpecies: "The ficus has over 1000 species that occur throughout the pantropics. ",
      nativeTo: "The fiddle leaf fig is native to western Africa. ",
      image: "/fiddle-leaf-fig.png",
    },

    {
      commonName: "Alocasia Frydek ",
      scientificName: "Alocasia Micholitziana ",
      numOfSpecies: "There are about 90 species of alocasias. ",
      nativeTo: "The alocasia is native to Asia, southeast Asia and Australia. ",
      image: "/alocasia-frydek.png",
    },

    {
      commonName: "ZZ Plant ",
      scientificName: "Zamioculcas Zamiifolia ",
      numOfSpecies: "There are roughly 15 species of ZZ plants. ",
      nativeTo: "The ZZ is native to eastern Africa. ",
      image: "/zz.png",
    },

    {
      commonName: "Bird of Paradise ",
      scientificName: "Strelitzia Nicolia ",
      numOfSpecies: "There are 45 bird of paradise species. ",
      nativeTo: "The monstera is native to south Africa. ",
      image: "/bird-of-paradise.png",
    }
  ];

  return (
    <>
      <h1>MY PLANT TABLE!</h1>
      <table className="plant-table">
        <thead>
          <tr>
            <th>Plant Common Name</th>
            <th>Plant Scientific Name</th>
            <th>Number of Species</th>
            <th>Native To</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {plantArray.map((plant, index) => {
            return (
            <PlantRow
              key={plant.image}
              odd ={index % 2 === 0}
              commonName={plant.commonName}
              scientificName={plant.scientificName}
              numOfSpecies={plant.numOfSpecies}
              nativeTo={plant.nativeTo}
              image={plant.image}
            />
            )
          })}
        </tbody>
      </table>
    </>

  )
}

export default App;

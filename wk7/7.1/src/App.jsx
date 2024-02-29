import imageLlama from "./assets/images/llama.png";
import imageAlpaca from "./assets/images/alpaca.png";
import Camelid from "./components/Camelid";

function App() {
  const camelidFacts = [
    {name: "Llama", fact: "Llamas can run 35-40 miles per hour", image: <img src={imageLlama} />},
    {name: "Alpaca", fact: "There are no wild alpacas, all are domesticated", image: <img src={imageAlpaca} />},
  ]

  return (
    <div>
      <h2>Alpacas & Llamas</h2>
      <Camelid
        name={camelidFacts[0].name}
        fact={camelidFacts[0].fact}
        image={camelidFacts[0].image}
      />

      <Camelid
        name={camelidFacts[1].name}
        fact={camelidFacts[1].fact}
        image={camelidFacts[1].image}
      />

    </div>
  );
}

export default App;
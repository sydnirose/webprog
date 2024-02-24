import './App.css'

function App() {
  const llamaFacts = [
    "Llama's are related to the Camel. ", 
    "Llama's are native to the mountainous region of South America. ",
    "Female llama's give birth every other year. ",
    "When a llama is angry at a fellow llama, they stick their tongues out to express their dislike. ",
    "A llama can project their spit 15 or more feet. ", 
  ];

  return (
    <>
      <h1>LLAMA FACTS! 🦙👨🏻‍🌾</h1>
      <div>
      {/* this shows all facts */}
      {llamaFacts}

      {/* this shows one of last two */}
      {llamaFacts ? <div>When a llama is angry at a fellow llama, they stick their tongues out to express their dislike.</div> : <div>A llama can project their spit 15 or more feet. </div>}
      </div>
    </>
  )
}

export default App

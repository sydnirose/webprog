import llamaPic from "../assets/llama.png";
import alpacaPic from "../assets/alpaca.png";

export function Home() {
    return(
        <>
            <h1>Which are better, llamas or alpacas?</h1>
            <img src={llamaPic} alt="llama" />
            <img src={alpacaPic} alt="alpaca" />
            <p>Is this the last word in the debate? Have you made a choice?</p>
            <p>Use the navigation to learn more about each one and then you can decide which win:</p>
            <h3><strong>Llamas</strong> or <strong>Alpacas</strong></h3>   
        </>
    )
}
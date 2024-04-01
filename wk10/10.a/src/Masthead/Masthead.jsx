import mastheadImg from "../assets/plant-masthead.png";
import "./Masthead.css";

export default function Masthead() {
    return (
        <div className="masthead" >
            <img src={mastheadImg} alt="Plant Graphic" />
            <h1>Sydni&apos;s Plant Table</h1>
        </div>
    )
}
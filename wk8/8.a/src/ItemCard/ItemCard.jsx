import PropTypes from "prop-types";
import "./ItemCard.css";
import leaf from "../assets/icons/leaf-2-svgrepo-com.svg";

export default function ItemCard({
    commonName,
    scientificName,
    numOfSpecies,
    nativeTo,
    image,
    easy,
    id
}){

    return (
        <div className="plantCard">
            {easy && <div className="easy"> <img src={leaf} title="this plant is easy to care for" /></div>}
            <div className="cardImg">
                <img src={image} alt={commonName} />
            </div>
            <div className="cardTitle">{commonName}</div>
            <div className="cardInfo">{scientificName}</div>
            <div className="cardInfo">{numOfSpecies}</div>
            <div className="cardInfo">{nativeTo}</div>
        </div>
    )
}
ItemCard.propTypes = {
    commonName: PropTypes.string,
    scientificName: PropTypes.string,
    numOfSpecies: PropTypes.string,
    nativeTo: PropTypes.string,
    image: PropTypes.string,
    easy: PropTypes.bool,
    id: PropTypes.string
}
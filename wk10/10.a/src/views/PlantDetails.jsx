import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import "./PlantDetails.css";

export function PlantDetails({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedPlant = data.find((plant) => plant.id === id);
    console.log("plant", selectedPlant);

    return (
        <>
        <div className="plant-details">
            <Link className="home-link" to="/">Return to Plant Homepage</Link>
            <div className="plant-card">
                <h1 className="detail-head">{selectedPlant.commonName}</h1>
                <img className="detail-img" src={selectedPlant.image} alt={selectedPlant.commonName} />
                <p className="detail-p">{selectedPlant.scientificName}</p>
                <p className="detail-p">{selectedPlant.numOfSpecies}</p>
                <p className="detail-p">{selectedPlant.nativeTo}</p>
                <p className="detail-p">{selectedPlant.easy && (<p className="detail-p">This plant is easy for beginner plant parents to take care of!</p>)}</p>
            </div>
        </div>
        </>
    )
}
PlantDetails.propTypes = {
    data: PropTypes.array
};
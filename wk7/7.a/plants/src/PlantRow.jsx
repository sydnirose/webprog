/* eslint-disable react/prop-types */
import "./PlantRow.css";
export function PlantRow({commonName, scientificName, numOfSpecies, nativeTo, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td>{commonName}</td>
            <td>{scientificName}</td>
            <td>{numOfSpecies}</td>
            <td>{nativeTo}</td>
            <td><img src={image} alt={commonName} /></td>
        </tr>
    )
}
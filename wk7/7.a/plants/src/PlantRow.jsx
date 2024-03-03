/* eslint-disable react/prop-types */
import "./PlantRow.css";
export function PlantRow({commonName, scientificName, numOfSpecies, nativeTo, image, easy, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style={{fontWeight: easy ? 900 : 200, color: easy ? "darkgreen" : "black", textDecoration: easy ? "underline" : ""}}>{commonName}</td>
            <td>{scientificName}</td>
            <td>{numOfSpecies}</td>
            <td>{nativeTo}</td>
            <td><img src={image} alt={commonName} /></td>
        </tr>
    )
}
/* eslint-disable react/prop-types */
export function PlantRow({commonName, scientificName, numOfSpecies, nativeTo, image}) {
    return (
        <tr>
            <td>{commonName}</td>
            <td>{scientificName}</td>
            <td>{numOfSpecies}</td>
            <td>{nativeTo}</td>
            <td><img src={image} alt={commonName} /></td>
        </tr>
    )
}
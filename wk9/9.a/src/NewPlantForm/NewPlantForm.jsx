import { useState } from "react";
import "./NewPlantForm.css";

export function NewPlantForm() {
    const initialCardSetting = {
        commonName: "",
        scientificName: "",
        numOfSpecies: "",
        nativeTo: "",
        image: "",
        easy: true,
    };
    const [newCard, setNewCard] = useState(initialCardSetting);
    function changeHandler(event) {

    }

    return (
        <form className="new-plant-form-wrapper">
            <fieldset>
                <legend>Plant Details</legend>
                <div className="form-group">
                    <label htmlFor="commonName">Plant Common Name</label>
                    <input
                        type="text"
                        name="commonName"
                        id="commonName"
                        value={newCard.commonName}
                        onChange={changeHandler}
                    />
                </div>

            </fieldset>
            <fieldset>
                <legend>Plant Facts</legend>
            </fieldset>

        </form>
    )
}
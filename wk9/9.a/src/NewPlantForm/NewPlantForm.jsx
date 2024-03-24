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
        console.log(event.target.value);
        setNewCard((previousCard) => {

            console.log(event.target.name);

                return {
                    ...previousCard, 
                    [event.target.name]: event.target.value
                }

        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log({newCard});
    }
    return (
        <form className="new-plant-form-wrapper" onSubmit={submitHandler}>
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
                <div className="form-group">
                    <label htmlFor="image">Plant Image URL</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={newCard.image}
                        onChange={changeHandler}
                    />
                </div>
                
            </fieldset>

            <fieldset>
                <legend>Plant Facts</legend>
                <div className="form-group">
                    <label htmlFor="scientificName">Plant Scientific Name</label>
                    <input
                        type="text"
                        name="scientificName"
                        id="scientificName"
                        value={newCard.scientificName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numOfSpecies">Number of Species</label>
                    <input
                        type="text"
                        name="numOfSpecies"
                        id="numOfSpecies"
                        value={newCard.numOfSpecies}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nativeTo">Native to</label>
                    <input
                        type="text"
                        name="nativeTo"
                        id="nativeTo"
                        value={newCard.nativeTo}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="easy">This plant is easy for beginners</label>
                    <input 
                        type="checkbox"
                        name="easy"
                        id="easy"
                        value={newCard.easy}
                        onChange={changeHandler}
                    />
                </div>
            </fieldset>

            <button type="submit">
                Add Plant
            </button>
        </form>
    )
}
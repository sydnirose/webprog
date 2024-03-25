import { useState } from "react";
import PropTypes from "prop-types";
import "./NewPlantForm.css";

export function NewPlantForm({addCardFn}) {

    const initialCardSetting = {
        commonName: "",
        scientificName: "",
        numOfSpecies: "",
        nativeTo: "",
        image: "",
        easy: false,
    };

    // setting the new card
    const [newCard, setNewCard] = useState(initialCardSetting);

    // setting validation
    const [errorObj, setErrorObj] = useState({
        commonName: "",
        image: ""
    });

    function validateForm(newCard) {
        let valid = true;
        if(!newCard.commonName) {
            // set errorObj plant prop to error message
            setErrorObj((previousErrorObj) => {
                return {
                    ...previousErrorObj,
                    commonName: "The Common Name field is required"
                }
            });
            valid = false;
        }

        if(!newCard.image) {
            // set image prop to error message
            setErrorObj((previousErrorObj) => {
                return {
                    ...previousErrorObj,
                    image: "The Image field is required"
                }
            });
            valid = false;
        }
        console.log(valid)
        return valid;
    }

    // boolean for true/false checkbox
    function changeHandler(event) {
        if(event.target.name === "easy") {
            setNewCard((previousCard) => {
                return {
                    ...previousCard,
                    easy: !previousCard.easy
                }
            })
        } else {
            setNewCard((previousCard) => {
                return {
                    ...previousCard,
                    [event.target.name]: event.target.value
                }
            })
        }
    }

    // output new card in console and prevents reload
    function submitHandler(event) {
        event.preventDefault();
        console.log({ newCard });
        if(validateForm(newCard)) {
            // send card to App
            addCardFn(newCard);
            // reset values
            setNewCard(initialCardSetting)
        }
    }
    
    return (
        <form className="new-plant-form-wrapper" onSubmit={submitHandler}>

            <fieldset>
                <legend>Plant Details</legend>
                <div className="form-group">
                    <label className="required" htmlFor="commonName">Plant Common Name </label>
                    <input
                        type="text"
                        name="commonName"
                        id="commonName"
                        value={newCard.commonName}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.commonName) {
                                setErrorObj((previousErrorObj) => {
                                    return {
                                        ...previousErrorObj,
                                        commonName: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.commonName && (
                        <>
                            <br />
                            <small>{errorObj.commonName}</small>
                        </>
                    )}
                </div>
                <div className="form-group">
                    <label className="required" htmlFor="image">Plant Image URL </label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={newCard.image}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.image) {
                                setErrorObj((previousErrorObj) => {
                                    return {
                                        ...previousErrorObj,
                                        image: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.image && (
                        <>
                            <br />
                            <small>{errorObj.image}</small>
                        </>
                    )}
                </div>     
            </fieldset>

            <fieldset>
                <legend>Plant Facts</legend>
                <div className="form-group">
                    <label htmlFor="scientificName">Plant Scientific Name </label>
                    <input
                        type="text"
                        name="scientificName"
                        id="scientificName"
                        value={newCard.scientificName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numOfSpecies">Number of Species </label>
                    <input
                        type="text"
                        name="numOfSpecies"
                        id="numOfSpecies"
                        value={newCard.numOfSpecies}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nativeTo">Native Region </label>
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

            <button type="submit" disabled={errorObj.commonName || errorObj.image}>
                Add Plant
            </button>

        </form>
    )
}

NewPlantForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
}
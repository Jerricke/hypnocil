import React, {useState} from "react"

function NewPatientForm({handleForm}) {

    const [newPatient, setNewPatient] = useState({
        name: "",
        side_effects: "Dizziness"
    })

    function handleSubmit(e) {
        e.preventDefault();
        handleForm(newPatient);
    }

    return(
        <>
            <form id="new-patient-form" onSubmit={e => handleSubmit(e)}>
                <input id="patient-name" type="text" placeholder="Patient Name" onChange={e => setNewPatient({...newPatient, "name": e.target.value })}/>
                <select name="side-effects" id="side-effects" form="new-patient-form" onChange={e => setNewPatient({...newPatient, "side_effects": e.target.value })}>
                    <option value="dizziness">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;
import { useState } from "react";

function SideEffectsAdder({patients}) {

    const [newEffect, setNewEffect] = useState({
        id: patients.id,
        side_effects: patients.side_effects
    })

    function handleSubmit(e) {
        e.preventDefault();
    }

    console.log(newEffect);
    return(
        <>
            <form id="new-side-effect-form" onSubmit={e => handleSubmit(e)}>
                <select name="patient-name" id="patient-name" form="new-side-effect-form" onChange={e => 
                    setNewEffect({...newEffect, "id": e.target.value})}>
                    {patients.map( patient => {
                        return <option value={patient.id}>{patient.name}</option>
                    })}
                </select>
                <select name="side-effects" id="side-effects" form="new-side-effect-form" onChange={e => 
                    setNewEffect({...newEffect, "side_effects": e.target.value })}>
                    <option value="dizziness">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input type="submit" value="Add Side Effect" />
            </form>
        </>
    )
}

export default SideEffectsAdder;
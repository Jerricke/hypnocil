import React from "react"

function PatientList({patients, handleDelete}) {



    return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {
              patients.map( patient => {
                return (
                  <tr key={patient.id}>
                    <td><button onClick={() => handleDelete(patient.id)}>Delete</button></td>
                    <td className={patient["deceased"] ? "deceased" : null}>{patient.id}</td>
                    <td className={patient["deceased"] ? "deceased" : null}>{patient.name}</td>
                    <td className={patient["deceased"] ? "deceased" : null}>{patient.side_effects.toString()}</td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>  
    );
}

export default PatientList;
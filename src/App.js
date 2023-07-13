import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';
import {useState, useEffect} from 'react';
import SideEffectsAdder from './components/SideEffectsAdder';

function App() {

  const [patients, setPatients] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect( ()=> {
    fetch("http://localhost:3000/patients")
      .then(r => r.json())
      .then(data => setPatients(data))
  }, [])    

  function handleForm(newPatient) {
    fetch("http://localhost:3000/patients", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPatient)
    })
    .then(r => r.json())
    .then(data => setPatients([...patients, data]))
  }

  function handleDelete(patientId){
    fetch(`http://localhost:3000/patients/${patientId}`, {
      method: "DELETE"
    })

    const newData = patients.filter( patient => {
      return patient.id !== patientId
    })

    setPatients(newData)
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value)
  }

  const filterData = patients.filter( patient => {
    if (searchQuery === "") return true 
    else {
      if (patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (patient.side_effects.some(SE => SE.toLowerCase().includes(searchQuery.toLowerCase())))){
            return true
          } else return false
        }
  })

  return (
    <div className="root">
      <Header handleSearch={handleSearch}/>
      <div className="content">
        <NewPatientForm  handleForm={handleForm}/>
        <SideEffectsAdder patients={filterData}/>
        <PatientList handleDelete={handleDelete} patients={filterData}/>
      </div>
    </div>
  );
}

export default App;

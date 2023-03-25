import { useState } from 'react' 
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const deletedPatient = id => {
    const patientsUpdate = patients.filter( patient => patient.id !== id);
    setPatients(patientsUpdate)
  }


 
  return (
    <div className="container mx-auto mt-20">
      <Header
       />
      <div className="mt-12 md:flex">
      <Form
      patients={patients}
       setPatients={setPatients}
       patient={patient}
       setPatient={setPatient}
       />
      <PatientList
      patients={patients}
      setPatient={setPatient}
      deletedPatient={deletedPatient}
       />
      </div>
      
    </div>
  )
}

export default App

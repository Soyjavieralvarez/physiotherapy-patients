import React from 'react'
import Patients from './Patients'

const PatientList = ({patients}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    {patients && patients.length ? (
      <>
      <h2 className="font-black text-3xl text-center text-teal-500">Listado de pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
    Administra tus {""}
      <span className="text-teal-500 font-bold">
      pacientes y citas
      </span>
    </p>

    { patients.map ( patient => (
      
      <Patients 
      key={patient.id}
        patient={patient}
      />
    ))}

    </>

    )  : (
      <>

      <h2 className="font-black text-3xl text-center text-teal-500">Actualmente no hay pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
    Puedes comenzar agregando pacientes {""}
      <span className="text-teal-500 font-bold">
      y podrás administrarlos desde aquí
      </span>
    </p>

      </>
    )}
  

    
    </div>
  )}

export default PatientList
import React from 'react'
import Patients from './Patients'

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    <h2 className="font-black text-3xl text-center text-teal-500">Listado de pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
    Administra tus {""}
      <span className="text-teal-500 font-bold">
      pacientes y citas
      </span>
    </p>
    <Patients />
    <Patients />
    <Patients />
    <Patients />
    </div>
  )
}

export default PatientList
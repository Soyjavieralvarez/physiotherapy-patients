import React from 'react'

const Patients = ({patient}) => {

  const { name, lastName, email, phone, date, availability, observations} = patient
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-600">Nombre: {""}
      <span className="font-normal text-teal-500">
      {name}
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Apellidos: {""}
      <span className="font-normal text-teal-500">
      {lastName}
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Email del paciente: {""}
      <span className="font-normal text-teal-500">
      {email}
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Teléfono de contacto: {""}
      <span className="font-normal text-teal-500">
      {phone}
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Fecha para la cita: {""}
      <span className="font-normal text-teal-500">
      {date}
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Disponibilidad horaria: {""}
      <span className="font-normal text-teal-500">
      {availability}

      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Observaciones: {""}
      <span className="font-normal text-teal-500">
      {observations}

      </span>
      </p>
    </div>
  )
}

export default Patients
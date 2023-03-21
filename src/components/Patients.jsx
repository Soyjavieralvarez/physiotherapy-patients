import React from 'react'

const Patients = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-600">Nombre: {""}
      <span className="font-normal text-teal-500">
      Javier
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Apellidos: {""}
      <span className="font-normal text-teal-500">
      Álvarez González
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Email del paciente: {""}
      <span className="font-normal text-teal-500">
      Javier@javier.com
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Teléfono de contacto: {""}
      <span className="font-normal text-teal-500">
      628 23 45 63
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Fecha para la cita: {""}
      <span className="font-normal text-teal-500">
      01/04/2023
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Disponibilidad horaria: {""}
      <span className="font-normal text-teal-500">
      Por la tarde
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-600">Observaciones: {""}
      <span className="font-normal text-teal-500">
      Rigidez en el cuello, tobillo izquierdo con poca movilidad y dolor en rodillas después de realizar deporte intenso
      </span>
      </p>
    </div>
  )
}

export default Patients
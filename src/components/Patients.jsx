import React from "react";

const Patients = ({ patient, setPatient, deletedPatient }) => {
  const { name, lastName, email, phone, date, availability, observations, id } = patient;

  const handleDeleted = () => {
    const reply = confirm('¿Deseas eleminar este paciente?')

    if(reply) {
      deletedPatient(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-600">
        Nombre: {""}
        <span className="font-normal text-teal-500">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Apellidos: {""}
        <span className="font-normal text-teal-500">{lastName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Email del paciente: {""}
        <span className="font-normal text-teal-500">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Teléfono de contacto: {""}
        <span className="font-normal text-teal-500">{phone}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Fecha para la cita: {""}
        <span className="font-normal text-teal-500">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Disponibilidad horaria: {""}
        <span className="font-normal text-teal-500">{availability}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600">
        Observaciones: {""}
        <span className="font-normal text-teal-500">{observations}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-teal-500 hover:bg-teal-700 cursor-pointer transition-all text-white font-bold rounded-md"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-teal-500 hover:bg-teal-700 cursor-pointer transition-all text-white font-bold  rounded-md"
          onClick={handleDeleted}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patients;

import {useState, useEffect} from 'react';



const Form = () => {

  const [patient, setPatient] = useState('');



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center text-teal-500">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir pacientes y {''}
        <span className="text-teal-500 font-bold">administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div>
          <label htmlFor='patientName' className="block text-gray-600 font-bold">
          Nombre del paciente
          </label>
          <input
          id="patientName"
          type="text"
          placeholder='Nombre'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label htmlFor='patientLastName' className="block text-gray-600 font-bold">
          Apellidos del paciente
          </label>
          <input
          id="patientLastName"
          type="text"
          placeholder='Apellidos'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label htmlFor='email' className="block text-gray-600 font-bold">
          Email del paciente
          </label>
          <input
          id="email"
          type="email"
          placeholder='Email de contacto'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label htmlFor='phone' className="block text-gray-600 font-bold">
         Número de teléfono
          </label>
          <input
          id="phone"
          type="text"
          placeholder='Teléfono de contacto'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label htmlFor='date' className="block text-gray-600 font-bold">
         Elija una fecha para la cita
          </label>
          <input
          id="date"
          type="date"
         
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label htmlFor='availability' className="block text-gray-600 font-bold">
         Disponibilidad horaria
          </label>
          <input
          id="availability"
          type="text"
          placeholder='Mañana o tarde'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          />
        </div>

        <div className="mt-5 mb-5">
          <label htmlFor='observations' className="block text-gray-600 font-bold">
         Observaciones:
          </label>
          <textarea
          id="observations"
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md"
          placeholder='Describe los síntomas'
          />
        </div>

        <input
        type="submit"
        className="bg-teal-500 w-full p-3 text-white font-bold hover:bg-teal-700 cursor-pointer transition-all"
        value="Agregar paciente"
         />
      </form>
    </div>
  )
}

export default Form
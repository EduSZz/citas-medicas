//Componente que permite crear una nueva cita médica con validación y mensajes de éxito/error.

import React, { useState } from 'react';
import api from '../services/api';

interface Props {
  onCreate: () => void; // Función que se llama después de crear una cita
}

export default function AppointmentForm({ onCreate }: Props) {
  // Estado para almacenar los valores del formulario
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!patientName || !doctorName || !appointmentDate || !reason) {
      setMessage('❗ Todos los campos son obligatorios.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // Enviar datos a la API para crear una nueva cita
      await api.post('/', {
        patientName,
        doctorName,
        appointmentDate,
        reason
      });

      setMessage('✅ Cita creada con éxito');
      // Limpiar los campos del formulario
      setPatientName('');
      setDoctorName('');
      setAppointmentDate('');
      setReason('');
      // Llamar a la función onCreate para actualizar el listado de citas
      onCreate();
    } catch (error) {
      setMessage('❌ Error al crear la cita');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Crear Nueva Cita</h2>

      <div className="space-y-4">
        {/* Campos del formulario */}
        <input
          type="text"
          placeholder="Nombre del paciente"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Nombre del doctor"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="datetime-local"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Motivo de la cita"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Creando...' : 'Crear Cita'}
        </button>

        {/* Mensajes de validación o error */}
        {message && (
          <p
            className={`text-sm mt-2 text-center ${
              message.includes('✅')
                ? 'text-green-600'
                : message.includes('❌')
                ? 'text-red-600'
                : 'text-yellow-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}



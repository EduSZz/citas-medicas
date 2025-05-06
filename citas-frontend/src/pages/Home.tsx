//Página principal donde se listan, crean y eliminan citas médicas.

import React, { useEffect, useState } from 'react';
import api, {
  deleteAppointment,
  updateAppointmentStatus
} from '../services/api';
import { Appointment } from '../types/Appoinment';
import AppointmentForm from '../components/AppoinmentForm';
import { Link } from 'react-router-dom';

export default function Home() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Obtener todas las citas
  const fetchAppointments = async () => {
    try {
      const res = await api.get('/');
      setAppointments(res.data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

   // Eliminar cita
  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de eliminar esta cita?')) return;

    try {
      await deleteAppointment(id);
      fetchAppointments();
    } catch (error) {
      alert('Error al eliminar la cita');
      console.error(error);
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    try {
      await updateAppointmentStatus(id, status);
      fetchAppointments();
    } catch (error) {
      alert('Error al cambiar el estado');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Gestión de Citas Médicas
      </h1>

      <AppointmentForm onCreate={fetchAppointments} />

      <div className="mt-12 grid gap-6 max-w-4xl mx-auto">
        {appointments.map((appt) => (
          <div key={appt.id} className="bg-white rounded-2xl shadow p-6 space-y-2">
            <p>
              <span className="font-semibold text-gray-700">Paciente:</span>{' '}
              <Link to={`/appointments/${appt.id}`} className="text-blue-600 underline">
                {appt.patientName}
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-700">Médico:</span>{' '}
              {appt.doctorName}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Fecha:</span>{' '}
              {appt.appointmentDate}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Motivo:</span>{' '}
              {appt.reason}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Estado:</span>{' '}
              <span
                className={`font-medium ${
                  appt.status === 'pendiente'
                    ? 'text-yellow-600'
                    : appt.status === 'confirmada'
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`}
              >
                {appt.status}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-700">Creada:</span>{' '}
              {new Date(appt.createdAt).toLocaleString()}
            </p>

            <div className="pt-3 flex flex-wrap gap-2">
              <button
                onClick={() => handleStatusChange(appt.id, 'pendiente')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
              >
                Pendiente
              </button>
              <button
                onClick={() => handleStatusChange(appt.id, 'confirmada')}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Confirmar
              </button>
              <button
                onClick={() => handleStatusChange(appt.id, 'cancelada')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(appt.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                🗑 Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





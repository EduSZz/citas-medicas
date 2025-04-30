import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { Appointment } from '../types/Appoinment';

export default function AppointmentDetails() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/');
        const found = res.data.find((appt: Appointment) => appt.id === Number(id));
        setAppointment(found || null);
      } catch (error) {
        console.error('Error al obtener cita:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!appointment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow text-center space-y-4">
          <p className="text-lg text-gray-700 font-medium">No se encontró la cita.</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl space-y-4">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
          Detalles de la Cita
        </h2>

        <div className="space-y-2 text-gray-800">
          <p><strong>ID:</strong> {appointment.id}</p>
          <p><strong>Paciente:</strong> {appointment.patientName}</p>
          <p><strong>Médico:</strong> {appointment.doctorName}</p>
          <p><strong>Fecha:</strong> {appointment.appointmentDate}</p>
          <p><strong>Motivo:</strong> {appointment.reason}</p>
          <p><strong>Estado:</strong>{' '}
            <span className={`font-medium ${
              appointment.status === 'pendiente'
                ? 'text-yellow-600'
                : appointment.status === 'confirmada'
                ? 'text-green-600'
                : 'text-gray-600'
            }`}>
              {appointment.status}
            </span>
          </p>
          <p><strong>Creado:</strong> {new Date(appointment.createdAt).toLocaleString()}</p>
        </div>

        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Volver a la lista
          </Link>
        </div>
      </div>
    </div>
  );
}



//Componente que muestra los detalles de una cita médica.

import React from 'react';
import { Appointment } from '../types/Appoinment'; // Importa el tipo de cita

interface Props {
  appointment: Appointment; // Propiedad que recibe la cita médica
}

export default function AppointmentItem({ appointment }: Props) {
  return (
    <div className="border p-4 rounded shadow">
      <p><strong>Paciente:</strong> {appointment.patientName}</p>
      <p><strong>Médico:</strong> {appointment.doctorName}</p>
      <p><strong>Fecha:</strong> {appointment.appointmentDate}</p>
      <p><strong>Estado:</strong> {appointment.status}</p>
      <p><strong>Creado el:</strong> {new Date(appointment.createdAt).toLocaleString()}</p>

    </div>
  );
}

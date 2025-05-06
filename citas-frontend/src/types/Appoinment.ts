// Definición de la interfaz `Appointment`, que representa la estructura de una cita médica.

export interface Appointment {
  id: number; // Identificador único de la cita
  patientName: string; // Nombre del paciente
  doctorName: string; // Nombre del médico que atenderá la cita
  appointmentDate: string; // Fecha y hora de la cita en formato ISO string
  reason: string; // Motivo por el que el paciente solicita la cita
  status: 'pendiente' | 'confirmada' | 'cancelada'; // Estado de la cita, puede ser pendiente, confirmada o cancelada
  createdAt: string; // Fecha de creación de la cita en formato ISO string
}
  
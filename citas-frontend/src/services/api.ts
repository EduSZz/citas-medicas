
//Configuración de la instancia de Axios y funciones para interactuar con la API de citas médicas.

import axios from 'axios';

// Crear una instancia de Axios para interactuar con la API de citas médicas
const api = axios.create({
  baseURL: 'http://localhost:3000/appointments', // URL base de la API para citas médicas
});

export default api;

// Eliminar una cita médica por ID
export const deleteAppointment = async (id: number) => {
  await api.delete(`/${id}`); // Realiza una solicitud DELETE para eliminar la cita por su ID
};

// Actualizar el estado de una cita médica
export const updateAppointmentStatus = async (id: number, status: string) => {
  await api.patch(`/${id}/status`, { status }); // Realiza una solicitud PATCH para actualizar el estado de la cita
};
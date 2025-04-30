import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/appointments',
});

export default api;

export const deleteAppointment = async (id: number) => {
  await api.delete(`/${id}`);
};

export const updateAppointmentStatus = async (id: number, status: string) => {
  await api.patch(`/${id}/status`, { status });
};

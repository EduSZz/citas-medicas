/**
 * Punto de entrada del servidor Express.
 * Configura middlewares, rutas y comienza a escuchar en el puerto especificado.
 */

import express from 'express';
import cors from 'cors';
import { appointmentRouter } from './routes/appointment.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir peticiones desde otros orígenes
// Middleware para interpretar JSON en las solicitude
app.use(cors());
app.use(express.json());

// Ruta base para las operaciones de citas médicas
app.use('/appointments', appointmentRouter);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

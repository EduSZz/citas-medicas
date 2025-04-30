import { Router } from 'express';
import { getAppointments, createAppointment, updateAppointment, deleteAppointment, updateStatus } from '../controllers/appoinment.controller';
import { body, param } from 'express-validator';

export const appointmentRouter = Router();

// GET /appointments
appointmentRouter.get('/', getAppointments);

// POST /appointments
appointmentRouter.post(
  '/',
  [
    body('patientName').notEmpty(),
    body('doctorName').notEmpty(),
    body('appointmentDate').notEmpty(),
    body('reason').notEmpty(),
  ],
  createAppointment
);

// PUT /appointments/:id
appointmentRouter.put(
  '/:id',
  [
    param('id').isInt(),
    body('patientName').notEmpty(),
    body('doctorName').notEmpty(),
    body('appointmentDate').notEmpty(),
    body('reason').notEmpty(),
    body('status').isIn(['pendiente', 'confirmada', 'cancelada']),
  ],
  updateAppointment
);

// DELETE /appointments/:id
appointmentRouter.delete('/:id', deleteAppointment);

// PATCH /appointments/:id/status
appointmentRouter.patch(
  '/:id/status',
  [
    param('id').isInt(),
    body('status').isIn(['pendiente', 'confirmada', 'cancelada']),
  ],
  updateStatus
);

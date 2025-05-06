/**
 * Controlador que gestiona la lógica para crear, obtener, eliminar y actualizar citas.
 */

import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { openDb } from '../database/db';

// Obtiene todas las citas
export async function getAppointments(req: Request, res: Response) {
  try {
    const db = await openDb();
    const appointments = await db.all('SELECT * FROM appointments');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener citas', error });
  }
}

// Crea una nueva cita
export async function createAppointment(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { patientName, doctorName, appointmentDate, reason } = req.body;

  try {
    const db = await openDb();
    await db.run(
      'INSERT INTO appointments (patientName, doctorName, appointmentDate, reason, status) VALUES (?, ?, ?, ?, ?)',
      [patientName, doctorName, appointmentDate, reason, 'pendiente']
    );
    res.status(201).json({ message: 'Cita creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cita', error });
  }
}

//Actualiza una cita
export async function updateAppointment(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { id } = req.params;
  const { patientName, doctorName, appointmentDate, reason, status } = req.body;

  try {
    const db = await openDb();
    await db.run(
      'UPDATE appointments SET patientName = ?, doctorName = ?, appointmentDate = ?, reason = ?, status = ? WHERE id = ?',
      [patientName, doctorName, appointmentDate, reason, status, id]
    );
    res.json({ message: 'Cita actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cita', error });
  }
}

// Elimina una cita por ID
export async function deleteAppointment(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const db = await openDb();
    await db.run('DELETE FROM appointments WHERE id = ?', [id]);
    res.json({ message: 'Cita eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cita', error });
  }
}

//Actualiza el estado de una cita
export async function updateStatus(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { id } = req.params;
  const { status } = req.body;

  try {
    const db = await openDb();
    await db.run('UPDATE appointments SET status = ? WHERE id = ?', [status, id]);
    res.json({ message: 'Estado de cita actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado de cita', error });
  }
}

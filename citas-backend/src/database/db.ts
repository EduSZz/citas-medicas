/**
 * Inicializa y exporta una conexión a la base de datos SQLite.
 * Si no existe la tabla de citas, la crea automáticamente.
 */

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  const db = await open({
    filename: './src/database/appointments.db',
    driver: sqlite3.Database
  });

 // Crea la tabla si no existe
  await db.exec(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patientName TEXT NOT NULL,
      doctorName TEXT NOT NULL,
      appointmentDate TEXT NOT NULL,
      reason TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pendiente',
      createdAt TEXT DEFAULT (datetime('now'))
    )
  `);

  return db;
}

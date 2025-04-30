import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  const db = await open({
    filename: './src/database/appointments.db',
    driver: sqlite3.Database
  });

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

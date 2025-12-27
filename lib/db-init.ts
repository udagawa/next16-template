import { openDB } from './db';

let databaseInitialized = false;

export async function initDB() {
  if (databaseInitialized) {
    return;
  }
  let db = null;
  try {
    db = await openDB();

    // TODO: setup db

  } catch (error) {
    console.error('Failed to initialize database:', error);
  } finally {
    if (db) {
      await db.close();
      databaseInitialized = true;
    }
  }
}

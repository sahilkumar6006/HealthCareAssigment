import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const databaseName = 'HealthCareDB.db';
const databaseLocation = 'default';

/**
 * Opens the database and returns the connection object.
 * @returns {Promise<SQLite.SQLiteDatabase>} 
 */
export const getDBConnection = async () => {
    let db;
    try {
        db = await SQLite.openDatabase({
            name: databaseName,
            location: databaseLocation,
        });
        console.log('Database opened successfully.');
    } catch (error) {
        console.error('Error opening database:', error);
        throw new Error('Database connection failed.');
    }
    return db;
};

/**
 * Creates the necessary tables for the application.
 * @param {SQLite.SQLiteDatabase} db The database connection object.
 */
export const createTables = async (db: SQLite.SQLiteDatabase) => {
    const userTableQuery = `
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    const healthDataQuery = `
    CREATE TABLE IF NOT EXISTS HealthRecords (
      record_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      measurement_type TEXT NOT NULL, 
      value REAL NOT NULL, 
      record_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES Users(id)
    );
  `;

    try {
        await db.executeSql(userTableQuery);
        await db.executeSql(healthDataQuery);
        console.log('Tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
        throw new Error('Table creation failed.');
    }
};

/**
 * Initializes the database connection and creates tables if they don't exist.
 * @returns {Promise<SQLite.SQLiteDatabase>} The initialized database connection.
 */
export const initializeDB = async () => {
    const db = await getDBConnection();
    await createTables(db);
    return db;
};

// --- Example CRUD Functions (Optional, but useful to have here) ---

export const insertUser = async (db: SQLite.SQLiteDatabase, name: string, email: string) => {
    const insertQuery = `INSERT INTO Users (name, email) VALUES (?, ?);`;
    const values = [name, email];
    try {
        const [result] = await db.executeSql(insertQuery, values);
        console.log(`User inserted with ID: ${result.insertId}`);
        return result.insertId;
    } catch (error) {
        console.error('Error inserting user:', error);
    }
};

export const getUsers = async (db: SQLite.SQLiteDatabase) => {
    const selectQuery = 'SELECT id, name, email FROM Users;';
    try {
        const [results] = await db.executeSql(selectQuery);
        const users = [];
        const len = results.rows.length;
        for (let i = 0; i < len; i++) {
            users.push(results.rows.item(i));
        }
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
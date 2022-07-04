import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password_ebytr',
    database: 'Ebytr',
});

export default connection;
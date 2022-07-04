import IUser from '../../interfaces/user.interface';
import connection from './connection';

export default {
    async findAll() {
        const query = `SELECT id, first_name AS firstName,
        last_name AS lastName,
        admin,
        email
        FROM Ebytr.Users`;
        const [users] = await connection.execute(query);
        return users as IUser[];
    },

    async findByPk(id: string): Promise<IUser[]> {
        const query = `SELECT id,
        first_name AS firstName,
        last_name AS lastName,
        admin,
        email,
        password
        FROM Ebytr.Users WHERE id=?`;
        const [user] = await connection.execute(query, [id]);
        return user as IUser[];
    },

    async findByEmail(email: string): Promise<IUser[] | void[]> {
        const query = `
        SELECT id, first_name AS firstName,
        last_name AS lastName,
        admin,
        email,
        password
        FROM Ebytr.Users WHERE email=?`;
        const [user] = await connection.execute(query, [email]);
        return user as IUser[];
    },

    async create({id, firstName, lastName, email, password, admin}: IUser): Promise<IUser[]> {
        const query = `INSERT INTO Ebytr.Users (id, first_name, last_name, email, password, admin)
                       VALUES (?, ?, ?, ?, ?, ?)`;
        const [newUser] = await connection.execute(query, [id, firstName, lastName, email, password, admin]);
        return newUser as IUser[];
    }
};
import IUser from '../../interfaces/user.interface';
import connection from './connection';

export default {
    async findAll() {
        const query = 'SELECT * FROM Ebytr.users';
        const [users] = await connection.execute(query);
        return users as IUser[];
    },

    async findByPk(id: string): Promise<IUser[]> {
        const query = 'SELECT * FROM Ebytr.users WHERE id=?';
        const [user] = await connection.execute(query, [id]);
        return user as IUser[];
    },

    async findByEmail(email: string): Promise<IUser[] | void[]> {
        const query = 'SELECT * FROM Ebytr.users WHERE email=?';
        const [user] = await connection.execute(query, [email]);
        return user as IUser[];
    },

    async create({id, firstName, lastName, email, password, admin}: IUser): Promise<IUser[]> {
        const query = `INSERT INTO Ebytr.users (id, first_name, last_name, email, password, admin)
                       VALUES (?, ?, ?, ?, ?, ?)`;
        const [newUser] = await connection.execute(query, [id, firstName, lastName, email, password, admin]);
        return newUser as IUser[];
    }
};
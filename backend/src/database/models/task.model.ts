import { ResultSetHeader } from 'mysql2';
import ITask from '../../interfaces/task.interface';
import connection from './connection';

export default {
    async findAll(): Promise<ITask[] | void[]> {
        const query = `
        SELECT id, title, status,
        user_id AS userId, content,
        created_at AS createdAt
        FROM Ebytr.Tasks`;
        const [tasks] = await connection.execute(query);
        return tasks as ITask[];
    },

    async findByFk(userId: string):Promise<ITask[] | void[]> {
        const query = `
        SELECT id, title, status,
        user_id AS userId, content,
        created_at AS createdAt
        FROM Ebytr.Tasks
        WHERE user_id=?`;
        const [task] = await connection.execute(query, [userId]);
        return task as ITask[];
    },

    async findById(id: string):Promise<ITask[] | void[]> {
        const query = `
        SELECT id, title, status,
        user_id AS userId, content,
        created_at AS createdAt
        FROM Ebytr.Tasks
        WHERE id=?`;
        const [task] = await connection.execute(query, [id]);
        return task as ITask[];
    },
  
    async create({ id, title, status, content, userId }: Omit<ITask, 'createdAt'>): Promise<void> {
        const query = `INSERT INTO Ebytr.Tasks (id, title, status, content, user_id)
                       VALUES (?, ?, ?, ?, ?)`;
        await connection.execute<ResultSetHeader>(query, [id, title, status, content, userId]);
    },

    async update({title, status, content ,id}: Omit<ITask, 'createdAt' | 'userId'>): Promise<void> {
        const query = 'UPDATE Ebytr.Tasks SET title=?, status=?, content=? WHERE id=?';
        await connection.execute(query, [title, status, content, id]);
    },

    async uptadeStatus(id: string, status: number): Promise<void> {
        const query = 'UPDATE Ebytr.Tasks SET status=? WHERE id=?';
        await connection.execute(query, [status, id]);
    },

    async delete(id: string): Promise<void> {
        const query = 'DELETE FROM Ebytr.Tasks WHERE id=?';
        await connection.execute(query, [id]);
    }
};
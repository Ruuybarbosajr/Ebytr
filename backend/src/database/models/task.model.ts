import { ResultSetHeader } from 'mysql2';
import ITask from '../../interfaces/task.interface';
import connection from './connection';

export default {
    async findAll(): Promise<ITask[] | void[]> {
        const query = 'SELECT * FROM Ebytr.Tasks';
        const [tasks] = await connection.execute(query);
        return tasks as ITask[];
    },

    async findByFk(userId: string):Promise<ITask[] | void[]> {
        const query = 'SELECT * FROM Ebytr.Tasks WHERE user_id=?';
        const [task] = await connection.execute(query, [userId]);
        return task as ITask[];
    },

    async findById(id: string):Promise<ITask[] | void[]> {
        const query = 'SELECT * FROM Ebytr.Tasks WHERE id=?';
        const [task] = await connection.execute(query, [id]);
        return task as ITask[];
    },
  
    async create({ id, title, status, content, userId }: Omit<ITask, 'createdAt'>): Promise<string> {
        const query = `INSERT INTO Ebytr.Tasks (id, title, status, content, user_id)
                       VALUES (?, ?, ?, ?, ?)`;
        const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [id, title, status, content, userId]);

        return insertId as unknown as string;
    },

    async update({title, status, content ,id}: Omit<ITask, 'createdAt' | 'userId'>): Promise<void> {
        const query = 'UPDATE Ebytr.Tasks SET title=?, status=?, content=? WHERE id=?';
        await connection.execute(query, [title, status, content, id]);
    }
};
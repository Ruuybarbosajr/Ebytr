import ITask from '../../interfaces/task.interface';
import connection from './connection';

export default {
    async findAll(): Promise<ITask[] | void[]> {
        const query = 'SELECT * FROM Ebytr.Task';
        const [tasks] = await connection.execute(query);
        return tasks as ITask[];
    },

    async findByPk(id: string):Promise<ITask[] | void[]> {
        const query = 'SELECT * FROM Ebytr.Task WHERE id=?';
        const [task] = await connection.execute(query, [id]);
        return task as ITask[];
    },

    async create({ id, title, priority, userId }: ITask): Promise<void> {
        const query = `INSERT INTO Ebytr.Task (id, title, priority, user_id)
        VALUES (?, ?, ?, ?)`;
        await connection.execute(query, [id, title, priority, userId]);
    },

    async update({title, priority, id}: ITask): Promise<void> {
        const query = 'UPDATE Ebytr.Task SET title=?, priority=?, WHERE id=?';
        await connection.execute(query, [title, priority, id]);
    }
};
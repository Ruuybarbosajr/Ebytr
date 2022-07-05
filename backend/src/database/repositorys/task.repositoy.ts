import ITask from '../../interfaces/task.interface';
import taskModel from '../models/task.model';

export default {
    async getAll(): Promise<ITask[] | void[]> { return taskModel.findAll(); },

    async findByFk(userId: string): Promise<ITask[] | void[]> { return taskModel.findByFk(userId); },

    async findById(id: string): Promise<ITask[] | void[]> { return taskModel.findById(id); },

    async create(newTask: Omit<ITask, 'createdAt'>): Promise<void> { await taskModel.create(newTask); },

    async update(task: Omit<ITask, 'createdAt' | 'userId'>): Promise<Omit<ITask, 'createdAt' | 'userId'>> {
        await taskModel.update(task);
        return task;
    },

    async updateStatus(id: string, status: number): Promise<void> { await taskModel.uptadeStatus(id, status); },

    async delete(id: string): Promise<void> { await taskModel.delete(id); }
};
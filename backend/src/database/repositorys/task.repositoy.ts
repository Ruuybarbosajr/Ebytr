import ITask from '../../interfaces/task.interface';
import taskModel from '../models/task.model';

export default {
    async getAll(): Promise<ITask[] | void[]> { return taskModel.findAll(); },

    async findById(id: string): Promise<ITask[] | void[]> { return taskModel.findByPk(id); },

    async create(newTask: ITask): Promise<ITask> { await taskModel.create(newTask); return newTask; },

    async update(task: ITask): Promise<ITask> { await taskModel.update(task); return task; }
};
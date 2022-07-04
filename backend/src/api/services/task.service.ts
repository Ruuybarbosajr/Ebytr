import taskRepositoy from '../../database/repositorys/task.repositoy';
import userRepository from '../../database/repositorys/user.repository';
import ITask from '../../interfaces/task.interface';
import generateError from '../../utils/generate.error';
import { v4 as uuidv4 } from 'uuid';

export default {
    async getAll(): Promise<ITask[] | void[]> { return taskRepositoy.getAll(); },

    async findByFk(userId: string): Promise<ITask[] | void[]> {

        const [find] = await userRepository.findById(userId);
        if (!find) generateError('User not found', 404);

        const task = await taskRepositoy.findByFk(userId);
        return task;
    },

    async create(newTask: Omit<ITask, 'id' | 'createdAt'>, isAdm: boolean): Promise<ITask> {
        if (!isAdm) generateError('unauthorized', 401);
        
        const [user] = await userRepository.findById(newTask.userId);

        if (!user) generateError('User not found', 404);
        
        const id = await taskRepositoy.create({ id: uuidv4(),...newTask });
        const [task] = await taskRepositoy.findById(id);
        
        return task as ITask;
    },

    async update({id, status, content, userId, createdAt,title }: ITask, isAdm: boolean): Promise<ITask> {
        if (!isAdm) generateError('unauthorized', 401);

        const [find] = await taskRepositoy.findById(id as string);
        if (!find) generateError('Task not found', 404);

        const task = await taskRepositoy.update({ id, status, content, title });
        return {
            ...task,
            createdAt,
            userId
        };
    }
};

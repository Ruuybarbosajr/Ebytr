import { NextFunction, Request, Response } from 'express';
import taskRepositoy from '../../database/repositorys/task.repositoy';
import RequestWithUser from '../../interfaces/request.interface';
import ITask from '../../interfaces/task.interface';
import { IUser } from '../../interfaces/user.interface';
import taskService from '../services/task.service';

export default {
    async getAll(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<ITask[]> | void> {
        const { admin } = req.user as IUser;
        try {
            const tasks = await taskService.getAll(admin);
            return res.status(200).json({ tasks });
        } catch (error) {
            next(error);
        }
    },

    async findByFk(req: Request, res: Response, next: NextFunction): Promise<Response<ITask[]> | void> {
        const { id } = req.params;
        try {
            const tasks = await taskService.findByFk(id);
            return res.status(200).json({ tasks });
        } catch (error) {
            next(error);
        }
    },

    async create(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<ITask> | void> {
        const { title, userId, status, content } = req.body as ITask;
        const { admin } = req.user as IUser;
        try {
            const task = await taskService.create({ title, userId, status, content }, admin);
            return res.status(201).json({ task });
        } catch (error) {
            next(error);
        }
    },

    async update(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<ITask> | void> {
        const { title, userId, status, content, createdAt } = req.body as ITask;
        const { id } = req.params;
        const { admin } = req.user as IUser;
        try {
            const task = await taskService.update({ id, title, userId, status, content, createdAt}, admin);
            return res.status(200).json({ task });
        } catch (error) {
            next(error);
        }
    },

    async updateStatus(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<ITask> | void> {
        const task = req.body as ITask;
        const { id, admin } = req.user as IUser;
        try {
            await taskService.updateStatus({ id: req.params.id, ...task }, id as string, admin);
            return res.status(200).json({ task });
        } catch (error) {
            next(error);
        }
    },

    async delete(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<void> | void> {
        const { id } = req.params;
        try {
            await taskService.delete(id, req.user as IUser);
            return res.status(204).json({ id });
        } catch (error) {
            next(error);
        }
    }
};
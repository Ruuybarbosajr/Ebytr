import { NextFunction, Request, Response } from 'express';
import RequestWithUser from '../../interfaces/request.interface';
import { IUser } from '../../interfaces/user.interface';
import userService from '../services/user.service';

export default {
    async getAll(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<IUser[] | void[]> | void> {
        try {
            const users = await userService.getAll();
            return res.status(200).json({users: users});
        } catch (error) {
            next(error);
        }
    },

    async create(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response<IUser> | void> {
        const { admin: isAdm } = req.user as IUser;

        const { firstName, lastName, email, admin, password } = req.body as Omit<IUser, 'id'>;
        try {
            const newUser = await userService.create({firstName, lastName, email, admin, password}, isAdm);
            return res.status(201).json({ user: newUser });
        } catch (error) {
            next(error);
        }
    },

    async findById(req: Request, res: Response, next: NextFunction): Promise<Response<IUser> | void> {
        const { id } = req.params;
        console.log(id);
        try {
            const user = await userService.findById(id);
            return res.status(200).json({ user });
        } catch (error) {
            next(error);
        }
    }
};
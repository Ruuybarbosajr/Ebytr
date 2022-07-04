import { NextFunction, Request, Response } from 'express';
import IUser from '../../interfaces/user.interface';
import userService from '../services/user.service';

export default {
    async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response<IUser[] | void[]> | void> {
        try {
            const users = await userService.getAll();
            return res.status(200).json({users: users});
        } catch (error) {
            next(error);
        }
    },

    async create(req: Request, res: Response, next: NextFunction): Promise<Response<IUser> | void> {
        const {id, firstName, lastName, email, admin, password } = req.body as IUser;
        try {
            const newUser = await userService.create({id, firstName, lastName, email, admin, password});
            return res.status(201).json({user: newUser});
        } catch (error) {
            next(error);
        }
    }
};
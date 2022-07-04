import { NextFunction, Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/user.interface';
import loginService from '../services/login.service';

export default {
    async login(req: Request, res: Response, next: NextFunction): Promise<Response<string> | void> {
        const { email, password } = req.body as IUserLogin;
        try {
            const token = await loginService.login({email, password});
            return res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    }
};
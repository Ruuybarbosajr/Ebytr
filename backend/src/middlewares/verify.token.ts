import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import RequestWithUser from '../interfaces/request.interface';
import { IUser } from '../interfaces/user.interface';
import generateError from '../utils/generate.error';
import { decode } from '../utils/jwt';

export default (req: RequestWithUser, _res: Response, next: NextFunction ) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) next(generateError('token not found', 404));

        const { data } = decode(authorization as string) as JwtPayload;
        req.user = data as IUser;
        next();

    } catch (error) {
        next(error);
    }
};
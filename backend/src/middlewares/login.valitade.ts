import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import generateError from '../utils/generate.error';

const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(50).required()
});

export default (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) return next(generateError(error.message, 400));
    next();
};
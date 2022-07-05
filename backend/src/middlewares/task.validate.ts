import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import generateError from '../utils/generate.error';

const schema = joi.object({
    title: joi.string().min(5).max(50).required(),
    status: joi.number().min(1).max(3).required(),
    userId: joi.string().min(1).required(),
    content: joi.string().min(5).max(255).required()
});

export default (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) return next(generateError(error.message, 400));
    next();
};
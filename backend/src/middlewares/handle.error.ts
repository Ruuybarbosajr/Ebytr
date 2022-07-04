import { NextFunction, Request, Response } from 'express';
import handleError from '../interfaces/error.interface';

export default (error: handleError, _req: Request, res: Response, _next: NextFunction) => {
    if (error.status) return res.status(error.status).json({message: error.message});
    res.status(500).json({message: error.message});
};
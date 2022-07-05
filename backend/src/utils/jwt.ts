import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';
import dotenv from 'dotenv';

dotenv.config();

function encode(payload: Omit<IUser, 'password'>) {

    const jwtConfig: jwt.SignOptions = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };
    const token = jwt.sign({ data: payload}, process.env.JWT_SECRET as jwt.Secret, jwtConfig);
    return token;
}

function decode(token: string): Omit<IUser, 'password'> {
    const user = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    return user as Omit<IUser, 'password'>;
}

export { encode, decode };
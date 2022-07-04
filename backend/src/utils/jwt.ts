import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

function encode(payload: Omit<IUser, 'password'>) {

    const jwtConfig: jwt.SignOptions = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };
    const token = jwt.sign({ data: payload}, 'senhasupersecretahihi', jwtConfig);
    return token;
}

function decode(token: string): Omit<IUser, 'password'> {
    const user = jwt.verify(token, 'senhasupersecretahihi');
    return user as Omit<IUser, 'password'>;
}

export { encode, decode };
import userRepository from '../../database/repositorys/user.repository';
import { IUser, IUserLogin } from '../../interfaces/user.interface';
import generateError from '../../utils/generate.error';
import { encode } from '../../utils/jwt';

export default {
    async login(dataLogin: IUserLogin): Promise<string> {

        const [user] = await userRepository.findByEmail(dataLogin.email);
        if (!user) generateError('Email or password invalid', 400);

        const { id, firstName, lastName, email, admin, password } = user as IUser;
        if (password !== dataLogin.password) generateError('Email or password invalid', 400);

        const token = encode({ id, firstName, lastName, email, admin});

        return token;
    }
};
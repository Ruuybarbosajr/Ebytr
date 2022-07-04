import userRepository from '../../database/repositorys/user.repository';
import IUser from '../../interfaces/user.interface';
import generateError from '../../utils/generate.error';

export default {
    async getAll(): Promise<IUser[] | void[]> { return userRepository.getAll(); },

    async find(id: string): Promise<IUser[] | void[]> {
        const user = await userRepository.findById(id);
        if (!user.length) generateError('User not found', 404);
        return user;
    },

    async create(newUser: IUser): Promise<IUser> {
        const find = await userRepository.findByEmail(newUser.email);
        if (find.length) generateError('User already exists', 400);
        const user = await userRepository.create(newUser);
        return user;
    },
};
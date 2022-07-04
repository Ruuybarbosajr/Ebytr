import userRepository from '../../database/repositorys/user.repository';
import { IUser } from '../../interfaces/user.interface';
import generateError from '../../utils/generate.error';

export default {
    async getAll(): Promise<IUser[] | void[]> { return userRepository.getAll(); },

    async findById(id: string): Promise<Omit<IUser, 'password'> | void> {
        const [user] = await userRepository.findById(id);

        if (!user) generateError('User not found', 404);
        
        const { firstName, admin, email, lastName } = user as Omit<IUser, 'password'>;
        return {
            id,
            firstName,
            lastName,
            admin,
            email
        };
    },

    async create(newUser: IUser): Promise<Omit<IUser, 'password'>> {
        const find = await userRepository.findByEmail(newUser.email);
        
        if (find.length) generateError('User already exists', 400);
        const user = await userRepository.create(newUser);
 
        const { firstName, admin, email, lastName } = user as Omit<IUser, 'password'>;
        return {
            id: newUser.id,
            firstName,
            lastName,
            admin,
            email
        };
    },
};
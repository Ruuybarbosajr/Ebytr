import userRepository from '../../database/repositorys/user.repository';
import { IUser } from '../../interfaces/user.interface';
import generateError from '../../utils/generate.error';
import { v4 as uuidv4 } from 'uuid';

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

    async create(newUser: Omit<IUser, 'id'>): Promise<Omit<IUser, 'password'>> {
        const [find] = await userRepository.findByEmail(newUser.email);

        if (!find) generateError('User already exists', 400);
        const user = await userRepository.create({ id: uuidv4(), ...newUser });
 
        const { id, firstName, admin, email, lastName } = user as Omit<IUser, 'password'>;
        
        return {
            id,
            firstName,
            lastName,
            admin,
            email
        };
    },
};
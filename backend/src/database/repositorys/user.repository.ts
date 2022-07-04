import IUser from '../../interfaces/user.interface';
import userModel from '../models/user.model';

export default {
    async getAll(): Promise<IUser[] | void[]>  { return userModel.findAll(); },

    async findById(id: string): Promise<IUser[] | void[]> { return userModel.findByPk(id); },

    async findByEmail(email: string): Promise<IUser[] | void[]> { return userModel.findByEmail(email); },

    async create(newUser: IUser): Promise<IUser> { await userModel.create(newUser); return newUser; },
};
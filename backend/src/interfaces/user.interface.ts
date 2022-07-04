interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  admin: boolean;
  email: string;
  password: string;
}

export default IUser;
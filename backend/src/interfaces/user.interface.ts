interface IUserLogin {
  email: string;
  password: string;
}

interface IUser extends IUserLogin{
  id?: string;
  admin: boolean;
  firstName: string,
  lastName: string
}

export { IUser, IUserLogin };
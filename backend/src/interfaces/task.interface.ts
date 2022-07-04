interface ITask {
  id?: string;
  title: string;
  status: number;
  userId: string;
  content: string;
  createdAt: Date;
}

export default ITask;
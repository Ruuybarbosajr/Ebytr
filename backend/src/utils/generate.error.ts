export default (message: string, status: number): never => {
    const error = {message, status};
    throw error;
};
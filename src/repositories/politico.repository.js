import Politico from '../models/Politico.model';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await Politico.find({}).populate('news');
        return politicos;
    } catch (error) { throw new AppError() }
}
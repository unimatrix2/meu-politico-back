import * as politicoRepo from '../repositories/politico.repository';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await politicoRepo.getAll();
        return politicos;
    } catch (error) { throw new AppError({ message: error.message, type: 'Político - GetAll Method', status: 502 }) };
}
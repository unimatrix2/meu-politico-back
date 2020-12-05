import * as politicoRepo from '../repositories/politico.repository';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await politicoRepo.getAll();
        return politicos;
    } catch (error) { throw new AppError({ message: error.message, type: 'Político - GetAll Method', status: 502 }) };
}

export const getOne = async (id) => {
    try {
        const politico = await politicoRepo.getOne(id);
        return politico;
    } catch (error) { throw new AppError({ message: error.message, type: 'Político - GetOne Method', status: 502 }) };
}

export const create = async (newObject) => {
    const newPolitico =  await politicoRepo.create(newObject);
    return newPolitico;
}

export const updateOne = async (updateObject) => {
    try {
        const updatedPolitico = await politicoRepo.updateOne(updateObject);
        return updatedPolitico;
    } catch (error) {
      throw new ApplicationError({ message: error.message,type: 'Político - UpdateOne Method', status: 504 });
    }
  }

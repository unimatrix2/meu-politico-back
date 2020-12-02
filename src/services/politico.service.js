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

export const create = async (newObject, id) => {
    const newPolitico =  await politicoRepo.create(newObject, id);
    return newPolitico;
}

export const updateOne = async (updateObject, id) => {
    try {
        const updatedNoticia = await politicoRepo.updateOne(updateObject, id);
        return updatedNoticia;
    } catch (error) {
      throw new ApplicationError({ message: error.message,type: 'Político - UpdateOne Method', status: 504 });
    }
  }

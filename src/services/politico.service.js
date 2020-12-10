import * as politicoRepository from '../repositories/politico.repository';
import * as AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await politicoRepository.getAll();
        return politicos;
    } catch (error) { throw new AppError({ message: error.message, type: 'Político - GetAll Method', status: 502 }) };
}

export const getOne = async (id) => {
    try {
        const politico = await politicoRepository.getOne(id);
        return politico;
    } catch (error) { throw new AppError({ message: error.message, type: 'Político - GetOne Method', status: 502 }) };
}

export const create = async (newObject, id) => {
    const newPolitico =  await politicoRepository.create(newObject, id);
    return newPolitico;
}

export const updateOne = async (updateObject) => {
    try {
        const updatedPolitico = await politicoRepository.updateOne(updateObject);
        return updatedPolitico;
    } catch (error) {
      throw new AppError({ message: error.message,type: 'Político - UpdateOne Method', status: 504 });
    }
  }

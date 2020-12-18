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
    } catch (error) { throw new AppError({ message: error.message, type: 'Político-GetOne', status: 502 }) };
}

export const create = async (newObject, id) => {
    try {
        const newPolitico =  await politicoRepository.create(newObject, id);
        return newPolitico;
    } catch (error) { throw new AppError({ message: error.message, type: 'Politico-Criar', status: 500 }) }
}

export const updateOne = async (updateObject, id) => {
    try {
        const politicoToUpdate = {...updateObject}
        const updatedPolitico = await politicoRepository.updateOne(politicoToUpdate, id);
        return updatedPolitico;
    } catch (error) { throw new AppError({ message: error.message,type: 'Politico-UpdateOne-Method', status: 500 }) }
}

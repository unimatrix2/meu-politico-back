import * as politicoRepository from '../repositories/politico.repository';
import AppError from '../errors/AppError';

const verifyExistingPolitico = async (fullName, officialInfoURL) => {
    const politicoInfo = await politicoRepository.findPolitico(fullName, officialInfoURL);
    if (politicoInfo.fullName || politicoInfo.officialInfoURL) { throw new AppError({ message: 'Político já existe', type: 'Politico-Existe', status: 400 }) }; 
}

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
    try {
        const politicoExists = await verifyExistingPolitico(newObject.fullName, newObject.officialInfoURL);
        if (!politicoExists){
            const newPolitico =  await politicoRepository.create(newObject, id);
            return newPolitico;
        }
    } catch (error) { throw new AppError(error) }
    
}

export const updateOne = async (updateObject, id) => {
    try {
        const politicoToUpdate = {...updateObject}
        const updatedPolitico = await politicoRepository.updateOne(politicoToUpdate, id);
        return updatedPolitico;
    } catch (error) { throw new AppError({ message: error.message,type: 'Politico-UpdateOne-Method', status: 500 }) }
  }

import { Politico } from '../models/Politico.model';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await Politico.find({});
        return politicos;
    } catch (error) { throw new AppError() }
}

export const getOne = async (id) => {
  try {
    const politico = await Politico.findById(id).populate('news');
    return politico;
  } catch (error) { throw new AppError({ message: error.message, type: 'Politico-GetOne' }) }
}

export const searchReturnID = async (string) => {
  try {
    const politico = await Politico.findOne({ fullName: string });
    return politico._id;
  } catch (error) {
    throw new AppError({ message: error.message, type: 'Politico-Nao-Existe', status: 400 })
  }

}

export const create = async (newObject, id) => {
  try{ 
    const newPolitico = new Politico({ ...newObject, owner: id });

    await newPolitico.save();
  
    return newPolitico;
  } catch (error) { throw new AppError({ message: error.message, type: 'Politico-Criar', status: 409 }) };
}

export const updateOne = async (updateObject, id) => {
  try {
    const updatedPolitico = await Politico.findByIdAndUpdate(
      id,
      updateObject,
      { new: true, useFindAndModify: false },
    );
  
    return updatedPolitico;
  } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Editar', status: 500 }) }
}

export const search = async string => {
  try {
      const politicos = await Politico.find({ fullName: { $regex: string, $options: 'i' } });
      return politicos;
  } catch (error) { throw new AppError({ message: error.message, type: 'Politico-Busca', status: 500 }) }
}
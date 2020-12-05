import { Politico } from '../models/Politico.model';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const politicos = await Politico.find({});
        return politicos;
    } catch (error) { throw new AppError() }
}

export const getOne = async (id) => {
  const politico = await Politico.findById(id);

  return politico;
}

export const create = async (newObject) => {
  const newPolitico = new Politico(newObject);

  await newPolitico.save();

  return newPolitico;
}

export const updateOne = async (updateObject, id) => {
  const updatedPolitico = await Politico.findByIdAndUpdate(
    id,
    updateObject,
    { new: true, useFindAndModify: false },
  );

  return updatedPolitico;
}
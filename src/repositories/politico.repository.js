import { Politico } from '../models/Politico.model';
import AppError from '../errors/AppError';

export const findPolitico = async (fullName, officialInfoURL) => {
  const politicoName = await Politico.findOne({ fullName }).select('fullName -_id');
  const politicoInfoURL = await Politico.findOne({ officialInfoURL }).select('officialInfoURL -_id');
  return ({'fullName' : politicoName, 'officialInfoURL' : politicoInfoURL});
}

export const getAll = async () => {
    try {
        const politicos = await Politico.find({});
        return politicos;
    } catch (error) { throw new AppError() }
}

export const getOne = async (id) => {
  const politico = await Politico.findById(id).populate("news");

  return politico;
}

export const searchReturnID = async (string) => {
  try {
    const politico = await Politico.findOne({ fullName: string });
    return politico._id;
  } catch (error) {
    throw new AppError({ message: error.message, type: 'Politico-Search' })
  }

}

export const create = async (newObject, id) => {
  try{ 
    const newPolitico = new Politico({ ...newObject, owner: id });

    await newPolitico.save();
  
    return newPolitico;
  } catch (error) { throw new AppError({ message: error.message, type: 'Político - Create Method', status: 409 }) };
}

export const updateOne = async (updateObject, id) => {
  const updatedPolitico = await Politico.findByIdAndUpdate(
    id,
    updateObject,
    { new: true, useFindAndModify: false },
  );

  return updatedPolitico;
}

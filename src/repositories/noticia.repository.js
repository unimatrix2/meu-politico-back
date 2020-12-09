import { Noticia } from '../models/Noticia.model';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const noticias = await Noticia.find({});
        return noticias;
    } catch (error) { throw new AppError() }
}

export const getOne = async (id) => {
  const noticia = await Noticia.findById(id);

  return noticia;
}

export const create = async (newObject) => {
  const newNoticia = new Noticia(newObject);

  await newNoticia.save();

  return newNoticia;
}

export const updateOne = async (updateObject, id) => {
  const updatedNoticia = await Noticia.findByIdAndUpdate(
    id,
    updateObject,
    { new: true, useFindAndModify: false },
  );

  return updatedNoticia;
}
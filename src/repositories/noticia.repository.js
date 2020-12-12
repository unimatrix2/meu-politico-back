import { Noticia } from '../models/Noticia.model';
import AppError from '../errors/AppError';

export const getAll = async () => {
    try {
        const noticias = await Noticia.find({});
        return noticias;
    } catch (error) { throw new AppError(error) }
}

export const search = async (string) => {
    try {
        const noticias = await Noticia.find({ headline: string });
        return noticias;
    } catch (error) { throw new AppError(error) }
}

export const getOne = async (id) => {
  const noticia = await Noticia.findById(id);

  return noticia;
}

export const create = async (newObject, politicos, sources, id) => {
    try {
        const newNoticia = new Noticia({ ...newObject, politicos: politicos, owner: id, sources: sources });

        await newNoticia.save();
      
        return newNoticia;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Create', status: 409 }) }

}

export const updateOne = async (updateObject, id) => {
  const updatedNoticia = await Noticia.findByIdAndUpdate(
    id,
    updateObject,
    { new: true, useFindAndModify: false },
  );

  return updatedNoticia;
}
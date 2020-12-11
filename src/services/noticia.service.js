import * as noticiaRepository from '../repositories/noticia.repository';
import AppError from '../errors/AppError';

export const getOne = async (id) => {
    try {
        const noticia = await noticiaRepository.getOne(id);
        return noticia;
    } catch (error) { throw new AppError({ message: error.message, type: 'Notícia - GetOne Method', status: 502 }) };
}

export const search = async (string) => {
    try {
        const noticias = await noticiaRepository.search(string);
        return noticias;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Search' }) }
} 

export const create = async (newObject) => {
  const newNoticia =  await noticiaRepository.create(newObject);
  return newNoticia;
}

export const updateOne = async (updateObject) => {
  try {
      const updatedNoticia = await noticiaRepository.updateOne(updateObject);
      return updatedNoticia;
  } catch (error) {
    throw new ApplicationError({ message: error.message,type: 'Político - UpdateOne Method', status: 504 });
  }
}

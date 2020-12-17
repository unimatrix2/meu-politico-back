import * as noticiaRepository from '../repositories/noticia.repository';
import { searchReturnID } from '../repositories/politico.repository';
import AppError from '../errors/AppError';

export const getOne = async (id) => {
    try {
        const noticia = await noticiaRepository.getOne(id);
        return noticia;
    } catch (error) { throw new AppError({ message: error.message, type: 'Notícia - GetOne Method', status: 500 }) };
}

export const search = async (string) => {
    try {
        const noticias = await noticiaRepository.search(string);
        return noticias;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Busca', status: 500 }) }
} 

export const create = async (newObject, id) => {
    try {
        const politicos = newObject.politicos.split(',').map(politico => searchReturnID(politico))
        const sources = newObject.sources.split(',');
        const politicosArray = await Promise.all(politicos);
        const newNoticia = await noticiaRepository.create(newObject, politicosArray, sources, id);
        return newNoticia;
    } catch (error) {
        throw new AppError(error)
    }
}

export const updateOne = async (updateObject, id) => {
    try {
        const politicos = updateObject.politicos.split(',').map(pol => searchReturnID(pol));
        const politicosArray = await Promise.all(politicos);
        const noticiaToUpdate = {...updateObject, politicos: politicosArray}
        const updatedNoticia = await noticiaRepository.updateOne(noticiaToUpdate, id);
        return updatedNoticia;
    } catch (error) { throw new AppError({ message: error.message,type: 'Noticia-UpdateOne-Method', status: 500 }) }
}

export const userList = async (id) => {
    try {
        const noticias = await noticiaRepository.getUserList(id);
        return noticias;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-UserList-Method', status: 500 }) };
}
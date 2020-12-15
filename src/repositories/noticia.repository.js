import { Noticia } from '../models/Noticia.model';
import { Politico } from '../models/Politico.model';
import AppError from '../errors/AppError';

export const getUserList = async (id) => {
    try {
        const noticias = Noticia.find({ owner: id }).populate('politicos');
        return noticias
    } catch (error) { throw new AppError(error) }
}

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
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Busca', status: 500 }) }
}

export const getOne = async (id) => {
    try {
        const noticia = await Noticia.findById(id);
        return noticia;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Unitaria', status: 500 }) }
}

export const create = async (newObject, politicos, sources, id) => {
    try {
        const newNoticia = new Noticia({ ...newObject, politicos: politicos, owner: id, sources: sources });

        const savedNoticia = await newNoticia.save();
        const politicosToInvolve = politicos.map(politico => Politico.findByIdAndUpdate(politico, { $push: { news: savedNoticia._id } }));
        await Promise.all(politicosToInvolve);
        return savedNoticia;
    } catch (error) { throw new AppError({ message: error.message, type: 'Noticia-Criar', status: 409 }) }

}

export const updateOne = async (updateObject, id) => {
    const updatedNoticia = await Noticia.findByIdAndUpdate(
        id,
        updateObject,
        { new: true, useFindAndModify: false },
     );

  return updatedNoticia;
}
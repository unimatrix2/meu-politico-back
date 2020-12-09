import noticiaRepository from '../repositories/noticia.repository';
import ApplicationError from '../errors/AppError';

class NoticiasService {
  constructor(noticiasRepo) {
    this.noticiaRepository = noticiasRepo;
  }

  async get(id, search) {
    try {
      const noticiasFromDb = await this.noticiaRepository.get(id, search);

      return noticiasFromDb;
    } catch (error) {
      throw new ApplicationError({ message: error.message, type: 'Noticias - Get Method', status: 502 });
    }
  }

  async getOne(id) {
    const noticiaFromDb = await this.noticiaRepository.getOne(id);

    return noticiaFromDb;
  }

  async create(newNoticia, id) {
    await this.noticiaRepository.create(newNoticia, id);
  }

  async updateOne(updateObject, id) {
    try {
      const updatedNoticia = await this.noticiaRepository.updateOne(updateObject, id);

      return updatedNoticia;
    } catch (error) {
      throw new ApplicationError({ message: error.message, status: 504 });
    }
  }
}

export default new NoticiasService(noticiaRepository);
import { Router } from 'express';

import Politico from '../../../models/Politico.model';
import noticiasService from '../../../services/politico.service';
import ApplicationError from '../../../errors/AppError';

const router = Router();

router.get('/list', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { search } = req.query;

    const politicos = await politicoService.get(id, search);

    return res.status(200).json(politicos);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.get('/list/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const noticia = await noticiasService.getOne(id);

    return res.status(200).json(noticia);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const { id } = req.user;
    const newNoticia = req.body;

    await noticiasService.create(newNoticia, id);

    return res.status(201).json();
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.put('/edit/:id', Noticia.validateUpdateParams, async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateObject = projectsMapper.updateOne(req.body);

    const updatedNoticia = await noticiasService.updateOne(updateObject, id);

    return res.status(200).json(updatedNoticia);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});
    
export default router;

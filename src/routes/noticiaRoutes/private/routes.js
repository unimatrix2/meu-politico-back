import { Router } from 'express';

import Noticia from '../../../models/Noticia.model';
import noticiasService from '../../../services/noticia.service';
import ApplicationError from '../../../errors/AppError';

const router = Router();

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

router.put('/edit/:id', async (req, res, next) => {
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

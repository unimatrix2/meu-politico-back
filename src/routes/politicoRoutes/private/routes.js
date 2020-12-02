import { Router } from 'express';

import Politico from '../../../models/Politico.model';
import politicoService from '../../../services/politico.service';
import ApplicationError from '../../../errors/AppError';

const router = Router();

router.post('/create', async (req, res, next) => {
  try {
    const { id } = req.user;
    const newPolitico = req.body;

    await politicoService.create(newPolitico, id);

    return res.status(201).json();
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.put('/edit/:id',  async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateObject = projectsMapper.updateOne(req.body);

    const updatedPolitico = await noticiasService.updateOne(updateObject, id);

    return res.status(200).json(updatedPolitico);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});
    
export default router;

import { Router } from 'express';

import * as politicoService from '../../../services/politico.service';
import AppError from '../../../errors/AppError';

const router = Router();


router.get('/list/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const noticia = await politicoService.getOne(id);

    return res.status(200).json(noticia);
  } catch (error) {
    return next(new AppError(error));
  }
});

// Rotas privadas

router.post('/criar', async (req, res, next) => {
  try {
    const { id } = req.user;
    const newPolitico = req.body;

    await politicoService.create(newPolitico, id);

    return res.status(201).json();
  } catch (error) {
    return next(new AppError(error));
  }
});

router.put('/editar/:id',  async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateObject = req.body;

    const updatedPolitico = await politicoService.updateOne(updateObject, id);

    return res.status(200).json(updatedPolitico);
  } catch (error) {
    return next(new AppError(error));
  }
});
    
export default router;
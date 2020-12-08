import { Router } from 'express';

import * as politicoService from '../../../services/politico.service';
import AppError from '../../../errors/AppError';

const router = Router();

// Rotas privadas

router.post('/criar', async (req, res, next) => {
  try {
    const newPolitico = req.body;

    await politicoService.create(newPolitico);

    return res.status(201).json();
  } catch (error) {
    return next(new AppError(error));
  }
});

router.put('/edit/:id',  async (req, res, next) => {
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
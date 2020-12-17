import { Router } from 'express';

import * as politicoService from '../../../services/politico.service';
import AppError from '../../../errors/AppError';
import { routeProtection } from '../../../middlewares/protectedRoute';

const router = Router();

router.use(routeProtection);

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

router.get('/lista', async (req, res, nxt) => {
  try {
      const politicos = await politicoService.getAll();
      res.status(200).json(politicos);
  } catch (error) { return nxt(new AppError(error)) };
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
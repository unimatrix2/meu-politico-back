import { Router } from 'express';

import politicoPrivate from './private/routes';
import AppError from '../../errors/AppError';
import * as politicoService from '../../services/politico.service';

const router = Router();

router.get('/lista/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const noticia = await politicoService.getOne(id);

    return res.status(200).json(noticia);
  } catch (error) {
    return next(new AppError(error));
  }
});

  router.use('/privado', politicoPrivate);

export default router;
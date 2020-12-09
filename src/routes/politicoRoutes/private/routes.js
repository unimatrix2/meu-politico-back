import { Router } from 'express';

import * as politicoService from '../../../services/politico.service';
import AppError from '../../../errors/AppError';
//import { routeProtection } from '../../middlewares/protectedRoute';

const router = Router();

router.post('/criar', async (req, res, next) => {
  try {
    const newPolitico = req.body;

    await politicoService.create(newPolitico);

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

//router.use(routeProtection);

// router.get('/token', async (req, res, nxt) => {
//   try {
//       const user = await authService.tokenFindUser(req.user.id);
//       res.status(200).json(user);
//   } catch (error) {
//       return nxt(new AppError(error))
//   }
// })

    
export default router;
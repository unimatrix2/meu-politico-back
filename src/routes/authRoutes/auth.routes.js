import { Router } from 'express';
import {validateSignupParams, validateLoginParams} from '../../models/User.model';
import * as authService from '../../services/auth.service';
import AppError from '../../errors/AppError';

const router = Router();

router.post('/registro', validateSignupParams, async (req, res, next) => {
  try {
    const { body } = req;

    await authService.register(body);

    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) { return next(error) }
});

router.post('/acesso', validateLoginParams, async (req, res, next) => {
  try {
    const { body } = req;

    const loggedToken = await authService.authenticateUser(body);

    return res.status(200).json({ token: loggedToken });
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

export default router;
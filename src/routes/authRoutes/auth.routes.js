import { Router } from 'express';

import UserEntity from '../../../models/User.model';
import authService from '../../../services/auth.service';
import ApplicationError from '../../../errors/AppError';

const router = Router();

router.post('/signup', UserEntity.validateSignupParams, async (req, res, next) => {
  try {
    const { body } = req;

    await authService.register(body);

    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.post('/login', UserEntity.validateLoginParams, async (req, res, next) => {
  try {
    const { body } = req;

    const loggedToken = await authService.authenticateUser(body);

    return res.status(200).json({ token: loggedToken });
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

export default router;
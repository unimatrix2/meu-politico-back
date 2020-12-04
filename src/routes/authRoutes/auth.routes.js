import { Router } from 'express';
import {validateSignupParams, validateLoginParams} from '../../models/User.model';
import * as authService from '../../services/auth.service';
import AppError from '../../errors/AppError';
import { verify } from '../../utils/tokenManager'

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

    const loggedUser = await authService.authenticateUser(body);
    return res.status(200).json({ token: loggedUser });
  } catch (error) {
    return next(new AppError(error));
  }
});

router.get('/token', async (req, res, nxt) => {
    const token = req.get('Authorization');
    let decoded;
    try {
        decoded = verify(token);
        console.log(decoded.id)
        const user = await authService.tokenFindUser(decoded.id);
        const returnUser = {
          fullName: `${user.firstName} ${user.lastName}`,
          email: user.email,
          imageURL: user.imageURL,
          role: user.role
        };
        res.status(200).json(returnUser);
    } catch (error) {
        return nxt(new AppError(error))
    }
    return nxt();
})

export default router;
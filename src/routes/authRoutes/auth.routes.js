import { Router } from 'express';
import {validateSignupParams, validateLoginParams} from '../../models/User.model';
import * as authService from '../../services/auth.service';
import AppError from '../../errors/AppError';
import { routeProtection } from '../../middlewares/protectedRoute';

const router = Router();

router.post('/registro', validateSignupParams, async (req, res, next) => {
    try {
        const { body } = req;

        await authService.register(body);

        return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) { return next(new AppError(error)) }
});

router.post('/acesso', validateLoginParams, async (req, res, next) => {
    try {
        const { body } = req;

        const loggedUser = await authService.authenticateUser(body);
        return res.status(200).json({ token: loggedUser });
    } catch (error) { return next(new AppError(error)) };
});

router.use(routeProtection);

router.get('/token', async (req, res, nxt) => {
    try {
        const user = await authService.tokenFindUser(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        return nxt(new AppError(error))
    }
})

router.put('/privado/atualizar', async (req, res, next) => {
    try {
        console.log(req.body, req.user)
    } catch (error) {
    
    }
})

export default router;
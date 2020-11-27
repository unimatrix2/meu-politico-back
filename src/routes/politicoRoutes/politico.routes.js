import { Router } from 'express';

import privateRoutes from './private/routes';
import AppError from '../../errors/AppError';
import * as politicoService from '../../services/politico.service';

const router = Router();

router.get('/politico/list', async (req, res, nxt) => {
    try {
        const politicos = await politicoService.getAll();
        res.status(200).json(politicos);
    } catch (error) { return nxt(new AppError(error)) };
});

export default router;
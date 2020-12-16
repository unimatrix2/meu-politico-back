import { Router } from 'express';

import politicoPrivate from './private/routes';
import AppError from '../../errors/AppError';
import * as politicoService from '../../services/politico.service';

const router = Router();

router.get('/lista', async (req, res, nxt) => {
    try {
        const politicos = await politicoService.getAll();
        res.status(200).json(politicos);
    } catch (error) { return nxt(new AppError(error)) };
});
//query: listar através de um search os políticos
// query: string
// query: começo
// query: fim

  router.use('/privado', politicoPrivate);

export default router;
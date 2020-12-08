import { Router } from 'express';

//import privateRoutes from './private/routes';
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

router.get('/list/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const noticia = await politicoService.getOne(id);
  
      return res.status(200).json(noticia);
    } catch (error) {
      return next(new AppError(error));
    }
  });

export default router;
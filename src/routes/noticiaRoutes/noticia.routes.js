import { Router } from 'express';

import noticiaPrivate from './private/routes';
import { routeProtection } from '../../middlewares/protectedRoute';
import AppError from '../../errors/AppError';
import * as noticiasService from '../../services/noticia.service';

const router = Router();

router.get('/listar', async (req, res, next) => {
    try {
      const { search } = req.query;
  
      const noticias = await noticiasService.search(search);
  
      return res.status(200).json(noticias);
    } catch (error) {
      return next(new AppError(error));
    }
  });

//query: listar através de um search os políticos
// query: string
// query: começo
// query: fim
  
//   router.get('/list/:id', async (req, res, next) => {
//     try {
//       const { id } = req.params;
  
//       const noticia = await noticiasService.getOne(id);
  
//       return res.status(200).json(noticia);
//     } catch (error) {
//       return next(new ApplicationError(error));
//     }
//   });
router.use(routeProtection);
router.use('/privado', noticiaPrivate);
export default router;

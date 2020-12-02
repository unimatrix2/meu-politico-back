import { Router } from 'express';

// Import Routes & Auth Middleware here
import noticiaRoutes from './noticiaRoutes/noticia.routes';
import politicoRoutes from './politicoRoutes/politico.routes';
import authRoutes from './authRoutes/auth.routes';


// Config router & routes
const router = Router();

router.use('/Auth', authRoutes);
router.use('/Noticias', noticiaRoutes);
router.use('/Politicos', politicoRoutes);

export default router;

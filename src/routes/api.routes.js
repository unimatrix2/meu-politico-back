import { Router } from 'express';

// Import Routes & Auth Middleware here
// import noticiaRoutes from './noticiaRoutes/noticia.routes';
import politicoRoutes from './politicoRoutes/politico.routes.js';
import authRoutes from './authRoutes/auth.routes';


// Config router & routes
const router = Router();

router.use('/usuario', authRoutes);
// router.use('/Noticias', noticiaRoutes);
router.use('/politicos', politicoRoutes); 

export default router;

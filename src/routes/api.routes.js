import { Router } from 'express';

// Import Routes & Auth Middleware here
import noticiaRoutes from './noticiaRoutes/private/routes';
import politicoRoutes from './politicoRoutes/politico.routes';
import authRoutes from './authRoutes/auth.routes';




// Config router & routes
const router = Router();

router.use('/usuario', authRoutes);
router.use('/noticias', noticiaRoutes);
router.use('/politicos', politicoRoutes); 

export default router;

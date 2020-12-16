import { Router } from 'express';

import { routeProtection } from '../../../middlewares/protectedRoute'; 
import * as noticiasService from '../../../services/noticia.service';
import AppError from '../../../errors/AppError';

const router = Router();

router.use(routeProtection);

router.post('/criar', async (req, res, next) => {
    try {
        const { id } = req.user;
        const newNoticia = req.body;

        await noticiasService.create(newNoticia, id);

        return res.status(201).json();
    } catch (error) { return next(new AppError(error)) };
});

router.put('/editar/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateObject = req.body;
        const updatedNoticia = await noticiasService.updateOne(updateObject, id);

        return res.status(200).json(updatedNoticia);
    } catch (error) { return next(new AppError(error)) };
});

router.get('/lista', async (req, res, nxt) => {
    try {
        const { id } = req.user;
        const noticias = await noticiasService.userList(id);
        return res.status(200).json(noticias)
    } catch (error) { return nxt(new AppError(error)) };
})

export default router;

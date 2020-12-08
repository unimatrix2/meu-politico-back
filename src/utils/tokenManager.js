import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';

export const verify = token => {
    try {
        return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        throw new AppError({ message: 'Token Inválido', type: 'Acesso-Token-Inválido', status: 401 })
    }
};
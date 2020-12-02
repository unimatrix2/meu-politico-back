import jwt from 'jsonwebtoken';

import * as authRepo from '../repositories/auth.repository';
import { encrypt, verify } from '../utils/passwordManager';
import AppError from '../errors/AppError';


const verifyExistingUser = async cpf => {
    const user = await authRepo.findUser(cpf)

    if (user) {
        throw new AppError({ message: 'Usuário já existe', type: 'Registro-Usuario-Existe', status: 400 });
    } else return false;

}

export const register = async body => {
    try {
        const userExists = await verifyExistingUser(body.cpf);
        if (!userExists) {
            const newUser = { ...body, password: encrypt(body.password) };
            await authRepo.saveUser(newUser);
        }
    } catch (error) { throw new AppError(error) }
}

export const authenticateUser = async credentials => {
    const userFromDb = await authRepo.findUser(credentials.cpf);
    if (!userFromDb) { throw new AppError({ message: 'Credenciais inválidas', type: 'Acesso-Credencial-Invalida', status: 400 }) };
    const isPasswordValid = verify(credentials.password, userFromDb.password);
    if (!isPasswordValid) { throw new AppError({ message: 'Credenciais inválidas', type: 'Acesso-Credencial-Invalida', status: 400 }) };

    const token = jwt.sign(
        { id: userFromDb._id },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.EXPIRATION_AUTH_TOKEN }
    );

    return token;
}
import AppError from '../errors/AppError';
import { verify } from '../utils/tokenManager';

export const routeProtection = (req, res, nxt) => {
    const token = req.get('Authorization');

    if (!token) { throw new AppError({ message: 'Não há credenciais de acesso', type: 'Acesso-Sem-Credencial', status: 401 }) }

    let decodedToken;

    try {
      decodedToken = verify(token);
    } catch (error) { throw new AppError({ message: 'Acesso expirado', type: 'Acesso-Expirado', status: 401 }) };

    req.user = { id: decodedToken.id };

    return nxt();
}
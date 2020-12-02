import AppError from '../errors/AppError';
import { verify } from '../utils/tokenManager';

export const routeProtection = (req, res, nxt) => {
    const token = req.get('Authorization');

    if (!token) { throw new AppError({ message: 'Não há credenciais', type: 'Acesso-Sem-Credencial', status: 401 }) }

    const tokenWithoutBearer = token.split(' ')[1];

    let decodedToken;

    try {
      decodedToken = verify(tokenWithoutBearer);
    } catch (error) { throw new AppError({ message: 'Acesso expirado', type: 'Acesso-Expirado', status: 401 }) };

    req.user = { id: decodedToken.id };

    return nxt();
}
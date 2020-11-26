import jwt from 'jsonwebtoken';

export const verify = token => jwt.verify(token, process.env.TOKEN_SECRET);
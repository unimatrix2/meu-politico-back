import jwt from 'jsonwebtoken';

import authRepository from '../repository/auth.repository';
import passwordUtils from '../utils/password.utils';
import ApplicationError from '../errors/AppError';

class AuthService {
  constructor() {
    this.authRepo = authRepository;
  }

  async register(body) {
    try {
      await this.vefifyExistentUser(body);

      const newUser = { ...body, password: passwordUtils.encrypt(body.password) };

      await this.authRepo.saveUser(newUser);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async authenticateUser(userCredentials) {

    const userFromDb = await this.authRepo.findUser(userCredentials.cpf);

    if (!userFromDb) {
      throw new ApplicationError({ message: 'Wrong Credentials', type: 'Auth-Login-Invalid-Credentials', status: 400 });
    }

    const isPasswordValid = passwordUtils.verify(userCredentials.password, userFromDb.password);

    if (!isPasswordValid) {
      throw new ApplicationError({ message: 'Wrong Credentials', type: 'Auth-Login-Invalid-Credentials', status: 400 });
    }

    const token = jwt.sign(
      { id: userFromDb._id },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.EXPIRATION_AUTH_TOKEN },
    );

    return token;
  }

  async vefifyExistentUser({ cpf }) {
    const user = await this.authRepo.findUser(cpf);

    if (user) {
      throw new ApplicationError({ message: 'User already exists', type: 'Auth-Signup', status: 400 });
    }
  }
}

export default new AuthService();
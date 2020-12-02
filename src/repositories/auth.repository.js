import { User } from '../models/User.model';

export const findUser = async cpf => {
    const user = await User.findOne({ cpf });
    return user;
}

export const saveUser = async body => {
    const newUser = new User(body);
    await newUser.save();
}

/* class AuthRepository {
  constructor() {
    this.User = UserEntity.User;
  }

  async findUser(cpf) {
    const user = this.User.findOne({ cpf });

    return user;
  }

  async saveUser(body) {
    const newUser = new this.User(body);

    await newUser.save();
  }
}

export default new AuthRepository(); */

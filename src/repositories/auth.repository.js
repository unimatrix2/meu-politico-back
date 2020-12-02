import UserEntity from '../models/User.model';

class AuthRepository {
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

export default new AuthRepository();

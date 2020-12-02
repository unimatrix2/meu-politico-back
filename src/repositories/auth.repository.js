import { User } from '../models/User.model';

export const findUser = async cpf => {
    const user = await User.findOne({ cpf });
    return user;
}

export const saveUser = async body => {
    const newUser = new User(body);
    await newUser.save();
}

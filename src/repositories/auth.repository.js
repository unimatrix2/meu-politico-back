import AppError from '../errors/AppError';
import { User } from '../models/User.model';

export const findUser = async cpf => {
    const user = await User.findOne({ cpf });
    return user;
}

export const tokenFindUser = async id => {
    const user = await User.findById(id);
    const returnUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        cpf: user.cpf,
        imageURL: user.imageURL,
        role: user.role
    };
    return returnUser;
}

export const saveUser = async body => {
    try {
        const newUser = new User(body);
        await newUser.save();
    } catch (error) {
        if (Object.keys(error.keyPattern) && Object.keys(error.keyPattern['email']) ) {
            return Object.keys(error.keyValue);
        } else console.log(error)
    }
}

export const updateUser = async (body, id) => {
    try {
        const user = await User.findByIdAndUpdate(
            id,
            body,
            { new: true, useFindAndModify: false },
        );
        return user;
    } catch (error) { throw new AppError({ message: error.message, type: 'Atualizar-Usuario', type: 500 }) }
}
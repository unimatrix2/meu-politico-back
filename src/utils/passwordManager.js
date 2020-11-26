import bcrypt from 'bcrypt';

export const encrypt = plainTextPassword => bcrypt.hashSync(plainTextPassword, 10);

export const verify = (plainTextPassword, hash) => bcrypt.compareSync(plainTextPassword, hash);
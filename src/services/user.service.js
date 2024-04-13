import * as bcrypt from "bcrypt";
import { createNewUser, getAllUsers, getUser } from '@/models/user.model';

export const createUser = async(data) => {
    const hashPassword = await bcrypt.hash(data.password, 10);
    await createNewUser({...data, password: hashPassword  });
}

export const getUsers = async() => {
    const users = await getAllUsers();
    return users;
}

export const getUserByEmail = async(email) => {
    const user  = await getUser({email});
    return user;
}
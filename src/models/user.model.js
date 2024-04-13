import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const createNewUser = async(data) => {
    const user = await prisma.user.create({
        data
      });
    return user;
}

export const getAllUsers = async() => {
    const users = await prisma.user.findMany();
    return users;
}

export const getUser = async(condition) => {
    const users = await prisma.user.findFirst({where: condition });
    return users;
}
'use server';

import { permanentRedirect } from 'next/navigation'

import * as userService from '@/services/user.service';

export const registerNewUser = async(data) => {
    const {confirmPassword, ...restUserData} =  data;
    await userService.createUser(restUserData);

    permanentRedirect('/users');
    // return {
    //     user,
    //     message: 'New user added successfully!'
    // };
}
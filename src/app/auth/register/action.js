'use server';

import { permanentRedirect } from 'next/navigation'

import * as userService from '@/services/user.service';

export const registerNewUser = async(data) => {
    const {confirmPassword, ...restUserData} =  data;
    const existingUser = await userService.getUserByEmail(data.email);
    if(!existingUser) {
        await userService.createUser(restUserData);

        // permanentRedirect('/users');
        return {};
        
    }
    else {
        return {
            error: true,
            errorMessage: `User with email ${data.email} already exists!`
        }
    }
    
    // return {
    //     user,
    //     message: 'New user added successfully!'
    // };
}
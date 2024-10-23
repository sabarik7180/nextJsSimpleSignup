"use server"
import client from '@/db'

export async function createNewUser(username: string , password: string){
    try {
        console.log("inside the server function")
         await client.user.create({
            data: {
                username: username,
                password: password
            }
        });
    return true;
    }catch{
        return false;
    }
}
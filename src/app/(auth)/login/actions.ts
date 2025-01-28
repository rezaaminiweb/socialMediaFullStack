import prisma from "@/lib/prisma";
import { LoginValues, loginSchema } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import {verify} from "@node-rs/argon2"
import { lucia } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login( credentials:LoginValues ):Promise<{error:string}>{
    try {
        const {username , password} = loginSchema.parse(credentials)
        const existusername =await prisma.user.findFirst({
            where:{
                username:{
                    equals:username,
                    mode:"insensitive"
                }
            }
        })
        if(!existusername || !existusername.passwordHash){
            return{
                error:'this user name not found'
            }
        }
        const validpassword = await verify(existusername.passwordHash , password ,{
            memoryCost:19456,
            timeCost:2,
            outputLen:32,
            parallelism:1,
        })
        if(!validpassword){
            return {error:'Incorect Password or UserName'}

        }
         const session = await lucia.createSession(existusername.id,{})
         const sessionCookie = lucia.createSessionCookie(session.id);
         (await cookies()).set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
            return redirect("/")
        
    } catch (error) {
        if(isRedirectError(error)) throw error
        console.error(error);
        return {
            error:"something went error"
        }
    }
}
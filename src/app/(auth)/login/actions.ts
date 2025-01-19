import prisma from "@/lib/prisma";
import { LoginValues, loginSchema } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function login( credentials:LoginValues ):Promise<{error:string}>{
    try {
        const {username , password} = loginSchema.parse(credentials)
        const existusername =await prisma.user.findFirst({
            where:{
                username:{
                    equal:username,
                    mode:"insensetive"
                }
            }
        })
        if(!existusername || !existusername.passwordHash){
            return{
                error:'this user name not found'
            }
        }
        
    } catch (error) {
        if(isRedirectError(error)) throw error
        console.error(error);
        return {
            error:"something went error"
        }
        
        
    }
}
"use server"
import { signIn } from "@/lib/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default async function login( data: { email: string, password: string }) {

    const { email, password } = data
    
    try {
        await signIn( 'credentials', { email, password } )
        console.log('Login efetuado com sucesso')
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                console.log('Credenciais inválidas')
                console.log(error)
            }
        }
    }
    redirect('/')
}
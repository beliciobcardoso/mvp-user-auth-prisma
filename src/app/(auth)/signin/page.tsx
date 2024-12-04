import { LoginForm } from "@/components/login-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const session =  await auth()
  if (session) {
    redirect('/')
  }
  return ( 
    <main className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </main> 
  )
}

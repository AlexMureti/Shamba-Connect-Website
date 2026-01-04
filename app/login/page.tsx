import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Login - Shamba Connect",
  description: "Sign in to your Shamba Connect account to access your orders, consultations, and saved content.",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your Shamba Connect account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-medium hover:underline">
            Create one here
          </Link>
        </p>
      </div>
    </div>
  )
}

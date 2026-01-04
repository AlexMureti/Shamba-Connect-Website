import { RegisterForm } from "@/Shamba-Connect-Website/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Register - Shamba Connect",
  description: "Create your Shamba Connect account to access exclusive features and track your urban farming journey.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join the Shamba Connect community today</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Fill in your details to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  )
}

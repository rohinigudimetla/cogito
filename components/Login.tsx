"use client"
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
function Login() {
	return (
		<div className="flex justify-center items-start h-screen mt-40">
			<Card className="w-full max-w-md border-sunset">
				<CardHeader>
					<CardTitle>Welcome back!</CardTitle>
					<CardDescription>
						Sign in with your Google account to access your dashboard.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Button
						onClick={() => signIn("google")}
						className="w-full bg-ocean text-white"
						variant="outline"
					>
						{/* <ChromeIcon className="mr-2 h-5 w-5" /> */}
						Sign in with Google
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}

export default Login

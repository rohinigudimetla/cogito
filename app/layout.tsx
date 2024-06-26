import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
// import { getServerSession } from "next-auth/next"
// import { SessionProvider } from "@/components/SessionProvider"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import Login from "@/components/Login"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Cogito",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const session = await getServerSession(authOptions);
	return (
		<html lang="en">
			{/* <head /> */}
			<body className="relative">
				{/* if there is no session, render out the login component */}

				<div>
					<Navbar />
					{children}
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	)
}

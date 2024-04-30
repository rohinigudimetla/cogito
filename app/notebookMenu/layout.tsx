// import Sidebar from "@/components/Sidebar"
// import { getServerSession } from "next-auth/next"
// import { SessionProvider } from "@/components/SessionProvider"
// import { GET as authOptions } from "@/app/api/auth/[...nextauth]/route"
// import Login from "@/components/Login"

// export default async function NotebookLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode
// }>) {
// 	const session = await getServerSession(authOptions)
// 	return (
// 		<html lang="en">
// 			{/* <head /> */}
// 			<body className="relative">
// 				<SessionProvider session={session}>
// 					{!session ? (
// 						<Login />
// 					) : (
// 						<div className="flex h-screen w-full">
// 							<Sidebar />
// 							<div className="flex-1 overflow-auto p-4 md:p-6 relative mx-auto max-w-7xl">
// 								{children}
// 							</div>
// 						</div>
// 					)}

// 					{/* <Footer /> */}
// 				</SessionProvider>
// 			</body>
// 		</html>
// 	)
// }

import { useSession } from "next-auth/react"
import Sidebar from "@/components/Sidebar"
import SessionProvider from "@/components/SessionProvider"
import Login from "@/components/Login"

export default function NotebookLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// const { data: session } = useSession()

	return (
		<SessionProvider>
			<div className="flex h-screen w-full">
				<Sidebar />
				<div className="flex-1 overflow-auto p-4 md:p-6 relative mx-auto max-w-7xl">
					{children}
				</div>
			</div>
		</SessionProvider>
	)
}

import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import SessionProvider from "@/components/SessionProvider";
import Login from "@/components/Login";

export default function NotebookLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const { data: session } = useSession()

	return (
		<div className="flex h-screen w-full">
			<div className="flex-1 overflow-auto p-4 md:p-6 relative mx-auto max-w-7xl">
				{children}
			</div>
		</div>
	);
}

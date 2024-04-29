import Sidebar from "@/components/Sidebar";

export default function NotebookLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <head /> */}
			<body className="relative">
				<div className="flex h-screen w-full">
					<Sidebar />
					<div className="flex-1 overflow-auto p-4 md:p-6 relative mx-auto max-w-7xl">
						{children}
					</div>
				</div>
				{/* <Footer /> */}
			</body>
		</html>
	);
}

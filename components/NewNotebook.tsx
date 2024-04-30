"use client";

import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NewNotebook() {
	const router = useRouter();
	const { data: session } = useSession();
	const createNewChat = async () => {
		const doc = await addDoc(
			collection(db, "users", session?.user?.email!, "notebooks"),
			{
				userId: session?.user?.email!,
				createdAt: serverTimestamp(),
			}
		);
		router.push(`/notebookMenu/${doc.id}`);
	};
	return (
		<div
			onClick={createNewChat}
			className="flex items-center gap-2 border border-sunset cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sunset hover:text-white focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
		>
			<PlusIcon className="h-4 w-4" />
			<p>New Notebook</p>
		</div>
	);
}
export default NewNotebook;

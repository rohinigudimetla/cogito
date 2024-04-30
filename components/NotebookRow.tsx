import { db } from "@/firebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
	id: string;
};

function NotebookRow({ id }: Props) {
	// Get the current pathname
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();
	const [active, setActive] = useState(false);
	const [messages] = useCollection(
		collection(db, "users", session?.user?.email!, "chats", id, "messages")
	);
	// Check if the notebook is active
	useEffect(() => {
		if (!pathname) return;
		setActive(pathname.includes(id));
	}, [pathname]);

	// Delete the notebook
	const removeNotebook = async () => {
		await deleteDoc(doc(db, "users", session?.user?.email!, "notebooks", id));
		router.replace("/notebookMenu");
	};
	return (
		<Link
			href={`/notebookMenu/${id}`}
			className={`flex items-center justify-between ${active && "bg-ocean"} 
			gap-2 rounded-md px-3 py-2 mb-0.5  text-sm font-medium transition-colors hover:bg-ocean/75 hover:white dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50`}
		>
			<p className="">
				{messages?.docs[messages?.docs.length - 1]?.data().text ||
					"New Notebook"}
			</p>

			<TrashIcon
				onClick={removeNotebook}
				className="w-5 h-5 text-gray-700 hover:text-red-700"
			/>
		</Link>
	);
}

export default NotebookRow;

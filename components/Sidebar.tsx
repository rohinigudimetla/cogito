"use client";
import React from "react";
import {
	DocumentTextIcon,
	FolderOpenIcon,
	BookmarkIcon,
	ClipboardDocumentIcon,
	ClipboardDocumentListIcon,
	ArrowUturnLeftIcon,
	ArrowUturnRightIcon,
	MagnifyingGlassIcon,
	ArrowsPointingInIcon,
	ArrowsPointingOutIcon,
	BoltIcon,
	CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession, signOut } from "next-auth/react";

import NewNotebook from "./NewNotebook";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import NotebookRow from "./NotebookRow";

function Sidebar() {
	const { data: session } = useSession();

	const [notebooks, loading, error] = useCollection(
		session &&
			query(
				collection(db, "users", session?.user?.email!, "notebooks"),
				orderBy("createdAt", "desc")
			)
	);
	return (
		<div className="hidden w-64 border-r bg-charcoal dark:bg-gray-800 lg:block text-white pt-2">
			<div className="flex h-full flex-col gap-4 p-4">
				{/* <div className="flex items-center gap-2">
					<CodeBracketIcon className="h-6 w-6" />
					<h3 className="text-lg font-semibold">Text Editor</h3>
				</div> */}
				<nav className="flex-1 space-y-2 overflow-auto">
					<NewNotebook />
					<div className="font-bold ml-3 pt-2 text-xs text-gray-500 dark:text-gray-400">
						Chats
					</div>
					<ul className="space-y-1">
						<li></li>
						<li>
							{notebooks?.docs.map((doc) => (
								<NotebookRow key={doc.id} id={doc.id} />
							))}
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<BookmarkIcon className="h-4 w-4" />
								Save File
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<ClipboardDocumentIcon className="h-4 w-4" />
								Copy
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<ClipboardDocumentListIcon className="h-4 w-4" />
								Paste
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<ArrowUturnLeftIcon className="h-4 w-4" />
								Undo
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<ArrowUturnRightIcon className="h-4 w-4" />
								Redo
							</Link>
						</li>
					</ul>

					{/* <div className="font-medium text-gray-500 dark:text-gray-400">
						Tools
					</div> */}
				</nav>
				<div className="sticky bottom-0 p-3">
					{session && (
						<div className="flex items-center gap-4 ">
							<img
								src={session.user?.image!}
								alt="pfp"
								className="h-10 w-10 rounded-full cursor-pointer"
							/>
							<p onClick={() => signOut()} className="cursor-pointer">
								{session.user?.name}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

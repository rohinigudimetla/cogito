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

function Sidebar() {
	return (
		<div className="hidden w-64 border-r bg-charcoal dark:bg-gray-800 lg:block text-white pt-2">
			<div className="flex h-full flex-col gap-4 p-4">
				{/* <div className="flex items-center gap-2">
					<CodeBracketIcon className="h-6 w-6" />
					<h3 className="text-lg font-semibold">Text Editor</h3>
				</div> */}
				<nav className="flex-1 space-y-2 overflow-auto">
					<div className="font-medium text-gray-500 dark:text-gray-400">
						Commands
					</div>
					<ul className="space-y-1">
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<DocumentTextIcon className="h-4 w-4" />
								New File
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
							>
								<FolderOpenIcon className="h-4 w-4" />
								Open File
							</Link>
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
			</div>
		</div>
	);
}

export default Sidebar;

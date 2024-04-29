// import React from "react";

// function Notebook() {
// 	return <div>peepee</div>;
// }

// export default Notebook;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

import {
	Command,
	CommandEmpty,
	CommandDialog,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useHotkeys } from "react-hotkeys-hook";
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

export default function Notebook() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<div className="flex h-screen w-full">
			{/* Sidebar */}
			<div className="hidden w-64 border-r bg-gray-100 dark:bg-gray-800 lg:block">
				<div className="flex h-full flex-col gap-4 p-4">
					<div className="flex items-center gap-2">
						<CodeBracketIcon className="h-6 w-6" />
						<h3 className="text-lg font-semibold">Text Editor</h3>
					</div>
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
						<div className="font-medium text-gray-500 dark:text-gray-400">
							Tools
						</div>
						<ul className="space-y-1">
							<li>
								<Link
									href="#"
									className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
								>
									<MagnifyingGlassIcon className="h-4 w-4" />
									Find & Replace
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
								>
									<ArrowsPointingInIcon className="h-4 w-4" />
									Indent
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
								>
									<ArrowsPointingOutIcon className="h-4 w-4" />
									Outdent
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
								>
									<BoltIcon className="h-4 w-4" />
									Bold
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50"
								>
									<BoltIcon className="h-4 w-4" />
									Italic
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-auto p-4 md:p-6 relative">
				<div className="mx-auto max-w-3xl">
					<Textarea
						className="h-[80vh] w-full resize-none rounded-md border border-gray-200 bg-transparent p-4 text-lg font-medium outline-none transition-colors focus:border-gray-400 dark:border-gray-700 dark:focus:border-gray-600"
						placeholder="Start typing here..."
					/>
					<CommandDialog open={open} onOpenChange={setOpen}>
						<div className="absolute bottom-4 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2">
							<Command className="rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950">
								<CommandInput placeholder="Type a command..." />
								<CommandList>
									<CommandEmpty>No results found.</CommandEmpty>
									<CommandGroup heading="Commands">
										<CommandItem>
											<DocumentTextIcon className="mr-2 h-4 w-4" />
											<span>New File</span>
										</CommandItem>
										<CommandItem>
											<FolderOpenIcon className="mr-2 h-4 w-4" />
											<span>Open File</span>
										</CommandItem>
										<CommandItem>
											<BookmarkIcon className="mr-2 h-4 w-4" />
											<span>Save File</span>
										</CommandItem>
										<CommandItem>
											<ClipboardDocumentIcon className="mr-2 h-4 w-4" />
											<span>Copy</span>
										</CommandItem>
										<CommandItem>
											<ClipboardDocumentListIcon className="mr-2 h-4 w-4" />
											<span>Paste</span>
										</CommandItem>
										<CommandItem>
											<ArrowUturnLeftIcon className="mr-2 h-4 w-4" />
											<span>Undo</span>
										</CommandItem>
										<CommandItem>
											<ArrowUturnRightIcon className="mr-2 h-4 w-4" />
											<span>Redo</span>
										</CommandItem>
									</CommandGroup>
									<CommandGroup heading="Tools">
										<CommandItem>
											<MagnifyingGlassIcon className="mr-2 h-4 w-4" />
											<span>Find & Replace</span>
										</CommandItem>
										<CommandItem>
											<ArrowsPointingInIcon className="mr-2 h-4 w-4" />
											<span>Indent</span>
										</CommandItem>
										<CommandItem>
											<ArrowsPointingOutIcon className="mr-2 h-4 w-4" />
											<span>Outdent</span>
										</CommandItem>
										<CommandItem>
											<BoltIcon className="mr-2 h-4 w-4" />
											<span>Bold</span>
										</CommandItem>
										<CommandItem>
											<BoltIcon className="mr-2 h-4 w-4" />
											<span>Italic</span>
										</CommandItem>
									</CommandGroup>
								</CommandList>
							</Command>
						</div>
					</CommandDialog>
				</div>
			</div>
		</div>
	);
}

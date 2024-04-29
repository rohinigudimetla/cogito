"use client";

import * as React from "react";
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
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
import { Button } from "@/components/ui/button";

export default function Notebook() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
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
		<div className="">
			<Textarea
				className="h-[80vh] w-full resize-none placeholder-italic rounded-md border-gray-200 bg-white p-4 text-lg font-medium outline-none transition-colors  focus:border-sunset dark:border-gray-700 dark:focus:border-gray-600 text-charcoal"
				placeholder="What's on your mind?"
			/>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<Button className="w-full justify-start" variant="ghost">
							Some AI Suggestion 1
						</Button>
						<Button className="w-full justify-start" variant="ghost">
							Some AI Suggestion 2
						</Button>
						<Button className="w-full justify-start" variant="ghost">
							Some AI Suggestion 3
						</Button>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</div>
	);
}

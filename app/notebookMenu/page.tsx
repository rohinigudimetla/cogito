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

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import SessionProvider from "@/components/SessionProvider";
import Login from "@/components/Login";

export default function Notebook() {
	const [open, setOpen] = React.useState(false);

	const { data: session } = useSession();

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
		<SessionProvider>
			{!session ? (
				<Login />
			) : (
				<div className="">
					<p>Critical thinking begins here</p>
				</div>
			)}
		</SessionProvider>
	);
}

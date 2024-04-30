import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
// import SessionProvider from "@/components/SessionProvider";
import Login from "@/components/Login";
import AISuggestions from "@/components/AISuggestions";

type Props = {
	params: { id: string };
};

export default function Notebook({ params: { id } }: Props) {
	return (
		<div className="">
			<Textarea
				className="h-[80vh] w-full resize-none placeholder-italic rounded-md
				 border-gray-200 bg-white p-4 text-lg font-medium outline-none transition-colors 
				 focus:border-sunset dark:border-gray-700 dark:focus:border-gray-600 text-charcoal"
				placeholder="What's on your mind?"
			/>
			<AISuggestions></AISuggestions>
		</div>
	);
}

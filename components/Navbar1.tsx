function Navbar() {
	return (
		<div className="z-50 justify-center items-center font-medium text-white bg-charcoal py-2">
			<div className="flex gap-5 justify-between max-w-6xl mx-5 lg:mx-auto">
				<div className="my-auto text-xl">Cogito</div>
				<div className="flex gap-5 items-center text-base">
					<div className="self-stretch my-auto">Page</div>
					<div className="self-stretch my-auto">Page</div>
					{/* dark mode icon from heroicons */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 shrink-0 self-stretch my-auto aspect-square text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
						/>
					</svg>

					<div className="justify-center self-stretch px-5 py-3 bg-ocean rounded-full shadow-sm max-md:px-5">
						Log in
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

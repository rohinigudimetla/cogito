import Image from "next/image";

function Hero() {
	return (
		<div className="relative bg-vanilla py-16 sm:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:flex lg:items-start lg:justify-between">
					<div className="lg:w-1/2 lg:pr-16">
						<div className="max-w-md text-4xl font-bold text-charcoal sm:text-5xl md:text-7xl">
							<span className="block xl:inline">Cogito,</span>{" "}
							<span className="block xl:inline">ergo sum.</span>
						</div>
						<p className="mt-3 text-ocean text-4xl font-normal font-poppins leading-[54px]">
							I think, therefore I am.
						</p>
						<p className="mt-3 text-xl font-medium text-charcoal sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 font-poppins">
							Your AI brainstorming assistant, the effortless path to brilliant
							ideas.
						</p>
						<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div className="rounded-full shadow inline-flex items-center justify-center px-6 py-3.5 bg-sunset text-white font-medium text-xl leading-tight font-poppins">
								Begin your journey
							</div>
						</div>
					</div>
					<div className="mt-12 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
						<div className="mx-auto max-w-md lg:max-w-none lg:ml-auto">
							<Image
								src="/heroImage.png"
								alt="Hero Image"
								width={618}
								height={612}
								className="mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

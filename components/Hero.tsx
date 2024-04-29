import Image from "next/image"
import CustomButton from "./CustomButton"
import { Button } from "./ui/button"
// import { useRouter } from "next/router";

function Hero() {
	const handleScroll = () => {
		const nextSection = document.getElementById("discover")

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" })
		}
	}
	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">Cogito, ergo sum.</h1>

				<p className="hero__subtitle">I think, therefore I am.</p>

				{/* <CustomButton
					title="Begin your journey"
					containerStyles=" bg-sunset text-white font-medium text-xl rounded-full shadow px-6 py-3.5 mt-5"
					handleClick={handleScroll}
				/> */}
				<Button className="w-full rounded-full bg-sunset text-white text-lg">
					Begin your journey
				</Button>
				{/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<div className="rounded-full shadow inline-flex items-center justify-center px-6 py-3.5 bg-sunset text-white font-medium text-xl leading-tight font-poppins">
						Begin your journey
					</div>
				</div> */}
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image
						src="/heroImage.png"
						alt="hero"
						fill
						className="object-contain"
					/>
				</div>

				{/* <div className="hero__image-overlay" /> */}
			</div>
		</div>
	)
}

export default Hero

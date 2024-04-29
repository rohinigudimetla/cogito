import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

const NavBar = () => (
	<header className="w-full z-50">
		<nav className="flex mx-auto justify-between items-center sm:px-16 px-6 py-5  text-white bg-charcoal">
			<Link href="/" className="justify-center items-center">
				<div className="my-auto text-xl">Cogito</div>
			</Link>

			{/* <CustomButton
				title="Sign in"
				btnType="button"
				containerStyles="rounded-full bg-ocean min-w-[130px] px-5 py-3"
			/> */}
		</nav>
	</header>
)

export default NavBar

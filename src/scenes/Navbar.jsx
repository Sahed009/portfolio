import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-yellow" : ""
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const navbarBackground = isTopOfPage ? "" : "bg-cyan-500";

	return (
		<nav
			className={`${navbarBackground} z-40 w-full fixed opacity-90 hover:opacity-100 ease-in duration-300 top-0 py-6`}
		>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="font-playfair text-3xl font-bold">SAHED</h4>
				{/* DESKTOP NAV */}
				{isDesktop ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Testimonials"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className="rounded-full bg-cyan-500 p-2"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<p className="font-playfair py-1 px-2 text-xl ease-in duration-500 opacity-90">
							Menu
						</p>
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isDesktop && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-blue opacity-90 w-[300px]">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<p className="text-3xl ease-in duration-500 font-playfair">
									X
								</p>
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Testimonials"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;

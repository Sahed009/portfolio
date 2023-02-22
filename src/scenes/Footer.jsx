import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className="h-64 bg-cyan-500 py-10">
			<div className="w-11/12 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between text-center ">
					<p className="font-playfair font-semibold text-2xl text-white">
						MD SaheduZzaman
					</p>
					<p className="font-playfair text-lg text-white">
						©2023 SAHED. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

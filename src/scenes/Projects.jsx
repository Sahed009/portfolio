import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(" ").join("-").toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="text-2xl font-playfair">{title}</p>
			</div>
			<img src={image} alt={projectTitle} />
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="pt-48 pb-48">
			{/* HEADINGS */}
			<motion.div
				className="md:w-2/5 mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						<span className="text-red">PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="w-2/3" />
					</div>
				</div>
				<p className="mt-10 mb-10 text-xl">
					Here's My projects ( Linked with live demo ) -
				</p>
			</motion.div>

			{/* PROJECTS */}
			<div className="flex justify-center">
				<motion.div
					className="sm:grid sm:grid-cols-3"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* ROW 1 */}
					<div
						className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div>
                    <a
						href="https://sahed009.github.io/mahi"
						target="_blank"
						rel="noreferrer"
					>
						<Project
							title="Mahi"
							image={require("../assets/mahi.jpeg")}
						/>
					</a>

					<a
						href="https://sahed009.github.io/gpt3-pr"
						target="_blank"
						rel="noreferrer"
					>
						<Project
							title="GPT-3"
							image={require("../assets/gpt-3.jpeg")}
						/>
					</a>
					<a
						href="https://sahed009.github.io/gericht-pr"
						target="_blank"
						rel="noreferrer"
					>
						<Project
							title="Gericht"
							image={require("../assets/Gericht.jpeg")}
						/>
					</a>

					{/* ROW 2 */}
					<a
						href="https://sahed009.github.io/piroll"
						target="_blank"
						rel="noreferrer"
					>
						<Project
							title="Piroll"
							image={require("../assets/piroll.jpeg")}
						/>
					</a>
					
					<div
						className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;

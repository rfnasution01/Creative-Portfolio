import { HERO_DATA } from "@/data/hero";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, scale: 0.9, y: 20 },
	show: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: "spring", // TypeScript sekarang tahu ini adalah "spring" literal, bukan string biasa
			stiffness: 260,
			damping: 20,
		},
	},
};

export const HeroSection = () => {
	return (
		<section className="w-full px-6 py-16 md:py-24 max-w-6xl mx-auto font-sans selection:bg-black selection:text-white">
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-5"
			>
				{HERO_DATA.map((card, i) => {
					// BASE CARD CLASS
					const cardBase =
						"relative rounded-[2rem] p-6 transition-all duration-300 group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white";

					if (card.type === "intro") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 row-span-2 flex flex-col justify-between bg-zinc-50`}
							>
								<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
									<span className="text-8xl font-serif">"</span>
								</div>
								<div>
									<span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">
										Available for Projects
									</span>
									<h1 className="text-4xl md:text-5xl font-serif leading-tight">
										Hi, I'm{" "}
										<span className="italic text-indigo-600">{card.name}</span>
									</h1>
									<p className="text-xl font-medium mt-3 text-gray-600">
										{card.tagline}
									</p>
								</div>
								<p className="text-sm leading-relaxed text-gray-500 max-w-xs">
									{card.description}
								</p>
							</motion.div>
						);
					}

					if (card.type === "image") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} row-span-2 !p-0 shadow-lg`}
							>
								<img
									src={card.src}
									alt={card.alt}
									className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
								/>
							</motion.div>
						);
					}

					if (card.type === "sticker") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} flex items-center justify-center bg-yellow-50 border-yellow-100`}
							>
								<span className="text-sm font-bold tracking-tight text-yellow-800 rotate-[-2deg] group-hover:rotate-0 transition-transform">
									{card.text}
								</span>
							</motion.div>
						);
					}

					if (card.type === "cta") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 flex items-center justify-between bg-zinc-900 text-white`}
							>
								{/* PRIMARY → SMOOTH SCROLL */}
								<button
									onClick={() => {
										const el = document.getElementById("work");
										el?.scrollIntoView({ behavior: "smooth" });
									}}
									className="h-full w-1/2 flex items-center justify-center font-bold text-lg hover:bg-white hover:text-black transition-colors rounded-2xl"
								>
									{card.primary}
								</button>

								<div className="h-12 w-[1px] bg-zinc-700"></div>

								{/* SECONDARY → DOWNLOAD CV */}
								<a
									href="/CV.pdf"
									download
									className="h-full w-1/2 flex items-center justify-center font-medium opacity-80 hover:opacity-100 transition-opacity underline decoration-zinc-500 underline-offset-4"
								>
									{card.secondary}
								</a>
							</motion.div>
						);
					}

					if (card.type === "social") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 flex items-center justify-around`}
							>
								{card.items.map((s, idx) => (
									<a
										key={idx}
										href={s.url}
										className="text-sm font-bold uppercase tracking-tighter hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all"
									>
										{s.label}
									</a>
								))}
							</motion.div>
						);
					}
					return null;
				})}
			</motion.div>
		</section>
	);
};

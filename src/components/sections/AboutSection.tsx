import { ABOUT_DATA } from "@/data/about";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 200, damping: 25 },
	},
};

export const AboutSection = () => {
	return (
		<section className="w-full px-6 py-16 max-w-6xl mx-auto">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
				className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-5"
			>
				{ABOUT_DATA.map((card, i) => {
					const cardBase =
						"relative rounded-[2.5rem] p-8 border border-zinc-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden";

					if (card.type === "bio") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 row-span-2 flex flex-col justify-center bg-zinc-50`}
							>
								<div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
								<h2 className="text-3xl font-serif mb-6 text-zinc-900 leading-tight tracking-tight">
									A little{" "}
									<span className="italic font-normal text-zinc-400 underline decoration-zinc-200 underline-offset-8">
										more
									</span>{" "}
									about me.
								</h2>
								<p className="text-zinc-600 leading-relaxed font-medium">
									{card.description}
								</p>
							</motion.div>
						);
					}

					if (card.type === "facts") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 md:col-span-1 flex flex-col justify-center gap-4 bg-zinc-900 text-white border-none`}
							>
								{card.items.map((fact, idx) => (
									<p
										key={idx}
										className="text-[13px] font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-2"
									>
										{fact}
									</p>
								))}
							</motion.div>
						);
					}

					if (card.type === "tools") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} flex flex-wrap gap-2 items-center justify-center bg-white`}
							>
								{card.items.map((tool, idx) => (
									<span
										key={idx}
										className="px-4 py-1.5 rounded-full bg-zinc-100 text-[11px] font-black uppercase tracking-widest text-zinc-500 border border-zinc-200 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300"
									>
										{tool.name}
									</span>
								))}
							</motion.div>
						);
					}

					if (card.type === "quote") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} col-span-2 flex items-center justify-center p-10 bg-indigo-50 border-indigo-100`}
							>
								<div className="text-center relative">
									<p className="text-xl md:text-2xl font-serif italic text-indigo-900 leading-snug">
										“{card.text}”
									</p>
								</div>
							</motion.div>
						);
					}

					if (card.type === "availability") {
						return (
							<motion.div
								key={i}
								variants={item}
								className={`${cardBase} flex items-center justify-center text-center p-6 bg-emerald-50 border-emerald-100 group`}
							>
								<div className="relative">
									<span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
									<span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full" />
									<span className="text-sm font-bold text-emerald-900 tracking-tight leading-tight block">
										{card.status}
									</span>
								</div>
							</motion.div>
						);
					}
					return null;
				})}
			</motion.div>
		</section>
	);
};

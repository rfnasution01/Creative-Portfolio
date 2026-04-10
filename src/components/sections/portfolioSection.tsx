import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const categories = ["all", "branding", "ui", "social"] as const;

const modalVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9, y: 20 },
	show: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 25 },
	},
	exit: { opacity: 0, scale: 0.95, y: 10 },
};

export const PortfolioSection = () => {
	const [active, setActive] = useState<string>("all");
	const [selected, setSelected] = useState<number | null>(null);

	const filtered =
		active === "all"
			? PORTFOLIO_DATA
			: PORTFOLIO_DATA.filter((item) => item.category === active);

	const selectedItem = PORTFOLIO_DATA.find((i) => i.id === selected);

	return (
		<section className="w-full px-6 py-20 max-w-6xl mx-auto">
			{/* Header Editorial Style */}
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
				<div className="max-w-md">
					<h2 className="text-4xl md:text-5xl font-serif tracking-tight">
						Selected Works
					</h2>
					<p className="text-zinc-500 mt-4 font-medium">
						A collection of projects where design meets functionality.
					</p>
				</div>

				<div className="flex gap-3 bg-zinc-100 p-1.5 rounded-[2rem]">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActive(cat)}
							className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
								active === cat
									? "bg-white text-black shadow-sm scale-105"
									: "text-zinc-400 hover:text-zinc-600"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			{/* Masonry-like Grid */}
			<motion.div
				layout
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				<AnimatePresence mode="popLayout">
					{filtered.map((item) => (
						<motion.div
							key={item.id}
							layout
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9 }}
							onClick={() => setSelected(item.id)}
							className="group cursor-pointer"
						>
							<div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-inner">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
								/>

								{/* Glassmorphism Badge */}
								<div className="absolute top-6 left-6 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-white/50 rounded-full">
									<span className="text-[10px] font-black uppercase tracking-widest text-zinc-800">
										{item.category}
									</span>
								</div>
							</div>

							<div className="mt-6 px-2">
								<h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors">
									{item.title}
								</h3>
								<div className="h-[1px] w-0 bg-indigo-600 group-hover:w-full transition-all duration-500 mt-1" />
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* MODAL ENHANCED */}
			<AnimatePresence>
				{selectedItem && (
					<motion.div
						className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelected(null)}
					>
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="show"
							exit="exit"
							className="bg-white rounded-[3rem] overflow-hidden max-w-3xl w-full shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="grid md:grid-cols-2">
								<div className="h-64 md:h-[500px]">
									<img
										src={selectedItem.image}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-8 md:p-12 flex flex-col justify-center">
									<span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500 mb-4">
										{selectedItem.category}
									</span>
									<h3 className="text-3xl font-serif mb-6">
										{selectedItem.title}
									</h3>
									<p className="text-zinc-500 leading-relaxed mb-8">
										{selectedItem.description}
									</p>
									<button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-colors">
										Launch Case Study
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

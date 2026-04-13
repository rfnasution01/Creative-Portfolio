import { useState } from "react";
import { CASE_STUDY_DATA } from "@/data/case-study";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const modalVariants: Variants = {
	hidden: { opacity: 0, y: 50, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 250, damping: 25 },
	},
	exit: { opacity: 0, y: 30, scale: 0.98 },
};

export const CaseStudySection = () => {
	const [active, setActive] = useState<number | null>(null);
	const selected = CASE_STUDY_DATA.find((i) => i.id === active);

	return (
		<section id="work" className="w-full px-6 py-20 max-w-6xl mx-auto">
			{/* Editorial Header */}
			<div className="mb-16 border-l-4 border-black pl-6">
				<h2 className="text-4xl md:text-5xl font-serif tracking-tight">
					Case Studies
				</h2>
				<p className="text-zinc-500 mt-2 font-medium max-w-md italic">
					A deeper look into how I solve complex design challenges through
					research and strategy.
				</p>
			</div>

			{/* List with Hover Effects */}
			<div className="grid md:grid-cols-2 gap-10">
				{CASE_STUDY_DATA.map((item) => (
					<motion.div
						key={item.id}
						onClick={() => setActive(item.id)}
						className="group cursor-pointer"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="relative overflow-hidden rounded-[2rem] bg-zinc-100 aspect-video mb-6">
							<img
								src={item.cover}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
							<div className="absolute bottom-6 right-6">
								<span className="px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full shadow-lg">
									Read Case
								</span>
							</div>
						</div>
						<div className="px-2">
							<h3 className="text-2xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors uppercase italic">
								{item.title}
							</h3>
						</div>
					</motion.div>
				))}
			</div>

			{/* MODAL ENHANCED (JOURNAL STYLE) */}
			<AnimatePresence>
				{selected && (
					<motion.div
						className="fixed inset-0 bg-zinc-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActive(null)}
					>
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="show"
							exit="exit"
							className="bg-white rounded-[3rem] max-w-4xl w-full h-full max-h-[85vh] overflow-y-auto shadow-2xl no-scrollbar"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative h-64 md:h-[400px]">
								<img
									src={selected.cover}
									className="w-full h-full object-cover"
								/>
								<button
									onClick={() => setActive(null)}
									className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold shadow-lg hover:rotate-90 transition-transform"
								>
									✕
								</button>
							</div>

							<div className="p-8 md:p-16 space-y-12">
								<div className="border-b pb-8">
									<h3 className="text-4xl md:text-5xl font-serif italic mb-4">
										{selected.title}
									</h3>
									<p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
										Full Process Breakdown
									</p>
								</div>

								{/* Content Grid */}
								<div className="grid md:grid-cols-3 gap-12 text-zinc-800">
									<div className="md:col-span-2 space-y-10">
										<section>
											<label className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-4 block">
												01. The Problem
											</label>
											<p className="text-xl font-medium leading-relaxed italic text-zinc-600">
												"{selected.problem}"
											</p>
										</section>

										<section>
											<label className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-4 block">
												02. Execution Process
											</label>
											<div className="grid grid-cols-1 gap-4">
												{selected.process.map((step, i) => (
													<div
														key={i}
														className="flex items-center gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-100"
													>
														<span className="text-xs font-black text-zinc-300">
															0{i + 1}
														</span>
														<p className="text-sm font-bold text-zinc-700">
															{step}
														</p>
													</div>
												))}
											</div>
										</section>
									</div>

									<div className="bg-zinc-900 rounded-[2rem] p-8 text-white h-fit">
										<label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4 block">
											03. The Result
										</label>
										<p className="text-sm leading-relaxed opacity-90">
											{selected.result}
										</p>
										<div className="mt-8 pt-8 border-t border-zinc-800">
											<button className="w-full py-4 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all">
												Contact Client
											</button>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

import { useState } from "react";
import { CONTACT_DATA } from "@/data/contact";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
};

export const ContactSection = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(CONTACT_DATA.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="w-full px-6 py-24 max-w-6xl mx-auto">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-zinc-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden"
			>
				{/* Background Decoration */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] -mr-32 -mt-32 rounded-full" />

				{/* Left Content: Title & Subtitle */}
				<motion.div
					variants={item}
					className="md:col-span-2 space-y-6 relative z-10"
				>
					<h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
						{CONTACT_DATA.title}
					</h2>
					<p className="text-zinc-400 text-lg md:text-xl max-w-md font-medium leading-relaxed">
						{CONTACT_DATA.subtitle}
					</p>
				</motion.div>

				{/* Right Content: CTA & Socials */}
				<motion.div
					variants={item}
					className="flex flex-col justify-end gap-10 relative z-10"
				>
					<div className="space-y-4">
						<button
							onClick={handleCopy}
							className="group relative flex flex-col items-start"
						>
							<span className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
								Get in touch
							</span>
							<span className="text-2xl md:text-3xl font-bold border-b-2 border-zinc-700 group-hover:border-indigo-500 transition-colors pb-1">
								{CONTACT_DATA.email}
							</span>

							{/* Mini Toast */}
							<AnimatePresence>
								{copied && (
									<motion.span
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: 1, x: 20 }}
										exit={{ opacity: 0 }}
										className="absolute right-0 top-0 text-indigo-400 text-[10px] font-bold uppercase"
									>
										Copied!
									</motion.span>
								)}
							</AnimatePresence>
						</button>
					</div>

					<div className="flex flex-wrap gap-3">
						{CONTACT_DATA.socials.map((s, i) => (
							<a
								key={i}
								href={s.url}
								target="_blank"
								rel="noreferrer"
								className="px-6 py-3 rounded-2xl bg-zinc-800 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
							>
								{s.label}
							</a>
						))}
					</div>
				</motion.div>

				{/* Bottom Bar */}
				<motion.div
					variants={item}
					className="md:col-span-3 pt-12 mt-12 border-t border-zinc-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600"
				>
					<p>© {new Date().getFullYear()} PORTFOLIO TEMPLATE</p>
					<p>MADE FOR CREATIVES</p>
				</motion.div>
			</motion.div>
		</section>
	);
};

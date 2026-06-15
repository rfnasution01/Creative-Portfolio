import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { STUDIO_DATA } from "@/data/site";

const ease = [0.76, 0, 0.24, 1] as const;

const scrollToId = (id: string) => {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Marquee = ({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) => (
	<div className="marquee" data-reverse={reverse}>
		<div className="marquee-track">
			{[...items, ...items, ...items].map((item, index) => (
				<span key={`${item}-${index}`} className="marquee-word">
					{item} //
				</span>
			))}
		</div>
	</div>
);

const DashboardPage = () => {
	const [cursor, setCursor] = useState({ x: -100, y: -100, hover: false });
	const [gridHint, setGridHint] = useState({ x: 24, y: 24 });
	const [sent, setSent] = useState(false);
	const [burst, setBurst] = useState(false);

	useEffect(() => {
		const onMove = (event: PointerEvent) => {
			const target = event.target as HTMLElement;
			setCursor({
				x: event.clientX,
				y: event.clientY,
				hover: Boolean(target.closest("a, button, input, textarea, .work-card, .marquee-word")),
			});
		};
		window.addEventListener("pointermove", onMove);
		return () => window.removeEventListener("pointermove", onMove);
	}, []);

	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSent(true);
		setBurst(true);
		setTimeout(() => setBurst(false), 900);
	};

	const updateGridHint = (event: MouseEvent<HTMLElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		setGridHint({ x: event.clientX - rect.left + 18, y: event.clientY - rect.top + 18 });
	};

	return (
		<main className="site-shell">
			<div
				className={`custom-cursor ${cursor.hover ? "is-hover" : ""}`}
				style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)` }}
			/>

			<nav className="top-nav" aria-label="Primary navigation">
				<button onClick={() => scrollToId("hero")} className="brand-mark" aria-label="Go to hero">
					{STUDIO_DATA.brand}
				</button>
				<div>
					{STUDIO_DATA.nav.map((item) => (
						<button key={item.target} onClick={() => scrollToId(item.target)}>
							{item.label}
						</button>
					))}
				</div>
			</nav>

			<section id="hero" className="hero-section section-pad">
				<motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ ease, duration: 0.8 }}>
					<span className="pill-badge">Independent chaos lab</span>
					<h1>
						<span>{STUDIO_DATA.hero.line1}</span>
						<span>{STUDIO_DATA.hero.line2}</span>
					</h1>
					<p>{STUDIO_DATA.hero.subtitle}</p>
					<button className="blob-button" onClick={() => scrollToId("work")}>{STUDIO_DATA.hero.cta}</button>
				</motion.div>
				<span className="scroll-hint">{STUDIO_DATA.hero.hint}</span>
			</section>

			<section id="about" className="about-section section-pad">
				<motion.div className="glitch-frame" initial={{ opacity: 0, rotate: -4 }} whileInView={{ opacity: 1, rotate: -2 }} viewport={{ once: true }} transition={{ ease, duration: 0.6 }}>
					<img src={STUDIO_DATA.about.image} alt={STUDIO_DATA.about.alt} />
				</motion.div>
				<div className="about-copy">
					<h2>NO BORING TEMPLATES.</h2>
					<p>{STUDIO_DATA.about.main}</p>
					<p className="mixed-phrase"><em>We blend brutalist aesthetics</em> with poetic motion to make brands scream.</p>
					<span className="sticker-note">{STUDIO_DATA.about.sticker}</span>
				</div>
			</section>

			<section id="work" className="work-section" onMouseMove={updateGridHint}>
				<div className="work-header">SELECTED ARTIFACTS (01-06)</div>
				<div className="drag-hint" style={{ left: gridHint.x, top: gridHint.y }}>[ Drag / Hover to Feel ]</div>
				<div className="work-grid">
					{STUDIO_DATA.projects.map((project) => (
						<article key={project.id} className={`work-card ${project.size}`}>
							<img src={project.image} alt={`${project.title} — ${project.meta}`} />
							<div className="work-overlay">
								<span>0{project.id}</span>
								<h3>{project.title}</h3>
								<p>{project.meta}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="skills-section">
				<Marquee items={STUDIO_DATA.skills.rowOne} />
				<Marquee items={STUDIO_DATA.skills.rowTwo} reverse />
			</section>

			<section id="process" className="process-section section-pad">
				<h2>HOW THE MAGIC/CHAOS HAPPENS</h2>
				<div className="gradient-divider" />
				<div className="process-list">
					{STUDIO_DATA.process.map((step) => (
						<motion.article key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease, duration: 0.6 }}>
							<span>{step.number}.</span>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</motion.article>
					))}
				</div>
			</section>

			<section className="clients-section section-pad">
				<Marquee items={STUDIO_DATA.clients.logos} />
				<blockquote>“{STUDIO_DATA.clients.quote}”</blockquote>
				<p>{STUDIO_DATA.clients.tag}</p>
			</section>

			<section id="contact" className="contact-section section-pad">
				<div className="contact-hook">
					<h2>{STUDIO_DATA.contact.title}</h2>
					<a href={`mailto:${STUDIO_DATA.contact.email}`}>{STUDIO_DATA.contact.email}</a>
					<a href={STUDIO_DATA.contact.socialUrl} target="_blank" rel="noreferrer">{STUDIO_DATA.contact.social}</a>
				</div>
				<form className="chaos-form" onSubmit={submitForm}>
					<input name="name" required placeholder="Your human name..." />
					<input name="email" type="email" required placeholder="Your digital portal (Email)..." />
					<textarea name="message" required placeholder="What's on your mind? Spill the chaos here..." />
					<button className="blob-button" type="submit">TRANSMIT SIGNALS</button>
					{sent && <span className="form-status">Signal received. We'll beam back soon.</span>}
					{burst && <span className="particle-burst" aria-hidden="true" />}
				</form>
			</section>
		</main>
	);
};

export default DashboardPage;

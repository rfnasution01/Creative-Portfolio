export const STUDIO_DATA = {
	brand: "Vapor Pixels",
	nav: [
		{ label: "About", target: "about" },
		{ label: "Artifacts", target: "work" },
		{ label: "Process", target: "process" },
		{ label: "Contact", target: "contact" },
	],
	hero: {
		line1: "Hi, I'm Vapor pixels.",
		line2: "I shape digital chaos.",
		subtitle:
			"A multidisciplinary creative studio messing around with 3D dimensions, broken typography, and interfaces that feel alive.",
		cta: "Explode Portfolio",
		hint: "Scroll to break the grid ↓",
	},
	about: {
		image:
			"https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=1200&q=85",
		alt: "Abstract black and white studio portrait with neon glitch lighting",
		main:
			"I don't do boring corporate templates. I build digital playgrounds. Born in the era of dial-up internet, now synthesizing pixels into immersive 3D realms.",
		mixed:
			"We blend brutalist aesthetics with poetic motion to make brands scream.",
		sticker: "Let's create something illegal!",
	},
	projects: [
		{
			id: 1,
			title: "Hyper-Object 3D",
			meta: "Metaverse Asset",
			image:
				"https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=85",
			size: "card-one",
		},
		{
			id: 2,
			title: "Acid Neon UI",
			meta: "Web3 Dashboard",
			image:
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
			size: "card-two",
		},
		{
			id: 3,
			title: "Glitch Symphony",
			meta: "Audio Visualizer",
			image:
				"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
			size: "card-three",
		},
		{
			id: 4,
			title: "Cyber-Brutalis",
			meta: "Fashion Brand E-Com",
			image:
				"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=85",
			size: "card-four",
		},
		{
			id: 5,
			title: "Liquid Typo",
			meta: "Interactive Installation",
			image:
				"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
			size: "card-five",
		},
		{
			id: 6,
			title: "Anti-Grid Magazine",
			meta: "Editorial Web",
			image:
				"https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=85",
			size: "card-six",
		},
	],
	skills: {
		rowOne: ["FIGMA", "BLENDER", "AFTER EFFECTS", "PROCREATE", "THREE.JS", "CINEMA 4D"],
		rowTwo: ["GLSL SHADERS", "FRAMER MOTION", "SPLINE 3D", "ADOBE CC", "RECOLETA FONT"],
	},
	process: [
		{
			number: "01",
			title: "Brain-Melting",
			text: "We dump every wild, unfiltered idea onto the canvas until it hurts.",
		},
		{
			number: "02",
			title: "3D Hard-Crafting",
			text: "Injecting geometry, baking lightmaps, and breaking the CSS grid on purpose.",
		},
		{
			number: "03",
			title: "Motion Injection",
			text: "Adding custom cubic-bezier curves so smooth your eyes will thank you.",
		},
		{
			number: "04",
			title: "The Big Bang",
			text: "We hit deploy and release the digital masterpiece into the wild.",
		},
	],
	clients: {
		logos: ["Meta-Brands", "Neon-Fashion", "SoundWave Corp", "Cyber-Agency"],
		quote:
			"Working with this studio felt like taking a trip into the year 2099. Our conversion rate tripled, and our website won three design awards. Insane style.",
		tag: "— Director of Product at Acid-Lab Co.",
	},
	contact: {
		title: "Got a wild idea? Let's make it real.",
		email: "hello@vaporpixels.studio",
		social: "@vaporpixels_",
		socialUrl: "https://instagram.com/vaporpixels_",
	},
} as const;

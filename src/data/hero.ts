import ProfileImg from "@/assets/img/profiles.jpg";

export type HeroCard =
	| {
			type: "intro";
			name: string;
			tagline: string;
			description: string;
	  }
	| {
			type: "image";
			src: string;
			alt: string;
	  }
	| {
			type: "sticker";
			text: string;
	  }
	| {
			type: "cta";
			primary: string;
			secondary: string;
	  }
	| {
			type: "social";
			items: { label: string; url: string }[];
	  };

export const HERO_DATA: HeroCard[] = [
	{
		type: "intro",
		name: "Your Name",
		tagline: "Creative Designer",
		description:
			"I create bold visuals that help brands stand out and get noticed.",
	},
	{
		type: "image",
		src: ProfileImg,
		alt: "profile",
	},
	{
		type: "sticker",
		text: "Creative Thinker",
	},
	{
		type: "sticker",
		text: "Open for Work",
	},
	{
		type: "cta",
		primary: "View Work",
		secondary: "Download CV",
	},
	{
		type: "social",
		items: [
			{ label: "Instagram", url: "#" },
			{ label: "Dribbble", url: "#" },
			{ label: "LinkedIn", url: "#" },
		],
	},
];

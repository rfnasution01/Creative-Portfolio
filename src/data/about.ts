export type AboutCard =
	| {
			type: "bio";
			title: string;
			description: string;
	  }
	| {
			type: "facts";
			items: string[];
	  }
	| {
			type: "tools";
			items: { name: string }[];
	  }
	| {
			type: "quote";
			text: string;
	  }
	| {
			type: "availability";
			status: string;
	  };

export const ABOUT_DATA: AboutCard[] = [
	{
		type: "bio",
		title: "About Me",
		description:
			"A creative designer who loves turning ideas into visuals that people actually remember. I enjoy experimenting with bold concepts and playful layouts.",
	},
	{
		type: "facts",
		items: [
			"Focused on branding & social media design",
			"Coffee fuels my creativity",
			"Always designing with music",
		],
	},
	{
		type: "tools",
		items: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Illustrator" }],
	},
	{
		type: "quote",
		text: "Design is not just what it looks like — it's how it feels.",
	},
	{
		type: "availability",
		status: "Open for freelance & full-time",
	},
];

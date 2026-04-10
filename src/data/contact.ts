export type ContactData = {
	title: string;
	subtitle: string;
	email: string;
	socials: {
		label: string;
		url: string;
	}[];
};

export const CONTACT_DATA: ContactData = {
	title: "Let’s create something cool",
	subtitle:
		"I’m open for freelance projects, collaborations, or full-time opportunities.",
	email: "your@email.com",
	socials: [
		{ label: "Instagram", url: "#" },
		{ label: "Dribbble", url: "#" },
		{ label: "LinkedIn", url: "#" },
	],
};

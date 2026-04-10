import Study1 from "@/assets/img/study-1.jpg";

export type CaseStudyItem = {
	id: number;
	title: string;
	cover: string;
	problem: string;
	process: string[];
	result: string;
};

export const CASE_STUDY_DATA: CaseStudyItem[] = [
	{
		id: 1,
		title: "Coffee Brand Identity",
		cover: Study1,
		problem:
			"The client needed a modern and memorable brand identity to stand out in a competitive coffee market.",
		process: [
			"Research competitors and visual trends",
			"Create moodboard and concept direction",
			"Design logo and brand assets",
			"Apply branding to packaging & social media",
		],
		result:
			"A bold and modern brand identity that feels fresh and appealing to young audiences.",
	},
];

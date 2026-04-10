import Produk1 from "@/assets/img/produk-1.jpg";
import Produk2 from "@/assets/img/produk-2.jpg";
import Produk3 from "@/assets/img/produk-3.jpg";

export type PortfolioItem = {
	id: number;
	title: string;
	category: "branding" | "ui" | "social";
	image: string;
	description: string;
};

export const PORTFOLIO_DATA: PortfolioItem[] = [
	{
		id: 1,
		title: "Coffee Brand Identity",
		category: "branding",
		image: Produk1,
		description: "Branding concept for a modern coffee shop.",
	},
	{
		id: 2,
		title: "Mobile App UI",
		category: "ui",
		image: Produk2,
		description: "Clean and modern mobile app design.",
	},
	{
		id: 3,
		title: "Instagram Campaign",
		category: "social",
		image: Produk3,
		description: "Social media campaign visuals.",
	},
];

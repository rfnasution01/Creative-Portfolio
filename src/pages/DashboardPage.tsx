import {
	AboutSection,
	CaseStudySection,
	ContactSection,
	HeroSection,
	PortfolioSection,
} from "@/components/sections";

const DashboardPage = () => {
	return (
		<main className="w-full min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
			{/* Hero */}
			<HeroSection />

			<AboutSection />

			<PortfolioSection />

			<CaseStudySection />

			<ContactSection />
		</main>
	);
};

export default DashboardPage;

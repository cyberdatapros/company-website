import ComplianceCarorusel from "@/components/dashboard/ComplianceCarousel";
import Jumbotron from "@/components/dashboard/Jumbotron";
import ServicesSectionDashboard from "@/components/dashboard/ServicesSection";
import PageWrapper from "@/components/wrappers/PageWrapper";
import dynamic from "next/dynamic";
const AboutSection = dynamic(
  () => import("@/components/dashboard/AboutSection")
);

export default function Home() {
  return (
    <PageWrapper>
      <Jumbotron />
      <ServicesSectionDashboard />
      <ComplianceCarorusel />
      <AboutSection />
    </PageWrapper>
  );
}

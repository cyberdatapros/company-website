import ComplianceCarorusel from "@/components/dashboard/ComplianceCarousel";
import Jumbotron from "@/components/dashboard/Jumbotron";
import ServicesSectionDashboard from "@/components/dashboard/ServicesSection";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Jumbotron />
      <ServicesSectionDashboard />
      <ComplianceCarorusel />
    </PageWrapper>
  );
}

import ComplianceCarorusel from "@/components/dashboard/ComplianceCarousel";
import FaqContainer from "@/components/dashboard/FaqContainer";
import FeedbackCarousel from "@/components/dashboard/FeedbackCarousel";
import Jumbotron from "@/components/dashboard/Jumbotron";
import ServicesSectionDashboard from "@/components/dashboard/ServicesSection";
import PageWrapper from "@/components/wrappers/PageWrapper";
import dynamic from "next/dynamic";
const AboutSection = dynamic(
  () => import("@/components/dashboard/AboutSection")
);
const StaffCarousel = dynamic(
  () => import("@/components/dashboard/StaffCarousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <PageWrapper>
      <Jumbotron />
      <ServicesSectionDashboard />
      <ComplianceCarorusel />
      <AboutSection />
      <StaffCarousel />
      <FaqContainer />
      <FeedbackCarousel />
    </PageWrapper>
  );
}

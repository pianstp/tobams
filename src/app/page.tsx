import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import CorporateTrainings from "@/components/CorporateTrainings";
import PersonalisedTraining from "@/components/PersonalisedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopmentProgram from "@/components/ManagementDevelopmentProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainTheConsultant from "@/components/TrainTheConsultant";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearningManagementSystem />
        <CorporateTrainings />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainTheConsultant />
        <CTABanner />
        <Testimonials />
      </main>
      <PreFooterCTA />
      <Footer />
    </>
  );
}

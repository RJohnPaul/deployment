import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import Companies from "@/components/ui/Companies";
import Stats from "@/components/ui/Stats";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Companies />
      <Stats/>
      <Testimonial />
      <Pricing />
      <FAQs />
    </>
  );
}

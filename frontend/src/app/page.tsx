import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SoftwareApplicationSchema, FAQPageSchema } from "@/components/Schema";

export default function Home() {
  return (
    <>
      <SoftwareApplicationSchema />
      <FAQPageSchema />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

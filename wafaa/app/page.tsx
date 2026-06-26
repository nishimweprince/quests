import { SkipLink } from "@/components/wafaa/SkipLink";
import { EmergencySupportBar } from "@/components/wafaa/EmergencySupportBar";
import { WafaaHeader } from "@/components/wafaa/WafaaHeader";
import { HeroSection } from "@/components/wafaa/HeroSection";
import { NextSteps } from "@/components/wafaa/NextSteps";
import { SupportCategories } from "@/components/wafaa/SupportCategories";
import { HelpProcess } from "@/components/wafaa/HelpProcess";
import { CommunityStory } from "@/components/wafaa/CommunityStory";
import { GetInvolved } from "@/components/wafaa/GetInvolved";
import { ContactSection } from "@/components/wafaa/ContactSection";
import { FaqSection } from "@/components/wafaa/FaqSection";
import { WafaaFooter } from "@/components/wafaa/WafaaFooter";

export default function Home() {
  return (
    <>
      <SkipLink />
      <EmergencySupportBar />
      <WafaaHeader />
      <main>
        <HeroSection />
        <NextSteps />
        <SupportCategories />
        <HelpProcess />
        <CommunityStory />
        <GetInvolved />
        <ContactSection />
        <FaqSection />
      </main>
      <WafaaFooter />
    </>
  );
}

import { HomeIntroductionSection } from "@/app/_components/home/_sections/introduction";
import { HomeServicesSection } from "@/app/_components/home/_sections/services";
import { HomeWhyGunaSection } from "@/app/_components/home/_sections/why-guna";
import { HomeRentalProcessSection } from "@/app/_components/home/_sections/rental-process";
import { HomeRelatedLinksSection } from "@/app/_components/home/_sections/related-links";
import { HomeContactCtaSection } from "@/app/_components/home/_sections/contact-cta";

import { Header } from "@/app/_components/common/Header";


import { MobileCallBar } from "@/app/_components/common/MobileCallBar";
import { FleetPreview } from "@/app/_components/home/FleetPreview";
import { Reviews } from "@/app/_components/home/Reviews";




import { HeroStage } from "@/app/_components/home/HeroStage";
import { ScrollStory } from "@/app/_components/home/ScrollStory";
import { ScrollEffects } from "@/app/_components/home/ScrollEffects";
import { DrivePicker } from "@/app/_components/home/DrivePicker";
import { SiteFooter } from "@/app/_components/common/SiteFooter";
import { PromotionCarousel } from "@/app/_components/events/PromotionCarousel";


export default function Home() {
  return <>
    <a className={"skip-link fixed [z-index:300] [top:-60px] [left:15px] bg-paper [color:#111] [padding:12px_20px] [&:focus]:top-[10px]"} href="#main">본문으로 바로가기</a>
    <Header />
    <ScrollEffects />
    <main id="main">
      <HeroStage />
      <PromotionCarousel />

      <HomeIntroductionSection />

      <ScrollStory />

      <HomeServicesSection />

      <DrivePicker />
      <FleetPreview />

      <HomeWhyGunaSection />

      <HomeRentalProcessSection />

      <Reviews />
      <HomeRelatedLinksSection />

      <HomeContactCtaSection />
    </main>
    <SiteFooter />
    <MobileCallBar />
  </>;
}

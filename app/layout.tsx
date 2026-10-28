import { InquiryProvider } from "@/app/_components/common/InquiryProvider";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/app/_components/common/Analytics";
import { getSiteUrl } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

const url = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11141a",
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "부산 렌터카 건아렌트카 | 단기·월·장기렌트·사고대차",
  description: "부산 연제구 연산동 건아렌트카. 약 20년 운영 경험, 15개 차종의 기준 대여 요금과 단기렌트, 월렌트, 장기렌트, 보험사고대차를 안내합니다. 차량 및 요금 문의 051-866-1124.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: process.env.VERCEL_ENV !== "preview" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    url: "/",
    title: "부산 렌터카, 다양한 선택의 시작 | 건아렌트카",
    description: "부산 연산동 20년 운영 경험. 단기·월·장기렌트와 사고대차를 전화로 상담하세요.",
    images: [{ url: "/images/og/cover.png", width: 1200, height: 630, alt: "건아렌트카 부산 렌터카 안내" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/cover.png"] },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "@id": `${url}/#business`,
  name: site.legalName,
  alternateName: [site.name, site.englishName],
  url,
  telephone: "+82-51-866-1124",
  description: "부산 연제구 연산동에서 단기렌트, 월렌트, 장기렌트 및 보험사고대차를 안내하는 렌터카 업체",
  address: {
    "@type": "PostalAddress",
    streetAddress: "반송로 68",
    addressLocality: "연제구",
    addressRegion: "부산광역시",
    addressCountry: "KR",
  },
  areaServed: ["부산광역시", "김해시", "양산시", "창원시"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "렌터카 서비스",
    itemListElement: ["단기렌트", "월렌트", "장기렌트", "보험사고대차"].map((name) => ({ "@type": "OfferCatalog", name })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ko" className={"[&_*]:[box-sizing:border-box] [scroll-behavior:smooth] [scroll-padding-top:78px] [&_*::selection]:bg-[#cfc0a9] [&_*::selection]:text-[#161616] [&_*:focus-visible]:[outline:3px_solid_#af9570] [&_*:focus-visible]:[outline-offset:4px] [@media(max-width:600px)]:[scroll-padding-top:64px] [@media(prefers-reduced-motion:reduce)]:[scroll-behavior:auto] [scroll-padding-top:76px]"}><body className={"m-0 [background:var(--paper)] [color:var(--ink)] [font-family:var(--font-base)] [-webkit-font-smoothing:antialiased] [&_button]:[font:inherit] [&_button]:cursor-pointer [&_img]:max-w-full [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0 [&_p]:m-0 [&_h1]:[letter-spacing:-.055em] [&_h1]:[word-break:keep-all] [&_h2]:[letter-spacing:-.055em] [&_h2]:[word-break:keep-all] [&_h3]:[letter-spacing:-.055em] [&_h3]:[word-break:keep-all] [&_p]:[line-height:1.75] [&_section[id]]:[scroll-margin-top:70px] [&_.dot]:w-[4px] [&_.dot]:h-[4px] [&_.dot]:[border-radius:50%] [&_.dot]:[background:currentColor] [&_.dot]:inline-block [&_.hero\\\\_\\\\_photo]:absolute [&_.hero\\\\_\\\\_photo]:[inset:0] [&_.hero\\\\_\\\\_shade]:absolute [&_.hero\\\\_\\\\_shade]:[inset:0] [&_.hero\\\\_\\\\_photo_img]:object-cover [&_.hero\\\\_\\\\_photo_img]:[object-position:center_58%] [&_.hero\\\\_\\\\_photo_img]:[transform:scale(1.055)] [&_.hero\\\\_\\\\_photo_img]:[animation:hero-zoom_1.9s_cubic-bezier(.2,.7,.2,1)_both] [&_.hero\\\\_\\\\_shade]:[background:linear-gradient(90deg,rgba(8,11,15,.82)_0%,rgba(8,11,15,.56)_39%,rgba(8,11,15,.10)_85%),linear-gradient(0deg,rgba(8,11,15,.72)_0%,transparent_29%,rgba(8,11,15,.13)_100%)] [&_.hero\\\\_\\\\_content]:relative [&_.hero\\\\_\\\\_content]:[z-index:1] [&_.hero\\\\_\\\\_content]:[min-height:100%] [&_.hero\\\\_\\\\_content]:flex [&_.hero\\\\_\\\\_content]:flex-col [&_.hero\\\\_\\\\_content]:items-start [&_.hero\\\\_\\\\_content]:justify-center [&_.hero\\\\_\\\\_content]:pt-[30px] [&_.hero\\\\_\\\\_content]:pb-[90px] [&_.hero_h1]:text-[clamp(62px,7.7vw,122px)] [&_.hero_h1]:font-[770] [&_.hero_h1]:[letter-spacing:-.074em] [&_.hero_h1]:[line-height:1.1] [&_.hero_h1]:[margin:24px_0_25px] [&_.hero_h1_span]:text-[#e2e5e9] [&_.hero\\\\_\\\\_lead]:text-[clamp(16px,1.5vw,20px)] [&_.hero\\\\_\\\\_lead]:[line-height:1.75] [&_.hero\\\\_\\\\_lead]:[letter-spacing:-.02em] [&_.hero\\\\_\\\\_lead]:text-[#e2e3e5] [&_.hero\\\\_\\\\_links]:flex [&_.hero\\\\_\\\\_links]:gap-[11px] [&_.hero\\\\_\\\\_links]:mt-[34px] [&_.hero\\\\_\\\\_bottom]:absolute [&_.hero\\\\_\\\\_bottom]:bottom-[31px] [&_.hero\\\\_\\\\_bottom]:[left:0] [&_.hero\\\\_\\\\_bottom]:[right:0] [&_.hero\\\\_\\\\_bottom]:flex [&_.hero\\\\_\\\\_bottom]:items-center [&_.hero\\\\_\\\\_bottom]:justify-between [&_.hero\\\\_\\\\_bottom]:text-[#e0e0e0] [&_.hero\\\\_\\\\_bottom]:text-[10px] [&_.hero\\\\_\\\\_bottom]:font-[720] [&_.hero\\\\_\\\\_bottom]:[letter-spacing:.12em] [&_.hero\\\\_\\\\_bottom_a]:flex [&_.hero\\\\_\\\\_bottom_a]:gap-[15px] [&_.hero\\\\_\\\\_bottom_a]:items-center [&_.hero\\\\_\\\\_bottom_a_span]:text-xl [&_.hero\\\\_\\\\_bottom_a:hover]:text-paper [&_.brand--light_.brand\\\\_\\\\_text]:text-paper [@media(max-width:900px)]:[&_.mobile-nav--open]:block [@media(max-width:900px)]:[&_.hero]:h-[680px] [@media(max-width:900px)]:[&_.hero]:min-h-[640px] [@media(max-width:900px)]:[&_.hero\\\\_\\\\_photo_img]:[object-position:64%_center] [@media(max-width:900px)]:[&_.hero\\\\_\\\\_shade]:[background:linear-gradient(90deg,#06080dc9,#06080d73_56%,#06080d14),linear-gradient(0deg,#05060892,transparent_40%)] [@media(max-width:900px)]:[&_.hero_h1]:text-[clamp(58px,9vw,86px)] [@media(max-width:600px)]:[&_.hero]:min-h-[610px] [@media(max-width:600px)]:[&_.hero]:[height:calc(88svh_-_63px)] [@media(max-width:600px)]:[&_.hero]:max-h-[800px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_photo_img]:[object-position:65%_center] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_shade]:[background:linear-gradient(90deg,#080b0ed6,#080b0e62_80%),linear-gradient(0deg,#05070be3,transparent_44%)] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_content]:justify-end [@media(max-width:600px)]:[&_.hero\\\\_\\\\_content]:pb-23 [@media(max-width:600px)]:[&_.hero_h1]:text-[clamp(53px,12vw,74px)] [@media(max-width:600px)]:[&_.hero_h1]:[margin:20px_0] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_lead]:text-[15px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links]:mt-[25px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links]:gap-[9px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links_.pill]:text-xs [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links_.pill]:min-h-[46px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links_.pill]:[padding:12px_17px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_links_.pill]:gap-[9px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_bottom]:bottom-[27px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_bottom>span]:text-[9px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_bottom>span]:max-w-[180px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_bottom_a]:text-[9px] [@media(max-width:600px)]:[&_.hero\\\\_\\\\_bottom_a]:gap-[7px] [@media(prefers-reduced-motion:reduce)]:[&_.hero\\\\_\\\\_photo_img]:[animation:none] [@media(prefers-reduced-motion:reduce)]:[&_.hero\\\\_\\\\_photo_img]:[transform:none] bg-paper [&_.will-reveal]:opacity-0 [&_.will-reveal]:[transform:translateY(40px)] [&_.will-reveal]:[transition:opacity_.8s_ease,transform_.8s_cubic-bezier(.16,1,.3,1)] [@media(prefers-reduced-motion:reduce)]:[&_.will-reveal]:opacity-100 [@media(prefers-reduced-motion:reduce)]:[&_.will-reveal]:[transform:none] [@media(prefers-reduced-motion:reduce)]:[&_.will-reveal]:[transition:none] [&_[data-scroll-visual]]:overflow-hidden [&_[data-scroll-visual]]:[isolation:isolate] [&_[data-scroll-visual]_img]:[transform:translate3d(0,var(--scroll-shift,0px),0)_scale(1.10)] [&_[data-scroll-visual]_img]:[will-change:transform] [@media(prefers-reduced-motion:reduce)]:[&_[data-scroll-visual]_img]:[transform:none] [@media(prefers-reduced-motion:reduce)]:[&_[data-scroll-visual]_img]:[will-change:auto] [&_.service-seo\\\\_\\\\_breadcrumb]:flex [&_.service-seo\\\\_\\\\_breadcrumb]:items-center [&_.service-seo\\\\_\\\\_breadcrumb]:gap-[10px] [&_.service-seo\\\\_\\\\_breadcrumb]:[flex-wrap:wrap] [&_.service-seo\\\\_\\\\_breadcrumb]:mt-[22px] [&_.service-seo\\\\_\\\\_breadcrumb]:mb-[-30px] [&_.service-seo\\\\_\\\\_breadcrumb]:text-xs [&_.service-seo\\\\_\\\\_breadcrumb]:text-[#737781] [&_.service-seo\\\\_\\\\_breadcrumb_a]:text-[#595d66] [&_.service-seo\\\\_\\\\_breadcrumb_a]:[text-decoration:underline] [&_.service-seo\\\\_\\\\_breadcrumb_a]:[text-underline-offset:3px] [&_.service-seo\\\\_\\\\_breadcrumb_strong]:font-bold [&_.service-seo\\\\_\\\\_breadcrumb_strong]:text-[#14171d] [@media(max-width:1100px)]:[&_.mobile-nav--open]:block [@media(max-width:1100px)]:[&_.mobile-nav--open]:bg-paper [@media(max-width:1100px)]:[&_.mobile-nav--open]:[border-top:1px_solid_#ececef] [@media(max-width:1100px)]:[&_.mobile-nav--open]:[box-shadow:0_14px_30px_#0001] [@media(max-width:1100px)]:[&_.mobile-nav--open]:[max-height:calc(100dvh_-_72px)] [@media(max-width:1100px)]:[&_.mobile-nav--open]:[overflow-y:auto] [@media(max-width:760px)]:[&_.service-seo\\\\_\\\\_breadcrumb]:mt-[18px] [@media(max-width:760px)]:[&_.service-seo\\\\_\\\\_breadcrumb]:mb-[-12px] [@media(max-width:760px)]:[&_.mobile-nav--open]:[max-height:calc(100dvh_-_63px)]"}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
    <InquiryProvider>{children}</InquiryProvider>
    <Analytics />
  </body></html>;
}

# 건아렌트카 UI 구조 — Tailwind CSS v4

## 참고한 첨부 프로젝트의 설계 패턴

첨부 프로젝트 `src/app/about/doctors`는 검색/필터·목록·CTA를 `_sections`와 세부 카드 컴포넌트로 구분하고, `src/app/about/tour`는 탭·시설 UI를 `_components`로, `src/app/about/equipment`는 목록/상세/탭을 기능별 컴포넌트로 분리합니다. `src/app/_components/common`은 Inner / PageHeader / Breadcrumb처럼 반복되는 UI의 공통 관리 영역입니다.

건아렌트카의 기존 `app` 기반 라우팅을 바꾸지 않고 같은 원칙을 적용합니다. **병원 도메인의 색상·의료 콘텐츠는 복사하지 않습니다.**

## 결과 폴더

```text
app/
  _components/
    common/        Header, Brand, SiteFooter, InnerPageShell, DetailHero,
                   PhoneLink, MobileCallBar, Icon, Analytics
    home/          HeroStage, ScrollStory, DrivePicker, Reviews, ScrollEffects,
                   FleetPreview, home-page
      _sections/    introduction, services, why-guna, rental-process,
                   related-links, contact-cta
    cars/          Fleet, ShortTermRates, cars-page
    services/      ServiceDetailsPage, services-page
    guide/         FAQ, guide-page
    events/        PromotionCarousel, events-page
    contact/       contact-page
  page.tsx         얇은 페이지 래퍼
  cars/page.tsx    SEO metadata + PageContent 호출
  services/{short-term,monthly,long-term,accident}/page.tsx
                   고유 metadata 및 실제 상세 페이지
  globals.css      Tailwind import + 팔레트 + 시맨틱 토큰 + 반응형 글자 크기 + 키프레임
```

## Tailwind 원칙

- `className`에서 `flex`, `grid`, `gap-4`, `px-5`, `text-sm`, `lg:` 같은 Tailwind 유틸리티 사용.
- 기존 UI의 정확한 치수, 애니메이션 및 다층 셀렉터는 기존 arbitrary-value/variant 클래스를 **유지**해 시각적 회귀를 최소화합니다.
- `@apply`와 `@utility` 사용 금지. `globals.css`는 디자인 토큰과 브라우저 기본 설정·키프레임에만 사용.
- 원본 프로젝트 `globals.css`의 **primitive/semantic token + mobile/desktop type scale + base layer** 패턴 참고.
- 색상은 `bg-brand`, `text-text-secondary`, `border-border-default`, `bg-accent` 등 건아렌트카 토큰을 사용.

## 주의사항

- `page.tsx`에 있는 Google/Naver 메타데이터는 유지합니다.
- 전화 예약, 기존 서비스·차량 데이터와 헤더의 독립 라우트 이동 기능을 변경하지 않습니다.
- 본 패치는 코드 구조와 공통 디자인 시스템 재정리이며, 화면 디자인을 병원 사이트처럼 변경하는 패치가 아닙니다.
- 모든 기존 색상 상수를 기본 팔레트 클래스로 전환한 것은 아닙니다. Tailwind arbitrary-value로 보존된 기존의 색상/간격도 있습니다.

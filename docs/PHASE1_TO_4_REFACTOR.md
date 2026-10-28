# 건아렌트카 1~4단계 적용 범위

1. **Tailwind 코드 정리**: 시맨틱 색상 토큰을 재사용하고, 공통 Container/Breadcrumb/PageTabs/SectionHeading/SiteActions로 반복 스타일 통합. `cleanup-layout.mjs`는 RootLayout에 남은 하위 선택자 중 **정적으로 안전한 직접 클래스 규칙만** JSX로 옮깁니다. 동적·중첩 선택자는 기존 UI 보호를 위해 잔존하며 결과는 `docs/LAYOUT_UTILITY_REFACTOR.json`에 기록됩니다. 그러므로 모든 이전 선택자 제거까지 완료한 것은 아닙니다.
2. **차량 탐색**: 기존 차종 버튼·사진·요금 모달 유지. 차량명/브랜드 검색, 요금순/이름순 정렬, 15개 `/cars/{id}` 상세 페이지와 고유 메타데이터, sitemap, 상세 페이지 링크 추가.
3. **공통 UI**: Container, Breadcrumb, SectionHeading, PageTabs, SiteActions, InquiryProvider. 주요 CTA를 전화 크게/상담 요청 작게 표준화. 원래 회사 전화 051-866-1124 및 최종 예약은 전화 확인 정책 유지.
4. **브라우저 테스트**: Playwright로 독립 라우트, 검색, 상세, 폼, 모바일 CTA, API 거절 및 데스크톱·모바일 스크린샷 회귀 테스트를 실행. 초기 스냅샷은 **패치 후 기준선**이며 이전 버전과 픽셀 비교를 의미하지 않습니다.

## 한계
- Notion 서비스와의 실제 연결은 서버 전용 API 토큰 및 Data Source ID가 없어 **설정 대기 상태**입니다.
- 새로운 공개 정보/대여 조건/가용 수량/보험 가격은 만들어 넣지 않았습니다.
- 최초 시각 회귀 스냅샷을 반드시 브라우저에서 육안 확인 후 승인하세요.

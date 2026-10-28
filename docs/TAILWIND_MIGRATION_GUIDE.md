# 건아렌트카 · Tailwind CSS v4 스타일 가이드

## 전환 방식

- `app/globals.css`의 핵심 11색을 Tailwind v4 `@theme inline`의 `--color-*` 토큰으로 정의합니다. 기존 `:root` 변수도 호환을 위해 남깁니다.
- JSX/TSX에서 단독으로 사용되는 스타일 클래스는 가능한 범위에서 `className`의 Tailwind 유틸리티로 이동합니다. 기존 의미 기반 클래스명은 스크립트/DOM 참조 호환을 위해 함께 유지합니다.
- 상태 선택자(`:hover`, `.is-active`), 자식 선택자, 스크롤 연동, 반응형 미디어 쿼리는 동작을 유지하기 위해 CSS 선택자에 남깁니다. 이들의 스타일 선언은 Tailwind의 `@apply` 및 arbitrary-property 유틸리티로 전환합니다.
- CSS `@keyframes`, `content`, 인라인 SVG data URL, JS가 사용하는 CSS 커스텀 속성 등 CSS 고유 기능은 원형을 유지합니다.
- 공통 가격/차량/SEO 데이터, URL, React 인터랙션 로직은 수정하지 않습니다.

## Tailwind 팔레트

| 토큰 | 색상 | 사용 예시 |
| --- | --- | --- |
| `bg-ink`, `text-ink` | `#15171b` | 본문 텍스트 |
| `bg-charcoal` | `#0d1015` | 다크 패널 |
| `bg-kinetic-ink` | `#090c12` | 다크 히어로 |
| `bg-paper`, `text-paper` | `#ffffff` | 화이트 |
| `bg-silver` | `#f5f5f7` | 밝은 섹션 |
| `bg-kinetic-surface` | `#f4f5f6` | 인터랙티브 표면 |
| `text-muted` | `#767980` | 부가 정보 |
| `border-line` | `#e4e5e8` | 경계선 |
| `text-gold`, `bg-gold` | `#ad946e` | 샴페인 골드 |
| `text-gold-dark` | `#827052` | 진한 골드 |
| `bg-kinetic-lime`, `text-kinetic-lime` | `#ddf57e` | 인터랙션 강조 |

## 작업 방식

- 신규 UI는 가급적 JSX `className="flex items-center rounded-2xl bg-paper ..."`로 작성합니다.
- 복잡한 속성은 Tailwind v4 arbitrary-property 문법인 `[property:value]`와 `@apply`를 사용할 수 있습니다.
- 스크롤 스토리의 `--story-progress`, 이미지 이동 변수 등 런타임 CSS 커스텀 속성을 지우지 마세요.
- 원본 백업 폴더는 `~/Downloads/guna-tailwind-backup-*`입니다.
- 전환 통계는 `docs/TAILWIND_MIGRATION_REPORT.json`입니다.

## 중요한 제약

이 작업은 모든 CSS를 없애는 *utility-only* 재작성은 아닙니다. Tailwind CSS v4의 테마/유틸리티/`@apply`를 도입해 기존 스타일 선언을 옮기되, CSS만으로 표현하거나 유지해야 하는 선택자·키프레임·반응형 규칙은 남겨 화면 호환성을 우선했습니다. 브라우저별 시각적 일치 여부는 적용 후 실제 장치에서 추가 확인해야 합니다.

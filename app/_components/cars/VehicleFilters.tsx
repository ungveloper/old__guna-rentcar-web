"use client";

export type VehicleSort = "default" | "price-low" | "price-high" | "name";

type Props = {
  search: string;
  onSearch: (text: string) => void;
  sort: VehicleSort;
  onSort: (sort: VehicleSort) => void;
  count: number;
};

export function VehicleFilters({ search, onSearch, sort, onSort, count }: Props) {
  return <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-line bg-silver/60 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5" role="search" aria-label="차량 검색 및 정렬">
    <div className="w-full sm:max-w-md">
      <label htmlFor="vehicle-search" className="mb-2 block text-xs font-bold text-muted">차량명 또는 제조사 검색</label>
      <input id="vehicle-search" type="search" placeholder="예: 레이, 기아, GV80" value={search} onChange={event => onSearch(event.target.value)} autoComplete="off" className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/20" />
    </div>
    <div className="flex items-end justify-between gap-4 sm:justify-end">
      <p className="pb-3 text-xs text-muted" aria-live="polite"><strong className="text-ink">{count}개</strong> 차량</p>
      <div className="w-40">
        <label htmlFor="vehicle-sort" className="mb-2 block text-xs font-bold text-muted">정렬</label>
        <select id="vehicle-sort" value={sort} onChange={event => onSort(event.target.value as VehicleSort)} className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20">
          <option value="default">기본 순서</option><option value="price-low">1일 요금 낮은순</option><option value="price-high">1일 요금 높은순</option><option value="name">차량명순</option>
        </select>
      </div>
    </div>
  </div>;
}

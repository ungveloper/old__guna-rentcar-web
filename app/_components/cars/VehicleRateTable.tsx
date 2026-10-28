import type { Vehicle } from "@/types/content";

const price = (value: number | undefined) => value === undefined ? "전화 문의" : `${value.toLocaleString("ko-KR")}원`;

export function VehicleRateTable({ vehicle }: { vehicle: Vehicle }) {
  const rates = [
    ["6시간", vehicle.rates.hours6, false],
    ["12시간", vehicle.rates.hours12, false],
    ["1~2일", vehicle.rates.days1to2, true],
    ["3~6일", vehicle.rates.days3to6, true],
    ["7일 이상", vehicle.rates.days7plus, true],
  ] as const;
  return <div className="overflow-hidden rounded-2xl border border-line">
    <table className="w-full border-collapse text-left text-sm">
      <caption className="sr-only">{vehicle.model} 공개 기준 요금표</caption>
      <thead className="bg-charcoal text-white"><tr><th scope="col" className="px-5 py-4">이용 기간</th><th scope="col" className="px-5 py-4">기준 대여 요금</th></tr></thead>
      <tbody>{rates.map(([label, amount, daily]) => <tr key={label} className="border-t border-line even:bg-silver/60"><th scope="row" className="px-5 py-4 font-semibold text-ink">{label}</th><td className="px-5 py-4 font-bold text-ink">{price(amount)}{daily && amount !== undefined && <span className="ml-1 text-xs font-normal text-muted">/ 1일</span>}</td></tr>)}</tbody>
    </table>
  </div>;
}

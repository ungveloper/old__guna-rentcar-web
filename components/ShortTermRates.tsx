import { vehicles } from "@/data/vehicles";

const won = (amount?: number) => amount === undefined ? "전화 문의" : `${amount.toLocaleString("ko-KR")}원`;

/** 요금표 출처: 건아렌트카 제공 4쪽 PDF. 시간 요금 미기재 항목은 임의로 기입하지 않습니다. */
export function ShortTermRates() {
  return (
    <div className="detail-rate-scroll [overflow-x:auto] [overscroll-behavior-x:contain] rounded-[20px] [border:1px_solid_#e5e6e9] [background:white]" role="region" aria-label="차량별 단기렌트 요금표" tabIndex={0}>
      <table className="detail-rates [border-collapse:collapse] w-full [min-width:765px] text-left [font-size:14px]">
        <caption className="sr-only">차량별 6시간·12시간 및 1~2일·3~6일·7일 이상 대여 시 1일 기준 요금</caption>
        <thead><tr><th scope="col">차량</th><th scope="col">6시간</th><th scope="col">12시간</th><th scope="col">1~2일 <small>/ 1일</small></th><th scope="col">3~6일 <small>/ 1일</small></th><th scope="col">7일 이상 <small>/ 1일</small></th></tr></thead>
        <tbody>{vehicles.map((car) => (
          <tr key={car.id}>
            <th scope="row"><span className="detail-rate-brand block [font-size:11px] font-semibold [color:#959ba5] [margin-bottom:3px]">{car.brand}</span>{car.model}</th>
            <td>{won(car.rates.hours6)}</td><td>{won(car.rates.hours12)}</td>
            <td className="detail-rate-key font-extrabold [color:#866c4a]">{won(car.rates.days1to2)}</td>
            <td>{won(car.rates.days3to6)}</td>
            <td>{won(car.rates.days7plus)}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

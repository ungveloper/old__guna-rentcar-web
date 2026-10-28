import { vehicles } from "@/data/vehicles";

const won = (amount?: number) => amount === undefined ? "전화 문의" : `${amount.toLocaleString("ko-KR")}원`;

/** 요금표 출처: 건아렌트카 제공 4쪽 PDF. 시간 요금 미기재 항목은 임의로 기입하지 않습니다. */
export function ShortTermRates() {
  return (
    <div className="detail-rate-scroll [overflow-x:auto] [overscroll-behavior-x:contain] rounded-[20px] [border:1px_solid_#e5e6e9] [background:white]" role="region" aria-label="차량별 단기렌트 요금표" tabIndex={0}>
      <table className={"detail-rates [border-collapse:collapse] w-full [min-width:765px] text-left [font-size:14px] [&_thead]:bg-[#11151b] [&_thead]:text-paper [&_th]:[padding:20px_19px] [&_th]:[border-bottom:1px_solid_#eaebee] [&_th]:[white-space:nowrap] [&_td]:[padding:20px_19px] [&_td]:[border-bottom:1px_solid_#eaebee] [&_td]:[white-space:nowrap] [&_thead_th]:text-xs [&_thead_th]:[letter-spacing:.025em] [&_thead_th]:font-bold [&_thead_th]:border-0 [&_thead_small]:text-[10px] [&_thead_small]:[opacity:.65] [&_thead_small]:font-normal [&_tbody_th]:text-base [&_tbody_th]:font-[730] [&_tbody_tr:last-child_th]:[border-bottom:0] [&_tbody_tr:last-child_td]:[border-bottom:0] [&_tbody_tr:nth-child(even)]:bg-[#fafbfc] [&_tbody_tr:hover]:bg-[#f2f3f6] [@media(max-width:480px)]:[&_th]:p-4 [@media(max-width:480px)]:[&_td]:p-4"}>
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

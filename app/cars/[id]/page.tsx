import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vehicles } from "@/data/vehicles";
import { InnerPageShell } from "@/app/_components/common/InnerPageShell";
import { VehicleDetail } from "@/app/_components/cars/VehicleDetail";

export function generateStaticParams() { return vehicles.map(vehicle => ({ id: vehicle.id })); }

type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vehicle = vehicles.find(item => item.id === id);
  if (!vehicle) return { title: "차량을 찾을 수 없습니다 | 건아렌트카", robots: { index: false } };
  const description = `부산 건아렌트카 ${vehicle.brand} ${vehicle.model} 차량 안내. 차량 사진과 제공된 기간별 기준 대여 요금, 전화·온라인 상담 요청. 실제 차량과 최종 요금·예약 가능 여부는 전화 문의 051-866-1124.`;
  return { title: `${vehicle.model} 렌트 요금·차량 안내 | 부산 건아렌트카`, description, alternates: { canonical: `/cars/${id}` }, openGraph: { title: `${vehicle.model} 렌트 요금 | 건아렌트카`, description, url: `/cars/${id}`, images: [vehicle.image] } };
}
export default async function CarDetailPage({ params }: Props) {
  const { id } = await params;
  const vehicle = vehicles.find(item => item.id === id);
  if (!vehicle) notFound();
  return <InnerPageShell><VehicleDetail vehicle={vehicle} /></InnerPageShell>;
}

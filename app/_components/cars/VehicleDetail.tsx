import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/types/content";
import { Container } from "@/app/_components/common/Container";
import { Breadcrumb } from "@/app/_components/common/Breadcrumb";
import { SectionHeading } from "@/app/_components/common/SectionHeading";
import { SiteActions } from "@/app/_components/common/SiteActions";
import { VehicleRateTable } from "@/app/_components/cars/VehicleRateTable";
import { vehicles } from "@/data/vehicles";

export function VehicleDetail({ vehicle }: { vehicle: Vehicle }) {
  const alternatives = vehicles.filter(item => item.id !== vehicle.id && item.category === vehicle.category).slice(0, 3);
  return <Container className="pb-24">
    <Breadcrumb items={[{ label: "차량·요금", href: "/cars" }, { label: vehicle.model }]} />
    <section className="grid items-start gap-8 py-8 lg:grid-cols-2 lg:gap-14">
      <div className="overflow-hidden rounded-3xl bg-silver"><Image src={vehicle.image} alt={vehicle.imageAlt} width={1280} height={853} priority sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full object-cover" /></div>
      <div className="space-y-7">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-dark">GUN-A RENTCAR / VEHICLE</p><h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{vehicle.model}</h1><p className="mt-4 text-base leading-relaxed text-muted">{vehicle.brand} {vehicle.model} 차량별 대여 기준 요금을 확인하세요. 차량별 실제 이용 가능 여부와 보험·인수 조건은 전화 상담이 필요합니다.</p></div>
        <VehicleRateTable vehicle={vehicle} />
        <SiteActions vehicleId={vehicle.id} service="cars" />
        <p className="rounded-xl bg-silver px-4 py-4 text-xs leading-relaxed text-muted">사진은 차량 모델 안내용입니다. 실제 대여 차량의 연식·색상·트림은 다를 수 있습니다. 홈페이지의 상담 요청은 예약 확정이 아닙니다.</p>
      </div>
    </section>
    {alternatives.length > 0 && <section className="mt-16">
      <SectionHeading eyebrow="OTHER VEHICLES" title="비슷한 차종도 비교해 보세요." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{alternatives.map(other => <Link key={other.id} href={`/cars/${other.id}`} className="group overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"><Image src={other.image} alt={other.imageAlt} width={640} height={425} className="aspect-[3/2] w-full object-cover transition-transform group-hover:scale-105" /><span className="block p-5 text-lg font-bold text-ink">{other.model} <span className="float-right text-gold">↗</span></span></Link>)}</div>
    </section>}
    <div className="mt-12"><Link href="/cars" className="text-sm font-semibold text-muted underline underline-offset-4 hover:text-ink">← 전체 차량으로 돌아가기</Link></div>
  </Container>;
}

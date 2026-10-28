import { ServiceDetailsPage } from "@/app/_components/services/ServiceDetailsPage";
import { serviceMetadata } from "@/lib/service-seo";

export const metadata = serviceMetadata("accident");

export default function Page() {
  return <ServiceDetailsPage slug="accident" />;
}

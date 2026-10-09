import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Performance() {
  return <ServicePage data={SERVICES['performance']} />;
}

import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Website() {
  return <ServicePage data={SERVICES['website']} />;
}

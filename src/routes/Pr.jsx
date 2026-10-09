import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Pr() {
  return <ServicePage data={SERVICES['pr']} />;
}

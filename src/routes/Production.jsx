import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Production() {
  return <ServicePage data={SERVICES['production']} />;
}

import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Branding() {
  return <ServicePage data={SERVICES['branding']} />;
}

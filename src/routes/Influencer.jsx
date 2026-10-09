import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Influencer() {
  return <ServicePage data={SERVICES['influencer']} />;
}

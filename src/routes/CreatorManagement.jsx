import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function CreatorManagement() {
  return <ServicePage data={SERVICES['creator-management']} />;
}

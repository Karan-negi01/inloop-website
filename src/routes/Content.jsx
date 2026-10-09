import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Content() {
  return <ServicePage data={SERVICES['content']} />;
}

import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Seo() {
  return <ServicePage data={SERVICES['seo']} />;
}

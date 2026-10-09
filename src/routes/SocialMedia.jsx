import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function SocialMedia() {
  return <ServicePage data={SERVICES['social-media']} />;
}

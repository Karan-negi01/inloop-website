import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/lib/serviceData';

export default function Ecommerce() {
  return <ServicePage data={SERVICES['ecommerce']} />;
}

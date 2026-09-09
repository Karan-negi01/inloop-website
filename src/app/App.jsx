import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/routes/Home';
import Branding from '@/routes/Branding';
import SocialMedia from '@/routes/SocialMedia';
import Website from '@/routes/Website';
import Influencer from '@/routes/Influencer';
import Performance from '@/routes/Performance';
import Ai from '@/routes/Ai';
import CreatorManagement from '@/routes/CreatorManagement';
import Production from '@/routes/Production';
import Pr from '@/routes/Pr';
import Content from '@/routes/Content';
import Seo from '@/routes/Seo';
import Ecommerce from '@/routes/Ecommerce';
import Careers from '@/routes/Careers';
import Blog from '@/routes/Blog';
import Portfolio from '@/routes/Portfolio';
import About from '@/routes/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/website" element={<Website />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/creator-management" element={<CreatorManagement />} />
          <Route path="/production" element={<Production />} />
          <Route path="/pr" element={<Pr />} />
          <Route path="/content" element={<Content />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

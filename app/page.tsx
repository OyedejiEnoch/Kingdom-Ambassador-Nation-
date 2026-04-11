import Hero from '@/sections/Hero';
import Welcome from '@/sections/Welcome';
import Vision from '@/sections/Vision';
import Ministry from '@/sections/Ministry';
import Programs from '@/sections/Programs';
import Give from '@/sections/Give';
import Media from '@/sections/Media';
import Meetings from '@/sections/Meetings';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Mandate from '@/sections/Mandate';


export default function Home() {

  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Welcome / Our Story ── */}
      <Welcome />

      {/* ── Vision Statement ── */}
      <Vision />

      {/* ── Ministry Expressions ── */}
      <Ministry />

      <Mandate />

      {/* ── Programs ── */}
      <Programs />

      {/* ── Give Preview ── */}
      <Give />

      {/* ── Media CTA ── */}
      <Media />

      {/* ── Weekly Meeting Banner ── */}
      <Meetings />
    </div>
  );
}

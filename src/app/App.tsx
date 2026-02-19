import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { CTAFooter } from "./components/cta-footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2E8CF]">
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <CTAFooter />
    </div>
  );
}
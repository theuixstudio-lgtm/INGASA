import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Differences } from "./components/Differences";
import { VisionMission } from "./components/VisionMission";
import { Stats } from "./components/Stats";
import { ContactCTA } from "./components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Differences />
      <Services />
      <VisionMission />
      <ContactCTA />
    </>
  );
}

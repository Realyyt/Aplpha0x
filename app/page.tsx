import Hero from "./sections/hero";
import ScrollHighlight from "./sections/ScrollHighlight"

export default function Home() {
  return (
    <div className="scrollable">
      <Hero/>
      <ScrollHighlight/>
    </div>
  );
}

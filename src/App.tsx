import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Links } from "./sections/Links";
import { Projects } from "./sections/Projects";

export function App() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Links />
      <Projects />
    </main>
  );
}

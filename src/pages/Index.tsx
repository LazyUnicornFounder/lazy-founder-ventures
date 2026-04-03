import StartupCard from "@/components/StartupCard";
import lazycloudImg from "@/assets/lazycloud.png";
import autonomousCapitalismImg from "@/assets/autonomous-capitalism.png";
import soloUnicornLeagueImg from "@/assets/solo-unicorn-league.png";
import breakingmuseImg from "@/assets/breakingmuse.png";
import lazyunicornImg from "@/assets/lazyunicorn.png";

const startups = [
  {
    index: "01",
    name: "LazyCloud.ai",
    url: "https://LazyCloud.ai",
    tagline: "Bring your file server to life.",
    status: "active" as const,
    image: lazycloudImg,
  },
  {
    index: "02",
    name: "Autonomous Capitalism",
    url: "http://AutonomousCapitalism.com",
    tagline: "AI-driven capital allocation and autonomous market systems.",
    status: "live" as const,
    image: autonomousCapitalismImg,
  },
  {
    index: "03",
    name: "Solo Unicorn League",
    url: "http://SoloUnicornLeague.com",
    tagline: "The community for solo founders building billion-dollar companies.",
    status: "live" as const,
    image: soloUnicornLeagueImg,
  },
  {
    index: "04",
    name: "BreakingMuse.ai",
    url: "http://BreakingMuse.ai",
    tagline: "AI that breaks creative blocks and sparks new ideas.",
    status: "active" as const,
    image: breakingmuseImg,
  },
  {
    index: "05",
    name: "LazyUnicorn.ai",
    url: "http://LazyUnicorn.ai",
    tagline: "Build unicorn-scale products with minimal effort using AI agents.",
    status: "active" as const,
    image: lazyunicornImg,
  },
];

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary" />
          <span
            className="text-foreground text-sm tracking-[0.3em] uppercase font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ventures
          </span>
        </div>
        <a
          href="https://x.com/SoloUnicorn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-widest flex items-center gap-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          @SoloUnicorn
        </a>
      </header>

      {/* Grid */}
      <main className="flex-1 grid grid-cols-2 grid-rows-3 min-h-0 overflow-hidden">
        {startups.map((s) => (
          <div key={s.index} className="border-r border-b border-border min-h-0 min-w-0 overflow-hidden">
            <StartupCard {...s} />
          </div>
        ))}
        <div className="border-b border-border" />
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 lg:px-10 py-3 border-t border-border shrink-0">
        <span className="text-muted-foreground text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
          Portfolio Overview
        </span>
        <span className="text-muted-foreground text-[10px] tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
          © 2026
        </span>
      </footer>
    </div>
  );
};

export default Index;

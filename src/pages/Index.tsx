import StartupCard from "@/components/StartupCard";
import lazycloudImg from "@/assets/lazycloud.png";
import autonomousCapitalismImg from "@/assets/autonomous-capitalism.png";
import soloUnicornLeagueImg from "@/assets/solo-unicorn-league.png";
import breakingmuseImg from "@/assets/breakingmuse.png";
import lazyunicornImg from "@/assets/lazyunicorn.png";
import lazysandsImg from "@/assets/lazysands.png";
import lazyexitImg from "@/assets/lazyexit.png";
import lazycanvasImg from "@/assets/lazycanvas.png";

const startups = [
  {
    index: "01",
    name: "Autonomous Capitalism",
    url: "http://AutonomousCapitalism.com",
    tagline: "Autonomous news about autonomous news.",
    status: "live" as const,
    image: autonomousCapitalismImg,
  },
  {
    index: "02",
    name: "Breaking Muse",
    url: "http://BreakingMuse.ai",
    tagline: "News powered business ideas.",
    status: "active" as const,
    image: breakingmuseImg,
  },
  {
    index: "03",
    name: "Lazy Canvas",
    url: "https://lazycanvas.com",
    tagline: "Design content for anything.",
    status: "active" as const,
    image: lazycanvasImg,
  },
  {
    index: "05",
    name: "Lazy Cloud",
    url: "https://LazyCloud.ai",
    tagline: "Enterprise brains.",
    status: "active" as const,
    image: lazycloudImg,
  },
  {
    index: "05",
    name: "Lazy Exit",
    url: "https://lazyexit.com",
    tagline: "The marketplace for autonomous businesses.",
    status: "active" as const,
    image: lazyexitImg,
  },
  {
    index: "06",
    name: "Lazy Sands",
    url: "https://lazysands.com",
    tagline: "Lovable Platinum certified websites.",
    status: "active" as const,
    image: lazysandsImg,
  },
  {
    index: "07",
    name: "Lazy Unicorn",
    url: "http://LazyUnicorn.ai",
    tagline: "Launch your autonomous business on Lovable.",
    status: "active" as const,
    image: lazyunicornImg,
  },
  {
    index: "08",
    name: "Solo Unicorn League",
    url: "http://SoloUnicornLeague.com",
    tagline: "The leaderboard for solo founders racing to $1 billion.",
    status: "live" as const,
    image: soloUnicornLeagueImg,
  },
];

const Index = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <header className="relative flex flex-col items-center py-8 border-b border-border shrink-0">
        <span
          className="text-foreground text-sm tracking-[0.3em] uppercase font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Lazy Factory Ventures
        </span>
        <span
          className="text-muted-foreground text-xs tracking-widest mt-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Accelerate autonomous capitalism
        </span>
        <a
          href="https://x.com/SoloUnicorn"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </header>

      {/* Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(auto-fill,1fr)] min-h-0 overflow-auto">
        {startups.map((s) => (
          <div key={s.index} className="border-r border-b border-border overflow-hidden min-h-0">
            <StartupCard {...s} />
          </div>
        ))}
        <div className="border-b border-border" />
      </main>

    </div>
  );
};

export default Index;

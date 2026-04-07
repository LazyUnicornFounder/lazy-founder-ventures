import StartupCard from "@/components/StartupCard";
import UnicornHammockDrawing from "@/components/UnicornHammockDrawing";
import lazycloudImg from "@/assets/lazycloud.png";
import autonomousCapitalismImg from "@/assets/autonomous-capitalism.png";
import soloUnicornLeagueImg from "@/assets/solo-unicorn-league.png";
import breakingmuseImg from "@/assets/breakingmuse.png";
import lazyunicornImg from "@/assets/lazyunicorn.png";
import lazysandsImg from "@/assets/lazysands.png";
import lazyexitImg from "@/assets/lazyexit.png";
import lazycanvasImg from "@/assets/lazycanvas.png";
import lazydecacornImg from "@/assets/lazydecacorn.png";

const startups = [
  {
    index: "01",
    name: "Autonomous Capitalism",
    url: "http://AutonomousCapitalism.com",
    tagline: "Autonomous news about autonomous news",
    status: "live" as const,
    image: autonomousCapitalismImg,
  },
  {
    index: "02",
    name: "Breaking Muse",
    url: "http://BreakingMuse.ai",
    tagline: "News powered business ideas",
    status: "active" as const,
    image: breakingmuseImg,
  },
  {
    index: "03",
    name: "Lazy Canvas",
    url: "https://lazycanvas.com",
    tagline: "Design content for anything",
    status: "active" as const,
    image: lazycanvasImg,
  },
  {
    index: "04",
    name: "Lazy Decacorn",
    url: "https://lazydecacorn.com",
    tagline: "Game for solo founder decacorn hunters",
    status: "active" as const,
    image: lazydecacornImg,
  },
  {
    index: "05",
    name: "Lazy Cloud",
    url: "https://LazyCloud.ai",
    tagline: "Enterprise brains",
    status: "active" as const,
    image: lazycloudImg,
  },
  {
    index: "06",
    name: "Lazy Exit",
    url: "https://lazyexit.com",
    tagline: "The marketplace for autonomous businesses",
    status: "active" as const,
    image: lazyexitImg,
  },
  {
    index: "07",
    name: "Lazy Sands",
    url: "https://lazysands.com",
    tagline: "Diamond-rated Lovable agency",
    status: "active" as const,
    image: lazysandsImg,
  },
  {
    index: "08",
    name: "Lazy Unicorn",
    url: "http://LazyUnicorn.ai",
    tagline: "Launch your autonomous business on Lovable",
    status: "active" as const,
    image: lazyunicornImg,
  },
  {
    index: "09",
    name: "Solo Unicorn League",
    url: "http://SoloUnicornLeague.com",
    tagline: "The leaderboard for solo founders racing to $1 billion",
    status: "live" as const,
    image: soloUnicornLeagueImg,
  },
];

const Index = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <header className="relative flex flex-col items-center py-8 border-b-2 border-border shrink-0">
        <span
          className="text-foreground text-2xl lg:text-3xl tracking-[0.3em] uppercase font-black text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Lazy Founder Ventures
        </span>
        <span
          className="text-foreground text-xs lg:text-sm tracking-[0.4em] uppercase mt-2 font-extrabold text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Accelerate autonomous capitalism
        </span>
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/company/solo-unicorn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://x.com/SoloUnicorn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr min-h-0 overflow-auto">
        {startups.map((s) => (
          <div key={s.index} className="border-r-2 border-b-2 border-border overflow-hidden min-h-0">
            <StartupCard {...s} />
          </div>
        ))}
        <div className="border-b-2 border-border" />
      </main>

    </div>
  );
};

export default Index;

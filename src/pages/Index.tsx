import TickerStrip from "@/components/TickerStrip";

const startups = [
  { name: "Autonomous Capitalism", url: "http://AutonomousCapitalism.com", tagline: "Autonomous news about autonomous news" },
  { name: "Breaking Muse", url: "http://BreakingMuse.ai", tagline: "News powered business ideas" },
  { name: "Lazy Canvas", url: "https://lazycanvas.com", tagline: "Design content for anything" },
  { name: "Lazy Decacorn", url: "https://lazydecacorn.com", tagline: "Game for solo founder decacorn hunters" },
  { name: "Lazy Cloud", url: "https://LazyCloud.ai", tagline: "Enterprise brains" },
  { name: "Lazy Exit", url: "https://lazyexit.com", tagline: "The marketplace for autonomous businesses" },
  { name: "Lazy Sands", url: "https://lazysands.com", tagline: "Diamond-rated Lovable agency" },
  { name: "Lazy Unicorn", url: "http://LazyUnicorn.ai", tagline: "Launch your autonomous business on Lovable" },
  { name: "Solo Unicorn League", url: "http://SoloUnicornLeague.com", tagline: "The leaderboard for solo founders racing to $1 billion" },
];

const Index = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden relative">
      {/* Nav */}
      <nav className="relative z-10 flex items-center gap-4 px-10 lg:px-20 pt-6">
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
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pl-10 lg:pl-20">
        <h1
          className="text-foreground text-5xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Lazy<br />Founder<br />Ventures
        </h1>
        <p
          className="text-foreground text-sm lg:text-base tracking-[0.3em] uppercase mt-6 font-extrabold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Accelerate autonomous capitalism
        </p>
      </div>

      {/* Ticker */}
      <TickerStrip startups={startups} />
    </div>
  );
};

export default Index;

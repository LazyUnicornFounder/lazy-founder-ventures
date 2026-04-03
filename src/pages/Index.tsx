import StartupCard from "@/components/StartupCard";

const startups = [
  {
    index: "01",
    name: "LazyCloud.ai",
    url: "https://LazyCloud.ai",
    tagline: "Cloud infrastructure on autopilot — deploy without the overhead.",
    status: "active" as const,
  },
  {
    index: "02",
    name: "Autonomous Capitalism",
    url: "http://AutonomousCapitalism.com",
    tagline: "AI-driven capital allocation and autonomous market systems.",
    status: "live" as const,
  },
  {
    index: "03",
    name: "Solo Unicorn League",
    url: "http://SoloUnicornLeague.com",
    tagline: "The community for solo founders building billion-dollar companies.",
    status: "live" as const,
  },
  {
    index: "04",
    name: "BreakingMuse.ai",
    url: "http://BreakingMuse.ai",
    tagline: "AI that breaks creative blocks and sparks new ideas.",
    status: "active" as const,
  },
  {
    index: "05",
    name: "LazyUnicorn.ai",
    url: "http://LazyUnicorn.ai",
    tagline: "Build unicorn-scale products with minimal effort using AI agents.",
    status: "active" as const,
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
        <span className="text-muted-foreground text-xs tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
          {startups.length} Projects
        </span>
      </header>

      {/* Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 min-h-0">
        {startups.map((s) => (
          <div key={s.index} className="border-r border-b border-border last:border-r-0 min-h-0">
            <StartupCard {...s} />
          </div>
        ))}
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

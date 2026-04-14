import TickerStrip from "@/components/TickerStrip";

const startups = [
  { name: "Autonomous Capitalism", url: "http://AutonomousCapitalism.com", tagline: "Autonomous news about autonomous news" },
  { name: "Breaking Muse", url: "http://BreakingMuse.ai", tagline: "News powered business ideas" },
  { name: "Lazy Canvas", url: "https://lazycanvas.com", tagline: "Design content for anything" },
  { name: "Lazy Decacorn", url: "https://lazydecacorn.com", tagline: "Game for solo founder decacorn hunters" },
  { name: "Lazy Cloud", url: "https://LazyCloud.ai", tagline: "Enterprise brains" },
  { name: "Lazy Exit", url: "https://lazyexit.com", tagline: "The marketplace for autonomous businesses" },
  { name: "Lazy Sands", url: "https://lazysands.com", tagline: "Diamond-rated Lovable agency" },
  { name: "Lazy Tones", url: "https://lazytones.com", tagline: "Mood boards in 60 seconds" },
  { name: "Lazy Rent-a-Biz", url: "https://lazyrentabiz.com", tagline: "Rent a business and skip the build" },
  { name: "Lazy Unicorn", url: "http://LazyUnicorn.ai", tagline: "Launch your autonomous business on Lovable" },
  
  { name: "Lazy LLC", url: "https://lazyllc.com", tagline: "Launch and grow your business in Jordan" },
  { name: "Lazy Academy", url: "https://lazyacademy.com", tagline: "Personalized learning your kids will actually love" },
  { name: "Lazy Chatter", url: "https://lazychatter.com", tagline: "Talk about it and ship it" },
  { name: "Solo Unicorn League", url: "http://SoloUnicornLeague.com", tagline: "The leaderboard for solo founders racing to $1 billion" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background relative">
      {/* Nav */}
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-end px-6 lg:px-20 pt-6">
        <div className="flex items-center gap-4">
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
      </nav>

      {/* Hero + Startups side by side */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-12 lg:py-20 pb-8 gap-12 lg:gap-8 flex-1">
        {/* Headline - each word on its own line */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className="text-foreground text-xs sm:text-sm font-black uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lazy Founder Ventures
              <span className="ml-2 inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-primary-foreground uppercase tracking-wider">Beta</span>
            </span>
          </div>
          <h1
            className="text-foreground text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            open<br />source<br />everything.<br />accelerate<br />autonomous<br />capitalism.
          </h1>
        </div>

        {/* Startups column - right aligned container, left aligned text */}
        <div className="flex flex-col justify-center gap-2 lg:gap-3">
          {startups.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-2"
            >
              <span
                className="text-foreground text-sm lg:text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.name}
              </span>
              <span className="text-muted-foreground text-[10px] lg:text-sm font-semibold hidden sm:inline">
                {s.tagline}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

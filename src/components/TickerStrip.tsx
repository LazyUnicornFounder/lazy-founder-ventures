interface Startup {
  name: string;
  url: string;
  tagline: string;
}

const TickerStrip = ({ startups }: { startups: Startup[] }) => {
  return (
    <div className="relative z-10 px-6 lg:px-20 pb-8 lg:absolute lg:bottom-[10%] lg:left-0 lg:w-full">
      <div className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-8 lg:gap-y-3">
        {startups.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 lg:gap-2 group"
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
            <span className="text-border ml-2 lg:ml-4">✦</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;

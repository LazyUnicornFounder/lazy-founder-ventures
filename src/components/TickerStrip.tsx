interface Startup {
  name: string;
  url: string;
  tagline: string;
}

const TickerStrip = ({ startups }: { startups: Startup[] }) => {
  return (
    <div className="absolute bottom-[10%] left-0 w-full z-10 px-10 lg:px-20">
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {startups.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-2 group"
          >
            <span
              className="text-foreground text-lg lg:text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.name}
            </span>
            <span className="text-muted-foreground text-xs lg:text-sm font-semibold">
              {s.tagline}
            </span>
            <span className="text-border ml-4">✦</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;

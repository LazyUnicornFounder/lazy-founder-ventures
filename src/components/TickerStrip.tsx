interface Startup {
  name: string;
  url: string;
  tagline: string;
}

const TickerStrip = ({ startups }: { startups: Startup[] }) => {
  const items = [...startups, ...startups];

  return (
    <div className="absolute bottom-[15%] left-0 w-full overflow-hidden z-10">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-2 px-8 shrink-0 group"
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
            <span className="text-border mx-4">✦</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;

interface StartupCardProps {
  index: string;
  name: string;
  url: string;
  tagline: string;
  status: "active" | "building" | "live";
  image: string;
}

const StartupCard = ({ name, url, tagline, image }: StartupCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center h-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-10">
        <div className="relative max-w-full max-h-full">
          <div className="absolute -inset-[2px] rounded overflow-hidden">
            <div className="absolute inset-0 rounded border border-primary/20" />
            <div
              className="absolute w-8 h-8 rounded-full blur-sm animate-firefly-border"
              style={{
                background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              }}
            />
          </div>
          <img
            src={image}
            alt={name}
            className="relative max-w-full max-h-full object-contain rounded shadow-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-500">
        <h2
          className="text-foreground text-xl lg:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="text-muted-foreground text-sm lg:text-base mt-2 whitespace-nowrap">{tagline}</p>
      </div>
    </a>
  );
};

export default StartupCard;
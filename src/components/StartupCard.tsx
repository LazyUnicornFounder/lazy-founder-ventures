import { ArrowUpRight } from "lucide-react";

interface StartupCardProps {
  index: string;
  name: string;
  url: string;
  tagline: string;
  status: "active" | "building" | "live";
  image: string;
}

const statusStyles: Record<string, string> = {
  active: "bg-primary/15 text-primary",
  building: "bg-muted text-muted-foreground",
  live: "bg-primary/15 text-primary",
};

const StartupCard = ({ index, name, url, tagline, status, image }: StartupCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-5 lg:p-6">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-muted-foreground text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {index}
          </span>
          <span
            className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${statusStyles[status]}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="relative z-10 p-5 lg:p-6 pt-0">
        <h2
          className="text-foreground text-lg lg:text-xl font-bold mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{tagline}</p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
          <span className="text-muted-foreground text-xs truncate max-w-[70%]" style={{ fontFamily: "var(--font-display)" }}>
            {url.replace(/^https?:\/\//, "")}
          </span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default StartupCard;

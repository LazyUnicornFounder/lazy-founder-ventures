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
      className="group relative flex items-center justify-center h-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 lg:p-5 flex items-start justify-between">
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

      {/* Center name */}
      <h2
        className="relative z-10 text-foreground text-xl lg:text-2xl font-bold tracking-tight text-center px-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </h2>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 lg:p-5 flex items-end justify-between">
        <span className="text-muted-foreground text-xs truncate max-w-[70%]" style={{ fontFamily: "var(--font-display)" }}>
          {url.replace(/^https?:\/\//, "")}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </a>
  );
};

export default StartupCard;

import { ArrowUpRight } from "lucide-react";

interface StartupCardProps {
  index: string;
  name: string;
  url: string;
  tagline: string;
  status: "active" | "building" | "live";
}

const statusStyles: Record<string, string> = {
  active: "bg-primary/15 text-primary",
  building: "bg-muted text-muted-foreground",
  live: "bg-primary/15 text-primary",
};

const StartupCard = ({ index, name, url, tagline, status }: StartupCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between border border-border bg-card p-5 lg:p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-secondary/50 h-full"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-muted-foreground text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {index}
          </span>
          <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${statusStyles[status]}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {status}
          </span>
        </div>
        <h2
          className="text-foreground text-lg lg:text-xl font-bold mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{tagline}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <span className="text-muted-foreground text-xs truncate max-w-[70%]" style={{ fontFamily: "var(--font-display)" }}>
          {url.replace(/^https?:\/\//, "")}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </a>
  );
};

export default StartupCard;

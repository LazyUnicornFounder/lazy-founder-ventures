import { ArrowUpRight } from "lucide-react";

interface StartupCardProps {
  index: string;
  name: string;
  url: string;
  tagline: string;
  status: "active" | "building" | "live";
  image: string;
}

const StartupCard = ({ index, name, url, tagline, status, image }: StartupCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center h-full overflow-hidden bg-black"
    >
      {/* Image shown on hover */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Text content hidden on hover */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-500">
        <span
          className="text-muted-foreground text-xs tracking-widest uppercase mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {index}
        </span>
        <h2
          className="text-foreground text-xl lg:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-[80%]">{tagline}</p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 lg:p-5 flex items-end justify-between group-hover:opacity-0 transition-opacity duration-500">
        <span className="text-muted-foreground text-xs truncate max-w-[70%]" style={{ fontFamily: "var(--font-display)" }}>
          {url.replace(/^https?:\/\//, "")}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </a>
  );
};

export default StartupCard;

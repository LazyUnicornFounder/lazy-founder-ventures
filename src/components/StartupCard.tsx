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
      className="group relative flex items-center justify-center h-full overflow-hidden bg-black"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-500">
        <h2
          className="text-foreground text-xl lg:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-[80%]">{tagline}</p>
      </div>
    </a>
  );
};

export default StartupCard;

const businesses = [
  {
    name: "Autonomous Capitalism",
    tagline: "Autonomous news about autonomous news",
    price: 29,
    productId: "dc1f4e86-f561-43ae-9522-2c8cd732e478",
    features: ["AI-curated news feeds", "Trend analysis", "Market intelligence", "Daily briefings"],
  },
  {
    name: "Breaking Muse",
    tagline: "News-powered business ideas",
    price: 19,
    productId: "96b72f92-224e-4376-9d24-5bdd6fbe7f8c",
    features: ["Daily AI startup ideas", "Market gap analysis", "Opportunity scoring", "Idea archive"],
  },
  {
    name: "Lazy Canvas",
    tagline: "Design content for anything",
    price: 39,
    productId: "7df6ed15-1129-4328-bfac-12dec02eade5",
    features: ["Unlimited AI designs", "Brand kits", "Multi-format export", "Template library"],
  },
  {
    name: "Lazy Decacorn",
    tagline: "Game for solo founder decacorn hunters",
    price: 9,
    productId: "0cea6091-f8fd-4e9b-8515-53b778e1a04c",
    features: ["Leaderboard access", "Founder challenges", "Community perks", "Achievement badges"],
  },
  {
    name: "Lazy Cloud",
    tagline: "Enterprise brains",
    price: 99,
    productId: "a689d3e5-8340-4e2e-8676-38954e1f56b9",
    features: ["Enterprise AI intelligence", "Automated workflows", "Full API access", "Priority support"],
    featured: true,
  },
  {
    name: "Lazy Exit",
    tagline: "The marketplace for autonomous businesses",
    price: 49,
    productId: "843ff39f-b0d0-4099-91d6-9002b80ef731",
    features: ["List & discover businesses", "Valuation tools", "Due diligence reports", "Escrow services"],
  },
  {
    name: "Lazy Sands",
    tagline: "Diamond-rated Lovable agency",
    price: 79,
    productId: "43eb1d49-3d27-440c-b3c4-906608639a3d",
    features: ["Priority builds", "Dedicated support", "Custom integrations", "White-glove onboarding"],
  },
  {
    name: "Lazy Tones",
    tagline: "Mood boards in 60 seconds",
    price: 19,
    productId: "f5cd4a91-335d-48fe-8414-e9e97fbc77a0",
    features: ["Unlimited mood boards", "Team sharing", "Brand presets", "Export to PDF"],
  },
  {
    name: "Lazy Unicorn",
    tagline: "Launch your autonomous business on Lovable",
    price: 49,
    productId: "c53ca496-b320-407f-bcc3-9147e33da730",
    features: ["AI business builder", "One-click deploy", "Revenue tracking", "Growth analytics"],
  },
  {
    name: "Solo Unicorn League",
    tagline: "The leaderboard for solo founders racing to $1 billion",
    price: 29,
    productId: "fc5f148f-fda7-4267-b132-a769b8dee592",
    features: ["Live rankings", "Founder analytics", "Network access", "Monthly reports"],
  },
];

const POLAR_ORG_SLUG = "lazy-founder-ventures";

const PricingSection = () => {
  const handleSubscribe = (productId: string) => {
    window.open(
      `https://polar.sh/api/checkout?products=${productId}`,
      "_blank"
    );
  };

  return (
    <section id="pricing" className="relative z-10 px-6 lg:px-20 py-16 lg:py-24">
      <div className="mb-12">
        <span
          className="text-foreground text-xs sm:text-sm font-black uppercase tracking-[0.15em] mb-4 block"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pricing
        </span>
        <h2
          className="text-foreground text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Subscribe to<br />Our Businesses
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-lg font-semibold">
          Each business runs autonomously. Subscribe monthly to access the full platform and all features.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {businesses.map((biz) => (
          <div
            key={biz.productId}
            className={`border border-border bg-card p-6 flex flex-col justify-between transition-colors hover:border-foreground/30 ${
              biz.featured ? "ring-1 ring-foreground/20 bg-card/80" : ""
            }`}
          >
            <div>
              {biz.featured && (
                <span
                  className="text-[10px] font-black uppercase tracking-[0.15em] text-primary-foreground bg-foreground px-2 py-0.5 mb-3 inline-block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Featured
                </span>
              )}
              <h3
                className="text-foreground text-base lg:text-lg font-bold tracking-tight uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {biz.name}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-semibold">
                {biz.tagline}
              </p>
              <div className="mt-4 mb-5">
                <span
                  className="text-foreground text-3xl lg:text-4xl font-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ${biz.price}
                </span>
                <span className="text-muted-foreground text-xs font-semibold ml-1">/mo</span>
              </div>
              <ul className="space-y-2 mb-6">
                {biz.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <span className="text-foreground/50 mt-0.5">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleSubscribe(biz.productId)}
              className="w-full bg-foreground text-background text-xs font-black uppercase tracking-[0.1em] py-3 hover:bg-foreground/90 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

import { Link } from "react-router-dom";

const posts = [
  {
    slug: "business-as-a-subscription",
    title: "Business as a Subscription",
    date: "April 9, 2026",
    excerpt:
      "What if you could subscribe to a business the way you subscribe to software? The autonomous economy is making it possible.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <nav className="flex items-center justify-between px-6 lg:px-20 pt-6">
        <Link
          to="/"
          className="text-foreground text-xs font-black uppercase tracking-[0.15em] hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          LFV
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-20">
        <h1
          className="text-foreground text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Blog
        </h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>
                {post.date}
              </p>
              <h2
                className="text-foreground text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

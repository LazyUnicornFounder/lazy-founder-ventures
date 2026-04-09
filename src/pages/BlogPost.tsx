import { Link, useParams, Navigate } from "react-router-dom";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "business-as-a-subscription": {
    title: "Business as a Subscription",
    date: "April 9, 2026",
    content: `The SaaS model changed software forever. You stopped buying boxes and started subscribing to services. Now, the same transformation is coming for entire businesses.

## The Autonomous Shift

We're entering an era where a business can run itself — where AI agents handle operations, customer support, marketing, and even strategic decisions. When a business becomes autonomous, it stops being a one-time acquisition and starts looking like infrastructure you can subscribe to.

Think about it: if an autonomous business generates revenue with minimal human intervention, why would you buy the whole thing? You subscribe to the output. You subscribe to the cash flow. You subscribe to the machine.

## What This Means for Founders

Solo founders are uniquely positioned here. Building an autonomous business isn't about hiring a team of 50 — it's about architecting systems that compound. One founder, one vision, infinite leverage.

At Lazy Founder Ventures, every company in our portfolio is designed this way. From **Lazy Exit** (the marketplace for autonomous businesses) to **Autonomous Capitalism** (the news layer for this movement), we're building the picks and shovels of the subscription economy's next evolution.

## The Pricing Model

Traditional business acquisitions use multiples — 3x revenue, 5x EBITDA. But subscription businesses get valued on recurring metrics: MRR, churn, LTV. When the business itself becomes a subscription, the meta-game changes entirely.

Imagine a marketplace where you don't buy a business for $500K. Instead, you subscribe for $2K/month and receive a share of its autonomous output. The business keeps running. You keep earning. The builder keeps building new ones.

## This Is Already Happening

Look at the signal:
- **Revenue-share models** are replacing equity in micro-SaaS
- **Autonomous agents** are handling entire business functions
- **Solo founders** are launching and operating multiple businesses simultaneously

The infrastructure isn't coming. It's here. The question is whether you'll subscribe — or get subscribed to.

---

*Lazy Founder Ventures accelerates autonomous capitalism. We build, launch, and operate autonomous businesses on Lovable.*`,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen w-full bg-background">
      <nav className="flex items-center justify-between px-6 lg:px-20 pt-6">
        <Link
          to="/blog"
          className="text-foreground text-xs font-black uppercase tracking-[0.15em] hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← Blog
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <p
          className="text-muted-foreground text-xs uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {post.date}
        </p>
        <h1
          className="text-foreground text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>
        <div
          className="prose prose-neutral max-w-none text-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-foreground text-lg sm:text-xl font-black uppercase tracking-tight mt-10 mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("---")) {
              return <hr key={i} className="border-border my-10" />;
            }
            // Handle bold and list items
            const formatted = block.split("\n").map((line, j) => {
              if (line.startsWith("- ")) {
                return (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed ml-4">
                    {renderInline(line.replace("- ", ""))}
                  </li>
                );
              }
              return (
                <p key={j} className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {renderInline(line)}
                </p>
              );
            });
            return <div key={i}>{formatted}</div>;
          })}
        </div>
      </article>
    </div>
  );
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default BlogPost;

import { Link, useRouterState } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHero } from "./Sections";
import { BackButton } from "./BackButton";
import { CTABand } from "./Sections";

export type BlogPostProps = {
  cover: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  datePublished: string; // ISO
  author?: string;
  children: React.ReactNode;
};

export function BlogPost({ cover, kicker = "Jaisalmer travel journal", title, subtitle, datePublished, author = "Jaisalmerholidays", children }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={cover} kicker={kicker} title={title} subtitle={subtitle} />
      <article className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-6">
          {new Date(datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {author}
        </p>
        <div className="prose prose-lg max-w-none text-[var(--ink)] leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-[var(--maroon)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[var(--maroon)] [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-[var(--terracotta)] [&_a]:font-semibold hover:[&_a]:underline">
          {children}
        </div>
        <KeepReading />
        <div className="mt-12">
          <Link to="/blog" className="text-[var(--terracotta)] font-semibold hover:underline">← Back to all posts</Link>
        </div>
      </article>
      <CTABand />
      <Footer />
    </div>
  );
}

function KeepReading() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const others = BLOG_POSTS.filter((p) => !pathname.endsWith("/" + p.slug)).slice(0, 3);
  if (others.length === 0) return null;
  return (
    <section className="mt-14 pt-10 border-t border-[var(--border)]">
      <h2 className="font-display text-2xl font-bold text-[var(--maroon)]">Keep reading</h2>
      <ul className="mt-4 space-y-3">
        {others.map((p) => (
          <li key={p.slug}>
            <Link
              to={("/blog/" + p.slug) as "/blog"}
              className="text-[var(--terracotta)] font-semibold hover:underline"
            >
              {p.title}
            </Link>
            <span className="block text-sm text-[var(--muted-foreground)] leading-relaxed">{p.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function blogPostJsonLd(opts: {
  url: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: [opts.image],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: "Jaisalmerholidays", url: "https://jaisalmerholidays.com" },
    publisher: {
      "@type": "Organization",
      name: "Jaisalmerholidays",
      logo: { "@type": "ImageObject", url: "https://jaisalmerholidays.com/favicon.ico" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    url: opts.url,
  };
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import { BLOG_POSTS, SITE_URL } from "@/lib/blog";

const PAGE_URL = SITE_URL + "/blog";
const hero = "https://loremflickr.com/1600/900/jaisalmer,desert,fort?lock=300";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Jaisalmer Travel Blog | Tips, Guides & Itineraries" },
      {
        name: "description",
        content:
          "Read expert Jaisalmer travel blog with city guides, tour tips, best places to visit, desert safari advice, and itinerary ideas from local travel experts.",
      },
      { property: "og:title", content: "Jaisalmer Travel Blog | Tips, Guides & Itineraries" },
      { property: "og:description", content: "Read expert Jaisalmer travel blog with city guides, tour tips, best places to visit, desert safari advice, and itinerary ideas from local travel experts." },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={hero} kicker="Travel journal" title="Jaisalmer travel blog" subtitle="Guides, tips and stories from our team on the ground in the Thar." />
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={("/blog/" + p.slug) as "/blog"}
              className="group rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                  {new Date(p.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <h2 className="font-display text-lg font-semibold text-[var(--maroon)] mt-2 leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

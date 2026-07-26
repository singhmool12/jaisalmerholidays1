import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-war-museum")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-war-museum")({
  head: () => ({
    meta: [
      { title: `${post.title} — Jaisalmerholidays` },
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: post.cover },
      { name: "twitter:image", content: post.cover },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(blogPostJsonLd({ url: PAGE_URL, title: post.title, description: post.description, image: post.cover, datePublished: post.datePublished })) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogPost cover={post.cover} title={post.title} subtitle="Tanks, aircraft and the story of the Battle of Longewala — one of Jaisalmer's most moving stops." datePublished={post.datePublished}>
      <p>
        The <strong>Jaisalmer War Museum</strong> is run by the Indian Army and honours the soldiers who fought in the 1971 Indo-Pak war — especially the famous Battle of Longewala fought right here in the deserts west of Jaisalmer. It's one of those places that surprises people; you walk in expecting a small local museum and come out an hour later completely absorbed.
      </p>

      <h2>What you'll see</h2>
      <ul>
        <li>Captured tanks and armoured vehicles from the 1971 war on open-air display.</li>
        <li>A Hunter fighter aircraft — the type flown during the Battle of Longewala.</li>
        <li>Indoor galleries covering the history of the Indian Army in the region, uniforms, weapons and personal stories.</li>
        <li>An audio-visual hall that screens a short documentary on the Battle of Longewala.</li>
        <li>A memorial wall listing the names of soldiers who lost their lives.</li>
      </ul>

      <h2>Practical information</h2>
      <p>
        {/* TODO: Please verify current opening hours and entry fee before publishing — these are set by the Indian Army and change from time to time. */}
        The museum is on the Jaisalmer–Jodhpur highway, a short drive from the city centre. Opening hours and entry fee are set by the Indian Army and worth confirming on the day; give yourself at least an hour inside, more if you plan to watch the documentary.
      </p>

      <h2>Pairing it with the rest of your trip</h2>
      <p>
        The War Museum pairs naturally with a Longewala border day-trip for anyone with a serious interest in military history — you can see the museum first, then drive out to the actual battlefield. It also slots easily into a wider <Link to="/sightseeing">Jaisalmer sightseeing itinerary</Link> alongside the fort and Bada Bagh.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>Photography rules can change — check the notices at the entrance.</li>
        <li>The outdoor area gets hot at midday in summer; morning or late afternoon is better.</li>
        <li>Carry an ID.</li>
      </ul>
    </BlogPost>
  );
}

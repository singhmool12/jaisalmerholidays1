import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "lodurva-excursion-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/lodurva-excursion-guide")({
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
    <BlogPost cover={post.cover} title={post.title} subtitle="Quiet Jain temples, an old cenotaph lake, and how to fit both into a relaxed half-day out of Jaisalmer." datePublished={post.datePublished}>
      <p>
        Most travellers stick to Jaisalmer Fort, Patwon ki Haveli and the dunes — but if you have half a day free, <strong>Lodurva</strong> and Amar Sagar are two of the most peaceful spots in the region and almost nobody is there.
      </p>

      <h2>What is Lodurva?</h2>
      <p>
        Lodurva (also spelled Lodhruva) was the old capital of the region before Jaisalmer itself was founded. What remains today is a beautiful <strong>Jain temple complex</strong>, rebuilt in carved yellow sandstone, with a central shrine, ornate torans (arched gateways) and a quiet compound that feels a world away from the fort crowds. It's an active place of worship — dress modestly and remove shoes before entering.
      </p>
      <p>
        {/* TODO: Verify — Lodurva is roughly 15–17 km northwest of Jaisalmer city. */}
        The drive is short — about half an hour from Jaisalmer city — on a straight desert road.
      </p>

      <h2>Adding Amar Sagar</h2>
      <p>
        On the way back you can stop at Amar Sagar, an old artificial lake with a small Jain temple complex and cenotaphs. It's photogenic in the late afternoon light and adds maybe 30–45 minutes to the trip.
      </p>

      <h2>How to fit it into a half-day trip</h2>
      <ul>
        <li>Leave Jaisalmer around 3–3:30 pm to catch the softer afternoon light.</li>
        <li>Spend 45 minutes to an hour at Lodurva.</li>
        <li>Stop at Amar Sagar on the return.</li>
        <li>Be back in the city by sunset for a rooftop dinner.</li>
      </ul>

      <p>
        Both spots pair well with our <Link to="/sightseeing">Jaisalmer sightseeing tours</Link> — we can bolt them onto a half-day or full-day itinerary. The easiest way is a private cab through our <Link to="/taxi">Jaisalmer taxi service</Link>, so you're not tied to a fixed route or timing.
      </p>

      <h2>Practical tips</h2>
      <ul>
        <li>Carry water — there's very little around either site.</li>
        <li>Photography is usually fine outside the shrine; check inside.</li>
        <li>Cover shoulders and knees at the temple.</li>
      </ul>
    </BlogPost>
  );
}

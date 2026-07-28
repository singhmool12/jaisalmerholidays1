import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-local-food-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-local-food-guide")({
  head: () => ({
    meta: [
      { title: post.metaTitle },
      { name: "description", content: post.metaDescription },
      { property: "og:title", content: post.metaTitle },
      { property: "og:description", content: post.metaDescription },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: absoluteCover(post.cover) },
      { name: "twitter:image", content: absoluteCover(post.cover) },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(blogPostJsonLd({ url: PAGE_URL, title: post.title, description: post.description, image: absoluteCover(post.cover), datePublished: post.datePublished })) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogPost cover={post.cover} title={post.title} subtitle="Ker sangri, dal baati churma, gatte and desert-camp dinners — a taste of what makes Jaisalmer's food unforgettable." datePublished={post.datePublished}>
      <p>
        Rajasthani food is built for the desert — long-lasting, spice-forward, made with ingredients that can survive without much water. In Jaisalmer that heritage is very much alive, and eating well here is easy whether you're at a heritage hotel, a rooftop in the old city or a bonfire in the dunes.
      </p>

      <h2>Dishes you shouldn't leave without trying</h2>
      <ul>
        <li><strong>Rajasthani thali</strong> — a full platter with several sabzis, dal, roti, rice, papad, pickle and a sweet. The best introduction to the cuisine.</li>
        <li><strong>Dal baati churma</strong> — hard baked wheat balls (baati) soaked in ghee, served with dal and a sweetened crumble (churma). The state dish, and unmissable.</li>
        <li><strong>Ker sangri</strong> — a dry curry made from wild desert berries (ker) and beans (sangri). Uniquely Rajasthani; you'll rarely see it elsewhere.</li>
        <li><strong>Gatte ki sabzi</strong> — soft gram-flour dumplings in a yoghurt-based curry.</li>
        <li><strong>Laal maas</strong> — a fiery red mutton curry made with local Mathania chillies (non-veg travellers, this one).</li>
        <li><strong>Bajre ki roti with lehsun chutney</strong> — pearl-millet flatbread with a punchy garlic chutney.</li>
        <li><strong>Ghewar and malpua</strong> — festive Rajasthani sweets you'll find in season.</li>
      </ul>

      <h2>Eating at a desert camp</h2>
      <p>
        Dinner at a <Link to="/desert-camp">desert camp</Link> is one of the most memorable meals you'll have in Jaisalmer. Everything is cooked fresh in the sand — bajra roti puffed on an open flame, a few sabzis, a slow-cooked dal, rice, salad, pickle and a sweet — usually served buffet-style around a bonfire while folk musicians play. Tell us in advance and we'll set up Jain, pure-veg or non-veg thalis.
      </p>

      <h2>Rooftop dining in the old city</h2>
      <p>
        Almost every heritage <Link to="/hotel">hotel in Jaisalmer</Link> has a rooftop restaurant with a view of the fort. Rajasthani thalis, tandoori dishes and continental staples are standard; go at sunset.
      </p>

      <h2>Practical tips</h2>
      <ul>
        <li>Spice levels are adjustable at almost every restaurant — just ask.</li>
        <li>Vegetarian, Jain and non-veg options are widely available.</li>
        <li>Water: stick to bottled or filtered.</li>
      </ul>
      {/* TODO: If you'd like specific restaurant recommendations named in this post, send us the shortlist and we'll add them. */}
    </BlogPost>
  );
}

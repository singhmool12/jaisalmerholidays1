import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-shopping-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-shopping-guide")({
  head: () => ({
    meta: [
      { title: `${post.title} — Jaisalmerholidays` },
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
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
    <BlogPost cover={post.cover} title={post.title} subtitle="Embroidered textiles, mirror work, leather, silver — what to buy in Jaisalmer and where to look." datePublished={post.datePublished}>
      <p>
        <strong>Shopping in Jaisalmer</strong> is a big part of the experience. The bazaars around Jaisalmer Fort are stuffed with the kind of desert craft that this region is famous for — bright textiles with tiny mirrors sewn in, hand-embroidered wall hangings, camel-leather goods and old-style silver jewelry.
      </p>

      <h2>What Jaisalmer is known for</h2>
      <ul>
        <li><strong>Embroidered textiles</strong> — bedspreads, cushion covers, wall hangings and bags in bright cotton with mirror work (sheesha) and traditional Rajasthani stitches.</li>
        <li><strong>Mirror-work items</strong> — everything from small purses to decorative pieces; a very local, very portable souvenir.</li>
        <li><strong>Camel-leather goods</strong> — bags, jootis (traditional slip-on shoes), belts and small journals in soft, worked leather.</li>
        <li><strong>Silver jewelry</strong> — chunky tribal-style silver, oxidised pieces, and lac bangles in bright colours.</li>
        <li><strong>Puppets and folk art</strong> — colourful string puppets and painted wooden pieces.</li>
        <li><strong>Miniature paintings</strong> — small Rajasthani-style paintings on paper, silk or camel bone.</li>
        <li><strong>Local spices and pickles</strong> — Mathania chilli, ker sangri, and dry pickles that travel well.</li>
      </ul>

      <h2>Where to browse</h2>
      <p>
        Most of the action is in the <strong>bazaar area around Jaisalmer Fort</strong> — the lanes climbing up to the fort gate, the shops inside the fort itself, and the streets around the Patwon ki Haveli complex. Sadar Bazaar and Bhatia Bazaar are the classic strips. Prices are almost always negotiable outside fixed-price government emporiums — bargain politely and don't feel awkward walking away and coming back.
      </p>

      <h2>Tips for a good haul</h2>
      <ul>
        <li>Compare prices in three or four shops before buying anything big.</li>
        <li>Check stitching and finish on embroidered pieces — some are machine-made.</li>
        <li>Ask for a card and shipping if you're buying more than you can carry.</li>
        <li>Pair a shopping morning with a <Link to="/sightseeing">Jaisalmer sightseeing tour</Link> — the bazaars are right where you'll be anyway.</li>
      </ul>
    </BlogPost>
  );
}

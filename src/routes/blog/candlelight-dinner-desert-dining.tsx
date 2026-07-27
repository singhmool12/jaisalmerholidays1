import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "candlelight-dinner-desert-dining")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/candlelight-dinner-desert-dining")({
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
    <BlogPost cover={post.cover} title={post.title} subtitle="A private table on the dunes, lanterns, a royal thali and a sky full of stars — the Jaisalmer evening most couples come for." datePublished={post.datePublished}>
      <p>
        A <strong>candle light dinner in Jaisalmer</strong> is one of those things that sounds like a cliché until you actually do it. There's a private table set up on a quiet dune, lanterns and candles all the way around, a small folk troupe if you want one, and a full royal thali brought out course by course. Above you: the Thar sky, uninterrupted.
      </p>

      <h2>What's included</h2>
      <p>
        Every private dining setup we run is customised, but the standard shape is:
      </p>
      <ul>
        <li>Pickup and drop from your Jaisalmer hotel or camp.</li>
        <li>A private table and lantern setup on a quiet dune — not shared with any other group.</li>
        <li>A welcome drink and starters.</li>
        <li>A multi-course Rajasthani thali (vegetarian, Jain or non-veg — tell us in advance).</li>
        <li>Optional live folk music and dance.</li>
        <li>Time on the dunes after dinner for stargazing.</li>
      </ul>

      <h2>Other private experiences in the same family</h2>
      <p>
        Along with the classic candlelight dinner, our <Link to="/exotic-tours">exotic experiences in the Thar</Link> page also covers:
      </p>
      <ul>
        <li><strong>Private sunset picnics</strong> on the dunes.</li>
        <li><strong>Stargazing evenings</strong> away from town lights.</li>
        <li><strong>Royal candlelight dinners</strong> with a fuller decor and cultural programme.</li>
        <li><strong>Private photography tours</strong> for couples and honeymooners.</li>
      </ul>

      <h2>Best for</h2>
      <ul>
        <li>Honeymoons and anniversaries.</li>
        <li>Proposals — we can help with the setup.</li>
        <li>Small family celebrations and birthdays.</li>
        <li>Photographers wanting a controlled, private setup.</li>
      </ul>

      <h2>How to book</h2>
      <p>
        These setups are made-to-order, so we need a little notice — usually 24–48 hours is plenty. Message us on WhatsApp or use the <Link to="/contact">contact page</Link> with your date, group size and any preferences (menu, decor, music), and we'll come back with a plan and pricing.
      </p>
    </BlogPost>
  );
}

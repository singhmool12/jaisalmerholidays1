import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-honeymoon-couples-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-honeymoon-couples-guide")({
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
      {
        type: "application/ld+json",
        children: JSON.stringify(
          blogPostJsonLd({
            url: PAGE_URL,
            title: post.title,
            description: post.description,
            image: absoluteCover(post.cover),
            datePublished: post.datePublished,
          }),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogPost cover={post.cover} title={post.title} subtitle="A honeymoon itinerary built around heritage hotels, luxury desert camps and private dining under the stars." datePublished={post.datePublished}>
      <p>
        Jaisalmer might be the most quietly romantic city in India. The whole town is carved from golden sandstone that glows at sunset, the old fort still has people living inside it, and thirty minutes out of town the Thar Desert opens up into a horizon that belongs entirely to the two of you. Whether you're planning a full <strong>Jaisalmer honeymoon package</strong> or just a long weekend, the recipe is the same — pair a heritage stay in the old city with a night in a luxury desert camp, and add one or two private experiences you can't get anywhere else.
      </p>

      <h2>Why Jaisalmer works for couples</h2>
      <ul>
        <li><strong>Heritage without the crowds</strong> — smaller and slower than Jaipur or Udaipur, with fort-view rooftops and havelis you can actually explore.</li>
        <li><strong>Real desert on your doorstep</strong> — sunset over the Sam Sand Dunes, sunrise camel rides, quiet nights under an unbelievable sky.</li>
        <li><strong>Private experiences</strong> — candlelight dinners, sunset picnics and cultural evenings that are set up just for the two of you.</li>
        <li><strong>Easy to reach</strong> — direct trains from Delhi and Jaipur, and flights via Jaisalmer airport in season.</li>
      </ul>

      <h2>A 3-night romantic itinerary</h2>
      <h3>Night 1 — Heritage stay in Jaisalmer</h3>
      <p>
        Check into a fort-view heritage <Link to="/hotel">hotel in Jaisalmer</Link>, unwind on the rooftop with chai as the fort turns orange, and take a quiet evening walk through Patwon ki Haveli lane. A rooftop dinner with live folk music is the easiest first-night win.
      </p>
      <h3>Night 2 — Luxury desert camp in the Sam dunes</h3>
      <p>
        The next morning, transfer out to a <Link to="/desert-camp">luxury desert camp</Link> in the Sam Sand Dunes. Sunset camel ride, cultural evening around a bonfire, multi-course Rajasthani dinner, and a proper night in a swiss tent with a private ensuite. Sunrise from the dunes the next morning is the photograph you'll keep.
      </p>
      <h3>Night 3 — Private dining experience</h3>
      <p>
        Back in Jaisalmer, upgrade the last evening to one of our <Link to="/exotic-tours">exotic experiences in the Thar</Link> — a private candlelight dinner in the dunes, a royal thali by lantern light, or a sunset picnic set up just for you. This is the one every couple remembers.
      </p>

      <h2>Best time for a Jaisalmer honeymoon</h2>
      <p>
        October to March. Days are warm and clear, nights in the desert are cold enough for a bonfire, and the light on the sandstone is at its softest. May–August is very hot; if that's your only window, we shift everything to sunrise and after-sunset timings.
      </p>

      <h2>What to add if you have longer</h2>
      <ul>
        <li>A half-day <Link to="/sightseeing">Jaisalmer sightseeing tour</Link> covering the fort, Gadisar Lake, Bada Bagh and Kuldhara.</li>
        <li>A Longewala border day-trip for military-history fans.</li>
        <li>A private photoshoot at sunrise on the dunes.</li>
      </ul>

      <p>
        Ready to plan? Message us on WhatsApp with your dates and we'll build the whole thing around what the two of you actually want. See our <Link to="/exotic-tours">private experiences</Link> and <Link to="/hotel">hotel options</Link>, or head to the <Link to="/contact">contact page</Link> to get a quote.
      </p>
      {/* TODO: Link to /tour-packages once that page exists. */}
    </BlogPost>
  );
}

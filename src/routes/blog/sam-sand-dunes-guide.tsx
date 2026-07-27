import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "sam-sand-dunes-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/sam-sand-dunes-guide")({
  head: () => ({
    meta: [
      { title: "Sam Sand Dunes: Everything You Need to Know | Jaisalmer Holidays" },
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
    <BlogPost
      cover={post.cover}
      title={post.title}
      subtitle="The most famous dunes in the Thar — how to get there, when to go and why almost every Jaisalmer trip ends up here."
      datePublished={post.datePublished}
    >
      <p>
        Ask anyone about a <strong>Jaisalmer desert safari</strong> and the first place they'll name is <strong>Sam Sand Dunes</strong>. Big, golden, ripple-textured and endless — this is the classic Thar Desert landscape you've seen in every photograph. It's also where most of the region's <Link to="/desert-camp">desert camps</Link> are based and where most <Link to="/camel-safari">camel safaris</Link> begin.
      </p>

      <h2>Where are the Sam Sand Dunes?</h2>
      <p>
        {/* TODO: Verify — Sam is roughly 40–45 km west of Jaisalmer city. */}
        Sam is about 40–45 km west of Jaisalmer city, an easy hour's drive on a straight desert highway. Most people head out in the late afternoon, catch sunset on the dunes, and either spend the night at a camp or drive back the same evening.
      </p>

      <h2>Why go to Sam?</h2>
      <ul>
        <li><strong>Tall, dramatic dunes</strong> — this is the largest continuous dune belt near Jaisalmer.</li>
        <li><strong>The base for desert camps</strong> — luxury swiss tents, cultural evenings and bonfires.</li>
        <li><strong>Camel and jeep safaris</strong> depart from here — either short sunset rides or overnight expeditions.</li>
        <li><strong>Folk music, dance and Rajasthani dinners</strong> at almost every camp in the evening.</li>
        <li><strong>Wide open skies</strong> — one of the best places in India for stargazing.</li>
      </ul>

      <h2>When to visit</h2>
      <p>
        October to March is peak season — cool days, cold nights and comfortable rides. April, September and early October are quieter shoulder months with warmer days. May–August is very hot; we run early morning and late evening safaris only in those months.
      </p>

      <h2>How to do it</h2>
      <p>
        The easiest way is to combine a sunset <Link to="/camel-safari">camel safari</Link> with a night at a <Link to="/desert-camp">desert camp</Link> — pickup from your hotel in Jaisalmer, camel ride into the dunes at sunset, dinner and folk music at the camp, and a quiet sunrise the next morning. Adventure-minded travellers add <Link to="/adventure">dune bashing, quad ATV rides or sandboarding</Link>; couples often add a <Link to="/exotic-tours">private candlelight dinner or stargazing setup</Link>.
      </p>

      <h2>Sam vs Khuri dunes</h2>
      <p>
        Sam is the busier, more developed side — bigger dunes, more camps, more activity. Khuri is quieter, greener and better for authentic village stays. If it's your first time in the Thar, Sam is the easiest and most impressive introduction. Return travellers often prefer the quieter Khuri routes or our non-touristic expeditions further out.
      </p>

      <h2>Practical tips</h2>
      <ul>
        <li>Bring warm layers in winter — desert nights get genuinely cold.</li>
        <li>Loose cotton clothes, a scarf and sunglasses for the day.</li>
        <li>Carry water and a power bank.</li>
        <li>Book your camp and safari at least 3–5 days ahead in peak season.</li>
      </ul>

      <p>
        Ready to head out? Browse our <Link to="/desert-camp">Sam desert camp options</Link> or a <Link to="/camel-safari">camel safari package</Link>, and we'll set up your pickup from Jaisalmer.
      </p>
    </BlogPost>
  );
}

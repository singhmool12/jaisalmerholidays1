import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-nightlife-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-nightlife-guide")({
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
    <BlogPost cover={post.cover} title={post.title} subtitle="Bonfires, folk music, rooftops and quiet fort-view dinners — a slower, more traditional after-dark scene." datePublished={post.datePublished}>
      <p>
        If you're looking for clubs and late-night bars, Jaisalmer isn't that city — and honestly, that's the best thing about it. <strong>Nightlife in Jaisalmer</strong> is quieter, older and more traditional: bonfires in the dunes, live Rajasthani folk music, rooftops that look straight at the fort as it lights up, and dinners that go on for hours because there's nowhere in a hurry to be.
      </p>

      <h2>The classic desert-camp evening</h2>
      <p>
        This is what most travellers actually mean when they ask about <strong>things to do in Jaisalmer at night</strong>. Head out to the Sam Sand Dunes in the late afternoon, take a sunset camel ride, and settle into a <Link to="/desert-camp">luxury desert camp</Link> for the evening. There's usually welcome tea, a bonfire, live folk musicians and dancers, a multi-course Rajasthani dinner, and then a very quiet walk out onto the dunes to look at the stars. It's the single most memorable evening most people have in Jaisalmer.
      </p>

      <h2>Rooftop dinners in the old city</h2>
      <p>
        Almost every heritage hotel and haveli inside and around the fort has a rooftop restaurant with a direct view of Jaisalmer Fort lit up at night. Order a Rajasthani thali, take your time, and watch the sandstone glow.
      </p>

      <h2>Cultural evenings and live music</h2>
      <p>
        Even outside the desert camps, folk troupes perform at heritage properties and cultural centres in the old city during the peak season (October–March). Ask your hotel — most can arrange or point you to a show that same evening.
      </p>

      <h2>Bonfires and stargazing in the dunes</h2>
      <p>
        Away from town lights, the Thar sky is spectacular. A private bonfire and stargazing setup is the closest thing Jaisalmer has to a "night out" for couples and small groups — quiet, warm, unhurried.
      </p>

      <h2>What to expect</h2>
      <ul>
        <li>Old-city restaurants generally wind down by around 10–11pm.</li>
        <li>Desert camp evenings run late — music till 10, dinner after, sky till whenever you want.</li>
        <li>Winter nights are genuinely cold in the desert; bring a jacket.</li>
      </ul>

      <p>
        Ready to swap a night out for a night in the dunes? See our <Link to="/desert-camp">desert camp options</Link>.
      </p>
    </BlogPost>
  );
}

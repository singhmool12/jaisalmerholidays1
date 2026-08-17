import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-nightlife-guide")!;
const PAGE_URL = blogUrl(post.slug);

export const Route = createFileRoute("/blog/jaisalmer-nightlife-guide")({
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

      <h2>Fine dining with a view</h2>
      <p>
        If you'd rather skip the sand and stick to the city, Jaisalmer has plenty of candlelit rooftop spots perfect for a special dinner. Think slow-cooked lal maas, good wine, and sandstone arches glowing under fairy lights. Local favourites include <strong>Pleasant Haveli Rooftop Restaurant</strong> (laid-back, fantastic fort views), <strong>Jaisal Italy</strong> (surprisingly authentic pasta) and <strong>Jaisal Treat</strong> (classic North Indian in a cheerful old mansion).
      </p>
      <p>
        Most of these places are at their best after sunset. Book a table outside for the view, linger over dessert, and soak in the calm — this is Jaisalmer's version of fine dining, where the city lights and the fort silhouette do half the work. For something more private, see our <Link to="/special-events">candlelight dinner setups</Link>.
      </p>

      <h2>Night-time adventure activities in the desert</h2>
      <p>
        If a quiet walk under the stars isn't quite enough excitement, you're in luck — Jaisalmer's dunes come alive with adventure after dark. Several operators around the Sam Sand Dunes run nocturnal jeep safaris and <Link to="/adventure">dune bashing</Link>, where you climb into a 4×4 and tear across the sand with only your headlights lighting the way. It's fast, bumpy, a bit wild, and one of the most adrenaline-charged ways to experience the desert at night.
      </p>
      <p>
        For something less turbocharged but equally magical, <Link to="/camel-safari">camel safaris</Link> head out for sunset and return under the moonlight, usually winding up with music around the campfire. Whether you prefer your dunes at the pace of a camel or the roar of a jeep, there's plenty after dark for the adventurous crowd.
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
        Ready to swap a night out for a night in the dunes? See our <Link to="/desert-camp">desert camp options</Link>, browse <Link to="/exotic-tours">exotic private experiences in the Thar</Link>, or arrange late-night transfers with our <Link to="/taxi">Jaisalmer taxi service</Link>.
      </p>
    </BlogPost>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogPost, blogPostJsonLd } from "@/components/site/BlogPost";
import { BLOG_POSTS, blogUrl, absoluteCover } from "@/lib/blog";
import { faqJsonLd, type FAQItem } from "@/components/site/FAQ";

const post = BLOG_POSTS.find((p) => p.slug === "jaisalmer-shopping-guide")!;
const PAGE_URL = blogUrl(post.slug);

const faqs: FAQItem[] = [
  {
    q: "How does shopping in Jaisalmer provide insight into the city's history and traditional livelihoods?",
    a: "Each stall feels like a chapter from the region's past. Artisans weave intricate patterns in front of you and vendors share the stories behind their wares. The textiles, jewelry and handicrafts on display are the result of skills passed down through generations, and buying them supports craftspeople whose livelihoods still depend on these ancient trades.",
  },
  {
    q: "Where can visitors buy cotton and silk fabrics with Bandhani and Leheriya prints?",
    a: "Bhatia Bazaar, right in the heart of the old city near the main square, is the spot. Shops here spill over with traditional kurtas, sarees, dresses and scarves in bold Rajasthani colours and centuries-old tie-dye techniques, plus spice stalls and souvenirs under one roof.",
  },
  {
    q: "What traditional Rajasthani clothing is available for tourists?",
    a: "Vibrant ghagra cholis (long embroidered skirts with matching blouses) for women and brightly coloured turbans for men are easy to find in the markets or from local artisans selling near the fort. With their intricate embroidery and bold colours they make wearable souvenirs.",
  },
  {
    q: "What unique items and home décor can be purchased at Pansari Bazaar?",
    a: "Pansari Bazaar — the 'villager's market' — is where you'll find handwoven wool and cotton rugs in classic Rajasthani motifs, traditional miniature paintings, handmade embroidered jootis and ethnic textiles like cushion covers and table runners, mostly made by local artisans rather than mass-produced for tourists.",
  },
  {
    q: "What souvenirs can be bought at markets attached to cultural camps and events?",
    a: "Handmade puppets, tribal silver and beaded jewelry, lac bangles, ghagra cholis and turbans, decorative wall hangings, mirror-work bags, hand-carved wooden toys, pottery and classic Rajasthani utensils — usually sold straight by the artisans between performances.",
  },
  {
    q: "When is the best time to visit Jaisalmer for shopping and cultural experiences?",
    a: "Plan your visit between November and February. Cooler weather means you can stroll the bazaars for hours, and festival season brings extra colour and energy. Book accommodation early — this is peak season and the lanes around the fort fill up fast.",
  },
  {
    q: "What types of bridal and temple jewelry are available in Jaisalmer markets?",
    a: "Bridal sets dazzle with intricate gold work — heavy necklaces, earrings, maang tikkas and haath phool, often studded with turquoise, onyx and agate. Temple jewelry leans towards oxidised silver with ornate patterns and classic motifs, including chunky anklets and detailed pendants.",
  },
  {
    q: "Where can travellers find gold Rajasthani jewelry and stone-studded ornaments?",
    a: "Head to Sonaron Ka Baas, the traditional goldsmiths' quarter just outside the fort. Expect intricate necklaces, heavy bridal sets and antique-style bangles made by local artisans, plus shops selling stone-studded pieces set with Rajasthan's semi-precious gems.",
  },
  {
    q: "What kinds of brass utensils are available in Jaisalmer's markets?",
    a: "Water pots (lotas), serving bowls, plates and old-style tumblers with a golden sheen and simple engraving, plus brass pooja thalis, spice boxes and ladles — sturdy, useful pieces that double as decorative keepsakes.",
  },
  {
    q: "Where can shoppers find traditional silver jewelry and gemstone ornaments?",
    a: "Manak Chowk, just outside the fort, is packed with stalls specialising in traditional silver jewelry — chunky tribal necklaces, delicate rings and earrings — plus gemstone pieces at friendlier prices than you'd expect, brass utensils, embroidered bags and wall hangings.",
  },
];

export const Route = createFileRoute("/blog/jaisalmer-shopping-guide")({
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
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
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

      <h2>Shopping in Jaisalmer: a window into local life</h2>
      <p>
        Wandering through Jaisalmer's bustling markets is more than a retail adventure — it's a vivid introduction to the city's heritage and day-to-day rhythms. Each stall feels like a chapter from the region's past. As you browse you'll spot artisans weaving intricate patterns and vendors sharing the stories behind their wares. The colourful chaos isn't random; it's rooted in centuries-old traditions.
      </p>
      <p>
        The textiles, jewelry and handicrafts on display aren't just souvenirs — they're the result of skills passed down through generations. Hand-stitched embroidery reflects both the history and identity of Rajasthan, and every shimmering mirror or silver bangle carries an echo of the desert's spirit. Shopping here means supporting local craftspeople whose livelihoods depend on these ancient trades, and getting an authentic sense of the community, one handcrafted treasure at a time.
      </p>

      <h2>What Jaisalmer is known for</h2>
      <ul>
        <li><strong>Embroidered textiles</strong> — bedspreads, cushion covers, wall hangings and bags in bright cotton with mirror work (sheesha) and traditional Rajasthani stitches.</li>
        <li><strong>Mirror-work items</strong> — everything from small purses to decorative pieces; a very local, very portable souvenir.</li>
        <li><strong>Camel-leather goods</strong> — bags, jootis (traditional slip-on shoes), belts and small journals in soft, worked leather.</li>
        <li><strong>Silver jewelry</strong> — chunky tribal-style silver, oxidised pieces, and lac bangles in bright colours.</li>
        <li><strong>Puppets and folk art</strong> — colourful string puppets and painted wooden pieces.</li>
        <li><strong>Miniature paintings</strong> — small Rajasthani-style paintings on paper, silk or camel bone.</li>
        <li><strong>Brassware</strong> — water pots (lotas), serving bowls, plates, pooja thalis, spice boxes and ladles with simple engraving.</li>
        <li><strong>Local spices and pickles</strong> — Mathania chilli, ker sangri, and dry pickles that travel well.</li>
      </ul>
      <p>
        Wandering through the market you'll find an explosion of colour and craftsmanship packed into every corner. Take your time — a little friendly bargaining is part of the experience. Keep an eye out for <strong>bandhani</strong>, the famous tie-dye technique that turns simple fabric into vibrant scarves, sarees and dupattas, perfect for gifting or wearing on a festive occasion.
      </p>

      <h2>Where to browse</h2>
      <p>
        Most of the action is in the <strong>bazaar area around Jaisalmer Fort</strong> — the lanes climbing up to the fort gate, the shops inside the fort itself, and the streets around the Patwon ki Haveli complex. Sadar Bazaar and Bhatia Bazaar are the classic strips. Prices are almost always negotiable outside fixed-price government emporiums — bargain politely and don't feel awkward walking away and coming back.
      </p>

      <h3>Sadar Bazaar — the handicraft heartland</h3>
      <p>
        Sadar Bazaar is the go-to local handicraft market, renowned for its vibrant atmosphere and the sheer variety of handmade treasures crafted by local artists. Wander the bustling alleys lined with colourful stalls and you'll find embroidered textiles, mirror-work purses, camel-leather bags and jootis, chunky silver anklets and necklaces, wooden carvings, intricate carpets and brightly coloured bangles that jingle with every movement. Leather bags, sandals and wallets here are known for durability as much as rustic charm.
      </p>

      <h3>Bhatia Bazaar — fabrics, spices and everyday finds</h3>
      <p>
        If you're after a one-stop shopping experience, Bhatia Bazaar is a must-visit. Anchored near the main square of the Golden City, this market hums with energy and stocks both modern and traditional goods, making it ideal for daily essentials alongside souvenirs. It's especially renowned for cotton and silk fabrics in classic Rajasthani prints like <strong>Bandhani and Leheriya</strong> — traditional kurtas, sarees, dresses, blouses and scarves that make unique additions to any wardrobe. The spice stalls pay tribute to Rajasthan's culinary fame, so stock up on local masalas while you're here.
      </p>

      <h3>Pansari Bazaar — the villager's market</h3>
      <p>
        If you want something truly local, Pansari Bazaar is the spot. This is where you'll find crafts that actually come from the hands of Jaisalmer's artisans rather than mass-produced tourist stock:
      </p>
      <ul>
        <li><strong>Handwoven rugs and carpets</strong> — wool or cotton, in classic Rajasthani motifs.</li>
        <li><strong>Traditional miniature paintings</strong> — small, detail-rich works that glam up a bare wall or make a unique gift.</li>
        <li><strong>Handmade embroidered jootis</strong> — slip-on shoes with fine threadwork, miles apart from factory versions.</li>
        <li><strong>Ethnic textiles and decorative pieces</strong> — cushion covers, table runners and wall hangings buzzing with local colour.</li>
      </ul>

      <h3>Manak Chowk — silver and gemstones</h3>
      <p>
        Just outside the fort, Manak Chowk is a must for jewelry lovers. This bustling square is packed with stalls specialising in traditional silver jewelry, from chunky tribal necklaces to delicate rings and earrings in classic Rajasthani designs. You'll also spot elegant gemstone pieces at prices friendlier than you'd expect, plus brass utensils, embroidered bags and wall hangings — all in one easy loop.
      </p>

      <h3>Sonaron Ka Baas — gold and stone-studded jewelry</h3>
      <p>
        The traditional goldsmiths' quarter just outside the fort is famed for its dazzling array of Rajasthani gold jewelry: intricate necklaces, heavy bridal sets and antique-style bangles, many crafted by local artisans using age-old techniques. The same lanes are peppered with shops offering stone-studded jewelry set with Rajasthan's semi-precious gems — turquoise, onyx and agate — from subtle temple pieces to full showstoppers.
      </p>

      <h2>Bridal and temple jewelry</h2>
      <p>
        Bridal sets here dazzle with elaborate gold work echoing traditional Rajputana grandeur — heavy necklaces and earrings, maang tikkas and haath phool. Temple jewelry leans towards oxidised silver with ornate patterns and bold classic motifs; look out for chunky anklets and detailed pendants that are as much wearable art as souvenirs.
      </p>

      <h2>Souvenirs at cultural camps and events</h2>
      <p>
        Cultural camps and heritage events in and around Jaisalmer are treasure troves for unique souvenirs. Stalls celebrate traditional craftsmanship — brightly coloured textiles, hand-carved wooden toys and classic Rajasthani utensils. You'll often spot handmade puppets, tribal silver and beaded jewelry, lac bangles, ghagra cholis and turbans, mirror-work bags, decorative wall hangings, woodwork and pottery. It's worth browsing between performances — you never know which locally-made gem will catch your eye. Our <Link to="/desert-camp">desert camp evenings</Link> often include exactly this kind of market.
      </p>

      <h2>When to visit for the best shopping</h2>
      <p>
        To catch Jaisalmer at its liveliest and the markets at their fullest, plan your visit between <strong>November and February</strong>. Winter means you can stroll the bazaars for hours without breaking a sweat, and festival season adds even more colour and energy. Book accommodation early — this is peak season and the winding lanes around the fort fill up quickly.
      </p>

      <h2>Tips for a good haul</h2>
      <ul>
        <li>Compare prices in three or four shops before buying anything big.</li>
        <li>Check stitching and finish on embroidered pieces — some are machine-made.</li>
        <li>Ask for a card and shipping if you're buying more than you can carry.</li>
        <li>Pair a shopping morning with a <Link to="/sightseeing">Jaisalmer sightseeing tour</Link> — the bazaars are right where you'll be anyway.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </BlogPost>
  );
}

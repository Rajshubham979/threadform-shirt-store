import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { designConfig } from "@/config/design.config";
import { getFeaturedProducts } from "@/lib/data";
import { mockProducts } from "@/lib/mock-data";

const campaignTiles = [
  {
    title: "Oversized Uniform",
    subtitle: "Relaxed silhouettes for everyday layering",
    href: "/shop?category=Oversized",
    image: mockProducts[5].images[0]?.url
  },
  {
    title: "Graphic Signal",
    subtitle: "Washed prints and sharper visual statements",
    href: "/shop?category=Graphic",
    image: mockProducts[4].images[0]?.url
  },
  {
    title: "Clean Core",
    subtitle: "Minimal staples cut to anchor the whole fit",
    href: "/shop?category=Plain",
    image: mockProducts[0].images[0]?.url
  }
] as const;

const moodSections = [
  {
    title: "Late Night Uniform",
    copy: "Heavy cotton, darker tones, and bigger silhouettes.",
    href: "/shop?category=Oversized",
    image: mockProducts[1].images[0]?.url
  },
  {
    title: "Off-Duty Core",
    copy: "Everyday basics styled with cleaner lines.",
    href: "/shop?category=Plain",
    image: mockProducts[7].images[0]?.url
  },
  {
    title: "Club Polo",
    copy: "Polos repositioned as fashion, not formalwear.",
    href: "/shop?category=Polo",
    image: mockProducts[2].images[0]?.url
  },
  {
    title: "Graphic Noise",
    copy: "Print-led pieces that still feel controlled.",
    href: "/shop?category=Graphic",
    image: mockProducts[8].images[0]?.url
  }
] as const;

const categoryStrip = [
  { label: "New Drop", href: "/shop?sort=newest" },
  { label: "Oversized", href: "/shop?category=Oversized" },
  { label: "Graphics", href: "/shop?category=Graphic" },
  { label: "Core Tees", href: "/shop?category=Plain" },
  { label: "Polos", href: "/shop?category=Polo" },
  { label: "Best Sellers", href: "/shop" }
] as const;

const closingPhrases = [
  "NO DRESS CODE",
  "OUTSIDE UNIFORM",
  "WEAR IT LOUD",
  "FIT CHECK ENERGY",
  "SCROLL. PICK. FLEX."
] as const;

function SectionHeader({
  eyebrow,
  title,
  href,
  cta
}: {
  eyebrow: string;
  title: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">{eyebrow}</p>
        <h2 className="mt-2 text-5xl uppercase">{title}</h2>
      </div>
      {href && cta ? (
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="border-b">
      <div className="grid min-h-[90vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden bg-[var(--color-primary)] text-white">
          <img
            src={mockProducts[5].images[0]?.url}
            alt={mockProducts[5].name}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="site-shell relative flex min-h-[90vh] items-end py-12 lg:py-16">
            <div className="max-w-4xl space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="sticker -rotate-2">Hot right now</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/78">
                  {designConfig.brand.name} / Drop page 01
                </span>
              </div>
              <h1 className="text-6xl uppercase leading-[0.9] md:text-[7.5rem]">
                Built for fits, not folders.
              </h1>
              <p className="max-w-xl text-base text-white/78 md:text-lg">
                Oversized drops, graphic statements, cleaner basics, and sharper polos arranged like separate internet-era mood boards.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="border-white bg-white text-black hover:bg-white/90">
                  <Link href="/shop">Shop all</Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/shop?sort=newest">New arrivals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2">
          {[mockProducts[4], mockProducts[2]].map((product, index) => (
            <Link
              key={product.id}
              href={index === 0 ? "/shop?category=Graphic" : "/shop?category=Polo"}
              className="group relative min-h-[45vh] overflow-hidden border-t lg:border-l lg:first:border-t-0"
            >
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/75">
                  {index === 0 ? "Graphic chaos" : "Clean flex"}
                </p>
                <h2 className="mt-3 text-4xl uppercase">{index === 0 ? "Graphic Signal" : "Club Polo"}</h2>
                <p className="mt-2 max-w-md text-sm text-white/80">{product.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryStripSection() {
  return (
    <section className="home-noise overflow-hidden border-b py-4">
      <div className="marquee-track flex text-sm uppercase tracking-[0.24em] text-text-secondary">
        {Array.from({ length: 2 }).map((_, loopIndex) => (
          <div key={loopIndex} className="marquee-sequence">
            {categoryStrip.map((item) => (
              <Link
                key={`${loopIndex}-${item.label}`}
                href={item.href}
                className="whitespace-nowrap border-r border-[color:color-mix(in_srgb,var(--color-border)_75%,transparent)] px-7"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function CampaignGridSection() {
  return (
    <section className="border-b bg-[var(--color-surface)] py-14 md:py-18">
      <div className="site-shell">
        <SectionHeader eyebrow="Different trends" title="Shop by section" href="/shop" cta="View all" />

        <div className="grid gap-[1px] overflow-hidden border bg-[var(--color-border)] lg:grid-cols-3">
          {campaignTiles.map((tile, index) => (
            <Link key={tile.title} href={tile.href} className="group relative min-h-[460px] overflow-hidden bg-black">
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="flex items-center gap-3">
                  <span className={`sticker ${index === 1 ? "rotate-2" : "-rotate-2"}`}>Explore now</span>
                </div>
                <h3 className="mt-3 text-4xl uppercase">{tile.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-white/78">{tile.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  return (
    <section className="border-b bg-[#141414] py-16 text-white md:py-20">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="sticker rotate-1">Styled by {designConfig.brand.name}</span>
          <h2 className="mt-4 text-5xl uppercase leading-[0.96] md:text-6xl">
            Feels less formal when every block carries its own mood.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/65 md:text-base">
            The point is not to look polished-for-corporate. It should feel scrollable, current, and a bit louder without becoming messy.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[mockProducts[0], mockProducts[5], mockProducts[4]].map((product, index) => (
            <div key={product.id} className="relative min-h-[420px] overflow-hidden border border-white/10">
              <img src={product.images[0]?.url} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-white/65">Drop 0{index + 1}</p>
                <h3 className="mt-3 text-3xl uppercase">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullBleedFeatureSection() {
  const feature = mockProducts[6];

  return (
    <section className="border-b bg-[var(--color-secondary)] text-[var(--color-primary)]">
      <div className="grid lg:min-h-[72vh] lg:grid-cols-[1fr_1fr]">
        <div className="site-shell flex items-center py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="rounded-full border border-[var(--color-primary)] bg-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em]">
              Feature campaign
            </span>
            <h2 className="mt-4 text-5xl uppercase leading-[0.94] md:text-7xl">
              Bigger energy. Faster decisions. Less homepage boredom.
            </h2>
            <p className="mt-5 max-w-xl text-base text-[color:color-mix(in_srgb,var(--color-primary)_72%,transparent)]">
              This section exists to interrupt the page and make the homepage feel more like a youth brand campaign than a clean catalog layout.
            </p>
            <Link
              href="/shop?category=Polo"
              className="mt-8 inline-flex items-center gap-2 border-b border-[var(--color-primary)] pb-2 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              Explore polos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-t lg:border-l lg:border-t-0">
          <img src={feature.images[0]?.url} alt={feature.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">Featured direction</p>
            <h3 className="mt-3 text-4xl uppercase">{feature.name}</h3>
            <p className="mt-2 text-sm text-white/80">Minimal from afar. Streetwear in silhouette.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoodWallSection() {
  return (
    <section className="border-b py-14 md:py-20">
      <div className="site-shell">
        <SectionHeader eyebrow="Match the mood" title="Style-led browsing" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {moodSections.map((item, index) => (
            <Link key={item.title} href={item.href} className="group relative min-h-[440px] overflow-hidden border">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className={`sticker ${index % 2 === 0 ? "-rotate-2" : "rotate-2"} mb-3`}>Mood</span>
                <h3 className="text-3xl uppercase">{item.title}</h3>
                <p className="mt-2 text-sm text-white/75">{item.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewArrivalsSection({ products }: { products: Awaited<ReturnType<typeof getFeaturedProducts>> }) {
  return (
    <section className="border-b py-14 md:py-20">
      <div className="site-shell">
        <SectionHeader eyebrow="New arrivals" title="Fresh drop" href="/shop?sort=newest" cta="Explore now" />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {JSON.parse(JSON.stringify(products)).map((product: (typeof products)[number]) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalDropSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(199,255,61,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(199,255,61,0.12),transparent_28%)]" />

      <div className="marquee-track flex border-b border-white/10 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white/72">
        {Array.from({ length: 2 }).map((_, loopIndex) => (
          <div key={loopIndex} className="marquee-sequence">
            {closingPhrases.map((phrase) => (
              <span key={`${loopIndex}-${phrase}`} className="whitespace-nowrap px-6">
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="site-shell relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <span className="sticker rotate-1">After dark drop</span>
          <h2 className="mt-5 text-6xl uppercase leading-[0.88] md:text-[7rem]">
            The bottom should hit like a poster wall, not a checkout queue.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/72 md:text-lg">
            So this ending is louder, bolder, and intentionally a little chaotic. More street flyer. Less template.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="border-white bg-[var(--color-secondary)] text-[var(--color-primary)] hover:opacity-90">
              <Link href="/shop?sort=newest">Shop the latest</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/shop?category=Graphic">Graphic picks</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rotate-[-5deg] overflow-hidden border border-white/15 bg-white/6 p-3 backdrop-blur-sm">
              <div className="relative min-h-[250px] overflow-hidden">
                <img src={mockProducts[8].images[0]?.url} alt={mockProducts[8].name} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/58">Graphic chaos</p>
                  <p className="mt-1 text-lg uppercase">{mockProducts[8].name}</p>
                </div>
                <span className="sticker -rotate-2">Loud</span>
              </div>
            </div>
            <div className="rounded-[var(--radius-card)] border border-white/12 bg-white/8 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/58">Why it works</p>
              <p className="mt-3 text-2xl uppercase leading-tight">
                Big shapes, sharper type, brighter stickers, and no quiet exit.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-8 sm:pt-14">
            <div className="rotate-[4deg] overflow-hidden border border-white/15 bg-white/6 p-3 backdrop-blur-sm">
              <div className="relative min-h-[340px] overflow-hidden">
                <img src={mockProducts[1].images[0]?.url} alt={mockProducts[1].name} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/58">Late night uniform</p>
                  <p className="mt-1 text-lg uppercase">{mockProducts[1].name}</p>
                </div>
                <span className="sticker rotate-2">Core</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/12 bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/58">Drop mood</p>
                <p className="mt-2 text-3xl uppercase">Offline cool</p>
              </div>
              <div className="border border-white/12 bg-[var(--color-secondary)] p-4 text-[var(--color-primary)]">
                <p className="text-xs uppercase tracking-[0.24em] opacity-70">Wear count</p>
                <p className="mt-2 text-3xl uppercase">On repeat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="page-transition pb-16">
      <HeroSection />
      <CategoryStripSection />
      <CampaignGridSection />
      <StatementSection />
      <FullBleedFeatureSection />
      <MoodWallSection />
      <NewArrivalsSection products={featuredProducts} />
      <FinalDropSection />
    </div>
  );
}

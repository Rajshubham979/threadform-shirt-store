import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
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

function HeroSection() {
  return (
    <section className="border-b">
      <div className="grid min-h-[88vh] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden bg-[var(--color-primary)] text-white">
          <img
            src={mockProducts[5].images[0]?.url}
            alt={mockProducts[5].name}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="site-shell relative flex min-h-[88vh] items-end py-12 lg:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-white/70">Threadform / Summer Streetwear Edit</p>
              <h1 className="text-6xl uppercase leading-[0.92] md:text-8xl">
                Explore now. Build the fit by section, not by scrolling forever.
              </h1>
              <p className="max-w-xl text-base text-white/78 md:text-lg">
                Oversized drops, graphic statements, cleaner basics, and sharper polos split into distinct stories.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="border-white bg-white text-black hover:bg-white/90">
                  <Link href="/shop">
                    Shop all
                  </Link>
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
              className="group relative min-h-[44vh] overflow-hidden border-t lg:border-l lg:first:border-t-0"
            >
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/75">Section 0{index + 1}</p>
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

function CampaignGridSection() {
  return (
    <section className="border-b bg-[var(--color-surface)] py-12 md:py-16">
      <div className="site-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">Different trends</p>
            <h2 className="mt-2 text-5xl uppercase">Shop by section</h2>
          </div>
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-[1px] overflow-hidden border bg-[var(--color-border)] lg:grid-cols-3">
          {campaignTiles.map((tile) => (
            <Link key={tile.title} href={tile.href} className="group relative min-h-[440px] overflow-hidden bg-black">
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">Explore now</p>
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

function StyledBySection() {
  return (
    <section className="border-b bg-[#141414] py-14 text-white md:py-20">
      <div className="site-shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Styled by Threadform</p>
            <h2 className="mt-2 text-5xl uppercase">Built as separate campaigns</h2>
          </div>
          <p className="max-w-xl text-sm text-white/65">
            A homepage should feel like stacked drops. Each block below is meant to read like a distinct styling story.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[mockProducts[0], mockProducts[5], mockProducts[4]].map((product, index) => (
            <div key={product.id} className="relative min-h-[520px] overflow-hidden border border-white/10">
              <img src={product.images[0]?.url} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-white/65">Drop 0{index + 1}</p>
                <h3 className="mt-3 text-3xl uppercase">{product.name}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {index === 0
                    ? "Core shapes for repeated wear."
                    : index === 1
                      ? "Oversized silhouettes for layered fits."
                      : "Graphic statements anchored by cleaner styling."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchTheMoodSection() {
  return (
    <section className="border-b py-14 md:py-20">
      <div className="site-shell">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">Match the mood</p>
          <h2 className="mt-2 text-5xl uppercase">Style-led browsing</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {moodSections.map((item) => (
            <Link key={item.title} href={item.href} className="group relative min-h-[420px] overflow-hidden border">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
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
    <section className="py-14 md:py-20">
      <div className="site-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">New arrivals</p>
            <h2 className="mt-2 text-5xl uppercase">Fresh drop</h2>
          </div>
          <Link href="/shop?sort=newest" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
            Explore now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {JSON.parse(JSON.stringify(products)).map((product: (typeof products)[number]) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
      <CampaignGridSection />
      <StyledBySection />
      <MatchTheMoodSection />
      <NewArrivalsSection products={featuredProducts} />
    </div>
  );
}

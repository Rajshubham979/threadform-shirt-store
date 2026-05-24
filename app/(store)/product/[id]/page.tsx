import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductDetailClient } from "@/components/product/product-detail-client";
import { getProductById, mapProductToStructuredData } from "@/lib/data";

type ProductDetailPageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((image) => image.url)
    }
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetailClient product={JSON.parse(JSON.stringify(product))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mapProductToStructuredData(JSON.parse(JSON.stringify(product))))
        }}
      />
    </>
  );
}

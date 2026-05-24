import { type ProductRecord } from "@/types";
import { mockProducts } from "@/lib/mock-data";

export async function getFeaturedProducts(limit = 4) {
  return mockProducts.slice(0, limit);
}

export async function getProductById(id: string) {
  return mockProducts.find((product) => product.id === id) ?? null;
}

export async function getProductsForShop(searchParams: Record<string, string | string[] | undefined>) {
  const page = Number(searchParams.page ?? 1);
  const limit = Number(searchParams.limit ?? 9);
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined;
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest";
  const sizes = typeof searchParams.sizes === "string" ? searchParams.sizes.split(",") : [];
  const colors = typeof searchParams.colors === "string" ? searchParams.colors.split(",") : [];
  const minPrice = Number(searchParams.minPrice ?? 0);
  const maxPrice = Number(searchParams.maxPrice ?? 100000);

  let filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSizes = sizes.length ? sizes.some((size) => product.sizes.includes(size as never)) : true;
    const matchesColors = colors.length ? colors.some((color) => product.colors.includes(color)) : true;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return matchesCategory && matchesSizes && matchesColors && matchesPrice;
  });

  filteredProducts = [...filteredProducts].sort((left, right) => {
    if (sort === "price-asc") {
      return left.price - right.price;
    }
    if (sort === "price-desc") {
      return right.price - left.price;
    }
    return right.createdAt.localeCompare(left.createdAt);
  });

  const total = filteredProducts.length;
  const products = filteredProducts.slice((page - 1) * limit, page * limit);

  return { products, total, page, totalPages: Math.ceil(total / limit) };
}

export function mapProductToStructuredData(product: ProductRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => image.url),
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };
}

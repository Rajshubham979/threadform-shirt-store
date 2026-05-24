import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { productQuerySchema, productSchema } from "@/lib/validations";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parsed = productQuerySchema.safeParse(Object.fromEntries(searchParams.entries()));

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { page, limit, category, colors, sizes, minPrice, maxPrice, sort } = parsed.data;

  const where = {
    ...(category ? { category } : {}),
    ...(sizes ? { sizes: { hasSome: sizes.split(",") } } : {}),
    ...(colors ? { colors: { hasSome: colors.split(",") } } : {}),
    price: {
      ...(typeof minPrice === "number" ? { gte: minPrice } : {}),
      ...(typeof maxPrice === "number" ? { lte: maxPrice } : {})
    }
  };

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: { images: { orderBy: { order: "asc" } } },
      orderBy:
        sort === "price-asc"
          ? { price: "asc" }
          : sort === "price-desc"
            ? { price: "desc" }
            : { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit
    }),
    prisma.product.count({ where })
  ]);

  return NextResponse.json({
    data: products,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
}

export async function POST(request: Request) {
  const session = await auth();
  if (session?.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = productSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name: parsed.data.name,
      description: parsed.data.description,
      price: parsed.data.price,
      category: parsed.data.category,
      sizes: parsed.data.sizes,
      colors: parsed.data.colors,
      stock: parsed.data.stock,
      images: {
        create: parsed.data.images
      }
    },
    include: { images: true }
  });

  return NextResponse.json(product, { status: 201 });
}

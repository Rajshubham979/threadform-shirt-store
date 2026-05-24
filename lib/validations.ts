import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(20),
  price: z.number().int().positive(),
  category: z.string().min(2),
  sizes: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"])).min(1),
  colors: z.array(z.string().min(2)).min(1),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        alt: z.string().min(2),
        order: z.number().int().nonnegative()
      })
    )
    .min(1),
  stock: z.number().int().nonnegative()
});

export const productQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(24).default(9),
  category: z.string().optional(),
  sizes: z.string().optional(),
  colors: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  sort: z.enum(["newest", "price-asc", "price-desc"]).default("newest")
});

export const orderSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string().min(1),
      name: z.string().min(1),
      image: z.string().url(),
      size: z.enum(["XS", "S", "M", "L", "XL", "XXL"]),
      color: z.string().min(1),
      price: z.number().int().positive(),
      quantity: z.number().int().positive()
    })
  ),
  total: z.number().int().positive(),
  shippingAddress: z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    line1: z.string().min(4),
    line2: z.string().optional(),
    city: z.string().min(2),
    state: z.string().min(2),
    postalCode: z.string().min(3),
    country: z.string().min(2)
  }),
  stripeSessionId: z.string().optional()
});

export const checkoutSchema = z.object({
  items: orderSchema.shape.items,
  shippingAddress: orderSchema.shape.shippingAddress
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export const statusSchema = z.object({
  status: z.enum(["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"])
});

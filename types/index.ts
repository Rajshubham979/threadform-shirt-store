export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type OrderStatus = "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  order: number;
};

export type ProductRecord = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: ProductSize[];
  colors: string[];
  images: ProductImage[];
  stock: number;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  size: ProductSize;
  color: string;
  price: number;
  quantity: number;
};

export type ShippingAddress = {
  fullName: string;
  email: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

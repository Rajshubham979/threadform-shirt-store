import type { ProductRecord, ShippingAddress } from "@/types";

export type MockOrder = {
  id: string;
  userEmail: string;
  userName: string;
  status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  total: number;
  createdAt: string;
  shippingAddress: ShippingAddress;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
};

const now = new Date().toISOString();

export const mockProducts: ProductRecord[] = [
  {
    id: "shirt-001",
    name: "Essential Crew Tee",
    description: "A clean everyday crew-neck tee with a soft premium hand feel, balanced drape, and timeless fit for regular rotation.",
    price: 799,
    category: "Plain",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    images: [
      {
        id: "img-001-a",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        alt: "Essential Crew Tee front view",
        order: 0
      },
      {
        id: "img-001-b",
        url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
        alt: "Essential Crew Tee detail view",
        order: 1
      }
    ],
    stock: 24,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-002",
    name: "Retro Graphic Oversized",
    description: "Relaxed oversized graphic tee with heavyweight fabric, dropped shoulders, and a washed vintage-inspired print.",
    price: 1299,
    category: "Graphic",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Sand", "Charcoal"],
    images: [
      {
        id: "img-002-a",
        url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
        alt: "Retro Graphic Oversized front view",
        order: 0
      },
      {
        id: "img-002-b",
        url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
        alt: "Retro Graphic Oversized styling view",
        order: 1
      }
    ],
    stock: 14,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-003",
    name: "Weekend Polo",
    description: "A polished polo with subtle structure, breathable knit texture, and an elevated collar for casual-smart outfits.",
    price: 1499,
    category: "Polo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Cream"],
    images: [
      {
        id: "img-003-a",
        url: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80",
        alt: "Weekend Polo front view",
        order: 0
      },
      {
        id: "img-003-b",
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
        alt: "Weekend Polo collar detail",
        order: 1
      }
    ],
    stock: 10,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-004",
    name: "Studio Heavyweight Tee",
    description: "Dense premium cotton tee with a boxy silhouette and crisp neckline for a more intentional minimal look.",
    price: 999,
    category: "Plain",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Stone", "Black"],
    images: [
      {
        id: "img-004-a",
        url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
        alt: "Studio Heavyweight Tee front view",
        order: 0
      },
      {
        id: "img-004-b",
        url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
        alt: "Studio Heavyweight Tee folded view",
        order: 1
      }
    ],
    stock: 18,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-005",
    name: "Tokyo Backprint Tee",
    description: "Statement graphic tee with a bold back print, relaxed cut, and smooth cotton finish for standout casual wear.",
    price: 1399,
    category: "Graphic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue"],
    images: [
      {
        id: "img-005-a",
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
        alt: "Tokyo Backprint Tee front view",
        order: 0
      },
      {
        id: "img-005-b",
        url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
        alt: "Tokyo Backprint Tee back view",
        order: 1
      }
    ],
    stock: 12,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-006",
    name: "Relaxed Boxy Tee",
    description: "Boxy fit everyday tee designed with room through the shoulders and body for an effortless streetwear shape.",
    price: 1199,
    category: "Oversized",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mocha", "Forest"],
    images: [
      {
        id: "img-006-a",
        url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
        alt: "Relaxed Boxy Tee front view",
        order: 0
      },
      {
        id: "img-006-b",
        url: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&w=900&q=80",
        alt: "Relaxed Boxy Tee styling view",
        order: 1
      }
    ],
    stock: 16,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-007",
    name: "Varsity Collar Polo",
    description: "Sport-inspired polo with contrast tipping, clean placket, and a polished shape that still feels relaxed.",
    price: 1599,
    category: "Polo",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Burgundy", "Navy"],
    images: [
      {
        id: "img-007-a",
        url: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80",
        alt: "Varsity Collar Polo front view",
        order: 0
      },
      {
        id: "img-007-b",
        url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
        alt: "Varsity Collar Polo detail view",
        order: 1
      }
    ],
    stock: 8,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-008",
    name: "Core Everyday Tee",
    description: "Your dependable everyday basic with a comfortable regular fit, soft fabric, and versatile color options.",
    price: 699,
    category: "Plain",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    images: [
      {
        id: "img-008-a",
        url: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=900&q=80",
        alt: "Core Everyday Tee front view",
        order: 0
      },
      {
        id: "img-008-b",
        url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
        alt: "Core Everyday Tee flat lay",
        order: 1
      }
    ],
    stock: 30,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-009",
    name: "Artist Series Tee",
    description: "Limited artist collaboration tee with gallery-inspired graphics and a soft broken-in premium cotton feel.",
    price: 1499,
    category: "Graphic",
    sizes: ["S", "M", "L"],
    colors: ["Ivory", "Faded Black"],
    images: [
      {
        id: "img-009-a",
        url: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=80",
        alt: "Artist Series Tee front view",
        order: 0
      },
      {
        id: "img-009-b",
        url: "https://images.unsplash.com/photo-1583744946564-b52d01a7b321?auto=format&fit=crop&w=900&q=80",
        alt: "Artist Series Tee graphic detail",
        order: 1
      }
    ],
    stock: 6,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "shirt-010",
    name: "Dropped Shoulder Tee",
    description: "A generous dropped-shoulder silhouette with fluid drape and a modern oversized shape for relaxed styling.",
    price: 1249,
    category: "Oversized",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Clay", "Sage"],
    images: [
      {
        id: "img-010-a",
        url: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
        alt: "Dropped Shoulder Tee front view",
        order: 0
      },
      {
        id: "img-010-b",
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
        alt: "Dropped Shoulder Tee styling view",
        order: 1
      }
    ],
    stock: 20,
    createdAt: now,
    updatedAt: now
  }
];

export const mockUser = {
  id: "preview-user-001",
  name: "Aarav Sharma",
  email: "aarav@example.com",
  role: "USER" as const
};

export const mockOrders: MockOrder[] = [
  {
    id: "mock-order-1001",
    userEmail: mockUser.email,
    userName: mockUser.name,
    status: "DELIVERED",
    total: 2098,
    createdAt: now,
    shippingAddress: {
      fullName: "Aarav Sharma",
      email: "aarav@example.com",
      line1: "221 Fashion Street",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India"
    },
    items: [
      {
        productId: "shirt-001",
        name: "Essential Crew Tee",
        quantity: 1,
        price: 799
      },
      {
        productId: "shirt-006",
        name: "Relaxed Boxy Tee",
        quantity: 1,
        price: 1199
      }
    ]
  },
  {
    id: "mock-order-1002",
    userEmail: mockUser.email,
    userName: mockUser.name,
    status: "SHIPPED",
    total: 1499,
    createdAt: now,
    shippingAddress: {
      fullName: "Aarav Sharma",
      email: "aarav@example.com",
      line1: "221 Fashion Street",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India"
    },
    items: [
      {
        productId: "shirt-003",
        name: "Weekend Polo",
        quantity: 1,
        price: 1499
      }
    ]
  },
  {
    id: "mock-order-1003",
    userEmail: "mia@example.com",
    userName: "Mia Patel",
    status: "PAID",
    total: 2598,
    createdAt: now,
    shippingAddress: {
      fullName: "Mia Patel",
      email: "mia@example.com",
      line1: "8 Market Lane",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India"
    },
    items: [
      {
        productId: "shirt-002",
        name: "Retro Graphic Oversized",
        quantity: 2,
        price: 1299
      }
    ]
  }
];

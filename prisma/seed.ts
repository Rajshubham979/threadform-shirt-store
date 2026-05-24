import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

const shirts = [
  ["Essential Crew Tee", "Plain", 799, ["S", "M", "L", "XL"], ["Black", "White", "Olive"]],
  ["Retro Graphic Oversized", "Graphic", 1299, ["M", "L", "XL"], ["Sand", "Charcoal"]],
  ["Weekend Polo", "Polo", 1499, ["S", "M", "L", "XL", "XXL"], ["Navy", "Cream"]],
  ["Studio Heavyweight Tee", "Plain", 999, ["XS", "S", "M", "L"], ["Stone", "Black"]],
  ["Tokyo Backprint Tee", "Graphic", 1399, ["M", "L", "XL"], ["White", "Blue"]],
  ["Relaxed Boxy Tee", "Oversized", 1199, ["S", "M", "L", "XL"], ["Mocha", "Forest"]],
  ["Varsity Collar Polo", "Polo", 1599, ["M", "L", "XL", "XXL"], ["Burgundy", "Navy"]],
  ["Core Everyday Tee", "Plain", 699, ["XS", "S", "M", "L", "XL"], ["White", "Black", "Grey"]],
  ["Artist Series Tee", "Graphic", 1499, ["S", "M", "L"], ["Ivory", "Faded Black"]],
  ["Dropped Shoulder Tee", "Oversized", 1249, ["M", "L", "XL", "XXL"], ["Clay", "Sage"]]
] as const;

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const password = await bcrypt.hash("Admin@123", 10);

  await prisma.user.create({
    data: {
      email: "admin@shirtstore.dev",
      name: "Store Admin",
      password,
      role: Role.ADMIN
    }
  });

  for (const [index, shirt] of shirts.entries()) {
    const [name, category, price, sizes, colors] = shirt;
    await prisma.product.create({
      data: {
        name,
        category,
        price,
        sizes: [...sizes],
        colors: [...colors],
        stock: 10 + index * 3,
        description: `${name} is built for all-day comfort with premium cotton, durable stitching, and an easy modern silhouette.`,
        images: {
          create: [
            {
              url: `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80&sig=${index + 1}`,
              alt: `${name} front`,
              order: 0
            },
            {
              url: `https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80&sig=${index + 21}`,
              alt: `${name} detail`,
              order: 1
            }
          ]
        }
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

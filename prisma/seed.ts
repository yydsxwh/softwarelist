import { hashPassword, makeReferralCode } from "../packages/shared/src/password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hashPassword("123456");

  await prisma.user.upsert({
    where: { email: "admin@yyds.local" },
    update: {},
    create: {
      email: "admin@yyds.local",
      name: "站长",
      passwordHash,
      role: "ADMIN",
      roles: "ADMIN",
      bio: "软件产品专栏站长",
      referralCode: makeReferralCode(),
    },
  });

  await prisma.user.upsert({
    where: { email: "student@yyds.local" },
    update: {},
    create: {
      email: "student@yyds.local",
      name: "学员小陈",
      passwordHash,
      role: "STUDENT",
      roles: "STUDENT",
      bio: "软件产品体验账号",
      referralCode: makeReferralCode(),
    },
  });

  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      paymentMode: "mock",
    },
  });

  console.log("Seeded softwarelist demo users:");
  console.log("  admin@yyds.local / 123456");
  console.log("  student@yyds.local / 123456");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

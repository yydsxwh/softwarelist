/**
 * 订单履约桩：软件产品库不包含网课业务，
 * 只保证支付成功后写入 enrollment，避免 MathCode 壳商品履约中断。
 */

import type { Prisma, PrismaClient } from "@prisma/client";

type DbClient = PrismaClient | Prisma.TransactionClient;

export async function grantProductAccess(
  db: DbClient,
  input: { userId: string; productId: string },
) {
  const existing = await db.enrollment.findUnique({
    where: { userId_courseId: { userId: input.userId, courseId: input.productId } },
  });
  if (existing) return;

  const product = await db.course.findUnique({
    where: { id: input.productId },
    select: { id: true },
  });
  if (!product) return;

  await db.enrollment.create({
    data: { userId: input.userId, courseId: input.productId },
  });
  await db.course.update({
    where: { id: input.productId },
    data: { studentCount: { increment: 1 } },
  });
}

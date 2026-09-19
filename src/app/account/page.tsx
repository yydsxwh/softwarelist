import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@andyyyds/shared/auth";
import { LogoutButton } from "@/components/logout-button";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "账户",
};

export default async function AccountPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login?next=/account");
  }

  return (
    <div className="container py-12">
      <div className="surface mx-auto max-w-lg rounded-[28px] p-6 sm:p-8">
        <p className="text-sm font-medium text-[var(--brand)]">账户</p>
        <h1 className="brand-mark mt-2 text-3xl font-semibold">{session.name}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{session.email}</p>
        <p className="mt-1 text-xs text-[var(--muted)]">角色：{session.role}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary min-h-11">
            返回软件产品
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

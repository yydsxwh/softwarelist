import Link from "next/link";
import { getSession } from "@andyyyds/shared/auth";

const NAV = [
  { href: "/", label: "软件产品" },
  { href: "/products/docs", label: "网页文档" },
  { href: "/products/mathcode", label: "MathCode" },
  { href: "/games", label: "游戏中心" },
] as const;

export async function SiteHeader() {
  const session = await getSession();

  return (
    <header className="glass-bar sticky top-0 z-40 border-b">
      <div className="container flex min-h-16 items-center justify-between gap-4 py-2">
        <Link href="/" className="brand-mark shrink-0 text-lg font-semibold text-[var(--ink)]">
          软件产品
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-[var(--ink)] hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
          {session ? (
            <Link
              href="/account"
              className="inline-flex min-h-11 items-center font-medium text-[var(--brand)]"
            >
              {session.name || "账户"}
            </Link>
          ) : (
            <Link
              href="/login"
              className="btn btn-primary min-h-11 px-4 text-sm"
            >
              登录
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

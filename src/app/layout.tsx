import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eaf2f8",
};

export const metadata: Metadata = {
  title: {
    default: "软件产品",
    template: "%s · 软件产品",
  },
  applicationName: "软件产品",
  description: "颗秒会议、颗秒网盘、网页文档、MathCode 等自研软件产品",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <LocaleProvider locale="zh-Hans" bilingual={false}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="glass-bar border-t py-8 text-sm text-[var(--muted)]">
            <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="brand-mark text-[var(--ink)]">软件产品</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href="/app/windows"
                  className="min-h-11 inline-flex items-center text-[var(--brand)] underline-offset-2 hover:underline"
                >
                  Windows 客户端
                </Link>
                <Link
                  href="/app"
                  className="min-h-11 inline-flex items-center text-[var(--brand)] underline-offset-2 hover:underline"
                >
                  Android 应用
                </Link>
              </div>
            </div>
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}

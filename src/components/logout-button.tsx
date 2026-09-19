"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <button type="button" className="btn btn-primary min-h-11" onClick={onLogout}>
      退出登录
    </button>
  );
}

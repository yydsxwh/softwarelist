import type { ReactNode } from "react";

type Props = {
  type: string;
  children: ReactNode;
};

/** 软件产品库不启用 DIY 页面模板，原样渲染栏目内容。 */
export async function NavPageTemplateShell({ children }: Props) {
  return <>{children}</>;
}

# softwarelist

从 [Andyyyds](https://github.com/yydsxwh/Andyyyds) 搬运的**软件产品**专栏：列表页、网页文档、MathCode、游戏中心占位，以及登录 / 支付等支撑功能。

这个仓库可以单独跑，但线上专栏仍由主站提供。产品入口不要在运行时请求主站的 `/api/products`；稳定地址在 `@yydsxwh/shared/products/registry`（`0.6.0`，生产依赖仍钉 `v0.5.1` 直到打 tag）。

## 功能

- **软件产品列表**（`/`、`/products`）：网页文档、MathCode、颗秒会议、颗秒网盘
- **网页文档**（`/products/docs`）：浏览器里写文档，打开/另存 Word 与 HTML，页眉页脚打印
- **MathCode**（`/products/mathcode`）：截图 / PDF / Office 转 LaTeX，额度与支付
- **游戏中心**（`/games`）：即将开放占位
- 登录 / 注册（邮箱、账号、手机、微信）
- Windows / Android 客户端下载页

## 技术栈

- Next.js 16 + TypeScript + Tailwind CSS
- Prisma + SQLite
- Cookie Session（jose + bcryptjs）

## 快速开始

```bash
cp .env.example .env
npm install
npm run db:reset
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)

### 演示账号

| 角色 | 邮箱 | 密码 |
|------|------|------|
| 管理员 | admin@yyds.local | 123456 |
| 学员 | student@yyds.local | 123456 |

本地默认 `PAYMENT_MODE=mock`，MathCode 可用模拟支付开通额度。

## 目录

- `packages/docs`（`@andyyyds/docs`）网页文档
- `packages/mathcode`（`@andyyyds/mathcode`）识图转 LaTeX
- `packages/shared`（`@andyyyds/shared`）登录、支付、权限等公共能力
- `src/app` 路由与 API 薄入口

跨站点复用的类型、工具、i18n 与校验来自公共仓库
[`@yydsxwh/shared`](https://github.com/yydsxwh/shared)，以 git tag 固定版本；
`packages/shared` 下同名模块只留一行 `export *` 兼容旧 import，不要在本仓库改实现。

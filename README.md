# پروژه فروشگاه دیجیتال (Digital Shop)

این پروژه یک فروشگاه دیجیتال است که با استفاده از **Next.js**، **React**، **TypeScript** و **Prisma** توسعه داده شده است.

## ساختار پروژه

- **src/app/**: صفحات اصلی و روتینگ پروژه
- **src/modules/**: ماژول‌های اصلی مانند محصولات (products)
- **src/components/**: کامپوننت‌های عمومی رابط کاربری
- **src/types/**: تایپ‌ها و اینترفیس‌های TypeScript
- **prisma/**: اسکیما و تنظیمات دیتابیس

## تکنولوژی‌های استفاده شده

- Next.js 15 (app router)
- React 19
- TypeScript
- Prisma ORM
- TailwindCSS
- Radix UI

## نکات توسعه

- دریافت داده محصولات به صورت سروری (SSR) انجام می‌شود و بهبود SEO دارد.
- مدیریت خطا و اعتبارسنجی داده‌ها در سرویس‌های محصولات پیاده‌سازی شده است.
- ساختار پوشه‌ای پروژه ماژولار و قابل توسعه است.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

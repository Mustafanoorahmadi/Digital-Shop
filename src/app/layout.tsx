import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import ReactQueryProvider from "@/providers/ReactQuery";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital shop",
  description: "digital shop to buy digital stuff",
};

export default function RootLayout({
  children,
  ads,
}: Readonly<{
  children: React.ReactNode;
  ads: React.ReactNode;
}>) {
  return (
    // <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    //       </ClerkProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <main className="flex flex-col justify-between w-full min-h-screen">
              <Header />
              <div className="px-20 mt-3">{children}</div>
              <div className="my-10 mx-auto flex justify-center">
                {ads}
              </div>
              <footer className="bg-black w-full text-white flex items-center justify-center h-10">
                <p>&code: 2025 with Mustafa</p>
              </footer>
            </main>
          </body>
        </html>
      </ReactQueryProvider>
  );
}

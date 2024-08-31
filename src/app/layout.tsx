import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Provider from "@/components/themeProvider";
import CookieConsent from "@/components/cookieConsent";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const meta: Metadata = {
  title: "Devian",
  description: "Devian's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>
          {/* Wrap the title prop in a React.Fragment */}
          <>{meta.title}</>
        </title>
      </head>
      <body
        className={`antialiased bg-zinc-50 dark:bg-neutral-950 text-black dark:text-white ${inter.className} duration-150 min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Provider>
          <div className="pb-20">
            <Header />
          </div>
          <div className="w-full max-w-5xl mx-auto px-8 flex-grow h-full">
            {children}
            <CookieConsent />
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

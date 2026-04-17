import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { site } from "@/lib/site";

const socialTitle = `${site.name} | ${site.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://emilyruthweir.com"),
  title: {
    default: socialTitle,
    template: `%s | ${site.name}`,
  },
  description: site.intro,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: socialTitle,
    description: site.intro,
    images: [
      {
        url: site.headshotUrl,
        width: 800,
        height: 800,
        alt: `Headshot of ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: site.intro,
    images: [site.headshotUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

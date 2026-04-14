import type { Metadata } from "next";
import "./globals.css";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.headline}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}

import AppProviders from "@/utils/context/AppProviders";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "SubLink",
  description: "simple v2ray config app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono bg-zinc-50 dark:bg-zinc-950">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

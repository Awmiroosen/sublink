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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

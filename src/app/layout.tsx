import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHEN HU",
  description: "CHEN HU - Front End Engineer",
};

const lxgw = localFont({
  src: [
    {
      path: "./fonts/LXGWWenKaiLite-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LXGWWenKaiLite-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-lxgw",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lxgw.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
